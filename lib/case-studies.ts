export type CaseStudy = {
  slug: string;
  title: string;
  /** Who it was for, in general terms. */
  client: string;
  /** Short summary for cards and meta descriptions. */
  description: string;
  /** Platforms and tools used, shown as tags. */
  tools: string[];
  /** Cover image in /public/case-studies, 1200 x 630. */
  image: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    /** Optional diagram shown under the section. */
    figure?: { src: string; alt: string; caption?: string; width: number; height: number };
  }[];
  /** Optional external link, such as a public repository. */
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    "slug": "salesforce-genesys-contact-centre",
    "title": "Outbound Calling Inside Salesforce for a Beverage Company",
    "client": "Beverage company, Vietnam",
    "description": "How our team connected Genesys to Salesforce for a beverage company's contact centre, so outbound campaigns, call requests and call scripts all run from one screen.",
    "tools": [
      "Salesforce Service Cloud",
      "Genesys",
      "Omni-Channel",
      "Apex",
      "Campaigns",
      "Custom Metadata"
    ],
    "image": "/case-studies/contact-centre-cti.jpg",
    "sections": [
      {
        "heading": "About the client",
        "paragraphs": [
          "The client is a large beverage company that sells through thousands of trade outlets, such as shops, bars and restaurants. Its contact centre calls these outlets every day to take orders and to remind them when licences are due for renewal.",
          "Those calls are a direct line to revenue. A missed order call is a missed sale, and an outlet that lets its licence lapse may not be able to sell the client's products at all."
        ]
      },
      {
        "heading": "The challenge",
        "paragraphs": [
          "Agents were working across two systems. The phone system handled the calls, while customer details, order history and requests lived in Salesforce.",
          "That created three problems:"
        ],
        "bullets": [
          "Agents had to search for the customer while the call was already ringing.",
          "There was no reliable link between a campaign, the customer being called and the result of the call.",
          "Each agent ran the conversation their own way, so calls were not consistent."
        ]
      },
      {
        "heading": "Our approach",
        "paragraphs": [
          "We decided early that Salesforce should be the one place where a call starts, runs and ends. Genesys stays the telephony engine, but the agent should never need to leave Salesforce to make or log a call.",
          "We also kept the setup in the hands of the business. Campaign teams load contacts from a simple sheet, and rules such as call status mapping live in Custom Metadata, so they can change without new code."
        ]
      },
      {
        "heading": "How it works",
        "paragraphs": [
          "Every outbound call follows the same six steps, from campaign to script."
        ],
        "figure": {
          "src": "/case-studies/contact-centre-call-flow.jpg",
          "alt": "Six steps: campaign, import contacts, call request, Omni-Channel routing, voice call record, and the call script for the request type.",
          "caption": "Every outbound call follows the same path inside Salesforce.",
          "width": 1400,
          "height": 700
        },
        "bullets": [
          "Campaign: the team creates a campaign for an order run or a licence renewal drive.",
          "Import: contacts are loaded as campaign members, with the request type and reason on the import sheet.",
          "Call request: each campaign member creates one call request automatically. Each request is unique per campaign, so no outlet is called twice for the same thing.",
          "Routing: when an agent goes online, the next call request arrives through Omni-Channel.",
          "Voice call: the agent sees the account, contact, campaign and call request together on one screen.",
          "Script: the right call script appears on the call, based on the request type."
        ]
      },
      {
        "heading": "What we built behind the scenes",
        "bullets": [
          "Apex trigger handlers for voice calls and campaign members, so records stay linked automatically.",
          "An email service that runs in the background, so emails do not slow down the agent.",
          "A scheduled job that keeps the do-not-call list clean, so people who opted out are never called.",
          "A campaign service that manages call requests across campaigns.",
          "Status sync between Genesys and Salesforce, driven by Custom Metadata."
        ]
      },
      {
        "heading": "Challenges along the way",
        "paragraphs": [
          "Outbound campaigns change often, and early designs included rescheduling inside the call scripts. We removed rescheduling from the order and licence renewal scripts, which kept the scripts simple and the data clean.",
          "Getting to production also meant raising test coverage across the integration code above the 75% Salesforce needs. We remediated the test classes so every key path is tested, not just covered."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Outbound calling now runs from inside Salesforce, from campaign to call.",
          "Agents see the full customer story the moment a call connects.",
          "Every call follows the script for its request type, so conversations are consistent.",
          "Each call request is linked to its campaign, which makes results easy to report.",
          "The solution passed user acceptance testing and went live in July 2026, with a formal handover to the client team."
        ]
      },
      {
        "heading": "Thinking about this for your contact centre?",
        "paragraphs": [
          "Ask yourself three questions:"
        ],
        "bullets": [
          "Do your agents leave the CRM to make or log a call?",
          "Can you link every call to a campaign and a result?",
          "Does every agent follow the same script for the same type of call?"
        ]
      },
      {
        "heading": "How we can help",
        "paragraphs": [
          "If any answer is no, we can help you connect your phone system to Salesforce or HubSpot and design call flows your team will actually use. Book a call and tell us how your contact centre works today."
        ]
      }
    ]
  },
  {
    "slug": "financial-services-cloud-data-migration",
    "title": "Moving 20 Years of Member History into Financial Services Cloud",
    "client": "Retirement fund administrator, South Africa",
    "description": "How our team designed and built a safe migration of more than 4 million member accounts and over 20 years of transaction history into Salesforce Financial Services Cloud.",
    "tools": [
      "Salesforce Financial Services Cloud",
      "Batch Apex",
      "Platform Events",
      "Data migration",
      "Reconciliation"
    ],
    "image": "/case-studies/member-data-migration.jpg",
    "sections": [
      {
        "heading": "About the client",
        "paragraphs": [
          "The client administers retirement savings for millions of members. Every member has an account, balances and a history of contributions and payments, in some cases going back more than 20 years.",
          "For a retirement business, that history is not optional. Members, regulators and auditors all rely on it being complete and correct."
        ]
      },
      {
        "heading": "The challenge",
        "paragraphs": [
          "The client was moving its members from an external administration system onto Salesforce Financial Services Cloud. That meant more than 4 million member accounts and over 20 years of transaction history.",
          "At that size, a migration cannot be run once and hoped for. It had to meet four tests:"
        ],
        "bullets": [
          "Repeatable: the same load can be run again with the same result.",
          "Checked: every batch is reconciled against the source before it is accepted.",
          "Recoverable: a failure in one batch must not break the rest.",
          "Ongoing: the source system kept running, so changes after the first load still had to arrive."
        ]
      },
      {
        "heading": "Our approach",
        "paragraphs": [
          "We treated the migration as a platform, not a one-off script. Data never goes straight into live records. It lands in staging first, is checked, and only then moves into Financial Services Cloud.",
          "We also planned where each kind of data should live. Recent activity belongs in Salesforce, where people work with it every day. Twenty years of history does not, so it sits in a separate tier built for long-term and regulatory reporting."
        ]
      },
      {
        "heading": "How it works",
        "paragraphs": [
          "Data arrives in three ways, is checked before it lands, and is stored according to how often it is used."
        ],
        "figure": {
          "src": "/case-studies/member-migration-loading-modes.jpg",
          "alt": "Three columns: how data arrives (before go-live, nightly, real time), how it is checked (staging, reconciliation gate, exception log), and where it lives (hot, warm and cold tiers).",
          "caption": "Three loading modes share one safe path into Salesforce.",
          "width": 1400,
          "height": 700
        },
        "bullets": [
          "Before go-live: a full load, accounts first, through seven steps: profile and cleanse, load staging, controlled start, accounts, transactions, reconcile, and accept.",
          "Every night: a delta load that pulls only what changed since the last run.",
          "In real time: new activity is processed as it happens."
        ]
      },
      {
        "heading": "The data model",
        "paragraphs": [
          "We used the standard Financial Services Cloud model, so the client gets the full benefit of the product and future Salesforce releases:"
        ],
        "bullets": [
          "Members as person accounts.",
          "Financial accounts for each retirement product, linked to members through account relationships.",
          "Balances stored as snapshots, and transactions stored as history.",
          "Custom objects for control and monitoring: staging for accounts and transactions, integration batches, reconciliation exceptions and integration log events."
        ]
      },
      {
        "heading": "Built to fail safely",
        "bullets": [
          "Nothing reaches live records until it passes the checks in staging.",
          "A reconciliation gate compares source and target before a batch is accepted.",
          "Partial success is allowed: records that fail are logged as exceptions for the team to fix, instead of stopping the whole run.",
          "Every batch and event is logged, so the team can see exactly what ran, when, and with what result.",
          "The whole process is coordinated by one orchestration service, so steps always run in the right order."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "A migration approach that scales to more than 4 million accounts and over 20 years of history.",
          "Every load is checked and reconciled before it is accepted.",
          "Failures are contained and recoverable, not all or nothing.",
          "A platform that keeps running after go-live, through nightly and real-time loads.",
          "A clear split between day-to-day data in Salesforce and long-term history for reporting, so the org stays fast as it grows."
        ]
      },
      {
        "heading": "Planning a migration of your own?",
        "paragraphs": [
          "Before you start, check that you can answer these:"
        ],
        "bullets": [
          "How will you prove the data in the new system matches the old one?",
          "What happens if one batch fails halfway through?",
          "How will changes made after the first load reach the new system?",
          "Which history really needs to be in your CRM, and which belongs in a reporting store?"
        ]
      },
      {
        "heading": "How we can help",
        "paragraphs": [
          "We help teams plan and run Salesforce and HubSpot migrations that are checked, repeatable and safe to restart. Book a call to talk through your data and your timeline."
        ]
      }
    ]
  },
  {
    "slug": "service-cloud-merchant-cases",
    "title": "Faster Merchant Case Handling on Service Cloud for a Bank",
    "client": "Bank, merchant services team, South Africa",
    "description": "How our team built guided case flows, merchant matching and reliable releases on Salesforce Service Cloud for a bank's merchant services team.",
    "tools": [
      "Salesforce Service Cloud",
      "Screen Flows",
      "Lightning Web Components",
      "Apex",
      "fflib"
    ],
    "image": "/case-studies/merchant-service-cases.jpg",
    "sections": [
      {
        "heading": "About the client",
        "paragraphs": [
          "The client is a bank with a merchant services team. That team looks after the businesses that accept card payments through the bank, from small shops to larger retailers.",
          "When a merchant has a problem, such as a card machine fault, a settlement question or a change to their details, they contact the bank and a case is created. How quickly and accurately that case is handled affects whether the merchant can keep trading."
        ]
      },
      {
        "heading": "The challenge",
        "bullets": [
          "Cases needed to be linked to the right merchant every time, even when merchants have similar names or several outlets.",
          "Each type of merchant case needed a clear, guided way of working, so agents handle it the same way every time.",
          "As a bank, every change had to meet strict engineering standards, with code reviews and safe releases.",
          "Case handling also had to stand up to compliance checks."
        ]
      },
      {
        "heading": "Our approach",
        "paragraphs": [
          "We designed around the agent. Each type of case gets its own guided flow, so the agent always knows the next step, and the merchant's details are on screen throughout.",
          "On the technical side, we followed the bank's required fflib enterprise patterns, so our code fits the bank's standards and is easy for its own developers to maintain."
        ]
      },
      {
        "heading": "How it works",
        "paragraphs": [
          "Every merchant case follows the same path, from the moment it is raised to resolution."
        ],
        "figure": {
          "src": "/case-studies/merchant-case-path.jpg",
          "alt": "Four steps: case raised, merchant matched, guided flow, resolved. Below, every release goes through code review, fflib patterns and controlled deployment.",
          "caption": "One path for every merchant case, and one controlled path for every release.",
          "width": 1400,
          "height": 700
        },
        "bullets": [
          "Case raised: a merchant contacts the bank and a case is created.",
          "Merchant matched: an Apex service links the case to the right merchant record.",
          "Guided flow: the agent works the case through a screen flow for that type of case.",
          "Resolved: the agent sees the merchant's details in Lightning Web Components on the case, from start to finish."
        ]
      },
      {
        "heading": "Safe releases",
        "paragraphs": [
          "We managed a large production release of 63 components covering more than 27 user stories. When the release ran into problems, our team worked through the night to recover it and bring it in safely.",
          "Every pull request was reviewed before merge, so problems were caught before they reached production."
        ]
      },
      {
        "heading": "Compliance, raised early",
        "paragraphs": [
          "While reviewing the case setup, we found a compliance gap: agents could change a case marked as high risk to a lower-risk type, with no restriction. In a bank, that can weaken the audit trail.",
          "We raised it as critical before production and set out two options: a hard block using a validation rule or Apex, or a lighter control using training and audit logging. We gave the bank the trade-offs of each so it could decide."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Agents follow one guided path for each type of merchant case.",
          "Cases are linked to the right merchant from the start.",
          "Large releases reach production in a controlled way.",
          "Code follows the bank's standards and is easy for its team to maintain.",
          "Compliance risks are raised before they reach production, not after."
        ]
      },
      {
        "heading": "Is your case handling working?",
        "paragraphs": [
          "A quick check for any service team:"
        ],
        "bullets": [
          "Is every case linked to the right customer, automatically?",
          "Do agents follow the same steps for the same type of case?",
          "Can a high-risk case be quietly downgraded?",
          "Do your releases go through review before production?"
        ]
      },
      {
        "heading": "How we can help",
        "paragraphs": [
          "We build case management on Salesforce Service Cloud and HubSpot Service Hub, with guided flows, clean data and safe releases. Book a call to talk through how your service team works today."
        ]
      }
    ]
  },
  {
    "slug": "playwright-test-automation-framework",
    "title": "From User Story to Tested Release with Playwright",
    "client": "Built by Nainika Technologies",
    "description": "How we built NainuTest AI, a Playwright test automation framework with plain-language test cases, and the AI agent that turns user stories into tests.",
    "tools": [
      "Playwright",
      "JavaScript",
      "Cucumber",
      "GitHub Actions",
      "Salesforce",
      "AI agents"
    ],
    "image": "/case-studies/playwright-test-automation.jpg",
    "sections": [
      {
        "heading": "Why we built it",
        "paragraphs": [
          "Most teams test the important journeys in their apps by hand, if at all. Unit tests and code coverage show that the code runs, not that a customer can actually sign up, pay or raise a case.",
          "As AI writes more of the code, writing code is no longer the slow part. Proving it works is. We built NainuTest AI so that the teams we work with can test real journeys automatically, on every change."
        ]
      },
      {
        "heading": "Our approach",
        "paragraphs": [
          "We set three rules for the framework:"
        ],
        "bullets": [
          "Readable: test cases are written in plain language, so business users can read and agree them.",
          "Maintainable: tests are built so that a change to one screen means one fix, not fifty.",
          "Safe: no passwords in code, and a record of every run."
        ]
      },
      {
        "heading": "What we built",
        "bullets": [
          "Plain-language test cases with Cucumber, written as Given, When and Then steps.",
          "Playwright tests that run in a real browser, using the Page Object Model, so each screen is described once and reused.",
          "Headless runs on every change, with results posted to Slack or Microsoft Teams.",
          "Passwords and keys stored in GitHub Secrets, never in the test code.",
          "A full record of every run, for teams that need an audit trail."
        ]
      },
      {
        "heading": "How the AI agent works",
        "paragraphs": [
          "On top of the framework, we are building an AI agent that writes tests and keeps them working. We are delivering it in phases, starting with turning stories into tests and then adding self-healing."
        ],
        "figure": {
          "src": "/case-studies/test-agent-loop.jpg",
          "alt": "A loop: user story, test cases, Playwright script, run. When a test fails, the agent finds the cause, proposes a fix, and runs the test again.",
          "caption": "The agent turns stories into tests, and repairs tests when they fail.",
          "width": 1400,
          "height": 700
        },
        "bullets": [
          "It reads a user story from Jira or Azure DevOps and writes the test cases.",
          "It turns those test cases into Playwright scripts.",
          "When a test fails, it looks for the cause, proposes a fix, updates the script and runs it again.",
          "It flags flaky tests and tracks performance over time.",
          "Every change it makes is committed to GitHub, so people can review it."
        ]
      },
      {
        "heading": "Where it fits",
        "paragraphs": [
          "The same approach works for Salesforce and for web apps. On Salesforce, it complements Apex unit tests: unit tests check the code, and end-to-end tests check that a user can complete the journey."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Key customer journeys are tested automatically, not by hand.",
          "Test cases are readable by the whole team, not just developers.",
          "A clear path from user story to tested release.",
          "Fewer broken tests to fix by hand, as the agent takes on repairs."
        ]
      },
      {
        "heading": "How ready is your testing?",
        "bullets": [
          "Are your most important customer journeys tested automatically?",
          "Do tests run on every change, or only before big releases?",
          "Can a business user read your test cases?",
          "Who fixes tests when the screens change?"
        ]
      },
      {
        "heading": "How we can help",
        "paragraphs": [
          "We set up end-to-end test automation with Playwright for Salesforce and web apps, and help teams build the habit of testing every change. Book a call to see the framework in action."
        ]
      }
    ]
  },
  {
    slug: "revops-for-a-b2b-saas-company",
    title: "One Revenue Engine for a B2B SaaS Company",
    client: "B2B SaaS company",
    description:
      "How we connected Salesforce, HubSpot, Marketo, Clay and Chargebee for a B2B SaaS company, with clean data, lead routing, a trusted pipeline and forecast, and one view of revenue.",
    tools: ["Salesforce", "HubSpot", "Marketo", "Clay", "Chargebee"],
    image: "/case-studies/revops-b2b-saas-flow.jpg",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "A B2B SaaS company was running its revenue work across several tools: Salesforce and HubSpot for sales and marketing, Marketo for campaigns, Clay for lead data, and Chargebee for subscriptions and billing.",
          "Each team worked from its own system, so leads, opportunities, customer cases and billing were hard to see in one place, and the pipeline and forecast were hard to trust.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "We set up revenue operations across the full customer journey, from first lead to closed deal, billing and support.",
        ],
        bullets: [
          "Connected systems: Salesforce and HubSpot synced together, with Marketo, Clay and Chargebee feeding the same customer records.",
          "Lead routing and handoff: leads enriched with Clay, then scored and routed to the right sales rep, with a clear handoff from marketing to sales.",
          "Data cleanup: duplicates removed and data rules added, so new records stay clean.",
          "Opportunities, pipeline and forecasting: clear opportunity stages and a forecast the leadership team can rely on.",
          "Cases: customer support cases tracked in the CRM alongside each account.",
          "Dashboards and reporting: one view of pipeline, revenue and customers for leadership.",
        ],
      },
      {
        heading: "How it fits together",
        paragraphs: [
          "Marketing, sales, billing and support now work from the same customer data. A lead captured in HubSpot or Marketo, enriched in Clay, worked as an opportunity in Salesforce, billed in Chargebee and supported through cases is one connected record, not five separate ones.",
        ],
      },
      {
        heading: "The outcome",
        bullets: [
          "One connected revenue system instead of separate tools for each team.",
          "Leads reach the right person, with a clear handoff from marketing to sales.",
          "Cleaner data, and a pipeline and forecast built on it.",
          "Leadership sees pipeline, revenue and customers in one set of dashboards.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-for-a-us-retailer",
    title: "AI Across Support, Sales and Operations for a US Retailer",
    client: "Retailer and online store, USA",
    description:
      "AI agents that help a US retailer and online store with customer support, product content, sales and leads, and operations reporting, connected to Salesforce, HubSpot, email and chat.",
    tools: ["AI agents", "Salesforce", "HubSpot", "Email", "Chat"],
    image: "/case-studies/retail-ai-agents-v2.jpg",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "A US retailer with physical stores and an online store wanted to use AI in its day-to-day work. The goal was to help the team in four areas at once: answering customers, writing product content, following up on sales leads, and preparing operations reports.",
          "Customer and sales data lived across Salesforce, HubSpot, email and chat, so the AI needed to work with those systems rather than sit beside them.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "We designed and built AI agents connected to the retailer's Salesforce, HubSpot, email and chat tools, each focused on one area of work.",
        ],
        bullets: [
          "Customer support: helping answer common customer questions over email and chat, and passing harder cases to the team.",
          "Product content: drafting product descriptions and listing content for the online store.",
          "Sales and leads: helping follow up on leads and keeping records up to date in the CRM.",
          "Operations and reporting: preparing regular reports from the retailer's data.",
        ],
      },
      {
        heading: "How it fits together",
        paragraphs: [
          "Each agent reads from and writes back to the systems the team already uses, so customer conversations, leads and reports stay in Salesforce and HubSpot instead of a separate AI tool.",
        ],
      },
      {
        heading: "The outcome",
        bullets: [
          "One AI setup covering support, product content, sales and reporting, instead of separate tools for each.",
          "AI that works inside Salesforce, HubSpot, email and chat, where the team already works.",
        ],
      },
    ],
  },
  {
    slug: "student-portal-salesforce-experience-cloud",
    title: "One Portal for Students, Enrolments and Payments",
    client: "Education and training provider, Cape Town",
    description:
      "A self-service student portal on Salesforce Experience Cloud, with course enrolment, lead management and payments, connected to WhatsApp, Slack, Brevo, Marketo and AI.",
    tools: ["Salesforce Experience Cloud", "AI", "WhatsApp", "Slack", "Brevo", "Marketo"],
    image: "/case-studies/student-portal-v2.jpg",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "An education and training provider in Cape Town needed one place for students to log in, enrol in courses and pay, and one place for staff to manage enquiries, enrolments and student records.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "We built a student portal on Salesforce Experience Cloud and connected it to the tools the team already used.",
        ],
        bullets: [
          "Student portal: secure login, self-service password resets, and one place for students to browse and enrol in courses.",
          "Enrolments and course management: courses, enrolments and student records managed in Salesforce, so the team works from one set of data.",
          "Lead management: enquiries captured as leads and tracked from first contact through to enrolment.",
          "Payments: online payments handled through a third-party payment provider and linked to each enrolment.",
          "Messaging: WhatsApp for student communication and Slack for internal team alerts.",
          "Marketing: Brevo and Marketo connected for student and prospect communication.",
          "AI: AI features built into the experience to support students and staff.",
        ],
      },
      {
        heading: "The outcome",
        bullets: [
          "Students can log in, enrol, pay and reset their own passwords without contacting staff.",
          "Leads, enrolments, students and payments live together in Salesforce instead of separate tools.",
          "The team is alerted in Slack and can reach students on WhatsApp, from the same system.",
        ],
      },
    ],
  },
  {
    slug: "sf-org-health-checker",
    title: "A Salesforce Health Check in One Question",
    client: "Built by Nainika Technologies, open source",
    description:
      "How we built SF Org Health Checker, a read-only AI tool that reviews a Salesforce org across security, limits, code, automation, licences and unused components, with a fix for each finding.",
    tools: ["Salesforce", "Claude", "MCP", "TypeScript", "Salesforce CLI"],
    image: "/case-studies/sf-org-health-checker-v2.jpg",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most Salesforce orgs build up hidden risk over the years: too many users with admin-level access, passwords that never expire, limits creeping towards their caps, low test coverage and old automation. Support for Process Builder and Workflow Rules ended on 31 December 2025, so many orgs also have automation left to migrate.",
          "Checking all of this by hand means hours of clicking through Setup and writing queries, so it rarely gets done.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "SF Org Health Checker works inside Claude Desktop and Claude Code. An admin or consultant asks \"run a health check on my org\" and gets a scored report, with a fix for each finding. It covers six areas:",
        ],
        bullets: [
          "Security: Salesforce Health Check score, users with Modify All Data or View All Data, active users with no login in 90 days, and passwords that never expire.",
          "Org limits: data and file storage, daily API calls, async Apex, Bulk API, email and any other limit at 75% or more.",
          "Apex code: test coverage, classes on old API versions, objects with more than one trigger, inactive triggers and failed async jobs.",
          "Automation: remaining Process Builders and Workflow Rules to migrate, inactive flows, objects with many record-triggered flows and paused flow interviews.",
          "Licences: fully used and under-used licences, permission set licences expiring within 60 days, and frozen users still holding a licence.",
          "Unused components: reports not run in a year, unused email templates, unassigned permission sets, and profiles or queues with no members.",
        ],
      },
      {
        heading: "Safe by design",
        paragraphs: [
          "The tool is read-only. It only reads data, and has no way to create, change or delete anything in the org. It uses the admin's existing Salesforce CLI login, runs on their own computer, and keeps access tokens in memory, sending them only to the org itself.",
          "It is the same principle we recommend for every AI agent: give it exactly the access the job needs, and no more.",
        ],
      },
      {
        heading: "The outcome",
        bullets: [
          "A full org review that used to take hours of manual checks starts with a single question.",
          "Each area gets a score out of 100 and an A to F grade, so it is clear where to start.",
          "Checks the user has no permission for are listed as \"could not run\" instead of failing the whole report.",
          "It installs in one click in Claude Desktop, or as a plugin in Claude Code, and is free and open source under the MIT licence.",
        ],
      },
    ],
    link: { label: "View the project on GitHub", href: "https://github.com/rajeshyandrathi/sf-org-health-checker" },
  },
];
