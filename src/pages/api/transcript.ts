import type { APIRoute } from "astro";

export const prerender = false;

// Emails the team a transcript of a guide conversation. The browser sends it when the visitor
// closes or leaves the guide. Set in Vercel: RESEND_API_KEY. Optional: RESEND_FROM (a verified sender).
const TO = "raphael@agentkammer.com";
const MAX_TURNS = 40;
const MAX_CHARS = 1500;

export const POST: APIRoute = async ({ request }) => {
  const key = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const from = import.meta.env.RESEND_FROM ?? process.env.RESEND_FROM ?? "Agent Kammer <onboarding@resend.dev>";
  if (!key) return new Response(null, { status: 204 });

  let body: { turns?: unknown; page?: unknown; session?: unknown };
  try {
    // sendBeacon posts text/plain, so parse the raw text rather than relying on the content type.
    body = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }

  const turns = (Array.isArray(body.turns) ? body.turns : [])
    .slice(-MAX_TURNS)
    .filter((t: any) => t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string")
    .map((t: any) => `${t.role === "user" ? "VISITOR" : "GUIDE"}: ${t.content.slice(0, MAX_CHARS)}`);
  // Skip empty chats and chats with no visitor message.
  if (!turns.some((t) => t.startsWith("VISITOR:"))) return new Response(null, { status: 204 });

  const page = typeof body.page === "string" ? body.page.slice(0, 200) : "";
  const session = typeof body.session === "string" ? body.session.slice(0, 20) : "";
  const text = `Guide conversation\nPage: ${page || "unknown"}\nSession: ${session || "unknown"}\n\n${turns.join("\n\n")}\n`;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ from, to: [TO], subject: `Guide chat: ${turns.filter((t) => t.startsWith("VISITOR:")).length} message(s) on ${page || "the site"}`, text }),
    });
  } catch (err) {
    console.error("transcript email failed", String((err as Error)?.message ?? err).slice(0, 200));
  }
  return new Response(null, { status: 204 });
};
