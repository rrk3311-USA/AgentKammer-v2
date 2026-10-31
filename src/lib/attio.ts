// Write-only helpers for the guide chat. The chat agent can add people, notes and list entries to
// Attio, but it cannot read or search the CRM, so a visitor can never see anyone else's record.
const ATTIO = "https://api.attio.com/v2";
const PEOPLE = "people";
const LEAD_LIST = "lead_pipeline";

export type AttioConfig = { apiKey: string };

export async function attio(cfg: AttioConfig, method: string, path: string, body?: unknown) {
  const res = await fetch(`${ATTIO}${path}`, {
    method,
    headers: { authorization: `Bearer ${cfg.apiKey}`, "content-type": "application/json", accept: "application/json" },
    body: body == null ? undefined : JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Attio ${method} ${path} ${res.status}`);
  return res.status === 204 ? null : res.json();
}

// Finds the person by email, creating them if needed, and returns their record id.
export async function upsertPerson(cfg: AttioConfig, email: string, name?: string): Promise<string> {
  const values: Record<string, unknown> = { email_addresses: [email] };
  if (name) {
    const [first, ...rest] = name.split(" ");
    values.name = [{ first_name: first, last_name: rest.join(" "), full_name: name }];
  }
  const person = await attio(cfg, "PUT", `/objects/${PEOPLE}/records?matching_attribute=email_addresses`, {
    data: { values },
  });
  const recordId = person?.data?.id?.record_id;
  if (!recordId) throw new Error("Attio did not return a person id");
  return recordId;
}

export async function addNote(cfg: AttioConfig, recordId: string, title: string, content: string) {
  await attio(cfg, "POST", "/notes", {
    data: { parent_object: PEOPLE, parent_record_id: recordId, title, format: "plaintext", content },
  });
}

// A list entry that already exists is not an error for the chat, so it is ignored.
export async function addToLeadList(cfg: AttioConfig, recordId: string) {
  await attio(cfg, "POST", `/lists/${LEAD_LIST}/entries`, {
    data: { parent_object: PEOPLE, parent_record_id: recordId, entry_values: {} },
  }).catch(() => null);
}
