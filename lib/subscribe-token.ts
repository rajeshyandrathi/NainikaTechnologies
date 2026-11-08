import { createHmac, timingSafeEqual } from "node:crypto";

// Signed links prove a request came from an email we sent to that address.
type Purpose = "confirm" | "unsubscribe";

const confirmLifetimeMs = 7 * 24 * 60 * 60 * 1000;

function secret() {
  const value = process.env.SUBSCRIBE_SECRET || process.env.RESEND_API_KEY;
  if (!value) throw new Error("No signing secret is set.");
  return value;
}

function sign(purpose: Purpose, email: string, expires: string) {
  return createHmac("sha256", secret())
    .update(`${purpose}:${email.toLowerCase()}:${expires}`)
    .digest("base64url");
}

export function createToken(purpose: Purpose, email: string) {
  // Unsubscribe links never expire, so people can always opt out
  const expires = purpose === "confirm" ? String(Date.now() + confirmLifetimeMs) : "never";
  return `${expires}.${sign(purpose, email, expires)}`;
}

export function verifyToken(purpose: Purpose, email: string, token: string) {
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  if (expires !== "never" && !(Number(expires) > Date.now())) return false;
  if (purpose === "unsubscribe" && expires !== "never") return false;

  const expected = Buffer.from(sign(purpose, email, expires));
  const given = Buffer.from(signature);
  return expected.length === given.length && timingSafeEqual(expected, given);
}
