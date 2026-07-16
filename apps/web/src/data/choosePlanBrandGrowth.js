export const PRICING_PLANS = [
  {
    id: 1,
    tier: "FOUNDATION",
    title: "Standard Range",
    price: "$350 – $550",
    duration: "/ month",

    description:
      "A strong, consistent organic and creative foundation before you scale spend.",

    button: "Start with standard",

    featured: false,

    sections: [
      {
        title: "ORGANIC MARKETING",

        features: [
          "Keyword research (15 target keywords)",
          "On-page SEO for 5 core pages",
          "Monthly technical SEO audit",
          "Google Business Profile & local SEO",
        ],
      },

      {
        title: "WEBSITE",

        features: [
          "Website speed & UX audit",
          "2 hours/month of updates & fixes",
        ],
      },

      {
        title: "Branding & Creative",

        features: [
          "12 social creatives per month",
          "Brand consistency review",
        ],
      },
      {
        title: "Support",

        features: [
          "Monthly performance report",
          "Email support — 48hr response",
        ],
      },
    ],
  },

  {
    id: 2,

    tier: "PLATINUM",

    title: "Full Funnel",

    price: "$600 – $800",

    duration: "/ month",

    description:
      "Add paid acquisition and compound your organic growth in parallel.Everything in Standard, plus:",

    button: "Start with platinum",

    featured: true,

    badge: "MOST CHOSEN",

    sections: [
      {
        title: "PAID MEDIA",

        features: [
          "Google & Meta Ads — up to $3,000/mo managed",
          "Audience targeting & remarketing",
          "Weekly bid & creative optimization",
        ],
      },

      {
        title: "EXPANDED ORGANIC",

        features: [
          "Keyword coverage expanded to 30",
          "Link building — 40 backlinks/month",
          "Content strategy — 12 blog posts/month",
        ],
      },

      {
        title: "Website & Creative",

        features: [
          "5 hours/month updates + CRO tweaks",
          "1 new landing page per month",
          "16 social creatives + UI/UX consult",
        ],
      },
      {
        title: "Support",

        features: [
          "Dedicated account manager",
          "Bi-weekly strategy calls",
          "Priority support — 24hr response",
        ],
      },
    ],
  },

  {
    id: 3,

    tier: "FULL STACK",

    title: "Gold",

    price: "$900 – $1,200",

    duration: "/ month",

    description:
      "An outsourced growth, tech and marketing department— no vendors to manage. Everything in Platinum, plus:",

    button: "Start with gold",

    featured: false,

    sections: [
      {
        title: "SCALED GROWTH",

        features: [
          "Managed ad spend up to $6,000+/mo",
          "50+ keywords, 40 backlinks, 8 posts/month",
        ],
      },

      {
        title: "SOFTWARE & IT",

        features: [
            "CRM setup & integration",
            "API integration support",
            "Cloud & hosting management",
        ],
      },

      {
        title: "AI & Automation",

        features: [
          "Chatbot setup & training",
          "Email & marketing automation",
          "2 automated workflows built/month",
        ],
      },
      {
        title: "Website, Creative & Support",

        features: [
          "10 hours/month dev + 2 landing pages",
          "Fair-use unlimited creative requests",
          "Senior strategist, weekly calls, same-day support",
        ],

      }
    ],
  },
];