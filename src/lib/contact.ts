/**
 * Contact data is read from environment variables at build time, so it never appears in the
 * (public) Git repository. In the generated HTML it is only written in encoded form
 * (see Protected.astro), so simple scrapers don't find e-mail, phone or postal address.
 *
 * Local: copy .env.example to .env and fill in the values.
 * Hosting (e.g. Vercel): set the same variables in the project settings.
 */
function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Umgebungsvariable ${name} fehlt – siehe .env.example`);
  return value;
}

export const CONTACT = {
  email: required("CONTACT_EMAIL", import.meta.env.CONTACT_EMAIL),
  phone: required("CONTACT_PHONE", import.meta.env.CONTACT_PHONE),
  // Lines separated by "|", e.g. "Musterstrasse 1|1234 Ort|Land"
  address: required("CONTACT_ADDRESS", import.meta.env.CONTACT_ADDRESS).split("|").join("\n")
} as const;

const KEY = 0x5a;

/** XOR every UTF-16 code unit with KEY, reverse, hex-encode. Decoded in Protected.astro. */
export function encode(value: string): string {
  return [...value]
    .map((c) => (c.charCodeAt(0) ^ KEY).toString(16).padStart(4, "0"))
    .reverse()
    .join("");
}
