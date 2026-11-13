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
      "Campaigns"
    ],
    "image": "/case-studies/contact-centre-cti.jpg",
    "sections": [
      {
        "heading": "The challenge",
        "paragraphs": [
          "A beverage company runs outbound calls to its trade customers, for example to take orders and to remind outlets about licence renewals.",
          "Agents worked between the phone system and Salesforce, and each call needed the right customer, the right campaign and the right script in front of them."
        ]
      },
      {
        "heading": "What we built",
        "paragraphs": [
          "Our team connected the Genesys phone system to Salesforce Service Cloud and built the full outbound flow."
        ],
        "bullets": [
          "Campaigns: contacts are imported as campaign members, with the request type and reason on the import sheet.",
          "Call requests: each campaign member creates one call request automatically, so no customer is called twice for the same campaign.",
          "Routing: when an agent goes online, the next call request arrives through Omni-Channel.",
          "Voice call record: the agent sees the account, contact, campaign and call request on one screen.",
          "Call scripts: the right script appears on the call, based on the request type.",
          "Housekeeping in Apex: email handling, a do-not-call list cleanup job, and status sync driven by Custom Metadata, so rules change without code."
        ]
      },
      {
        "heading": "Quality and handover",
        "paragraphs": [
          "We brought test coverage above the 75% Salesforce needs for production, took the solution through user acceptance testing, and completed a formal handover to the client team."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Outbound calling now runs from inside Salesforce, from campaign to call.",
          "Agents see the full customer story the moment a call connects.",
          "Scripts follow the request type, so every call follows the same steps.",
          "The solution went live in July 2026."
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
      "Data migration"
    ],
    "image": "/case-studies/member-data-migration.jpg",
    "sections": [
      {
        "heading": "The challenge",
        "paragraphs": [
          "A retirement fund administrator needed to move its members onto Salesforce Financial Services Cloud. That meant more than 4 million member accounts and over 20 years of transaction history from an external administration system.",
          "At that size, a migration cannot simply be run once and hoped for. It has to be repeatable, checked at every step, and safe to stop and restart."
        ]
      },
      {
        "heading": "What we built",
        "paragraphs": [
          "Our team built a migration platform with three ways of loading data, working side by side:"
        ],
        "bullets": [
          "Before go-live: a full load, accounts first, through a seven-step pipeline: profile and cleanse, load staging, controlled start, accounts, transactions, reconcile, and accept.",
          "Every night: a delta load that pulls only what changed since the last run.",
          "In real time: new activity is processed as it happens."
        ]
      },
      {
        "heading": "Built to fail safely",
        "bullets": [
          "Data lands in staging objects first, so nothing reaches live records until it passes checks.",
          "A reconciliation gate compares source and target before any batch is accepted.",
          "Records that fail are logged as exceptions for the team to fix, instead of stopping the whole run.",
          "Every batch and event is logged, so the team can see exactly what ran and when."
        ]
      },
      {
        "heading": "The right data in the right place",
        "paragraphs": [
          "Members, their accounts, balances and transactions use the standard Financial Services Cloud data model. Recent activity stays in Salesforce for day-to-day work, while long-term history and regulatory reporting sit in a separate analytics tier, so the org stays fast as it grows."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "A migration approach that scales to millions of records and decades of history.",
          "Every load is checked and reconciled before it is accepted.",
          "Failures are contained and recoverable, not all-or-nothing.",
          "A platform that keeps working after go-live, through nightly and real-time loads."
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
        "heading": "The challenge",
        "paragraphs": [
          "A bank's merchant services team handles cases from the businesses that take card payments with it. Agents needed every case linked to the right merchant, and a clear, guided way to work each type of case.",
          "The work also had to fit the bank's strict engineering standards, with every change reviewed and released safely."
        ]
      },
      {
        "heading": "What we built",
        "bullets": [
          "A suite of screen flows that guide agents through each type of merchant case, step by step.",
          "A merchant matching service in Apex, so each case is linked to the right merchant record.",
          "Lightning Web Components that show agents the merchant details they need on the case.",
          "All Apex built on the fflib enterprise patterns the bank requires, with code reviews on every pull request."
        ]
      },
      {
        "heading": "Safe releases",
        "paragraphs": [
          "We managed a large production release of 63 components covering more than 27 user stories, including recovery work overnight to bring it in safely.",
          "We also reviewed the case setup for compliance and flagged a gap: agents could change a high-risk case to a lower-risk type. We set out the options to close it, either a hard block or an audit-based control, for the bank to decide."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Agents follow one guided path for each type of merchant case.",
          "Cases are linked to the right merchant from the start.",
          "Large releases reach production in a controlled way.",
          "Compliance risks are raised early, before they reach production."
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
      "Salesforce"
    ],
    "image": "/case-studies/playwright-test-automation.jpg",
    "sections": [
      {
        "heading": "The problem",
        "paragraphs": [
          "Most teams test the important journeys in their apps by hand, if at all. Unit tests and code coverage show that the code runs, not that a customer can actually sign up, pay or raise a case.",
          "As AI writes more of the code, proving that it works becomes the slow part."
        ]
      },
      {
        "heading": "What we built",
        "paragraphs": [
          "NainuTest AI is our end-to-end test automation framework:"
        ],
        "bullets": [
          "Tests are written in plain language with Cucumber, so business users can read and agree them.",
          "Playwright runs them in a real browser, using the Page Object Model so tests stay easy to maintain.",
          "Tests run headless on every change, with results posted to Slack or Microsoft Teams.",
          "Passwords and keys are kept in GitHub Secrets, never in the test code.",
          "Every run is recorded, giving a full audit trail."
        ]
      },
      {
        "heading": "The AI agent we are adding",
        "paragraphs": [
          "We are building an AI agent on top of the framework, in phases:"
        ],
        "bullets": [
          "It reads a user story from Jira or Azure DevOps and writes the test cases.",
          "It turns those test cases into Playwright scripts.",
          "When a test fails, it looks for the cause, proposes a fix, updates the script and runs it again.",
          "It flags flaky tests and tracks performance over time."
        ]
      },
      {
        "heading": "The outcome",
        "bullets": [
          "Key customer journeys are tested automatically, not by hand.",
          "Test cases are readable by the whole team, not just developers.",
          "A clear path from user story to tested release.",
          "The same approach works for Salesforce and for web apps."
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
