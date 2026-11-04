import {
  Bot,
  ChartNoAxesCombined,
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  type LucideIcon,
  Puzzle,
  ShoppingBag,
  Sparkles,
  TestTube,
  UsersRound,
} from "lucide-react";

export type ServiceGroup = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  image: string;
};

export type Service = {
  slug: string;
  group: string;
  summary: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    summary: "AI agents that do real work. If a task can be delegated to an agent, we can build it.",
    icon: Bot,
    image: "/Customer Centricity.jpeg",
  },
  {
    id: "revops-crm",
    title: "RevOps & CRM",
    summary: "One connected revenue engine across your CRM, marketing, sales, billing, and finance tools.",
    icon: ChartNoAxesCombined,
    image: "/Excellence.jpeg",
  },
  {
    id: "cloud-integration",
    title: "Cloud & Integration",
    summary: "Secure, scalable cloud platforms and the integrations that keep your systems in sync.",
    icon: Cloud,
    image: "/Cloud-Application-Development.jpeg",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    summary: "Well-designed, well-tested websites, apps, and online stores that your customers enjoy using.",
    icon: Globe,
    image: "/Website-Mobile-App-Design-Development.jpeg",
  },
];

export const servicesInGroup = (groupId: string) =>
  services.filter((service) => service.group === groupId);

