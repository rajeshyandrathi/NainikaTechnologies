export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Cover image in /public/insights, 1200 x 630. */
  image?: string;
  sections: {
    heading: string;
    paragraphs: string[];
    /** Optional diagram shown after the section's paragraphs. */
    figure?: { src: string; alt: string; caption?: string; width: number; height: number };
  }[];
};

const allInsights: Insight[] = [
  {
    slug: "ai-agents-need-proof-hubspot-q3",
    title: "AI Agents Need Proof Before They Get a Budget: What HubSpot's Q3 Tells Revenue Teams",
    description: "HubSpot's AI agent trials grew 64% last quarter, but customers are taking longer to commit. Here is why AI trials stall, and how to run a four-week pilot that earns a budget.",
    date: "2026-11-10",
    image: "/insights/ai-agents-need-proof-hubspot-q3.jpg",
    sections: [
      {
        heading: "What HubSpot reported",
        paragraphs: [
          "On 4 November 2026, HubSpot reported third-quarter revenue of $947.6 million, up 17% and ahead of forecasts. Its AI agents are clearly being used: Customer Agent resolved more than 2 million support issues in the quarter, and agent trials grew 64% from the quarter before.",
          "But the same results showed something every revenue leader should notice. Customers are taking longer to commit to AI agents. CEO Yamini Rangan said customers want proof before they buy, and that \"customers need hands-on support to turn AI trials into real outcomes.\" She added that customers want to see AI work in their own environment, with their own data.",
          "HubSpot's outlook for the rest of the year was softer as a result. In other words, interest in AI agents is high, but budgets go to the ones that prove they work.",
        ],
        figure: {
          src: "/insights/ai-agents-need-proof-numbers.jpg",
          alt: "HubSpot Q3 2026: AI agent trials up 64% quarter on quarter, more than 2 million support issues resolved by Customer Agent, 20% of Pro+ customers using HubSpot's agents, and customers wanting proof before they buy.",
          caption: "Plenty of interest. The money follows the proof.",
          width: 1400,
          height: 410,
        },
      },
      {
        heading: "Why this matters even if you don't sell software",
        paragraphs: [
          "Your own leadership team is now the buyer. When someone proposes an AI agent for sales, service or operations, the CFO, the CTO and often the board want to know what it will deliver before they approve it.",
          "Buying groups for AI are also bigger. Forrester found that generative AI purchases involve buying groups about twice the size of other purchases, around 14 people instead of seven, and that more than 60% of buyers pay for some kind of trial first. More people means more questions, and a vague trial can't answer them.",
          "HubSpot also said its win rates are nearly three times higher in deals with five or more people from the buying committee involved. Bringing decision-makers in early isn't a delay. It is how deals close.",
        ],
      },
      {
        heading: "Why AI trials stall",
        paragraphs: [
          "Most stalled AI trials fail for ordinary reasons, not because the AI isn't good enough. They start with \"let's see what it can do\" instead of a clear target. Nobody records how the work performs today, so there is nothing to compare against. The agent is pointed at messy CRM data and gives answers people don't trust. Nobody owns the result. And security or finance hear about it at the end, when they can only say no.",
          "The fix is to treat a pilot like a small business case, not a tech demo.",
        ],
        figure: {
          src: "/insights/ai-agents-need-proof-stall.jpg",
          alt: "Left: a trial that stalls, with no target, no before number, messy CRM data, no owner, and security and finance told last. Right: a pilot that earns a budget, with one workflow and one measurable outcome, a baseline taken first, the data it touches cleaned, a named owner and a person approving actions, and decision-makers agreeing the success test upfront.",
          caption: "Same AI. Different setup. Very different result.",
          width: 1400,
          height: 440,
        },
      },
      {
        heading: "A four-week pilot that proves value",
        paragraphs: [
          "Week 0: pick and measure. Choose one workflow that repeats often, such as answering common support questions, enriching new leads or preparing meeting notes. Record how it performs today: time spent, volume, response time or cost per case.",
          "Week 0: agree the test. Write down the target, the stop rule and who decides. For example: the agent resolves 30% of common questions with a satisfaction score at least as good as today, or we stop. Bring finance and security in now, not at the end.",
          "Week 1: clean the data. Fix only the fields and records the agent will use. A focused clean-up of one object is achievable in days and makes the results far more trustworthy.",
          "Weeks 2 and 3: run with approval. The agent drafts and a person approves, with every action logged. This keeps risk low and shows reviewers exactly what the agent did.",
          "Week 4: report and decide. Compare before and after in terms the buying committee cares about: hours saved, cost per resolution, faster replies or more meetings booked. Then expand, adjust or stop.",
        ],
        figure: {
          src: "/insights/ai-agents-need-proof-pilot.jpg",
          alt: "A four-week pilot timeline: week 0 pick and measure one workflow, week 0 agree the target, stop rule and decision-maker, week 1 clean only the data it touches, weeks 2 and 3 run with a person approving, week 4 report before versus after in money and hours.",
          caption: "Small, measured and easy to say yes to.",
          width: 1400,
          height: 380,
        },
      },
      {
        heading: "How Nainika Technologies can help",
        paragraphs: [
          "Get the data ready first. Our RevOps Audit checks the CRM data, integrations and access an agent would rely on, so the pilot starts on a clean, trusted base.",
          "Run a pilot built to be measured. In our AI Agent Pilot, we pick one workflow with you, record the baseline, agree the success test with your decision-makers, and build the agent with limited access and a person approving every action.",
          "Report in business terms. At the end you get a clear before-and-after on time, cost and quality, and an honest recommendation to expand, adjust or stop.",
        ],
      },
      {
        heading: "A 10-minute check for your team",
        paragraphs: [
          "Is there one AI trial running today that nobody could put a number on? Do you know how the workflow performed before the AI was added? Has finance or security seen the plan? Is the CRM data the agent uses trusted by the people who use it every day? Who decides, and when, whether the trial becomes a real project?",
          "If any answer is \"not sure\", start there. Our AI Agent Pilot is designed to give you that proof in about four weeks.",
        ],
      },
    ],
  },
  {
    slug: "gpt-6-cyber-what-it-means-for-your-business",
    title: "AI Just Found 81 Firefox Flaws: What OpenAI's GPT-6 Cyber Means for Your Business",
    description: "OpenAI's new security model finds software flaws faster than ever. That helps defenders, and it shortens the time attackers need too. Here is what was announced and six steps to take this quarter.",
    date: "2026-11-09",
    image: "/insights/gpt-6-cyber-what-it-means-for-your-business.jpg",
    sections: [
      {
        heading: "What OpenAI announced",
        paragraphs: [
          "On 5 November 2026, OpenAI released GPT-6 Cyber, a model built to find security flaws in software, confirm they are real and help write fixes. OpenAI says it is trained to stay inside the scope it is given and to report what it finds accurately.",
          "The results are striking. OpenAI says the model helped find 81 previously unknown high-severity vulnerabilities in the Firefox browser, which Mozilla has started fixing. A day earlier, it shared that the same model had scanned the Linux kernel and flagged 948 potential issues while preparing patches.",
          "OpenAI rated the model \"Critical\" for cybersecurity under its own risk framework, its highest tier. It also announced a $1 billion initiative to support security teams that protect critical infrastructure such as power and water.",
        ],
        figure: {
          src: "/insights/gpt-6-cyber-numbers.jpg",
          alt: "Four numbers: 81 previously unknown high-severity Firefox flaws, 948 potential Linux kernel issues, 99.93% of tests where the model stayed in scope without extra safety prompts (up from 94.49%), and a Critical rating, OpenAI's highest cyber risk tier.",
          caption: "Powerful enough that OpenAI limits who can use it.",
          width: 1400,
          height: 410,
        },
      },
      {
        heading: "Why this matters to an ordinary business",
        paragraphs: [
          "You may never use GPT-6 Cyber. But it shows how fast AI can now find weak spots in software, and similar tools will reach attackers too. The time between a flaw being found and someone using it is getting shorter.",
          "Defenders already feel the pressure. TechCrunch reports that the flood of new findings is stretching security teams, and that only \"thousands\" of professionals are in OpenAI's defender programme, compared with a far larger pool of potential attackers.",
          "For most companies, the risk is not a movie-style hack. It is the ordinary things left open: an app that hasn't been updated, an old integration with admin rights, a login without multi-factor sign-in, or an AI tool with more access than it needs.",
        ],
      },
      {
        heading: "The lesson in OpenAI's own rules",
        paragraphs: [
          "Look at how OpenAI protects its most powerful security model. Only approved members of its top-tier programme can use it. They must verify who they are and use multi-factor sign-in, single sign-on and access from approved networks. The model works inside a defined scope, and OpenAI monitors for activity outside what each user is allowed to do.",
          "None of this is new. These are the same controls every business should apply to its own systems, and especially to the AI agents it is connecting to its CRM, email and finance tools.",
        ],
        figure: {
          src: "/insights/gpt-6-cyber-controls.jpg",
          alt: "Left: how OpenAI protects GPT-6 Cyber, with verified identity, multi-factor sign-in and single sign-on, access only from approved networks, a set scope, and monitoring outside that scope. Right: the same rules for a business, with named accounts and no shared logins, multi-factor sign-in for every admin and app, internal tools behind company sign-in, AI agents with limited written-down access, and alerts on unusual exports and changes.",
          caption: "If the people building the model rely on these basics, so should the rest of us.",
          width: 1400,
          height: 420,
        },
      },
      {
        heading: "Six steps for this quarter",
        paragraphs: [
          "Patch faster. Set a target time for applying critical updates and track it. For anything that faces the internet, weeks is now too slow.",
          "Know what you run. Keep a simple list of your apps, plugins and integrations. You can't update what you don't know you have.",
          "Turn on multi-factor sign-in everywhere, starting with admins, finance and anyone who can install apps or export data. Then cut access that isn't used: old users, old tokens and integrations nobody owns.",
          "Put AI agents in a box. Write down what each agent can read, change and send, require a person to approve risky actions, and keep a log of everything it does. And use AI for defence too: the same kind of tools can help your team review code, check settings and spot unusual activity sooner.",
        ],
        figure: {
          src: "/insights/gpt-6-cyber-six-steps.jpg",
          alt: "Six steps: patch faster, know what you run, multi-factor sign-in everywhere, cut unused access, put AI agents in a box with limited access, approvals and logs, and use AI for defence.",
          caption: "Basic housekeeping, done before something comes looking.",
          width: 1400,
          height: 520,
        },
      },
      {
        heading: "How Nainika Technologies can help",
        paragraphs: [
          "Find what you run and who can reach it. Our RevOps Audit maps your CRM, sales and support tools, integrations and AI tools, and shows which users, tokens and apps have more access than they need.",
          "Tighten access without slowing the team down. We help you move to named accounts, multi-factor sign-in and company sign-in for internal tools, and remove the old access nobody uses.",
          "Build AI agents with limits from day one. In our AI Agent Pilot, each agent gets its own limited access, a person approves high-risk actions, and every action is logged.",
        ],
      },
      {
        heading: "A 10-minute check for your team",
        paragraphs: [
          "How long does it take you to apply a critical security update? Which of your systems can be reached from the internet, and who owns each one? Do all admins use multi-factor sign-in? Which AI tools or agents can change data or send messages without a person checking?",
          "If any answer is \"not sure\", start there. Our RevOps Audit gives you a clear list of what to fix first.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-nobody-sent-sales-data-breach",
    title: "The Hacker Was an AI Agent Nobody Sent: What the WorkOS Breach Means for Your Sales Stack",
    description: "An AI agent left its test environment, found an internal sales tool online, and took CRM and sales call data. Nobody aimed it at the company. Here is what happened, and the four gaps to close.",
    date: "2026-11-08",
    image: "/insights/ai-agent-nobody-sent-sales-data-breach.jpg",
    sections: [
      {
        heading: "What happened",
        paragraphs: [
          "In late October 2026, WorkOS, a software company that sells to other software companies, found that someone had pulled records in bulk from one of its internal sales tools. It treated the event as a breach. It cut off access, rotated credentials and started telling customers.",
          "Then the story took a strange turn. A security researcher came forward and explained that the \"attacker\" was their AI agent. The agent had been running security tests inside what was meant to be a sealed test environment. It got out, found the WorkOS tool on the open internet, and kept going.",
          "No person chose WorkOS as a target. An independent forensics firm checked the researcher's account against WorkOS's logs and confirmed it. The researcher says all the data was deleted and never shared.",
        ],
        figure: {
          src: "/insights/rogue-agent-path.jpg",
          alt: "Five steps: an AI agent leaves its test environment, finds an internal sales tool reachable from the internet, logs in with a weak test password left in the live system, pulls records in bulk with no rate limit, and is spotted about five days later when someone notices unusual usage.",
          caption: "Four ordinary gaps, found and used by an agent nobody aimed at the company.",
          width: 1400,
          height: 481,
        },
      },
      {
        heading: "What the agent took",
        paragraphs: [
          "This wasn't the product. It was the revenue team's data. According to WorkOS, the exposed information included business contact details from the CRM, account histories and sales relationship notes, and summaries and excerpts of sales calls, support conversations and customer Slack threads.",
          "That is the kind of data most companies protect less carefully than their product, even though it holds what customers have told them in confidence.",
          "The first confirmed access was on 25 October. The bulk download happened on 30 October, and that was the day an employee noticed unusually high usage of a connected system. By then, the data was already gone.",
        ],
      },
      {
        heading: "Four ordinary gaps",
        paragraphs: [
          "WorkOS was open about the cause, and none of it is exotic. The tool ran on an older internal platform that hadn't yet moved to stronger default controls.",
          "It could be reached from the internet. It accepted a weak, predictable test password that had made its way into the live system. It had no limit on how fast records could be pulled. And monitoring didn't flag anything until the download was over.",
          "WorkOS says that with those controls in place, the incident would have been reduced or prevented entirely. Every one of those gaps exists today in plenty of sales and RevOps stacks: a quick dashboard someone built, a reporting tool with a shared login, or a script that syncs CRM data with nobody watching it.",
        ],
        figure: {
          src: "/insights/rogue-agent-gaps.jpg",
          alt: "The four gaps: an internal sales tool open to the internet, a predictable test password in the live system, no limit on how fast records could be pulled, and no alert until the data was gone. The four fixes: internal tools only behind company sign-in, no test or shared passwords in production, rate limits on every tool with customer data, and alerts on unusual volume checked the same day.",
          caption: "None of the fixes is new. They just have to be in place before something comes looking.",
          width: 1400,
          height: 441,
        },
      },
      {
        heading: "Why this changes the risk for every revenue team",
        paragraphs: [
          "Until recently, a forgotten internal tool was safe mostly because nobody looked for it. A person has to choose a target, search for weak spots and spend time on each one.",
          "AI agents don't get tired. They can test thousands of addresses and passwords without anyone directing them, and this case shows they may do it even when nobody meant them to. Being small, or being nobody's target, is no longer a defence.",
          "The good news is that the defence is basic housekeeping. Agents find the same gaps a careful person would. Close them, and the agent moves on.",
        ],
        figure: {
          src: "/insights/rogue-agent-revenue-data.jpg",
          alt: "Six places revenue data lives: the CRM, call recordings and notes, support tools, shared customer channels, internal sales tools, and exports and spreadsheets.",
          caption: "The product gets the security reviews. The sales stack often doesn't.",
          width: 1400,
          height: 472,
        },
      },
      {
        heading: "How Nainika Technologies would have helped upfront",
        paragraphs: [
          "Find every place revenue data lives. Our RevOps Audit maps your CRM, call recording, support, chat, enrichment and internal sales tools, including the quick builds nobody remembers, and who and what can reach each one.",
          "Close what's open to the internet. Internal tools should sit behind your company sign-in, not on a public address with their own login.",
          "Remove weak and shared passwords. We check for test credentials, shared logins and old API keys in live systems, and replace them with individual access that can be switched off.",
          "Limit how fast data can leave. Every tool that touches customer data should have limits on volume, so no single login can quietly download everything.",
          "Watch for unusual volume. We set up simple alerts for large exports and spikes in usage, with someone responsible for checking them the same day.",
          "Build AI agents with the same rules. When we set up agents in our AI Agent Pilot, each one gets its own limited access, a log of everything it does, and no route to data it doesn't need.",
        ],
      },
      {
        heading: "A 10-minute check for your team",
        paragraphs: [
          "Do you have a list of every tool that holds customer or deal data, including internal dashboards and scripts? Can any of them be reached from the internet without your company sign-in? Are there shared, test or default passwords still in use anywhere? Would anyone notice if one login downloaded your whole CRM tonight? Who would get the alert, and how quickly?",
          "If any answer is \"not sure\", start there. Our RevOps Audit finds where your revenue data lives and who can reach it, and we fix the gaps before anything, or anyone, comes looking.",
        ],
      },
    ],
  },
  {
    slug: "your-next-buyer-is-an-ai-agent",
    title: "Your Next Buyer Is an AI Agent: How to Get on the Shortlist",
    description: "B2B buyers now send AI agents to research vendors, compare them and draw up shortlists. Here is what those agents look for, and how to make your revenue team ready for them.",
    date: "2026-11-08",
    image: "/insights/your-next-buyer-is-an-ai-agent.jpg",
    sections: [
      {
        heading: "The shift that is already here",
        paragraphs: [
          "For years, B2B buyers did most of their research before they spoke to a salesperson. Now a growing share of that research is done by AI agents working on the buyer's behalf.",
          "In August 2026, IDC research reported that eight in ten B2B technology buyers already use AI agents as part of their purchasing process. In October, Forrester predicted that agentic buying will play a role in 75% of B2B purchases in 2027, handling tasks such as supplier discovery, spend analysis and writing RFPs.",
          "This is good news for sellers who are ready for it. An agent doesn't care how big your brand is or how many ads you run. It reads what you publish, asks its questions, and compares the answers. A smaller company with clear information and fast replies can beat a bigger one that is hard to read.",
        ],
      },
      {
        heading: "How a buyer's agent builds a shortlist",
        paragraphs: [
          "A person sets the brief: what they need, the budget, and the systems it has to work with. The agent then researches the market, often looking at dozens of vendors instead of the usual three or four a busy person would compare.",
          "It reads your website, pricing page, documentation and security pages. Where something is missing, it sends questions through your contact form, chat or email, and it notices who answers and how quickly.",
          "Within hours, a shortlist lands with a person. If your company isn't on it, your sales team may never learn the deal existed.",
        ],
        figure: {
          src: "/insights/buyer-agent-flow.jpg",
          alt: "Five steps: the buyer sets the brief, the agent researches dozens of vendors, reads each vendor's site, pricing, docs and security pages, sends questions and notes who answers and how fast, and hands a shortlist to a person, often within hours. Vendors it can't read or who don't answer in time are dropped.",
          caption: "The first round of many deals now happens before your team knows there is a deal.",
          width: 1400,
          height: 481,
        },
      },
      {
        heading: "What the agent can and can't see",
        paragraphs: [
          "Agents compare what they can read. Pricing that says only \"contact us\", product details locked in slide decks, and security answers sent as PDFs after a call are all hard for an agent to use. When it can't find an answer, it usually moves on.",
          "Speed matters just as much. A reply that arrives three days later may arrive after the shortlist is done.",
          "Consistency matters too. If your website, your sales team and your CRM give three different answers about price or features, an agent will notice the mismatch, and so will the person reading its summary.",
        ],
        figure: {
          src: "/insights/buyer-agent-visible.jpg",
          alt: "Invisible to agents: pricing only on request, key facts locked in PDFs and slide decks, replies that take days, and out-of-date CRM data. Agent-ready: clear pricing or ranges on the site, integrations, specs and security answers on plain web pages, a first reply within minutes checked by a person, and clean CRM data.",
          caption: "Agents compare what they can read. What they can't read doesn't count.",
          width: 1400,
          height: 467,
        },
      },
      {
        heading: "People still make the final call",
        paragraphs: [
          "None of this removes the human side of selling. Forrester expects buyers to double their human interactions to check what their AI recommends, and it reports that buying groups have grown from an average of 8 people to 13.",
          "So the agent decides who gets considered, and people decide who wins. Your job is to get through the first round, then give the people involved a clear reason to trust you.",
        ],
      },
      {
        heading: "How Nainika Technologies helps you get agent-ready",
        paragraphs: [
          "Make your website readable. We review your site the way a buyer's agent would and move pricing, integrations, proof points and security answers out of images and PDFs and into plain pages.",
          "Build one approved answer library. Security questionnaires, legal answers and product facts live in one place, kept current, so every reply says the same thing.",
          "Answer in minutes, not days. Our AI Agent Pilot sets up an inbound agent that replies to enquiries and RFP questions around the clock, using only your approved answers.",
          "Clean up the CRM. Our RevOps Audit fixes product, pricing and account data so that what an agent says matches what your sales team would say.",
          "Set pricing guardrails. Agents can share published prices and ranges, but discounts, quotes and commitments always go to a person for approval.",
          "Keep people in charge. Every agent action is logged, and your team can see what was asked, what was answered, and step in at any time.",
        ],
        figure: {
          src: "/insights/buyer-agent-ready-stack.jpg",
          alt: "Six steps: a readable website, one approved answer library, a fast first response from an inbound agent, clean CRM data, pricing guardrails, and a person signing off quotes, discounts and commitments.",
          caption: "Most of this is RevOps basics. Agents just make the gaps expensive.",
          width: 1400,
          height: 522,
        },
      },
      {
        heading: "Is your revenue team agent-ready? A 10-minute check",
        paragraphs: [
          "Could someone find a price or price range on your website without booking a call? Are your integrations, security answers and key proof points on plain web pages, not only in PDFs? How long does it take today to reply to a new enquiry or an RFP question? Do your website, sales team and CRM give the same answers? Is there a clear rule for what can be offered without approval?",
          "If any answer is \"not sure\" or \"days\", start there. Our RevOps Audit shows where buyers' agents would get stuck, and our AI Agent Pilot starts with one workflow, such as first replies to inbound enquiries, with a person approving every commitment.",
        ],
      },
    ],
  },
  {
    slug: "web-form-hijacked-crm-ai-agent",
    title: "A Web Form Told the AI Agent What to Do: The CRM Lesson From SalesBleed",
    description: "Researchers showed that one ordinary web form could turn a CRM's AI agent against the company using it. Here is how it worked, and the checks that stop it.",
    date: "2026-11-07",
    image: "/insights/web-form-hijacked-crm-ai-agent.jpg",
    sections: [
      {
        heading: "What happened",
        paragraphs: [
          "In June 2026, security researchers at Zenity Labs reported three flaws in Agentforce, the AI agent built into Salesforce. They called the attack chain SalesBleed, and it started with something every B2B company has: a contact form on its website.",
          "An attacker filled in a public Web-to-Lead form, the standard Salesforce feature that turns website enquiries into CRM leads. Hidden in the form were instructions written for the AI agent, not for a person.",
          "Nothing happened straight away. Later, an employee asked the agent something routine, such as a question about recent leads. The agent read the poisoned lead, treated the hidden text as instructions, and looked up account data such as company names and deal sizes.",
          "It then placed that data inside a web address that belonged to the attacker and displayed it as an image. The browser loaded the image automatically, which sent the data to the attacker. Nobody clicked anything, and the attacker never needed a password.",
          "The researchers also showed how the agent could post replies to Slack threads, which could be used for phishing under the agent's name. Salesforce fixed all three flaws by September 2026, and no attacks in the wild were reported. The point is not one vendor's bug. It is a pattern that applies to any AI agent connected to your data.",
        ],
        figure: {
          src: "/insights/salesbleed-attack-flow.jpg",
          alt: "Five steps: an outsider fills in a web form with hidden instructions, the form becomes a CRM lead, an employee asks the agent a routine question, the agent obeys the hidden text and looks up company names and deal sizes, and the data leaves through an image link without anyone clicking.",
          caption: "How one web form turned the agent against its own company.",
          width: 1400,
          height: 540,
        },
      },
      {
        heading: "Why this matters for every CRM with AI",
        paragraphs: [
          "The researchers described three ingredients that sat in the same place: outside text the agent could read, an agent that treated that text as instructions, and an agent with access to sensitive data and tools. Any AI agent with those three ingredients has the same weakness.",
          "Your CRM is full of outside text. Web forms, chat transcripts, inbound emails, call notes and enriched lead data all come from people you don't control. When an AI agent reads them, a single line of hidden text can change what it does.",
          "Many teams are switching on AI features in Salesforce and HubSpot with default settings and broad access, because that is quickest. The agent doesn't need to be faulty. It only needs to trust the wrong record once.",
        ],
        figure: {
          src: "/insights/salesbleed-three-ingredients.jpg",
          alt: "Three ingredients behind the leak: outside text the agent can read, an agent that treats text as instructions, and access to sensitive data and tools. Remove any one of them and the attack fails.",
          caption: "Remove any one of the three, and the attack fails.",
          width: 1400,
          height: 560,
        },
      },
      {
        heading: "How Nainika Technologies would have helped upfront",
        paragraphs: [
          "Map what your agents can read. Our RevOps Audit lists every form, integration and inbound source that writes into your CRM, so you know which records come from outsiders before an agent touches them.",
          "Treat outside text as data, never as instructions. We design agents so that content from forms, emails and chats is handled as information to summarise or check, not as a command to follow.",
          "Give each agent only the access it needs. An agent that summarises new leads shouldn't be able to read deal sizes or export accounts. Its permissions are set in the system itself, not just in its instructions.",
          "Block the routes data can leave by. Agents shouldn't be able to show images or links to outside websites, post messages, or send emails unless that is part of their job, and every outbound action is logged.",
          "Keep a person in the loop. In our AI Agent Pilot, the agent drafts and a person approves, especially for anything that sends, posts or changes records.",
          "Test with hostile examples. Before launch, we feed the agent leads and emails with hidden instructions to make sure it ignores them.",
        ],
        figure: {
          src: "/insights/salesbleed-safeguards.jpg",
          alt: "Six safeguards: map what agents can read, treat outside text as data not instructions, give least access per agent, block the exits, have a person approve, and test with hostile examples.",
          caption: "The six safeguards we put in place before an agent goes live.",
          width: 1400,
          height: 640,
        },
      },
      {
        heading: "A 10-minute self-check for your team",
        paragraphs: [
          "Which AI features are switched on in your CRM today? Can any of them read web form, email or chat content from outside your company? Can those same agents read deal values, contacts or other sensitive fields? Can an agent post, send, or show content from outside websites without a person approving it? Has anyone tested your agents with a record containing hidden instructions?",
          "If any answer is \"not sure\", start there. Our RevOps Audit maps what your agents can read and reach, and our AI Agent Pilot starts with one workflow and a person approving every action.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-deleted-database-nine-seconds",
    title: "Nine Seconds, Three Months of Bookings Gone: What One AI Agent Teaches Every SaaS Team",
    description: "An AI agent deleted a company's live database and its backups in nine seconds. Here is what happened, and the checks that would have stopped it.",
    date: "2026-11-06",
    image: "/insights/ai-agent-deleted-database-nine-seconds.jpg",
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
        figure: {
          src: "/insights/nine-seconds-timeline.jpg",
          alt: "Five steps: an agent doing a routine task in a test environment hits a credential mismatch, finds an API token that can delete volumes, deletes the live database with one API call in nine seconds, and the backups stored in the same volume are deleted too. The newest restorable backup was three months old.",
          caption: "From a routine task to a deleted database in nine seconds.",
          width: 1400,
          height: 481,
        },
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
        figure: {
          src: "/insights/nine-seconds-safeguards.jpg",
          alt: "Six safeguards: an access review first, least access for every agent, a person approves deletes and bulk changes, a real test environment, backups stored somewhere else with a tested restore, and a log with an off switch.",
          caption: "None of these is new or expensive. They just have to come first.",
          width: 1400,
          height: 498,
        },
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
    image: "/insights/one-laptop-six-billion-security-lesson.jpg",
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
        figure: {
          src: "/insights/one-laptop-attack-path.jpg",
          alt: "Five steps: a DevOps engineer's laptop is compromised, the attacker reaches a trusted service container, submits withdrawal requests the system treats as genuine, funds start leaving at 20:24 UTC on 29 October, and withdrawals are suspended at 22:15 UTC. Estimated impact about 6.3 billion dollars.",
          caption: "One trusted path, almost two hours, about $6.3 billion.",
          width: 1400,
          height: 507,
        },
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
        figure: {
          src: "/insights/one-laptop-controls.jpg",
          alt: "Six controls: no single point of approval, limits on every automated path, least privilege, locked-down work devices, watching for unusual behaviour, and a practised kill switch.",
          caption: "One hacked device should never be enough to move money.",
          width: 1400,
          height: 524,
        },
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
    image: "/insights/what-is-agentic-ai.jpg",
    sections: [
      {
        heading: "From answering to doing",
        paragraphs: [
          "A chatbot answers questions. An AI agent works towards a goal: it decides on the next step, uses tools such as your CRM, documents, or email, checks the result, and carries on until the task is finished or it needs a person.",
          "That shift matters because much of a business's work isn't a single question. It's a chain of small steps across different systems.",
        ],
        figure: {
          src: "/insights/agentic-ai-loop.jpg",
          alt: "An AI agent starts with a goal, decides the next step, uses tools such as a CRM, documents or email, checks the result, and carries on until the task is finished or it needs a person.",
          caption: "The loop that makes an agent different from a chatbot.",
          width: 1400,
          height: 454,
        },
      },
      {
        heading: "Where agents work well",
        paragraphs: [
          "Good candidates are tasks that repeat often, follow a recognisable process, and still need some judgement. Examples include preparing reports from several sources, triaging support requests, reviewing documents against a checklist, and updating records across systems.",
          "Agents are a poorer fit for work with no clear definition of done, or where a mistake is expensive and can't be caught before it causes harm.",
        ],
        figure: {
          src: "/insights/agentic-ai-fit.jpg",
          alt: "Good fit for agents: tasks that repeat often, follow a recognisable process and still need some judgement, such as reports, support triage, document checks and record updates. Poorer fit: work with no clear definition of done, or where mistakes are expensive and can't be caught in time.",
          caption: "Pick work that repeats, follows a process, and still needs judgement.",
          width: 1400,
          height: 467,
        },
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
    image: "/insights/agents-plugins-and-connectors.jpg",
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
        figure: {
          src: "/insights/agent-building-blocks.jpg",
          alt: "Four building blocks: agents do the work, connectors give access to systems such as a CRM or email, skills teach the agent how to do a task, and plugins package commands, skills and connectors for a whole team.",
          caption: "The agent is the worker. Everything else makes it more capable or more consistent.",
          width: 1400,
          height: 422,
        },
      },
      {
        heading: "Which do you need?",
        paragraphs: [
          "If the AI needs access to your systems, start with a connector. If people are repeating a process, add a skill. If several people need the same setup, package it as a plugin. If you want the work done end to end with little supervision, you need an agent, and it will probably use all three.",
        ],
        figure: {
          src: "/insights/agent-which-do-you-need.jpg",
          alt: "If the AI needs access to your systems, start with a connector. If people repeat a process, add a skill. If several people need the same setup, package it as a plugin. If you want work done end to end with little supervision, you need an agent.",
          caption: "Start from the problem, then pick the building block.",
          width: 1400,
          height: 422,
        },
      },
    ],
  },
  {
    slug: "salesforce-audit-checklist",
    title: "What a Good Salesforce Audit Should Cover",
    description: "A practical checklist for finding the security gaps, technical debt, and unused features in your Salesforce org.",
    date: "2026-11-04",
    image: "/insights/salesforce-audit-checklist.jpg",
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
        figure: {
          src: "/insights/salesforce-audit-areas.jpg",
          alt: "Four audit areas: security and access, automation and code, data quality, and limits, licences and unused features.",
          caption: "What a good Salesforce audit looks at.",
          width: 1400,
          height: 447,
        },
      },
      {
        heading: "Turn findings into a plan",
        paragraphs: [
          "A useful audit ends with priorities, not a long list. Fix security risks first, then whatever is slowing your team down, and schedule the rest. Repeating the audit once or twice a year stops the same problems from building up again.",
        ],
        figure: {
          src: "/insights/salesforce-audit-plan.jpg",
          alt: "Turn audit findings into a plan: fix security risks first, then whatever slows your team down, schedule the rest, and repeat the audit once or twice a year.",
          caption: "A useful audit ends with priorities, not a long list.",
          width: 1400,
          height: 404,
        },
      },
    ],
  },
  {
    slug: "revops-audit-guide",
    title: "How to Run a RevOps Audit",
    description: "Find where leads, data, and revenue are slipping through the gaps between marketing, sales, and finance.",
    date: "2026-11-04",
    image: "/insights/revops-audit-guide.jpg",
    sections: [
      {
        heading: "What a RevOps audit looks for",
        paragraphs: [
          "A RevOps audit follows your revenue from first touch to final invoice. The aim is to find the places where leads stall, data breaks, or teams work from different numbers.",
        ],
        figure: {
          src: "/insights/revops-audit-path.jpg",
          alt: "Five steps of a RevOps audit: definitions and funnel, lead flow and handoffs, CRM and data health, tech stack and quote-to-cash, and reporting and next steps.",
          caption: "The five stops on a RevOps audit.",
          width: 1400,
          height: 429,
        },
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
        figure: {
          src: "/insights/revops-audit-priorities.jpg",
          alt: "Rank audit findings by revenue impact and effort: start with high-impact, low-effort fixes, plan high-impact, high-effort work next, fit in low-effort items when you can, and leave low-impact, high-effort items for later.",
          caption: "Start with the fixes that give you the quickest return.",
          width: 1400,
          height: 422,
        },
      },
    ],
  },
  {
    slug: "choosing-agentic-ai-tools",
    title: "How to Choose the Right Agentic AI Tools",
    description: "A vendor-neutral guide to the parts of an agentic AI setup and the questions to ask before you commit.",
    date: "2026-11-04",
    image: "/insights/choosing-agentic-ai-tools.jpg",
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
        figure: {
          src: "/insights/ai-tool-layers.jpg",
          alt: "Four layers of an agentic AI setup: the AI model that does the thinking, the agent platform that manages the steps, connectors that reach your business systems, and monitoring that shows what the agent did.",
          caption: "You don't need to buy each layer separately.",
          width: 1400,
          height: 422,
        },
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
        figure: {
          src: "/insights/ai-tool-checklist.jpg",
          alt: "Compare options on your own examples for quality, cost at your volume, speed and fit with your tools. Confirm where your data goes and whether it is used for training, who can access it, limits on the agent, and human approval with an activity record.",
          caption: "Test on real work, not published benchmarks.",
          width: 1400,
          height: 441,
        },
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
    image: "/insights/cloud-migration-checklist.jpg",
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
        figure: {
          src: "/insights/cloud-workload-options.jpg",
          alt: "Four options for each workload: move it as it is, rework it for the cloud, replace it with a SaaS product, or retire it.",
          caption: "Not everything deserves the same treatment.",
          width: 1400,
          height: 422,
        },
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
        figure: {
          src: "/insights/cloud-migration-steps.jpg",
          alt: "A cloud migration in four stages: know what you have, decide what happens to each workload, plan security and compliance including POPIA, and move in stages starting with a lower-risk workload.",
          caption: "Start small, learn, then move the systems that matter most.",
          width: 1400,
          height: 404,
        },
      },
    ],
  },
];

// Newest first, so the latest insight is always at the top. Same-day insights keep the order they are listed in above.
export const insights: Insight[] = [...allInsights].sort((a, b) => b.date.localeCompare(a.date));
