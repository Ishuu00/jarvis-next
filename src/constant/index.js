const pricingData = [
  {
    id: 1,
    tierName: "Basic (Pilot)",
    price: "US$7,500 per month",
    billing: "Annually Billed",
    description:
      "Single-Unit Proof-of-Concept. Ideal for trialing one Humanoid for basic, public-facing, simple tasks.",
    cta: "Start Pilot Project",
    coreFeatures: [
      "Controlled Environment Mobility: Basic navigation, obstacle avoidance, and light manipulation (e.g., retrieving an item, opening a simple door).",
      "Foundational NLP & Vision: Clear verbal interaction and recognition of up to 10 key objects/faces (No deep memory).",
      "Remote Diagnostics & Updates: Software patches and basic health monitoring handled remotely (Manual support required for physical faults).",
    ],
  },
  {
    id: 2,
    tierName: "Premium (Deployment)",
    price: "US$14,900 per month",
    billing: "Annually Billed",
    description:
      "Standardized Workforce Automation. Perfect for scaling Humanoids across a facility with full agentic workflow integration.",
    cta: "Deploy Humanoid Today",
    coreFeatures: [
      "Autonomous Multi-Role Workflows: Humanoid can switch between several complex roles (e.g., Inventory Clerk, Security Patrol) autonomously.",
      "Deep Contextual Awareness: AGI brain uses real-time environment mapping, recognizing new objects, and recalling historical interactions for personalized service.",
      "Guaranteed Onsite Maintenance: Includes a 99.5% Uptime SLA backed by preventative maintenance visits and shared regional spares pool.",
    ],
  },
  {
    id: 3,
    tierName: "Enterprise (Custom Fleet)",
    price: "Custom Quote",
    billing: "Contact Sales",
    description:
      "Full-Scale Fleet & Custom Hardware. For large organizations needing dedicated fleets, specialized security, and critical operation integration.",
    cta: "Request Fleet Design",
    coreFeatures: [
      "Dedicated Hardware & Payload: Custom-engineered physical build (e.g., specialized hands, higher lifting capacity, all-weather durability) for industrial tasks.",
      "Self-Learning Fleet Optimization: AGI models are constantly fine-tuned on your private data for continuous, measurable efficiency and productivity gains.",
      "Full Regulatory Compliance Suite: Includes HIPAA/GDPR compliance, Private Cloud Data Residency, and a dedicated security architect.",
    ],
  },
];

export default pricing