const steps = [
  {
    title: "Discovery",
    description: "We review your goals, systems, and data, then agree on the highest-value place to start.",
  },
  {
    title: "Pilot",
    description: "We build a focused first version on a real workflow, so you can see it working before committing further.",
  },
  {
    title: "Rollout",
    description: "We extend what works to your wider team, with training and clear guardrails.",
  },
  {
    title: "Support",
    description: "We monitor, maintain, and improve your systems as your business and tools change.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800">
            How We <span className="text-cyan-600">Work</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            A clear path from your first conversation with us to systems your team relies on every day.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <li key={step.title} className="bg-slate-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-cyan-600">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
