import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import CareersApplicationForm from "@/components/careers-application-form";
import { roles, talentAreas } from "@/lib/careers";
import { site } from "@/lib/site";

const title = "Careers";
const fullTitle = `${title} | ${site.name}`;
const description =
  "Join Nainika Technologies and work on real AI agent, Salesforce, HubSpot and RevOps projects for growing businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title: fullTitle, description, url: "/careers", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

const reasons = [
  {
    title: "Real AI work",
    text: "Build AI agents, integrations and automation that clients use every day, not demos that sit on a shelf.",
  },
  {
    title: "Learn by building",
    text: "Work alongside senior Salesforce and AI architects, with time to learn, certify and grow.",
  },
  {
    title: "Modern tools",
    text: "Salesforce, HubSpot, Agentforce, Playwright, cloud platforms and the latest AI models.",
  },
  {
    title: "Ownership",
    text: "A small team where your work is seen, your ideas count and you own what you deliver.",
  },
];

function applyHref(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

const applyOptions = [
  ...roles.map((r) => ({ value: r.slug, label: r.title })),
  ...talentAreas.map((a) => ({ value: a, label: a })),
];

export default async function CareersPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const showApply = Boolean(role);
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Careers"
        title="Build the Future of"
        highlight="AI and RevOps With Us"
        description={description}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10 text-center">Why Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ title, text }) => (
              <div key={title} className="bg-slate-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {roles.length > 0 && (
        <section className="py-16 px-4 bg-slate-50" id="open-roles">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10 text-center">Open Roles</h2>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-white text-sm uppercase tracking-wide">
                  <tr>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4"><span className="sr-only">Apply</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {roles.map((role) => (
                    <tr key={role.slug} id={role.slug} className="align-top">
                      <td className="py-4 px-4 min-w-[280px]">
                        <h3 className="font-bold text-cyan-600 text-lg">{role.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{role.summary}</p>
                        <details className="mt-2 text-sm">
                          <summary className="cursor-pointer text-cyan-600 hover:text-cyan-700 font-medium">View details</summary>
                          <div className="grid md:grid-cols-2 gap-4 mt-3">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">What you will do</h4>
                              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                {role.responsibilities.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">What we are looking for</h4>
                              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                {role.requirements.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </details>
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm whitespace-nowrap">{role.type}</td>
                      <td className="py-4 px-4 text-slate-600 text-sm">{role.location}</td>
                      <td className="py-4 px-4">
                        <Link
                          href={`/careers?role=${role.slug}#apply`}
                          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-all inline-flex items-center text-sm"
                        >
                          Apply
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-600 mt-6">
              Do not see the right role?{" "}
              <Link href="/careers?role=general#apply" className="text-cyan-600 hover:text-cyan-700 underline">
                Send a general application
              </Link>
            </p>
        </div>
      </section>
      )}

      {showApply && (
      <section className="py-16 px-4 bg-slate-50" id="apply">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 text-center">Apply Now</h2>
          <p className="text-slate-600 text-center mb-10">
            Send us your CV and cover letter. We read every application and will contact you if there is a fit.
          </p>
          <CareersApplicationForm options={applyOptions} />
          <p className="mt-8 text-sm text-slate-500 bg-white rounded-lg p-4">
            Prefer email? Send your CV to{" "}
            <a href={applyHref("General application")} className="text-cyan-600 hover:text-cyan-700 underline">
              {site.email}
            </a>
            . Nainika Technologies will never ask you to pay a fee or share bank details during hiring. If anyone does,
            please report it to {site.email}.
          </p>
        </div>
      </section>
      )}
    </div>
  );
}
