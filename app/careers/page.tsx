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

export default function CareersPage() {
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

      <section className="py-16 px-4 bg-slate-50" id="open-roles">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10 text-center">Open Roles</h2>

          {roles.length > 0 ? (
            <div className="space-y-6">
              {roles.map((role) => (
                <article key={role.slug} id={role.slug} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-cyan-600">{role.title}</h3>
                      <p className="text-slate-500 mt-1">
                        {role.type}, {role.location}
                      </p>
                    </div>
                    <Link
                      href={`/careers?role=${role.slug}#apply`}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-5 rounded-md transition-all inline-flex items-center"
                    >
                      Apply
                    </Link>
                  </div>
                  <p className="text-slate-600 mb-6">{role.summary}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">What you will do</h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        {role.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">What we are looking for</h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        {role.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-slate-800 mb-3">No open roles right now</h3>
              <p className="text-slate-600 mb-6">
                We are growing, and we are always happy to hear from talented people. If you work in one of these areas,
                send us your CV and a short note about what you would like to build.
              </p>
              <ul className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Areas we hire for">
                {talentAreas.map((area) => (
                  <li key={area} className="text-sm font-medium text-cyan-700 bg-cyan-50 rounded-full px-4 py-2">
                    {area}
                  </li>
                ))}
              </ul>
              <Link
                href="#apply"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all inline-flex items-center"
              >
                Apply below
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="apply">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 text-center">Apply Now</h2>
          <p className="text-slate-600 text-center mb-10">
            Send us your CV and cover letter. We read every application and will contact you if there is a fit.
          </p>
          <CareersApplicationForm options={applyOptions} />
          <p className="mt-8 text-sm text-slate-500 bg-slate-50 rounded-lg p-4">
            Prefer email? Send your CV to{" "}
            <a href={applyHref("General application")} className="text-cyan-600 hover:text-cyan-700 underline">
              {site.email}
            </a>
            . Nainika Technologies will never ask you to pay a fee or share bank details during hiring. If anyone does,
            please report it to {site.email}.
          </p>
        </div>
      </section>
    </div>
  );
}
