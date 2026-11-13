import { createToken } from "@/lib/subscribe-token";
import { welcomeEmailText } from "@/lib/subscribe-emails";
import { notifyEmail, resend, websiteFromEmail } from "@/lib/resend";
import { site } from "@/lib/site";

// Saves a subscriber to Resend, emails the team a consent record, and sends the welcome email.
// Returns false only when the subscriber could not be saved and the team could not be told.
export async function saveSubscriber(apiKey: string, email: string, consentNote: string) {
  // Already on the list and subscribed: do nothing, so nobody gets a second welcome email
  const existing = await resend(apiKey, "GET", `/contacts/${encodeURIComponent(email)}`).catch(() => null);
  if (existing?.ok) {
    const found = await existing.json().catch(() => null);
    if (found && found.unsubscribed === false) return true;
  }

  const subscribedAt = new Date().toISOString();
  const segmentId = process.env.RESEND_SEGMENT_ID;
  const contact = await resend(apiKey, "POST", "/contacts", {
    email,
    unsubscribed: false,
    ...(segmentId ? { segments: [segmentId] } : {}),
  }).catch(() => null);

  // An existing contact is resubscribing, so switch them back on instead
  let saved = Boolean(contact?.ok);
  if (!saved) {
    const update = await resend(apiKey, "PATCH", `/contacts/${encodeURIComponent(email)}`, { unsubscribed: false }).catch(() => null);
    saved = Boolean(update?.ok);
  }

  // The team email is the consent record: who agreed, how, and when
  const notify = await resend(apiKey, "POST", "/emails", {
    from: websiteFromEmail,
    to: [site.email],
    bcc: [notifyEmail],
    subject: "New Insights subscriber",
    text: [
      `Email: ${email}`,
      `Consent: ${consentNote}`,
      `Subscribed at: ${subscribedAt}`,
      `Saved to Resend contacts: ${saved ? "Yes" : "No, please add manually"}`,
    ].join("\n"),
  }).catch(() => null);

  if (!saved && !notify?.ok) return false;

  const unsubscribeUrl = `${site.url}/subscribe/unsubscribe?${new URLSearchParams({ email, token: createToken("unsubscribe", email) })}`;
  try {
    await resend(apiKey, "POST", "/emails", {
      from: `${site.name} <${site.email}>`,
      to: [email],
      subject: "You're subscribed to Nainika Insights",
      text: welcomeEmailText(unsubscribeUrl),
      headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` },
    });
  } catch (error) {
    console.error("The welcome email could not be sent.", error);
  }

  return true;
}
