export const SITE = {
  name:        "Sentients",
  domain:      "sentients.in",
  url:         "https://sentients.in",
  email:       "shaash@sentients.in",
  calendly:    "https://calendar.app.google/7M6hBnJd5drc74pw7",
  linkedin:    "https://linkedin.com/in/shaashwath",
  tagline:     "Build Intelligent Systems.",
  description: "Helping founders and enterprises design, build and scale AI-native systems through product leadership, automation engineering and cognitive systems research.",
  location:    "Bengaluru, India",
} as const;

export const FOUNDER = {
  name:      "Shaashwath Vijayakumar",
  shortName: "Shaashwath",
  title:     "AI Systems Automation Engineer · Technical Product Owner · Cognitive AI Systems Engineer",
  philosophy: [
    "Systems over tools.",
    "Architecture over features.",
    "Intelligence over automation.",
  ],
  photo: "/images/shaashwath.jpg",
} as const;

export const SERVICES = [
  {
    id: "ai-automation", tag: "Pillar 01", accent: "blue" as const,
    title: "AI Systems Automation Engineering",
    headline: "Autonomous systems that compound in value over time.",
    description: "Designing and deploying intelligent automation — from agentic workflows and knowledge systems to autonomous QA pipelines and operational intelligence layers.",
    capabilities: ["Agentic workflows","Process intelligence","Autonomous QA","Knowledge systems","RAG architectures","Enterprise AI automation"],
    href: "/services#ai-automation",
  },
  {
    id: "product-ownership", tag: "Pillar 02", accent: "blue" as const,
    title: "Technical Product Ownership",
    headline: "Bridging business intent and engineering execution.",
    description: "End-to-end product leadership for complex systems — from strategy and architecture planning through roadmap governance, stakeholder alignment and delivery at scale.",
    capabilities: ["Product strategy","Architecture planning","Roadmaps","Stakeholder alignment","Delivery governance","Scale readiness"],
    href: "/services#product-ownership",
  },
  {
    id: "cognitive-ai", tag: "Pillar 03", accent: "purple" as const,
    title: "Cognitive AI Systems Engineering",
    headline: "Beyond automation — towards genuine machine cognition.",
    description: "Research and development at the frontier of AI: cognitive architectures, memory systems, reasoning frameworks and consciousness-inspired computing.",
    capabilities: ["Cognitive architectures","Memory systems","Human-AI interaction","Consciousness-inspired computing","Reasoning systems","Knowledge representation"],
    href: "/research",
  },
] as const;

export const TIMELINE = [
  { company: "Hebbar's",         role: "Co-Founder & Partner · SCM",                           period: "Past",    year: "2021–2023", summary: "Co-founded and partnered on SCM operations. Gained first-hand experience in product ownership, business execution, customer acquisition and startup dynamics." },
  { company: "RedBus",           role: "Product & Payments",                                    period: "Past",    year: "2020–2024", summary: "Built payment infrastructure from scratch across Vietnam, Cambodia and Indonesia. Integrated PhonePe, Razorpay, Mobikwik and JusPay." },
  { company: "Carl Zeiss",       role: "Senior Technical Product Owner",                        period: "Past",    year: "2024–2026", summary: "Owned Order Management, Finance, Post Sales and Lens Calculation Engine. Full-cycle product ownership across Azure-native enterprise systems." },
  { company: "Massive Dynamics", role: "CTO & Co-founder",                                     period: "Active",  year: "2025–Present", summary: "Co-founded and lead technology at Massive Dynamics, an AI-native company building at the intersection of advanced systems and applied intelligence." },
  { company: "Aurik",            role: "Fractional CTO · Technical Product Owner",              period: "Current", year: "2025–Present", summary: "Building end-to-end tech infrastructure and technical product ownership for Aurik, India's first data-backed insurance provider and marketplace creator." },
  { company: "HR Monster",       role: "Agentic Automation Lead · Technical Product Owner",     period: "Current", year: "2025–Present", summary: "Leads automation strategy and technical product ownership. Built the Autonomous QA Intelligence Platform. Reports to CTO, coordinates ~15 engineers and designers." },
  { company: "Sentients",        role: "Founder",                                               period: "Now",     year: "2026–Present", summary: "A systems studio at the intersection of Product, AI Automation and Cognitive Computing. Shaashwath's own company and brainchild." },
] as const;

export const SYSTEMS = [
  {
    id: "payments-infrastructure",
    title: "Payments Infrastructure",
    subtitle: "Multi-geography payment systems",
    description: "Built payment systems from zero across Vietnam, Cambodia and Indonesia. Integrated multiple providers, designed dashboards and operational tooling.",
    tags: ["Distributed Systems","Payments","Product"],
    href: "/systems/payments-infrastructure",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "enterprise-scm",
    title: "Enterprise SCM Systems",
    subtitle: "Carl Zeiss supply chain platform",
    description: "End-to-end ownership of Order Management, Finance, Post Sales and Lens Calculation Engine on Azure-native architecture.",
    tags: ["Enterprise","Azure","Product Ownership"],
    href: "/systems/enterprise-scm",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    id: "autonomous-qa",
    title: "Autonomous QA Intelligence",
    subtitle: "Self-improving QA platform",
    description: "Designed an intelligent system that monitors repositories, detects regressions, performs bug analysis and generates actionable engineering outputs.",
    tags: ["Agentic AI","Automation","QA"],
    href: "/systems/autonomous-qa",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: "massive-dynamics",
    title: "Massive Dynamics",
    subtitle: "AI company · CTO & Co-founder",
    description: "Co-founded and lead technology at Massive Dynamics, an AI-native company building advanced intelligent systems. More details coming soon.",
    tags: ["Company","AI Systems","Co-founder"],
    href: "/systems/massive-dynamics",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    isMassiveDynamics: true,
  },
  {
    id: "aurik",
    title: "Aurik Insurance Platform",
    subtitle: "India's first data-backed insurance marketplace",
    description: "Fractional CTO engagement building end-to-end tech infrastructure and technical product ownership for Aurik, India's first data-backed insurance provider and marketplace creator.",
    tags: ["Fractional CTO","Insurance Tech","Product Ownership"],
    href: "/systems/aurik",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "numocore",
    title: "Numocore",
    subtitle: "Consciousness-based AI pipeline",
    description: "An AI pipeline centred on consciousness-inspired architecture, built around a chatbot system that reasons from awareness primitives rather than pure retrieval. Full details coming soon.",
    tags: ["Cognitive AI","Research","Consciousness"],
    href: "/systems/numocore",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  {
    id: "myitihas",
    title: "MyItihas",
    subtitle: "Knowledge and cognition platform",
    description: "Structured intelligence system focused on deep contextual understanding and knowledge representation.",
    tags: ["Knowledge Systems","Cognitive AI","Research"],
    href: "/systems/myitihas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
] as const;

export const ENGAGEMENTS = [
  { title: "Fractional CTO",              description: "Strategic technical leadership without the full-time overhead. Architecture decisions, team mentorship and technology roadmap." },
  { title: "Technical Product Ownership", description: "End-to-end ownership of complex products. From business requirements through architecture to delivery governance." },
  { title: "AI Systems Consulting",       description: "Design and deploy AI automation systems. Agentic workflows, knowledge systems and operational intelligence." },
  { title: "Research Collaborations",     description: "Deep-tech partnerships in cognitive AI systems, memory architectures and consciousness-inspired computing." },
] as const;
