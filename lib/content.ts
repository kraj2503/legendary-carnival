export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Where I Build", href: "#domains" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  {
    tag: "I",
    label: "Barclays",
    era: "Mar 2025 — Current",
    title: "Software Engineer, BA4",
    location: "Pune, IN",
    summary:
      "Own delivery across CI/CD, GraphQL APIs, and reporting infrastructure for systems running in production on Red Hat OpenShift.",
    points: [
      {
        stat: "~10 repos",
        text: "Migrated CI/CD pipelines to AWS using CloudFormation and Service Catalog, moving the team off Bitbucket Stash onto GitLab with reusable pipeline components.",
      },
      {
        stat: "GraphQL",
        text: "Built and maintained Node.js GraphQL APIs for data aggregation, giving client teams flexible, on-demand access to shared data.",
      },
      {
        stat: "JWT",
        text: "Implemented authentication and authorization with JWT tokens, enforcing access control and session integrity across application layers.",
      },
      {
        stat: "SQL Server",
        text: "Designed and optimized complex queries and stored procedures for high-volume reporting workflows.",
      },
      {
        stat: "OpenShift",
        text: "Deployed and operated UI and API services across multiple Red Hat OpenShift clusters for scalability and consistency.",
      },
    ],
  },
  {
    tag: "II",
    label: "Barclays",
    era: "Jul 2024 — Feb 2025",
    title: "Technical Graduate Developer, BA3",
    location: "Pune, IN",
    summary:
      "Built the ML systems that forecast project health, taking a manual RAG-status process into a model teams could trust.",
    points: [
      {
        stat: "82% → 96%",
        text: "Built and deployed XGBoost and LightGBM models to forecast project RAG (Red/Amber/Green) status, lifting accuracy from 82% to 96% at 91% precision — cutting false-positive risk alerts.",
      },
      {
        stat: "End-to-end",
        text: "Ran full data science workflows — EDA, feature engineering, hypothesis testing, statistical validation — across historical, time-series, and categorical data to isolate real risk indicators.",
      },
      {
        stat: "4h → 1.5h",
        text: "Cut ML training time 63% through efficient feature pipelines, model tuning, and stratified k-fold cross-validation.",
      },
    ],
  },
];

export const domains = [
  {
    n: "01",
    title: "Agentic AI Systems",
    desc: "Multi-agent architectures with a centralized root agent for planning, delegation, and session-level context — RAG retrieval paired with explicit validation stages, not just chained prompts.",
    tools: ["Google ADK", "LangChain", "LangGraph", "A2A", "RAG"],
  },
  {
    n: "02",
    title: "Backend & Distributed Systems",
    desc: "Event-driven services that hold up under real load — Kafka pipelines, async task execution, and APIs built to be consumed by more than one kind of client.",
    tools: ["Node.js", "FastAPI", "GraphQL", "Kafka", "WebSockets"],
  },
  {
    n: "03",
    title: "Data & Applied ML",
    desc: "Models built to be trusted in production, not just accurate in a notebook — feature pipelines, validation, and tuning aimed at cutting false positives, not chasing a leaderboard score.",
    tools: ["XGBoost", "LightGBM", "Feature Engineering", "TF-IDF"],
  },
  {
    n: "04",
    title: "Cloud & Reliability",
    desc: "Infrastructure that a team can operate, not just Claude can deploy once — CI/CD as reusable components, multi-cluster deployments, consistent environments.",
    tools: ["AWS", "Red Hat OpenShift", "CloudFormation", "GitLab CI/CD"],
  },
  {
    n: "05",
    title: "Frontend",
    desc: "Interfaces that stay out of the way — fast, mobile-first, and built to match the reliability of the backend behind them.",
    tools: ["React.js", "Next.js", "Tailwind CSS"],
  },
];

