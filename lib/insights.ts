export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "what-is-agentic-ai",
    title: "What Is Agentic AI, and Where Does It Actually Help?",
    description: "A plain-English guide to agentic AI, how it differs from a chatbot, and how to choose a good first project.",
    date: "2026-11-04",
    sections: [
      {
        heading: "From answering to doing",
        paragraphs: [
          "A chatbot answers questions. An AI agent works towards a goal: it decides on the next step, uses tools such as your CRM, documents, or email, checks the result, and carries on until the task is finished or it needs a person.",
          "That shift matters because much of a business's work isn't a single question. It's a chain of small steps across different systems.",
        ],
      },
      {
        heading: "Where agents work well",
        paragraphs: [
          "Good candidates are tasks that repeat often, follow a recognisable process, and still need some judgement. Examples include preparing reports from several sources, triaging support requests, reviewing documents against a checklist, and updating records across systems.",
          "Agents are a poorer fit for work with no clear definition of done, or where a mistake is expensive and can't be caught before it causes harm.",
        ],
      },
      {
        heading: "How to choose a first project",
        paragraphs: [
          "Start with one task that has a clear owner and a measurable result, such as hours saved each week. Keep a person approving important actions at first, then reduce that oversight only as the agent earns trust.",
          "Measure the agent against real examples before you roll it out. A small project that works is worth more than an ambitious one that stays a demo.",
        ],
      },
    ],
  },
  {
    slug: "agents-skills-and-plugins",
    title: "Agents, Skills, and Plugins: What's the Difference?",
    description: "These three terms are often used interchangeably. Here's what each one means and when your business needs it.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Agents do the work",
        paragraphs: [
          "An agent is an AI system that pursues a goal by choosing steps and using tools. It's the worker. Everything else on this list exists to make that worker more capable or more consistent.",
        ],
      },
      {
        heading: "Skills teach it how",
        paragraphs: [
          "A skill is a packaged set of instructions, and sometimes supporting files, that shows an agent how to carry out a particular task. Think of it as a playbook. If your team has a set way to write a proposal or review a contract, a skill captures that so the agent follows it each time.",
        ],
      },
      {
        heading: "Plugins add and package abilities",
        paragraphs: [
          "A plugin extends an AI product, usually by bundling things like commands, skills, and connections to other tools into something that's easy to install. Plugins help a whole team share the same setup instead of each person configuring their own.",
        ],
      },
      {
        heading: "Which do you need?",
        paragraphs: [
          "If people are repeating a process with an AI assistant, start with a skill. If the assistant needs access to your systems, add a connection or plugin. If you want the work done end to end with little supervision, you need an agent, and it will probably use the other two.",
        ],
      },
    ],
  },
  {
    slug: "cloud-migration-checklist",
    title: "A Practical Checklist for Your Cloud Migration",
    description: "The questions to answer before you move workloads to the cloud, so you avoid the most common surprises.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Know what you have",
        paragraphs: [
          "List your applications, data stores, and the connections between them. Migrations often go wrong because of a dependency nobody remembered, such as a nightly file transfer or an old integration.",
        ],
      },
      {
        heading: "Decide what happens to each workload",
        paragraphs: [
          "Not everything deserves the same treatment. Some systems can move as they are, some should be reworked to suit the cloud, some should be replaced with a SaaS product, and some can simply be retired.",
        ],
      },
      {
        heading: "Plan for security and compliance",
        paragraphs: [
          "Decide who can access what, how data will be encrypted, and where it may be stored. South African businesses should also consider their POPIA obligations, particularly when personal information is stored outside the country.",
        ],
      },
      {
        heading: "Move in stages",
        paragraphs: [
          "Start with a lower-risk workload, test your rollback plan, and set up cost monitoring from the first day. Once that move has gone smoothly, use what you learned on the systems that matter most.",
        ],
      },
    ],
  },
];
