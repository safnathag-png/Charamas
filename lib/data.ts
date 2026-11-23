export interface NavLink {
  name: string;
  href: string;
}

export interface ProductHighlight {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface FeatureCard {
  id: string;
  iconName: "Trees" | "ShieldCheck" | "SlidersHorizontal" | "Ship";
  title: string;
  description: string;
}

export interface ExportStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "CHARAMAS EXPORT INDONESIA",
  shortName: "Charamas",
  legalTag: "Indonesian Shisha Charcoal Briquettes Exporter",
  businessType: "Indonesian Export Trading Business",
  mainProduct: "Coconut Shell Charcoal Briquettes for Shisha & Hookah",
  origin: "Indonesia",
  emailPlaceholder: "inquiry@charamasexport.com",
  location: "Indonesia",
  copyright: `© ${new Date().getFullYear()} CHARAMAS EXPORT INDONESIA. All rights reserved.`,
  shortDesc:
    "Charamas Export Indonesia specializes in supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets. We focus on buyer requirements, product specifications, supplier coordination, and export documentation to support international business partnerships.",
  footerDesc:
    "Charamas Export Indonesia specializes in Indonesian coconut shell charcoal briquettes for international shisha and hookah markets.",
};

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Product", href: "#product" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Export Process", href: "#export-process" },
  { name: "FAQ", href: "#faq" },
];

export const HERO_CONTENT = {
  headline: "Premium Indonesian Shisha Charcoal Briquettes",
  supportingText: "100% Coconut Shell Charcoal Briquettes for Shisha & Hookah",
  description:
    "Charamas Export Indonesia focuses on supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets. We connect quality-focused sourcing with professional export coordination.",
};

export const ABOUT_CONTENT = {
  heading: "Your Trusted Shisha Charcoal Export Partner from Indonesia",
  description:
    "Charamas Export Indonesia specializes in supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets. We focus on buyer requirements, product specifications, supplier coordination, and export documentation to support international business partnerships.",
  supportingPoints: [
    {
      title: "Indonesian Coconut Shell Briquettes",
      desc: "Supplying 100% coconut shell briquettes intended specifically for shisha and hookah use.",
    },
    {
      title: "Quality-Focused Product Sourcing",
      desc: "Coordinating product specifications, low ash requirements, and burning metrics with suppliers.",
    },
    {
      title: "Clear Business Communication",
      desc: "Professional and responsive communication to discuss buyer inquiries and order details.",
    },
    {
      title: "Export Coordination and Support",
      desc: "Support for commercial arrangements, shipping documentation, and logistics coordination.",
    },
  ],
};

export const PRODUCT_DATA = {
  name: "Coconut Shell Charcoal Briquettes for Shisha & Hookah",
  description:
    "Made from 100% coconut shell, our briquettes are intended for shisha and hookah applications. Charamas focuses on connecting international buyers with suitable Indonesian product suppliers.",
  highlights: [
    {
      id: "raw-material",
      title: "100% Coconut Shell",
      value: "100%",
      description: "Natural Indonesian coconut shell material without chemical binders or wood fillers.",
    },
    {
      id: "ash-content",
      title: "Low Ash",
      value: "Below 2.5%",
      description: "Low ash residue suitable for optimal shisha and hookah bowl performance.",
    },
    {
      id: "fixed-carbon",
      title: "High Carbon",
      value: "≥ 5%",
      description: "Consistent fixed carbon value delivering sustained heat throughout sessions.",
    },
    {
      id: "burning-time",
      title: "Long Burning",
      value: "Up to 2.5 Hours",
      description: "Extended, stable burning duration required by shisha lounges and distributors.",
    },
  ],
  specifications: [
    { label: "Product Name", value: "Coconut Shell Charcoal Briquettes for Shisha & Hookah" },
    { label: "Raw Material", value: "100% Coconut Shell" },
    { label: "Ash Content", value: "Below 2.5%" },
    { label: "Carbon Content", value: "≥ 5%" },
    { label: "Burning Time", value: "Up to 2.5 Hours" },
    { label: "Country of Origin", value: "Indonesia" },
    { label: "Packaging", value: "Confirm based on available supplier options." },
  ] as ProductSpecification[],
  documentationNote:
    "Product test results and supporting documentation can be discussed and provided according to availability and transaction requirements.",
  packaging: {
    heading: "Packaging Options",
    description:
      "Packaging requirements can be discussed based on buyer preferences and supplier capabilities.",
    options: [
      { name: "Inner Box Packaging", note: "Individual branded or plain inner cartons (e.g. 1kg boxes)." },
      { name: "Master Carton", note: "Standard export outer cartons (e.g. 10kg / 20kg master boxes)." },
      { name: "Bulk Packaging", note: "Large volume sack or bag arrangements based on buyer needs." },
      { name: "Private Label Packaging", note: "Custom branding subject to supplier confirmation and volume." },
    ],
    disclaimer: "Packaging options are confirmed based on supplier arrangements.",
  },
};