export const projects = [
  {
    title: "Jarvis",
    era: "Feb 2025 — Building",
    stack: "Python · Google ADK · LangChain · Pinecone · FastAPI · A2A",
    desc: "A governed multi-agent AI system with a centralized root agent handling planning, delegation, and session-level context. Parallel and sequential pipelines for healthcare and financial reasoning combine RAG retrieval with explicit aggregation and validation — built for environments where an agent can't just guess.",
    link: "https://github.com/kraj2503/jarvis",
  },
  {
    title: "WorkSync",
    era: "Oct 2025",
    stack: "TurboRepo · Express · Kafka · PostgreSQL · Prisma · Supabase · Next.js",
    desc: "A modular, event-driven automation platform for user-defined workflows triggered by real-time system and external events. A Kafka-based pipeline handles orchestration and async execution across services, with a multi-tenant backend enforcing tenant isolation.",
    link: "https://github.com/kraj2503/WorkSync",
  },
  {
    title: "Tradosphere",
    era: "Personal project",
    stack: "Redis · WebSockets · Docker · TimescaleDB",
    desc: "A high-performance crypto exchange platform inspired by Backpack.exchange — API server architecture separated from the trading engine, Redis pub/sub for FIFO data flow, a market-maker bot for realistic volatility, and a trade simulator for strategy testing.",
    link: "https://github.com/kraj2503/Exchange.git",
  },
  {
    title: "Muzly",
    era: "Personal project",
    stack: "Next.js · NextAuth",
    desc: "A social streaming platform for watching YouTube together — synchronized playback across users with a democratic voting system that lets the group's highest-voted video advance the queue.",
    link: "https://muzly.kshitizraj.com/",
  },
];

export const process = [
  {
    n: "1",
    title: "Map the flow",
    desc: "Before writing code, trace how data and requests actually move through the system — not the version on the architecture diagram.",
  },
  {
    n: "2",
    title: "Design the pipeline",
    desc: "Draw clear boundaries between reasoning, execution, and context — so the system stays auditable as it grows, not just fast to demo.",
  },
  {
    n: "3",
    title: "Ship and harden",
    desc: "Deploy with CI/CD, monitor what's running, and iterate against real usage — reliability is a feature, not an afterthought.",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "C / C++"],
  "Applied AI": [
    "Google ADK",
    "AWS Bedrock",
    "AWS AgentCore",
    "LangChain",
    "LangGraph",
    "A2A",
    "ReAct Tool Use",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
    "MCP-style Context Propagation",
  ],
  "Backend & Systems": [
    "FastAPI",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "OAuth 2.0",
    "Event-Driven Architecture",
    "WebSockets",
    "Kafka",
  ],
  "Data & Storage": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Prisma ORM",
    "Supabase",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Red Hat OpenShift",
    "CI/CD (GitLab)",
    "ELK Stack",
  ],
  Frontend: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML / CSS"],
  "ML & NLP": ["XGBoost", "LightGBM", "Feature Engineering", "TF-IDF"],
};

export const education = [
  {
    school: "SRM Institute of Science & Technology",
    location: "Chennai, TN",
    degree: "B.Tech, Computer Science & Engineering",
    era: "2020 — 2024",
    detail: "CGPA: 9.05 / 10",
  },
  {
    school: "Delhi Public School",
    location: "Bokaro Steel City, JH",
    degree: "AISSCE (12th) · AISSE (10th)",
    era: "2017 — 2020",
    detail: "90.20% · 88.4%",
  },
];

export const certifications = [
  "Barclays — Agentic AI Digital Credential",
  "Barclays — Gen AI Digital Credential",
  "Google — Build Intelligent Agents with ADK",
  "Google — Agents Intensive Capstone Project",
  "100xDevs — Full Stack Development (0–1 & 1–100)",
  "NPTEL — Data Science for Engineers",
  "Red Hat — Enterprise Linux Fundamentals",
];

export const contact = {
  email: "kshitizraj.dev@gmail.com",
  linkedin: "https://linkedin.com/in/kshitiz-raj-2503",
  github: "https://github.com/kraj2503",
  twitter: "https://x.com/_kshitiz_raj",
  resume: "/Kshitiz_Raj_Resume.pdf",
  site: "kshitizraj.com",
};
