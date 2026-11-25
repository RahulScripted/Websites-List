/** Copy for the Hearthly home-care page. Every name, price, figure, review and contact detail is invented. */

export type NavLink = { label: string; href: string };
export type Review = { text: string; name: string; city: string };
export type Faq = { q: string; a: string };
export type Step = { time: string; title: string; text: string };
export type Bar = { label: string; value: number; tone: 1 | 2 | 3 | 4 | 5 };
export type Fig = { num: string; label: string };
export type Plan = { name: string; monthly: string; yearly: string; text: string; features: string[]; cta: string; href: string; main?: boolean; tab?: string };
export type FooterColumn = { title: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  {
    "label": "Services",
    "href": "#collections"
  },
  {
    "label": "Systems",
    "href": "#range"
  },
  {
    "label": "Inside a home",
    "href": "#lookbook"
  },
  {
    "label": "Pricing",
    "href": "#pricing"
  },
  {
    "label": "About",
    "href": "#team"
  }
];

export const steps: Step[] = [
  {
    "time": "Hour 0",
    "title": "It notices",
    "text": "A sensor, a photo or a quick message. Hearthly spots the change and tells you what it means."
  },
  {
    "time": "Hour 1",
    "title": "It diagnoses",
    "text": "It matches the symptoms against your home's history and millions of past repairs to find the likely cause."
  },
  {
    "time": "Hour 3",
    "title": "It books a pro",
    "text": "A vetted, insured local pro at a fixed price, scheduled around your calendar. You approve with one tap."
  },
  {
    "time": "Hour 48",
    "title": "Fixed and logged",
    "text": "Photos, receipts and warranty go into your home's record, ready for insurance or the day you sell."
  }
];

export const figs: Fig[] = [
  {
    "num": "48h",
    "label": "average from first alert to fixed"
  },
  {
    "num": "2.4k",
    "label": "vetted, insured local pros"
  }
];

export const bars: Bar[] = [
  {
    "label": "Plumbing & water",
    "value": 31,
    "tone": 2
  },
  {
    "label": "Heating & cooling",
    "value": 27,
    "tone": 1
  },
  {
    "label": "Electrical",
    "value": 18,
    "tone": 4
  },
  {
    "label": "Appliances",
    "value": 15,
    "tone": 3
  },
  {
    "label": "Roof & exterior",
    "value": 9,
    "tone": 5
  }
];

export const reviews: Review[] = [
  {
    "text": "First-time homeowner. Hearthly basically taught me how my house works, one notification at a time.",
    "name": "Ana",
    "city": "Portland"
  },
  {
    "text": "The fixed prices are the real win. No more “we'll see when we get there.”",
    "name": "Theo",
    "city": "Austin"
  },
  {
    "text": "I manage my mum's house from two states away. This is the first time that hasn't felt stressful.",
    "name": "Priya",
    "city": "Chicago"
  },
  {
    "text": "It found a $500 heat pump rebate I had no idea existed. Paid for three years of membership.",
    "name": "Lucas",
    "city": "Denver"
  },
  {
    "text": "The autumn plan is genius. Gutters, furnace, outdoor taps, all done before I thought about any of it.",
    "name": "Sofia",
    "city": "Seattle"
  },
  {
    "text": "When we sold, the buyer's inspector asked for our home record. Every repair, every receipt. Closed in a week.",
    "name": "Marcus",
    "city": "Raleigh"
  }
];

export const faqs: Faq[] = [
  {
    "q": "Do I need to install anything?",
    "a": "No. The app works on its own from photos and messages. Home Plus sensors plug into an outlet or sit on the floor, and they're set up in about ten minutes with no tools."
  },
  {
    "q": "How are the pros vetted?",
    "a": "Every pro is licensed, insured and background-checked, and we review their work after every job. Fewer than one in five applicants make it onto the network."
  },
  {
    "q": "What if the AI gets the diagnosis wrong?",
    "a": "The pro confirms on site before any work starts. If the job turns out different, you see the new price and approve it first. You never pay for a fix you didn't need."
  },
  {
    "q": "What happens to my home's data?",
    "a": "It's encrypted, it's yours, and we never sell it. You can export your full home record or delete everything from settings at any time."
  },
  {
    "q": "Does it work for renters?",
    "a": "Yes. Renters can share issues straight to their landlord or property manager, with photos and a suggested fix, so things get sorted faster."
  }
];

export const plans: Plan[] = [
  {
    "name": "Essentials",
    "monthly": "$0",
    "yearly": "$0",
    "text": "Ask anything about your home and book fixed-price repairs whenever you need them.",
    "features": [
      "AI diagnosis from a photo or message",
      "Fixed-price booking with vetted pros",
      "Digital home record"
    ],
    "cta": "Get the app",
    "href": "#contact"
  },
  {
    "name": "Home Plus",
    "monthly": "$14",
    "yearly": "$140",
    "text": "24/7 monitoring, a seasonal plan for your house, and member pricing on every job.",
    "features": [
      "Everything in Essentials",
      "Starter sensor kit, free",
      "Automatic leak shut-off alerts",
      "10% off all repairs, no call-out fees"
    ],
    "cta": "Start free for 30 days",
    "href": "#contact",
    "main": true,
    "tab": "Most homes choose"
  },
  {
    "name": "Concierge",
    "monthly": "$39",
    "yearly": "$390",
    "text": "A named home advisor who knows your house, plus project planning for the big stuff.",
    "features": [
      "Everything in Home Plus",
      "Dedicated human advisor",
      "Annual in-person home check"
    ],
    "cta": "Meet an advisor",
    "href": "#contact"
  }
];

export const footerColumns: FooterColumn[] = [
  {
    "title": "Product",
    "links": [
      {
        "label": "Services",
        "href": "#collections"
      },
      {
        "label": "Monitoring",
        "href": "#range"
      },
      {
        "label": "How it works",
        "href": "#process"
      },
      {
        "label": "Pricing",
        "href": "#pricing"
      }
    ]
  },
  {
    "title": "Company",
    "links": [
      {
        "label": "About",
        "href": "#team"
      },
      {
        "label": "Careers",
        "href": "#contact"
      },
      {
        "label": "Become a pro",
        "href": "#contact"
      },
      {
        "label": "Press",
        "href": "#contact"
      }
    ]
  },
  {
    "title": "Support",
    "links": [
      {
        "label": "Help centre",
        "href": "#faq"
      },
      {
        "label": "Guarantee",
        "href": "#faq"
      },
      {
        "label": "Privacy & data",
        "href": "#faq"
      },
      {
        "label": "Contact",
        "href": "#contact"
      }
    ]
  }
];

export const legalLinks = ["Privacy", "Terms", "Cookies", "Accessibility"];
export const badges = ["SOC 2 Type II", "Pros licensed & insured", "90-day guarantee"];
