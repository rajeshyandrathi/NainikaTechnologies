export const notifyEmail = "rajeshyandrathi@gmail.com";
export const websiteFromEmail = "Nainika Technologies Website <website@nainikatechnologies.co.za>";

export function resend(apiKey: string, method: "POST" | "PATCH", path: string, body: Record<string, unknown>) {
  return fetch(`https://api.resend.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
