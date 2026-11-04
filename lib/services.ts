import {
  Bot,
  ChartNoAxesCombined,
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  type LucideIcon,
  Palette,
  Puzzle,
  ShoppingBag,
  Sparkles,
  TestTube,
  UsersRound,
  Wand2,
} from "lucide-react";

export type Service = {
  slug: string;
  summary: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "agentic-ai",
    summary: "Put AI agents to work on real business tasks. If work can be delegated to an agent, we can build it.",
    icon: Bot,
    title: "Agentic AI Services",
    description: "We design, build, and run AI agents that plan, use your tools, and complete multi-step work instead of only answering questions. If a task can be delegated to an agent, we can build it, from research and reporting to customer operations and back-office workflows.",
    features: [
      "Agentic AI strategy and use-case discovery",
      "Custom single-agent and multi-agent systems",
      "Workflow automation across your existing tools",
      "Connections to your data, documents, and business systems",
      "Human approval steps for sensitive actions",
      "Testing, monitoring, and ongoing improvement of agents"
    ]
  },
  {
    slug: "claude-ai-agents",
    summary: "Custom agents built on Claude and connected securely to the tools your team already uses.",
    icon: Sparkles,
    title: "Claude AI Agents",
    description: "We build custom agents on Claude, Anthropic's AI models, and connect them to the systems your business runs on. Your agents work with your own context, tools, and rules, so they fit how your team already operates.",
    features: [
      "Custom agents built with the Claude API and Agent SDK",
      "Claude Code setup and workflows for engineering teams",
      "Tool and data connections through the Model Context Protocol (MCP)",
      "Team rollouts with clear permissions and guardrails",
      "Evaluation of agent quality, reliability, and cost"
    ]
  },
  {
    slug: "ai-plugins",
    summary: "Extend AI assistants with plugins that bundle your tools, commands, and connections into one install.",
    icon: Puzzle,
    title: "AI Agent Plugins",
    description: "We build plugins that extend AI assistants and agents with new abilities. A plugin packages your tools, commands, and connections so your whole team can install the same setup and use it consistently.",
    features: [
      "Custom plugins for Claude and other AI platforms",
      "Connectors for your internal systems and third-party apps",
      "Custom commands and automations for repeat tasks",
      "Packaging and distribution across your organization",
      "Maintenance as your tools and platforms change"
    ]
  },
  {
    slug: "ai-skills",
    summary: "Teach agents how your business works with reusable skills that capture your processes and standards.",
    icon: Wand2,
    title: "AI Agent Skills",
    description: "We turn your team's know-how into reusable skills: packaged instructions that show an agent how to do a task your way. Skills make results more consistent, and they let everyone on your team benefit from your best processes.",
    features: [
      "Custom skills for your company's processes and standards",
      "Skills for documents, reports, and repeat workflows",
      "Conversion of existing playbooks and SOPs into skills",
      "Testing to confirm skills give reliable results",
      "Shared skill libraries for your team"
    ]
  },
  {
    slug: "ui-ux-design",
    summary: "Design clear, usable products, from research and wireframes to polished interfaces, including AI experiences.",
    icon: Palette,
    image: "/Design.jpeg",
    title: "UI/UX Design",
    description: "We design digital products that are clear, attractive, and easy to use. From user research to finished interfaces, we shape web, mobile, and AI experiences around what your users actually need.",
    features: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Visual interface design for web and mobile",
      "Design systems and reusable components",
      "Interface design for AI assistants and agents",
      "Usability and accessibility reviews"
    ]
  },
  {
    slug: "revenue-operations",
    summary: "Align marketing, sales, and customer success around one process, one set of data, and one view of revenue.",
    icon: ChartNoAxesCombined,
    title: "Revenue Operations (RevOps)",
    description: "We connect your marketing, sales, and customer success teams through shared processes, clean data, and reliable reporting. You get a clear view of your funnel, fewer leads lost between teams, and forecasts you can trust.",
    features: [
      "RevOps audits and roadmaps",
      "Lead capture, routing, and qualification",
      "Pipeline stages, sales processes, and handoffs",
      "Forecasting, dashboards, and revenue reporting",
      "Data quality, deduplication, and governance",
      "AI agents for repetitive RevOps work"
    ]
  },
  {
    slug: "crm-implementation",
    summary: "Implement, migrate, and optimize Salesforce, HubSpot, and other CRMs so your team actually uses them.",
    icon: UsersRound,
    title: "CRM Implementation & Optimization",
    description: "We set up, migrate, and improve CRMs around the way your revenue teams really work. Whether you're starting from scratch or fixing a system nobody trusts, we make your CRM the reliable source of truth for customers and pipeline.",
    features: [
      "Salesforce and HubSpot implementation",
      "CRM migration and data cleanup",
      "Custom objects, fields, and workflows",
      "Salesforce Apex, Flow, and Lightning development",
      "HubSpot apps, automation, and custom integrations",
      "CRM health checks, user adoption, and admin support"
    ]
  },
  {
    slug: "revops-tools",
    summary: "Connect Marketo, Outreach, CPQ, Chargebee, and Sage Intacct around your CRM, from first lead to final invoice.",
    icon: Layers,
    title: "RevOps Apps & Tools",
    description: "We configure and connect the apps your revenue teams rely on, with Salesforce or HubSpot at the centre. Data flows cleanly from marketing and sales through to quoting, billing, and finance, so manual work drops away and your numbers match.",
    features: [
      "Marketing automation with Marketo and HubSpot",
      "Sales engagement with Outreach and Salesloft",
      "Data enrichment with Clay, Apollo, and ZoomInfo",
      "Conversation intelligence with Gong",
      "CPQ setup and quoting workflows",
      "Subscription billing with Chargebee",
      "Finance and accounting integration with Sage Intacct",
      "Automation with Zapier, Make, and custom integrations",
      "Tech stack audits and consolidation across your revenue tools"
    ]
  },
  {
    slug: "cloud-application-development",
    summary: "Build scalable, resilient cloud applications optimized for performance, agility, and seamless scalability to accelerate business innovation.",
    icon: Code,
    title: "Cloud Application Development",
    description: "We design and build scalable, secure, and high-performance cloud-native applications tailored to your business goals. From modernizing legacy systems to developing next-generation applications, we deliver solutions that are agile, future-ready, and cloud-optimized.",
    image: "/Cloud-Application-Development.jpeg",
    features: [
      "Custom application development for cloud environments",
      "Legacy system modernization with minimal disruption",
      "Mobile and web app development",
      "API-first development and microservices architecture",
      "Serverless computing and event-driven architecture implementation",
      "Robust security design and compliance adherence",
      "Integration with platforms like Salesforce, AWS, Azure, Google Cloud, and HubSpot"
    ]
  },
  {
    slug: "web-development",
    summary: "Craft sleek, responsive web and mobile applications designed for exceptional user engagement and seamless performance.",
    icon: Globe,
    title: "Innovative Web & Mobile Development",
    description: "We create engaging, high-performance websites and mobile applications that deliver exceptional user experiences across all platforms and devices.",
    image: "/Website-Mobile-App-Design-Development.jpeg",
    features: [
      "Responsive, mobile-first website design",
      "Progressive Web Applications (PWAs)",
      "Custom Content Management Systems (CMS)",
      "Web portals for internal and external users",
      "UI/UX design, wireframing, and performance optimization",
      "Custom iOS and Android app development",
      "Native and cross-platform apps using React Native, Flutter, Swift, or Kotlin",
      "API integration and scalable backend development"
    ]
  },
  {
    slug: "cloud-implementation",
    summary: "Architect, migrate, and optimize mission-critical workloads to the cloud for enhanced agility, operational efficiency, and accelerated innovation.",
    icon: Cloud,
    title: "Enterprise Cloud Architecture & Migration",
    description: "We help organizations modernize and scale through seamless cloud migration and intelligent architecture design, ensuring cost-effective, secure, and scalable cloud environments.",
    image: "/Cloud Architecture.jpeg",
    features: [
      "Cloud migration strategy and execution",
      "Cloud infrastructure planning, design, and optimization",
      "Serverless architecture implementation for scalability and cost-efficiency",
      "Cloud security, governance, and regulatory compliance",
      "Hybrid and multi-cloud environment setup and management",
      "Cost control, performance tuning, and monitoring setup",
      "Disaster recovery planning and high availability design",
      "Cloud resource automation using Terraform and CloudFormation"
    ]
  },
  {
    slug: "custom-integrations",
    summary: "Enable seamless, secure connectivity across systems with API-first strategies and smart automation to optimize workflows and boost operational efficiency.",
    icon: Database,
    title: "API-Driven Integration & Intelligent Automation",
    description: "Connecting disparate systems and automating workflows to streamline operations, improve data accuracy, and boost productivity across your enterprise.",
    image: "/API Integration.jpeg",
    features: [
      "Enterprise application and system integration",
      "Data integration, transformation, and ETL processes",
      "CRM and ERP integration for unified business data",
      "Third-party API development and integration",
      "Middleware design and workflow orchestration",
      "Intelligent automation with RPA and workflow engines",
      "Real-time data synchronization and event-driven architecture",
      "API management, monitoring, and security best practices"
    ]
  },
  {
    slug: "ecommerce-solutions",
    summary: "Implement intelligent commerce platforms that deliver personalized customer experiences and boost conversions through advanced analytics and automation.",
    icon: ShoppingBag,
    title: "AI-Powered E-commerce Solutions",
    description: "Building scalable, intelligent e-commerce platforms designed to drive growth, optimize customer experience, and streamline online business operations.",
    image: "/Ecommerce.jpeg",
    features: [
      "Custom e-commerce platform development tailored to your business needs",
      "Shopify and WooCommerce store setup, customization, and optimization",
      "Secure payment gateway integration for smooth transactions",
      "Advanced inventory and order management systems",
      "Omnichannel retail solutions for unified customer engagement",
      "AI-powered product recommendations and personalized shopping experiences",
      "Automated marketing and customer segmentation using AI analytics",
      "Scalable cloud hosting and performance optimization"
    ]
  },
  {
    slug: "quality-assurance",
    summary: "Implement advanced testing strategies powered by AI and automation to ensure superior product quality, faster releases, and seamless user experiences.",
    icon: TestTube,
    title: "Intelligent Quality Engineering",
    description: "Implementing rigorous and intelligent testing methodologies to ensure flawless performance, security, and reliability throughout the software development lifecycle.",
    image: "/Quality Assurance.jpeg",
    features: [
      "Automated testing frameworks for consistent quality assurance",
      "Performance, load, and stress testing to validate scalability",
      "Comprehensive security testing to identify vulnerabilities",
      "User acceptance testing (UAT) to meet business requirements",
      "Continuous integration and continuous delivery (CI/CD) pipelines",
      "Test automation strategy and maintenance",
      "Real-time monitoring and analytics for quality metrics"
    ]
  }
];
