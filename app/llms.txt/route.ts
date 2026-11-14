import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";
import { serviceGroups, services } from "@/lib/services";
import { site } from "@/lib/site";

// A plain-text guide for AI assistants, following the llms.txt convention.
// It is built from the site data, so new services, case studies and Insights appear automatically.
export const dynamic = "force-static";

export function GET() {
  const link = (path: string) => `${site.url}${path}`;
  const lines: string[] = [
    `# ${site.name}`,
    "",
    "> Nainika Technologies is a technology consultancy based in Cape Town, South Africa, working with clients worldwide. We help businesses get real results from AI, Salesforce, HubSpot and Revenue Operations (RevOps): AI agents and automation, CRM implementation and data migration, integrations, and test automation. Practical, measured, no hype.",
    "",
    "Key facts:",
    `- Website: ${site.url}`,
    `- Email: ${site.email}`,
    `- Phone: ${site.phone}`,
    `- Location: ${site.address.locality}, ${site.address.region}, South Africa. We work with clients worldwide.`,
    `- Book a free 30-minute consultation: ${site.cta.href}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Facebook: ${site.facebook}`,
    "",
    "## Services",
    "",
  ];

  for (const group of serviceGroups) {
    lines.push(`### ${group.title}`, "", group.summary, "");
    for (const service of services.filter((item) => item.group === group.id)) {
      lines.push(`- [${service.title}](${link(`/services/${service.slug}`)}): ${service.summary}`);
    }
    lines.push("");
  }

  lines.push("## Case studies", "");
  for (const study of caseStudies) {
    lines.push(`- [${study.title}](${link(`/case-studies/${study.slug}`)}): ${study.client}. ${study.description}`);
  }

  lines.push("", "## Insights", "", "Practical articles on AI, Salesforce, HubSpot and RevOps, newest first.", "");
  for (const insight of insights.slice(0, 30)) {
    lines.push(`- [${insight.title}](${link(`/insights/${insight.slug}`)}) (${insight.date}): ${insight.description}`);
  }

  lines.push(
    "",
    "## Optional",
    "",
    `- [About us](${link("/about")})`,
    `- [Careers](${link("/careers")})`,
    `- [Contact](${link("/contact")})`,
    `- [All Insights](${link("/insights")})`,
    `- [Privacy policy](${link("/privacy")})`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
