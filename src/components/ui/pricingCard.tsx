import assets from "@/asset/assets";
import Image from "next/image";

const pricingData = [
  {
    id: 1,
    tierName: "Basic",
    price: "7,500",
    billing: "Annually Billed",
    color: "text-yellow-500",
    description:
      "Single-Unit Proof-of-Concept. Ideal for trialing one Humanoid for basic, public-facing, simple tasks.",
    cta: "Get Started",
    coreFeatures: [
      "Controlled Environment Mobility: Basic navigation, obstacle avoidance, and light manipulation.",
      "Foundational NLP & Vision: Clear verbal interaction and recognition of up to 10 key objects/faces.",
      "Remote Diagnostics & Updates: Software patches and basic health monitoring handled remotely.",
    ],
  },
  {
    id: 2,
    tierName: "Premium",
    price: "14,900",
    billing: "Annually Billed",
    color: "text-purple-500",
    description:
      "Standardized Workforce Automation. Perfect for scaling Humanoids across a facility with full agentic workflow integration.",
    cta: "Get Started",
    coreFeatures: [
      "Autonomous Multi-Role Workflows: Humanoid can switch between several complex roles autonomously.",
      "AGI brain uses real-time environment mapping, recognizing new objects, and recalling historical interactions for personalized service.",
      "Includes a 99.5% Uptime SLA backed by preventative maintenance visits.",
    ],
  },
  {
    id: 3,
    tierName: "Enterprise",
    price: "Quota",
    billing: "Contact Sales",
    color: "text-orange-500",
    description:
      "Full-Scale Fleet & Custom Hardware. For large organizations needing dedicated fleets, specialized security, and critical operation integration.",
    cta: "Contact us",
    coreFeatures: [
      "Custom-engineered physical build for industrial tasks.",
      "AGI models are constantly fine-tuned on your private data for continuous, measurable efficiency and productivity gains.",
      "Full Regulatory Compliance Suite: Includes HIPAA/GDPR compliance, Private Cloud Data Residency.",
    ],
  },
];

const PricingCard = () => {
  return pricingData.map((ele) => (
    <div key={ele.id} className="p-4 max-w-[450px] w-full">
      <div className="h-auto py-5 sm:py-6 px-4 sm:px-8 border border-gray-600 rounded-3xl sm:rounded-4xl">
        <h2 className={`text-2xl sm:text-4xl ${ele.color}`}>
          {ele.tierName}
        </h2>
        <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
          {ele.description}
        </p>
        <div className="text-5xl py-2 sm:text-6xl md:text-7xl flex items-center mt-6 mb-8">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            $
          </span>
          <span className="ml-2.5">{ele.price}</span>
        </div>
        <button className="w-full bg-white text-black cursor-pointer font-bold py-1.5 sm:py-3 sm:px-8 rounded-lg border border-slate-700 transition-all duration-300 ease-in shadow-lg hover:shadow-xl hover:bg-gray-100">
          {ele.cta}
        </button>
        <div className="mt-6">
          <hr className="border-t border-gray-800" />
          {ele.coreFeatures.map((feature, idx) => (
            <div key={idx}>
              <div className="flex gap-3 sm:gap-5 items-start p-2 my-3">
                <Image
                  src={assets.check}
                  alt="check"
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default PricingCard;
