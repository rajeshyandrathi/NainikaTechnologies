export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

// Add open roles here. When the list is empty, the Careers page shows a
// general application message instead.
export const roles: Role[] = [
  {
    slug: "agentic-ai-associate",
    title: "Agentic AI - Associate",
    type: "Full-time, Hybrid",
    location: "Cape Town or Johannesburg (Hybrid)",
    summary:
      "Help build, test and run AI agents for clients on Salesforce Agentforce, HubSpot Breeze and custom platforms. A strong start for an early-career engineer who wants to work hands-on with agentic AI.",
    responsibilities: [
      "Build and configure AI agents, prompts, actions and integrations under the guidance of an architect",
      "Write test scenarios and check agent behaviour before and after launch",
      "Monitor live agents, review logs and raise issues with quality, cost or drift",
      "Prepare clean, connected CRM data for agents to use",
      "Document how each agent works and support client teams",
    ],
    requirements: [
      "0 to 2 years of experience in software, data or CRM work, or a relevant degree",
      "Working knowledge of Python or JavaScript and REST APIs",
      "Hands-on interest in large language models and AI agents",
      "Exposure to Salesforce or HubSpot is a plus",
      "Clear written communication and a careful, test-first mindset",
    ],
  },
  {
    slug: "agentic-ai-architect",
    title: "Agentic AI - Architect",
    type: "Full-time, Hybrid",
    location: "Cape Town or Johannesburg (Hybrid)",
    summary:
      "Lead the design and delivery of agentic AI solutions for clients, from use case and architecture to governance and AI Operations once agents are live.",
    responsibilities: [
      "Design agent architectures across Salesforce Agentforce, HubSpot, Data Cloud and custom platforms",
      "Run discovery with clients and turn business processes into safe, measurable agent use cases",
      "Set guardrails, access rules, testing, logging and POPIA controls for every agent",
      "Lead and mentor associates and engineers through build and launch",
      "Own AI Operations: monitoring, drift and cost reviews, and monthly value reporting",
    ],
    requirements: [
      "6+ years in solution architecture, with Salesforce or HubSpot experience",
      "Proven delivery of AI, LLM or agent solutions in production",
      "Strong knowledge of integrations, APIs, MCP and data modelling",
      "Understanding of AI governance, security and POPIA",
      "Salesforce Agentforce or Architect certifications are a plus",
      "Confident presenting to client leadership",
    ],
  },
  {
    slug: "data-engineer-scientist",
    title: "Data Engineer / Data Scientist",
    type: "Full-time, Hybrid",
    location: "Cape Town or Johannesburg (Hybrid)",
    summary:
      "Build the data foundations AI agents and revenue teams depend on, and turn CRM, marketing and finance data into models and insights that drive decisions.",
    responsibilities: [
      "Design and build data pipelines between Salesforce, HubSpot, Marketo, finance and cloud data platforms",
      "Clean, model and govern customer and revenue data for AI and reporting",
      "Build forecasting, scoring and churn models for RevOps teams",
      "Set up data for retrieval and grounding of AI agents",
      "Measure AI and agent performance so clients can see real value",
    ],
    requirements: [
      "3+ years in data engineering or data science",
      "Strong SQL and Python",
      "Experience with a cloud data platform such as Snowflake, Databricks, BigQuery or Salesforce Data Cloud",
      "Practical machine learning and statistics skills",
      "Experience with CRM or revenue data is a plus",
      "Understanding of POPIA and data privacy",
    ],
  },
];

export const talentAreas = [
  "Salesforce development (Apex, LWC, Flows)",
  "HubSpot and RevOps",
  "AI agent engineering",
  "QA and test automation",
];
