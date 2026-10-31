import type { APIRoute } from "astro";

export const prerender = false;

// Every site form posts here. Each submission becomes an Attio person (matched by email), gets the
// full transcript as a note, and joins the Lead Pipeline list. The team is also emailed through Resend.
// Set in Vercel: ATTIO_API_KEY, RESEND_API_KEY. Optional: ATTIO_PEOPLE_OBJECT_ID, ATTIO_LEAD_LIST_ID,
// ATTIO_SYNC_ENABLED (set to "false" to pause), RESEND_FROM (a verified sender).
const TO = "raphael@agentkammer.com";
const MAX_FIELD = 4000;
const ATTIO = "https://api.attio.com/v2";

const page = (message: string) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Agent Kammer</title></head><body style="margin:0;font:16px/1.6 Georgia,serif;background:#F5F2EB;color:#2F3136"><main style="max-width:560px;margin:0 auto;padding:64px 24px"><p>${message}</p><p><a href="/" style="color:#2A3447">Back to Agent Kammer</a></p></main></body></html>`;

const html = (message: string, status: number) =>
  new Response(page(message), { status, headers: { "content-type": "text/html; charset=utf-8" } });

type Attio = { apiKey: string; people: string; leadList: string };

async function attio(cfg: Attio, method: string, path: string, body?: unknown) {
  const res = await fetch(`${ATTIO}${path}`, {
    method,
    headers: { authorization: `Bearer ${cfg.apiKey}`, "content-type": "application/json", accept: "application/json" },
    body: body == null ? undefined : JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Attio ${method} ${path} ${res.status}`);
  return res.status === 204 ? null : res.json();
}

// Adds the submission to Attio. Each step is separate so a list conflict never loses the person or note.
async function saveToAttio(cfg: Attio, form: string, name: string, email: string, transcript: string) {
  const [first, ...rest] = name.split(" ");
  const person = await attio(cfg, "PUT", `/objects/${encodeURIComponent(cfg.people)}/records?matching_attribute=email_addresses`, {
    data: {
      values: {
        name: [{ first_name: first, last_name: rest.join(" "), full_name: name }],
        email_addresses: [email],
        lead_source: [`Website: ${form}`],
      },
    },
  });
  const recordId = person?.data?.id?.record_id;
  if (!recordId) return false;

  await attio(cfg, "POST", "/notes", {
    data: {
      parent_object: cfg.people,
      parent_record_id: recordId,
      title: `${form} submission`,
      format: "plaintext",
      content: transcript,
    },
  }).catch(() => null);

  await attio(cfg, "POST", `/lists/${encodeURIComponent(cfg.leadList)}/entries`, {
    data: { parent_object: cfg.people, parent_record_id: recordId, entry_values: {} },
  }).catch(() => null);

  return true;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any)?.runtime?.env ?? {};
  const pick = (key: string) => (import.meta.env as any)[key] ?? process.env[key] ?? env[key];
  const apiKey = pick("ATTIO_API_KEY");
  const syncOn = String(pick("ATTIO_SYNC_ENABLED") ?? "true").toLowerCase() !== "false";
  const resendKey = pick("RESEND_API_KEY");
  const from = pick("RESEND_FROM") ?? "Agent Kammer <onboarding@resend.dev>";

  const cfg: Attio | null = apiKey && syncOn
    ? { apiKey, people: pick("ATTIO_PEOPLE_OBJECT_ID") ?? "people", leadList: pick("ATTIO_LEAD_LIST_ID") ?? "lead_pipeline" }
    : null;

  if (!cfg && !resendKey) {
    return html("The form is not connected yet. Please email raphael@agentkammer.com directly.", 500);
  }

  const data = await request.formData();
  const fields: [string, string][] = [];
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string") continue;
    const text = value.trim().slice(0, MAX_FIELD);
    if (text) fields.push([key, text]);
  }

  const form = fields.find(([k]) => k === "form")?.[1] ?? "Website form";
  const name = fields.find(([k]) => k === "name")?.[1] ?? "";
  const email = fields.find(([k]) => k === "email")?.[1] ?? "";

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return html("Please add your name and a valid email, then try again.", 400);
  }

  const transcript = fields
    .filter(([k]) => k !== "form")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  // The CRM record and the team email are independent. If one fails, the other still goes through.
  const [savedToAttio, sentEmail] = await Promise.all([
    cfg ? saveToAttio(cfg, form, name, email, transcript).catch(() => false) : Promise.resolve(false),
    resendKey
      ? fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
          body: JSON.stringify({ from, to: [TO], reply_to: email, subject: `${form}: ${name}`, text: transcript }),
        })
          .then((r) => r.ok)
          .catch(() => false)
      : Promise.resolve(false),
  ]);

  if (!savedToAttio && !sentEmail) {
    return html("We could not send your form. Please try again, or email raphael@agentkammer.com directly.", 502);
  }

  return html("Thank you. We will read your situation and reply within a day.", 200);
};
