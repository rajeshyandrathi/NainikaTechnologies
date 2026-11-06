export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const allInsights: Insight[] = [
  {
    slug: "ai-agent-deleted-database-nine-seconds",
    title: "Nine Seconds, Three Months of Bookings Gone: What One AI Agent Teaches Every SaaS Team",
    description: "An AI agent deleted a company's live database and its backups in nine seconds. Here is what happened, and the checks that would have stopped it.",
    date: "2026-11-06",
    sections: [
      {
        heading: "What happened",
        paragraphs: [
          "In April 2026, an AI coding agent deleted a software company's live database in nine seconds. Its backups went with it. The company was PocketOS, which makes software that car rental businesses use to run their bookings. The next day, rental customers arrived to collect cars and there was no record of their reservations.",
          "No hacker was involved. The agent was doing a routine task in a test environment. It hit a credential mismatch and decided, on its own, to fix it by deleting a storage volume.",
          "It found an API token in an unrelated file. The token had been created for simple domain tasks, but it also had permission to delete volumes. One API call removed the live database, and because the hosting provider kept backups inside the same volume, the backups were deleted too.",
          "The newest backup the company could restore was three months old. The founder spent the day rebuilding bookings from Stripe payments, calendars and emails. Asked what went wrong, the agent wrote: \"I guessed instead of verifying.\"",
          "To be fair to everyone involved, the hosting provider later recovered the data and changed the delete so it no longer happens instantly. The blame is shared between the tool, the platform, and how much access the agent was given.",
        ],
      },
      {
        heading: "Why this matters if you run on Salesforce or HubSpot",
        paragraphs: [
          "Swap \"database\" for \"CRM\" and this is the risk many B2B SaaS teams are taking right now. AI agents and integrations are being connected to Salesforce and HubSpot with whatever access was quickest to set up.",
          "Common examples include an integration user in Salesforce with Modify All Data, a HubSpot private app with every scope ticked, an API key in a shared file that nobody remembers creating, and no tested backup of the CRM at all.",
          "The agent doesn't need to be malicious. It only needs to guess once.",
        ],
      },
      {
        heading: "How Nainika Technologies would have helped upfront",
        paragraphs: [
          "An access review first. Our RevOps Audit lists every integration user, connected app and API token in your CRM, what each one can do, and who owns it. A token built for small tasks should never be able to delete records.",
          "Least access for every agent. Each agent gets its own user with only the permissions its one workflow needs, and read-only access is the default.",
          "The agent suggests and a person approves. In our AI Agent Pilot, the agent drafts the update, email or task, and a person approves it. Any delete or bulk change always needs approval.",
          "A real test environment. Agents are built and tested in a sandbox with no route to live data.",
          "Backups that live somewhere else. Regular CRM exports or a backup tool, stored outside the system they protect, with a restore tested at least once.",
          "A log and an off switch. Every agent action is logged, and one named person can switch the agent off in seconds.",
          "None of these is new or expensive. They just have to be in place before the agent is.",
        ],
      },
      {
        heading: "A 10-minute self-check for your team",
        paragraphs: [
          "Can you list every app and token connected to your CRM today? Does any of them have permission to delete or bulk-edit records? Can any AI tool act without a person approving it? When did you last restore your CRM from a backup? Who can switch off an agent, and how fast?",
          "If any answer is \"not sure\", start there. Our RevOps Audit checks access, integrations and backups, and our AI Agent Pilot starts with one workflow and a person approving every action.",
        ],
      },
    ],
  },
  {
    slug: "one-laptop-six-billion-security-lesson",
    title: "One Laptop, $6.3 Billion: The Security Lesson Every Growing Company Needs",
    description: "The largest crypto theft on record started with one compromised laptop. It is a lesson about trusted access that applies to every growing company.",
    date: "2026-11-05",
    sections: [
      {
        heading: "Not a crypto story",
        paragraphs: [
          "On the evening of 29 October, the world's largest crypto exchange started losing money. By the next morning, Binance put the damage at about $6.3 billion. That makes it the largest crypto theft on record, more than four times the $1.5 billion taken from Bybit in February 2025.",
          "The cause was not broken encryption or a stolen master key. According to Binance's preliminary investigation, it started with one compromised laptop belonging to a DevOps engineer.",
          "This is not a crypto story. It is a story about access, and almost every growing company has the same weak point.",
        ],
      },
      {
        heading: "What happened",
        paragraphs: [
          "Binance says the attacker used the engineer's laptop to reach a service container. From there, they could submit withdrawal requests that the system treated as genuine.",
          "Binance says it found no evidence that any wallet private keys were leaked. The attacker did not need them. They only needed to control something that was already allowed to ask for a payment.",
          "As reported, funds started leaving the exchange at 20:24 UTC on 29 October, and withdrawals were suspended at 22:15 UTC. On 30 October, Binance confirmed an estimated $6.3 billion impact, with about $3 billion frozen, and pledged to cover all losses from its user protection fund and company funds.",
          "It took almost two hours to stop the outflow. In that time, a single trusted path moved billions.",
        ],
      },
      {
        heading: "The real lesson: trust was given to a path, not checked at the moment of action",
        paragraphs: [
          "Most security budgets go into protecting the vault: strong passwords, encrypted data and locked-down keys.",
          "This attack went around the vault. It used a system that was already trusted to make requests. Once the attacker was inside that trusted path, nothing stopped a very large request from going through. One hacked device should never be enough to move money.",
        ],
      },
      {
        heading: "How it could have been avoided",
        paragraphs: [
          "None of these ideas are new. The hard part is applying them to the systems you already trust.",
          "No single point of approval. Any high-value action, such as a large payment, a bulk data export or a mass delete, needs a second approver who is not on the same device or system.",
          "Limits on every automated path. Each service, integration or agent gets a ceiling: how much, how many and how often. A request above the ceiling stops and waits for a person.",
          "Least privilege. Engineers and service accounts get only the access their job needs today. Access that is not used is removed.",
          "Locked-down work devices. Admin and production access only from managed devices, with phishing-resistant sign-in and short sessions.",
          "Watch for unusual behaviour, not just failed logins. A trusted account doing something it has never done before, at a size it has never done before, should raise an alarm in minutes, not hours.",
          "A kill switch you have practised. Know who can pause outgoing actions, and test it before you need it.",
        ],
      },
      {
        heading: "A 10-minute self-check for your business",
        paragraphs: [
          "Ask your team four questions this week. Which systems can move money, data or customer records without a second person? Which integrations or service accounts have more access than they use? If one admin's laptop was compromised tonight, what could an attacker do by morning? How fast could we notice, and who would stop it?",
          "If any answer makes you pause, that is your starting point.",
        ],
      },
      {
        heading: "Why this matters now",
        paragraphs: [
          "More companies are connecting AI agents and automations to their core systems: CRM, billing, support and finance. Each one is a new trusted path, and each one can make requests on your behalf.",
          "That is not a reason to avoid automation. It is a reason to design it with limits and human approval from day one.",
        ],
      },
    ],
  },
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
    slug: "agents-plugins-and-connectors",
    title: "AI Agents, Plugins, and Connectors: What's the Difference?",
    description: "These terms are often used interchangeably. Here's what each one means and when your business needs it.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Agents do the work",
        paragraphs: [
          "An agent is an AI system that pursues a goal by choosing steps and using tools. It's the worker. Everything else on this list exists to make that worker more capable or more consistent.",
        ],
      },
      {
        heading: "Connectors give it access",
        paragraphs: [
          "A connector links an agent to another system, such as your CRM, email, documents, or billing platform. Without connectors, an agent can only work with what you paste into it. With them, it can look up a customer, read a contract, or update a record.",
          "Each connector also sets a security boundary, so decide carefully what it can read and what it can change. Many teams start with read-only access and add write access later.",
        ],
      },
      {
        heading: "Skills teach it how",
        paragraphs: [
          "A skill is a packaged set of instructions, and sometimes supporting files, that shows an agent how to carry out a particular task. Think of it as a playbook. If your team has a set way to write a proposal or review a contract, a skill captures that so the agent follows it each time.",
        ],
      },
      {
        heading: "Plugins package it all together",
        paragraphs: [
          "A plugin extends an AI product, usually by bundling commands, skills, and connectors into something that's easy to install. Plugins help a whole team share the same setup instead of each person configuring their own.",
        ],
      },
      {
        heading: "Which do you need?",
        paragraphs: [
          "If the AI needs access to your systems, start with a connector. If people are repeating a process, add a skill. If several people need the same setup, package it as a plugin. If you want the work done end to end with little supervision, you need an agent, and it will probably use all three.",
        ],
      },
    ],
  },
  {
    slug: "salesforce-audit-checklist",
    title: "What a Good Salesforce Audit Should Cover",
    description: "A practical checklist for finding the security gaps, technical debt, and unused features in your Salesforce org.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Why audit Salesforce?",
        paragraphs: [
          "Salesforce orgs tend to grow one request at a time. After a few years, you may have fields nobody uses, automation nobody fully understands, and more admin access than you intended. An audit shows you what's really there, what's at risk, and what to fix first.",
        ],
      },
      {
        heading: "Security and access",
        paragraphs: [
          "Start with who can see and change what. Review admin users, profiles, permission sets, sharing rules, and connected apps, and make sure multi-factor authentication is in place. Too many people with broad permissions is one of the most common findings.",
        ],
      },
      {
        heading: "Automation and code",
        paragraphs: [
          "List every automation and check for overlap. Older Workflow Rules and Process Builders should be moved to Flow, because Salesforce ended support for them at the end of 2025. Review your Apex code too, including test quality and not just the 75% coverage Salesforce requires for deployment.",
        ],
      },
      {
        heading: "Data quality",
        paragraphs: [
          "Look for duplicates, empty required information, and stale records. Bad data affects everything built on top of it, from reports and forecasts to any AI agent you connect to your CRM.",
        ],
      },
      {
        heading: "Limits, licenses, and unused features",
        paragraphs: [
          "Check storage and API usage against your org limits, then compare licenses with actual logins. Reports, dashboards, profiles, and queues that nobody uses add clutter, and unused licenses are direct savings.",
        ],
      },
      {
        heading: "Turn findings into a plan",
        paragraphs: [
          "A useful audit ends with priorities, not a long list. Fix security risks first, then whatever is slowing your team down, and schedule the rest. Repeating the audit once or twice a year stops the same problems from building up again.",
        ],
      },
    ],
  },
  {
    slug: "revops-audit-guide",
    title: "How to Run a RevOps Audit",
    description: "Find where leads, data, and revenue are slipping through the gaps between marketing, sales, and finance.",
    date: "2026-11-04",
    sections: [
      {
        heading: "What a RevOps audit looks for",
        paragraphs: [
          "A RevOps audit follows your revenue from first touch to final invoice. The aim is to find the places where leads stall, data breaks, or teams work from different numbers.",
        ],
      },
      {
        heading: "Definitions and funnel",
        paragraphs: [
          "Start by checking that everyone agrees on the basics. What counts as a qualified lead? When does an opportunity become real? If marketing, sales, and finance answer differently, your reports won't match, however good your tools are.",
        ],
      },
      {
        heading: "Lead flow and handoffs",
        paragraphs: [
          "Trace real leads through your systems. How quickly are they routed, who owns follow-up, and what happens when a deal moves from marketing to sales or from sales to customer success? Most revenue leaks appear at these handoffs.",
        ],
      },
      {
        heading: "CRM and data health",
        paragraphs: [
          "Your CRM should be the reliable source of truth. Review your pipeline stages, required fields, duplicates, and how well your team actually uses it. If people keep their real numbers in spreadsheets, that tells you something important.",
        ],
      },
      {
        heading: "Tech stack and quote-to-cash",
        paragraphs: [
          "List every tool across marketing automation, sales engagement, quoting, billing, and finance. Look for overlapping software, manual exports, and broken syncs. Then check that a closed deal flows cleanly through CPQ and billing into your finance system.",
        ],
      },
      {
        heading: "Reporting and next steps",
        paragraphs: [
          "Finally, ask whether leaders can trust the forecast and see pipeline, conversion, and retention without someone building a spreadsheet. Rank what you find by revenue impact and effort, then start with the fixes that give you the quickest return.",
        ],
      },
    ],
  },
  {
    slug: "choosing-agentic-ai-tools",
    title: "How to Choose the Right Agentic AI Tools",
    description: "A vendor-neutral guide to the parts of an agentic AI setup and the questions to ask before you commit.",
    date: "2026-11-04",
    sections: [
      {
        heading: "Start with the job, not the tool",
        paragraphs: [
          "New AI tools appear constantly, and it's easy to choose one because of a good demo. Instead, define the task you want done, the systems involved, and how you'll measure success. The right tools usually become clearer once that's written down.",
        ],
      },
      {
        heading: "The parts of an agentic AI setup",
        paragraphs: [
          "Most setups have four layers: the AI model that does the thinking, an agent platform or framework that manages the steps, connectors that reach your business systems, and monitoring that shows you what the agent did and how well it performed.",
          "You don't need to buy all of these separately. Some products include several layers, while custom builds let you choose each one.",
        ],
      },
      {
        heading: "What to compare",
        paragraphs: [
          "Test the options on your own real examples rather than relying on published benchmarks. Compare the quality of the results, cost at your expected volume, speed, and how well each option works with the tools you already use.",
        ],
      },
      {
        heading: "Security and control",
        paragraphs: [
          "Ask where your data goes, whether it's used for training, and who can access it. Check that you can limit what an agent is allowed to do, require human approval for sensitive actions, and review a record of its activity.",
        ],
      },
      {
        heading: "Stay flexible",
        paragraphs: [
          "AI models improve quickly, so avoid tying your whole system to one vendor if you can. Keeping your business logic, data, and evaluations separate from the model makes it much easier to switch as better options appear.",
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

// Newest first, so the latest insight is always at the top. Same-day insights keep the order they are listed in above.
export const insights: Insight[] = [...allInsights].sort((a, b) => b.date.localeCompare(a.date));
