export const site = {
  name: "I-Cell Multimedia",
  tagline: "A relationship, not a transaction",
  heroKicker: "Africa’s Premier VAS & Digital Aggregator",
  heroTitle: "Telecom & Digital Solutions Provider",
  heroSubtitle:
    "We connect businesses with telecom partnerships, content aggregation, and direct carrier billing — driving growth across Africa and beyond.",
  mission:
    "To empower telecom operators, businesses and individuals with innovative and efficient aggregation solutions, fostering growth, collaboration and exceptional customer experience.",
  vision:
    "To become the most trusted and reliable aggregator service provider in the telecommunications industry, shaping the future of connectivity by driving innovation and simplifying complex processes.",
  attributes: ["Reliability", "Innovation", "Collaboration", "Customer Focus", "Transparency"],
};

export type ServiceItem = {
  title: string;
  desc: string;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Value-Added Services (VAS)",
    desc:
      "Africa’s leading VAS provider delivering telecom services that boost engagement and create new revenue streams.",
    bullets: ["Premium SMS & USSD services", "Mobile entertainment & gaming", "Interactive Voice Response (IVR)"],
  },
  {
    title: "Digital Aggregation",
    desc:
      "Connecting content providers with telecom networks for seamless distribution and monetization across channels.",
    bullets: ["Content aggregation & monetization", "Multi-platform digital distribution", "Partner onboarding & reporting"],
  },
  {
    title: "Direct Carrier Billing",
    desc:
      "Secure payment solutions that let customers charge digital purchases directly to their mobile phone bills.",
    bullets: ["Seamless mobile payment integration", "High security & fraud prevention", "Real-time transaction processing"],
  },
  {
    title: "Mobile Solutions",
    desc: "Innovative mobile services built around Africa’s mobile-first market needs.",
    bullets: ["Telecom integrations", "Subscription flows", "Analytics & performance insights"],
  },
  {
    title: "Mobile Gaming",
    desc: "Engaging mobile gaming solutions tailored for the African market, integrated into telecom networks.",
    bullets: ["Game distribution partnerships", "Billing & monetization", "Campaigns & retention tools"],
  },
  {
    title: "Digital Solutions",
    desc: "Custom digital transformation to help businesses thrive in mobile-first markets.",
    bullets: ["Product strategy & execution", "Platforms & portals", "Automation & optimization"],
  },
  {
    title: "Consulting & Support",
    desc: "Strategic advisory and ongoing support to maximize telecom and digital investments.",
    bullets: ["Technical consulting", "Operational support", "Partner success management"],
  },
];

export const partnerLogos = [
  { name: "MTN", text: "MTN" },
  { name: "Airtel", text: "Airtel" },
  { name: "Glo", text: "Glo" },
  { name: "9mobile", text: "9mobile" },
  { name: "Vodacom", text: "Vodacom" },
  { name: "Orange", text: "Orange" },
];