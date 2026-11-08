import { site } from "@/lib/site";

// Every email names the sender, gives a postal address and a way to opt out, as POPIA section 69 requires.
const footer = (unsubscribeUrl: string) => [
  "",
  "--",
  `${site.name}, ${site.address.street}, ${site.address.locality}, South Africa, ${site.address.postalCode}`,
  `${site.email} | ${site.url}`,
  `Unsubscribe at any time: ${unsubscribeUrl}`,
];

export function confirmEmailText(confirmUrl: string) {
  return [
    "Hello,",
    "",
    "Someone, hopefully you, asked to subscribe this email address to Nainika Technologies Insights.",
    "",
    "Please confirm by opening this link and clicking Confirm:",
    confirmUrl,
    "",
    "The link works for 7 days. If you didn't ask for this, ignore this email. You won't be subscribed and we won't email you again.",
    "",
    "--",
    `${site.name}, ${site.address.street}, ${site.address.locality}, South Africa, ${site.address.postalCode}`,
    `${site.email} | ${site.url}`,
  ].join("\n");
}

export function welcomeEmailText(unsubscribeUrl: string) {
  return [
    "Hello,",
    "",
    "Thank you for confirming your subscription to Nainika Technologies Insights.",
    "",
    "You'll get our new playbooks on AI agents, Salesforce, HubSpot, and RevOps when they are published. We never sell or share your email address.",
    "",
    "Kind regards,",
    "",
    "The Nainika Technologies Team",
    ...footer(unsubscribeUrl),
  ].join("\n");
}