export const services: Service[] = [
  {
    slug: "agentic-ai",
    group: "agentic-ai",
    summary: "Put AI agents to work on real business tasks. If work can be delegated to an agent, we can build it.",
    icon: Bot,
    title: "Agentic AI Services",
    description: "We design, build, and run AI agents that plan, use your tools, and complete multi-step work instead of only answering questions. If a task can be delegated to an agent, we can build it, from research and reporting to customer operations and back-office workflows.",
    image: "/Customer Centricity.jpeg",
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
    slug: "custom-ai-agents",
    group: "agentic-ai",
    summary: "Custom agents built on the leading AI models and connected securely to the tools your team already uses.",
    icon: Sparkles,
    title: "Custom AI Agents",
    description: "We build custom agents on the major AI platforms, choose the right model for each job, and connect your agents to the systems your business runs on. Your agents work with your own context, tools, and rules, so they fit how your team already operates.",
    image: "/Design.jpeg",
    features: [
      "Custom agents built on leading AI models and platforms",
      "Model selection based on quality, cost, and data requirements",
      "AI coding assistant setup and workflows for engineering teams",
      "Tool and data connections through the Model Context Protocol (MCP)",
      "Team rollouts with clear permissions and guardrails",
      "Evaluation of agent quality, reliability, and cost"
    ]
  },
  {
    slug: "ai-plugins-skills",
    group: "agentic-ai",
    summary: "Extend AI agents with plugins that connect your tools and skills that teach them how your business works.",
    icon: Puzzle,
    title: "AI Plugins & Skills",
    description: "We make AI assistants and agents more useful for your business. Plugins package your tools, commands, and connections into one install, while skills turn your team's know-how into reusable instructions an agent can follow your way.",
    image: "/Innovation.jpeg",
    features: [
      "Custom plugins for leading AI platforms",
      "Connectors for your internal systems and third-party apps",
      "Custom skills for your company's processes and standards",
      "Conversion of existing playbooks and SOPs into skills",
      "Testing to confirm plugins and skills give reliable results",
      "Packaging and sharing across your organization"
    ]
  },
  {
    slug: "revenue-operations",
    group: "revops-crm",
    summary: "Align marketing, sales, and customer success around one process, one set of data, and one view of revenue.",
    icon: ChartNoAxesCombined,
    title: "Revenue Operations (RevOps)",
    description: "We connect your marketing, sales, and customer success teams through shared processes, clean data, and reliable reporting. You get a clear view of your funnel, fewer leads lost between teams, and forecasts you can trust.",
    image: "/Deliver.jpeg",
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
    group: "revops-crm",
    summary: "Implement, migrate, and optimize Salesforce, HubSpot, and other CRMs so your team actually uses them.",
    icon: UsersRound,
    title: "CRM Implementation & Optimization",
    description: "We set up, migrate, and improve CRMs around the way your revenue teams really work. Whether you're starting from scratch or fixing a system nobody trusts, we make your CRM the reliable source of truth for customers and pipeline.",
    image: "/Excellence.jpeg",
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
    group: "revops-crm",
    summary: "Connect Marketo, Outreach, CPQ, Chargebee, and Sage Intacct around your CRM, from first lead to final invoice.",
    icon: Layers,
    title: "RevOps Apps & Tools",
    description: "We configure and connect the apps your revenue teams rely on, with Salesforce or HubSpot at the centre. Data flows cleanly from marketing and sales through to quoting, billing, and finance, so manual work drops away and your numbers match.",
    image: "/Discover.jpeg",
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
    group: "cloud-integration",
    summary: "Build scalable, resilient cloud applications optimized for performance, agility, and seamless scalability.",
    icon: Code,
    title: "Cloud Application Development",
    description: "We design and build scalable, secure, and high-performance cloud-native applications tailored to your business goals, from modernizing legacy systems to developing next-generation products.",
    image: "/Cloud-Application-Development.jpeg",
    features: [
      "Custom application development for cloud environments",
      "Legacy system modernization with minimal disruption",
      "API-first development and microservices architecture",
      "Serverless computing and event-driven architecture",
      "Robust security design and compliance adherence",
      "Integration with platforms like Salesforce, AWS, Azure, Google Cloud, and HubSpot"
    ]
  },
  {
    slug: "cloud-architecture-migration",
    group: "cloud-integration",
    summary: "Architect, migrate, and optimize critical workloads for better agility, efficiency, and cost control.",
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description: "We help organizations modernize and scale through seamless cloud migration and intelligent architecture design, creating cost-effective, secure, and scalable cloud environments.",
    image: "/Cloud Architecture.jpeg",
    features: [
      "Cloud migration strategy and execution",
      "Cloud infrastructure planning, design, and optimization",
      "Cloud security, governance, and regulatory compliance",
      "Hybrid and multi-cloud environment setup and management",
      "Cost control, performance tuning, and monitoring",
      "Disaster recovery planning and high availability design",
      "Cloud resource automation using Terraform and CloudFormation"
    ]
  },
  {
    slug: "custom-integrations",
    group: "cloud-integration",
    summary: "Enable seamless, secure connectivity across systems with API-first strategies and smart automation to optimize workflows and boost operational efficiency.",
    icon: Database,
    title: "API Integration & Automation",
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
    slug: "web-mobile-design",
    group: "digital-products",
    summary: "Design and build clear, engaging websites, mobile apps, and portals, from user research to launch.",
    icon: Globe,
    title: "Web, Mobile & UI/UX Design",
    description: "We design and build digital products that are clear, attractive, and easy to use. From user research and interface design through to development, we create websites and mobile apps around what your users actually need.",
    image: "/Website-Mobile-App-Design-Development.jpeg",
    features: [
      "User research, journey mapping, and prototypes",
      "Visual interface design and design systems",
      "Interface design for AI assistants and agents",
      "Responsive, mobile-first websites and web portals",
      "Custom Content Management Systems (CMS)",
      "iOS and Android apps using React Native, Flutter, Swift, or Kotlin",
      "Usability and accessibility reviews"
    ]
  },
  {
    slug: "ecommerce-solutions",
    group: "digital-products",
    summary: "Implement intelligent commerce platforms that deliver personalized customer experiences and boost conversions through advanced analytics and automation.",
    icon: ShoppingBag,
    title: "AI-Powered E-commerce",
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
    group: "digital-products",
    summary: "Implement advanced testing strategies powered by AI and automation to ensure superior product quality, faster releases, and seamless user experiences.",
    icon: TestTube,
    title: "Quality Engineering",
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
