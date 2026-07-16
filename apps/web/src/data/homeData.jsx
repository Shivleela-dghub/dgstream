import VisualizationGraphic from "@/components/home/graphics/VisualizationGraphic";
// import google from "@/assets/logos/google.svg";
// import adobe from "@/assets/logos/adobe.svg";
// import spotify from "@/assets/logos/spotify.svg";
// import shopify from "@/assets/logos/shopify.svg";
// import stripe from "@/assets/logos/stripe.svg";
// import slack from "@/assets/logos/slack.svg";
// import notion from "@/assets/logos/notion.svg";
// import meta from "@/assets/logos/meta.svg";
export const services = [
  // {
  //   id: "01",
  //   title: "AI Creative",
  //   description:
  //     "Commercial-grade AI visuals for campaigns, product launches and social media.",
  //   icon: "bot",
  //   tags: ["AI", "Ads", "Campaigns"],
  // },
  {
    id: "02",
    title: "3D Visualization",
    description:
      "Photorealistic product renders and immersive visual storytelling.",
    icon: "box",
   //image: visualizationImg,
    tags: ["CGI", "Animation", "Product"],
  },
  {
    id: "03",
    title: "Architecture",
    description:
      "Premium architectural visualization and walkthrough experiences.",
    icon: "building",
   // image:null,
    tags: ["CGI", "Rendering", "3D"],
  },
  {
    id: "04",
    title: "Brand Identity",
    description:
      "Logos, brand systems and marketing assets designed for growth.",
    icon: "palette",
   // image:null,
    tags: ["Brand", "Identity", "Design"],
  },
  {
    id: "05",
    title: "Growth Marketing",
    description:
      "Performance-focused creative that drives measurable business results.",
    icon: "trending",
   // image:null,
    tags: ["SEO", "Paid Ads", "Growth"],
  },
  // {
  //   id: "06",
  //   title: "Video Production",
  //   description:
  //     "Motion graphics, product films and AI-assisted commercial videos.",
  //   icon: "video",
  //   tags: ["Motion", "Video", "Editing"],
  // },
];

  export const resultStats = [
    { value: '3.4×', label: 'Avg. ROAS increase' },
    { value: '68%', label: 'Faster production' },
    { value: '200+', label: 'Brands served' },
    { value: '100%', label: 'Senior-team delivery' }
  ];

  export const processSteps = [
    {
      step: 'Step 01',
      title: 'Discovery & Strategy',
      description: 'We audit your current position, identify growth levers, and map a clear creative and marketing strategy.'
    },
    {
      step: 'Step 02',
      title: 'Creative Production',
      description: 'AI-powered visuals, 3D assets, and brand material — produced to a premium standard, on deadline.'
    },
    {
      step: 'Step 03',
      title: 'Launch & Activate',
      description: 'We deploy across channels — ads, web, social — and monitor performance from day one.'
    },
    {
      step: 'Step 04',
      title: 'Optimize & Scale',
      description: 'Data-driven iteration to improve ROAS, conversion rates, and brand equity over time.'
    }
  ];

 export const industries = [
  {
    title: "Architecture",
    description:
      "Photorealistic renders, walkthroughs and property marketing.",
    icon: "building",
    featured: true,
  },
  {
    title: "Consumer Products",
    description:
      "Packaging, product launches and AI-powered commercial content.",
    icon: "shopping",
    featured: false,
  },
  {
    title: "Beauty",
    description:
      "Premium product campaigns.",
    icon: "sparkles",
    featured: false,
  },
  {
    title: "Furniture",
    description:
      "Lifestyle visualization.",
    icon: "sofa",
    featured: false,
  },
  {
    title: "Luxury",
    description:
      "Creative for premium brands.",
    icon: "gem",
    featured: false,
  },
  {
    title: "E-Commerce",
    description:
      "Performance focused creative.",
    icon: "globe",
    featured: true,
  },
];

  export const markets = [
    { label: 'United States — Primary', primary: true },
    { label: 'United Kingdom' },
    { label: 'Germany' },
    { label: 'Netherlands' },
    { label: 'France' },
    { label: 'Sweden & Norway' },
    { label: 'Switzerland' },
    { label: 'Canada' },
    { label: 'Australia' }
  ];
export const brands = [
  "Google",
  "Adobe",
  "Spotify",
  "Shopify",
  "Stripe",
  "Slack",
  "Meta",
  "Notion",
];

export const expertise = [
  {
    id: 1,
    title: "3D Visualization",
    services: [
      "Product Rendering",
      "CGI Animation",
      "Product Photography",
    ],
     graphic: <VisualizationGraphic />,
  },
  {
    id: 2,
    title: "Architecture",
    services: [
      "Exterior Rendering",
      "Interior Rendering",
      "Walkthrough Animation",
    ],
    graphic:null,
  },
  {
    id: 3,
    title: "Brand Identity",
    services: [
      "Logo Design",
      "Packaging Design",
      "Brand Guidelines",
    ],
    graphic:null,
  },
  {
    id: 4,
    title: "Growth Marketing",
    services: [
      "Performance Marketing",
      "Social Media Campaigns",
      "Content Strategy",
    ],
    graphic: null,
  },
];