export const WHY_CHOOSE_US: FeatureCard[] = [
  {
    id: "material",
    iconName: "Trees",
    title: "Indonesian Coconut Shell Material",
    description: "Focused on sourcing coconut shell charcoal briquettes from Indonesia.",
  },
  {
    id: "sourcing",
    iconName: "ShieldCheck",
    title: "Quality-Focused Sourcing",
    description: "Product requirements and specifications are coordinated with suppliers.",
  },
  {
    id: "orders",
    iconName: "SlidersHorizontal",
    title: "Flexible Order Solutions",
    description: "Order requirements can be discussed according to available supplier capabilities.",
  },
  {
    id: "coordination",
    iconName: "Ship",
    title: "Export Coordination",
    description: "Support for communication, commercial documentation, and shipment coordination.",
  },
];

export const EXPORT_PROCESS: ExportStep[] = [
  {
    step: "01",
    title: "Buyer Inquiry",
    description: "Understand buyer requirements, product specifications, and destination.",
  },
  {
    step: "02",
    title: "Quotation",
    description: "Prepare product pricing and commercial terms.",
  },
  {
    step: "03",
    title: "Sample & Quality Confirmation",
    description: "Coordinate product samples and confirm specifications with the supplier.",
  },
  {
    step: "04",
    title: "Order Coordination",
    description: "Coordinate the purchase order, supplier arrangements, and payment terms.",
  },
  {
    step: "05",
    title: "Inspection & Shipment",
    description: "Coordinate inspection, export documentation, and shipment arrangements.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities depend on packaging and shipping requirements. Order volume can be discussed through a quotation inquiry according to supplier capabilities.",
  },
  {
    question: "Can I request a product sample?",
    answer:
      "Yes, sample requests can be coordinated with suppliers so international buyers can evaluate briquette quality, burning duration, and ash characteristics.",
  },
  {
    question: "What are the specifications of your shisha charcoal briquettes?",
    answer:
      "Sourced from 100% Indonesian coconut shell, featuring low ash (below 2.5%), high carbon (≥ 5%), and a burning time of up to 2.5 hours intended specifically for shisha and hookah use.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Packaging options such as inner box packaging, master cartons, bulk packaging, or private label options can be discussed based on buyer preferences and supplier capabilities.",
  },
  {
    question: "Which countries can you supply?",
    answer:
      "Export coordination can be arranged for international destinations worldwide, with shipping terms and logistics confirmed during the inquiry process.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "Commercial payment terms are discussed and agreed upon during the quotation stage based on order requirements and commercial feasibility.",
  },
  {
    question: "Can I request product quality documentation?",
    answer:
      "Relevant test results, product specifications, and supporting commercial documents can be discussed and provided according to availability and transaction requirements.",
  },
];

export const INQUIRY_CONTENT = {
  heading: "Request Pricing & Samples",
  description:
    "Looking for reliable Indonesian shisha charcoal briquettes? Share your product requirements, target quantity, and destination. Contact Charamas to discuss your inquiry.",
};
