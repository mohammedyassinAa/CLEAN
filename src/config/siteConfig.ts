/**
 * ============================================================
 * SITE CONFIGURATION FILE
 * ============================================================
 * Edit this file to customize all branding, contact details,
 * services, pricing, and content for the cleaning business.
 * ============================================================
 */

export const siteConfig = {
  // ----------------------------------------------------------
  // TODO: Replace with the client's actual business name
  // ----------------------------------------------------------
  businessName: "SparkleClean Pro",

  // ----------------------------------------------------------
  // TODO: Replace with the client's actual tagline
  // ----------------------------------------------------------
  tagline: "Professional Cleaning Services",

  // ----------------------------------------------------------
  // TODO: Replace with the path to the client's logo file.
  // Place the logo in /public/images/logo.png (or .svg).
  // ----------------------------------------------------------
  logoUrl: "/images/logo.png",
  logoAlt: "SparkleClean Pro logo",

  // ----------------------------------------------------------
  // Brand colors (used throughout the site via CSS variables).
  // TODO: Replace with client's brand colors.
  // ----------------------------------------------------------
  colors: {
    primary: "#0ea5e9",      // sky-500 – main accent color
    primaryDark: "#0284c7",  // sky-600 – hover / darker variant
    secondary: "#10b981",    // emerald-500 – secondary accent
    dark: "#0f172a",         // slate-900 – headings / dark text
    light: "#f0f9ff",        // sky-50  – light section backgrounds
  },

  // ----------------------------------------------------------
  // Contact & Location
  // TODO: Replace all values below with real client data.
  // ----------------------------------------------------------
  contact: {
    // Full international format, e.g. +212612345678
    whatsapp: "+212600000000",
    // Label shown on WhatsApp buttons
    whatsappLabel: "Chat on WhatsApp",
    phone: "+212600000000",
    email: "contact@sparkleclean.ma",
    // Physical address shown in footer & contact section
    address: "123 Boulevard Hassan II, Casablanca, Morocco",
    city: "Casablanca",
    // Regions / cities where the service is available
    serviceAreas: ["Casablanca", "Rabat", "Mohammedia", "Salé"],
    workingHours: "Monday – Saturday, 8:00 – 20:00",
  },

  // ----------------------------------------------------------
  // Social media links
  // TODO: Replace "#" with real profile URLs.
  // ----------------------------------------------------------
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },

  // ----------------------------------------------------------
  // SEO / Meta
  // TODO: Replace with real meta description and keywords.
  // ----------------------------------------------------------
  seo: {
    title: "SparkleClean Pro – Professional Cleaning Services in Casablanca",
    description:
      "SparkleClean Pro offers professional residential and commercial cleaning services in Casablanca and surrounding areas. Request a free quote today.",
    keywords:
      "cleaning services, house cleaning, office cleaning, Casablanca, Morocco",
    // Language / locale for the site (e.g. "en", "fr", "ar")
    // TODO: Update to match the client's primary language (e.g. "fr" for French)
    lang: "en",
    // Open Graph locale (e.g. "en_US", "fr_FR", "ar_MA")
    // TODO: Update to match the client's target market
    ogLocale: "en_US",
  },

  // ----------------------------------------------------------
  // Hero section
  // TODO: Update headline, subheadline, and CTA labels.
  // ----------------------------------------------------------
  hero: {
    headline: "Spotless Spaces, Happy Places",
    subheadline:
      "Professional cleaning services for homes and businesses in Casablanca and surrounding areas. Trusted by hundreds of satisfied clients.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    // TODO: Replace with a real hero image in /public/images/hero.jpg
    backgroundImage: "/images/hero.jpg",
  },

  // ----------------------------------------------------------
  // Services list
  // TODO: Replace names, descriptions, and prices with real data.
  // Each service icon uses an emoji for now – replace or extend
  // with an actual icon library if preferred.
  // ----------------------------------------------------------
  services: [
    {
      id: "residential",
      icon: "🏠",
      name: "Residential Cleaning",
      shortDescription:
        "Thorough cleaning of apartments and villas. We handle every room so you can relax.",
      basePrice: "From 350 MAD / visit",
      period: "one-time or recurring",
    },
    {
      id: "office",
      icon: "🏢",
      name: "Office & Commercial Cleaning",
      shortDescription:
        "Keep your workplace hygienic and professional. Flexible schedules to avoid disrupting your team.",
      basePrice: "From 500 MAD / visit",
      period: "daily, weekly, or monthly",
    },
    {
      id: "deep-clean",
      icon: "✨",
      name: "Deep Cleaning",
      shortDescription:
        "Intensive top-to-bottom clean for move-ins, move-outs, or seasonal refreshes.",
      basePrice: "From 800 MAD / session",
      period: "one-time",
    },
    {
      id: "post-construction",
      icon: "🏗️",
      name: "Post-Construction Cleaning",
      shortDescription:
        "Eliminate dust, debris, and residue left after renovation or construction work.",
      basePrice: "From 1 200 MAD / session",
      period: "one-time",
    },
    {
      id: "carpet-sofa",
      icon: "🛋️",
      name: "Carpet & Upholstery Cleaning",
      shortDescription:
        "Deep steam-cleaning for carpets, rugs, sofas, and mattresses.",
      basePrice: "From 150 MAD / item",
      period: "one-time",
    },
    {
      id: "disinfection",
      icon: "🧴",
      name: "Disinfection & Sanitization",
      shortDescription:
        "Hospital-grade disinfection for homes, offices, and clinics using certified products.",
      basePrice: "From 600 MAD / session",
      period: "one-time or recurring",
    },
  ],

  // ----------------------------------------------------------
  // Pricing packages
  // TODO: Adjust package names, features, and prices.
  // ----------------------------------------------------------
  packages: [
    {
      id: "basic",
      name: "Starter",
      description: "Ideal for small apartments or occasional cleaning needs.",
      price: "350 MAD",
      period: "per visit",
      frequency: "one-time",
      features: [
        "Up to 80 m²",
        "Kitchen & bathrooms",
        "Dusting & vacuuming",
        "Floor mopping",
        "Eco-friendly products",
      ],
      highlighted: false,
      cta: "Book Now",
    },
    {
      id: "standard",
      name: "Weekly Plan",
      description: "Perfect for busy families or small offices.",
      price: "1 200 MAD",
      period: "per month",
      frequency: "weekly (4 visits)",
      features: [
        "Up to 150 m²",
        "All rooms included",
        "Kitchen & bathrooms",
        "Window cleaning (interior)",
        "Eco-friendly products",
        "Dedicated cleaning team",
      ],
      highlighted: true,
      cta: "Get Started",
    },
    {
      id: "premium",
      name: "Monthly Contract",
      description: "Best value for offices and large residences.",
      price: "2 500 MAD",
      period: "per month",
      frequency: "3 visits/week",
      features: [
        "Unlimited area",
        "All services included",
        "Deep cleaning once a month",
        "Carpet & upholstery cleaning",
        "Priority scheduling",
        "Dedicated account manager",
        "Satisfaction guarantee",
      ],
      highlighted: false,
      cta: "Contact Us",
    },
  ],

  // ----------------------------------------------------------
  // About / Why Choose Us section
  // TODO: Replace with real company story and key benefits.
  // ----------------------------------------------------------
  about: {
    headline: "Why Thousands Trust SparkleClean Pro",
    description:
      "Founded in Casablanca, we have been delivering exceptional cleaning services since 2018. Our team of trained professionals uses eco-friendly products and modern equipment to ensure every space shines. We believe in transparent pricing, reliable scheduling, and a 100 % satisfaction guarantee.",
    // TODO: Replace placeholder image path with actual photo
    image: "/images/about.jpg",
    imageAlt: "SparkleClean Pro team cleaning a modern office",
    stats: [
      { value: "500+", label: "Happy Clients" },
      { value: "5 000+", label: "Cleanings Done" },
      { value: "6+", label: "Years of Experience" },
      { value: "100%", label: "Satisfaction Rate" },
    ],
    benefits: [
      {
        icon: "🌿",
        title: "Eco-Friendly Products",
        description: "We use certified, environmentally safe cleaning products.",
      },
      {
        icon: "🛡️",
        title: "Insured & Background-Checked",
        description: "All our staff are fully insured and thoroughly vetted.",
      },
      {
        icon: "⏰",
        title: "On-Time, Every Time",
        description:
          "We respect your schedule and guarantee punctual arrivals.",
      },
      {
        icon: "💰",
        title: "Transparent Pricing",
        description: "No hidden fees. The price we quote is the price you pay.",
      },
    ],
  },

  // ----------------------------------------------------------
  // Testimonials
  // TODO: Replace with real client testimonials. Get written
  // permission from clients before publishing their names/photos.
  // ----------------------------------------------------------
  testimonials: [
    {
      id: 1,
      name: "Fatima Z.",
      location: "Casablanca",
      rating: 5,
      text: "Absolutely wonderful service! My apartment has never looked so clean. The team was professional, friendly, and finished ahead of schedule.",
      // TODO: Replace with real client photo or remove if not available
      avatar: null,
    },
    {
      id: 2,
      name: "Karim M.",
      location: "Mohammedia",
      rating: 5,
      text: "We use SparkleClean Pro for our office every week. Reliable, thorough, and competitively priced. Highly recommended!",
      avatar: null,
    },
    {
      id: 3,
      name: "Nadia B.",
      location: "Casablanca",
      rating: 5,
      text: "The post-construction cleaning was exceptional. They removed every trace of dust and left the apartment spotless. Will definitely hire again.",
      avatar: null,
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // TODO: Update questions and answers with real client info.
  // ----------------------------------------------------------
  faq: [
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve Casablanca, Rabat, Mohammedia, and Salé. Contact us to check availability in your specific area.",
    },
    {
      question: "How do I book a cleaning?",
      answer:
        "Simply send us a WhatsApp message or fill out the contact form on this page. We will get back to you within a few hours to confirm your appointment.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use eco-friendly, professionally certified cleaning products that are safe for children, pets, and the environment.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "You don't have to be present, but you are welcome to stay. Many clients provide a spare key or door code after the first visit.",
    },
    {
      question: "How is the price calculated?",
      answer:
        "Pricing depends on the type of service, the size of the space, and the frequency. We provide a free, no-obligation quote before any work begins.",
    },
    {
      question: "What if I am not satisfied with the cleaning?",
      answer:
        "Your satisfaction is our priority. If you are not happy with any aspect of the service, contact us within 24 hours and we will return to fix it at no extra charge.",
    },
    {
      question: "Do you bring your own equipment and supplies?",
      answer:
        "Yes, our team arrives fully equipped with all tools and cleaning products needed. You don't need to provide anything.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule at no cost if you notify us at least 24 hours in advance.",
    },
  ],

  // ----------------------------------------------------------
  // Contact form fields configuration
  // ----------------------------------------------------------
  contactForm: {
    headline: "Request a Free Quote",
    subheadline:
      "Fill in your details and we will get back to you within a few hours.",
    fields: {
      name: "Full Name",
      phone: "Phone / WhatsApp",
      email: "Email Address",
      city: "City / Area",
      service: "Type of Service",
      date: "Preferred Date",
      message: "Additional Details (optional)",
    },
    submitLabel: "Send Request",
    successMessage:
      "Thank you! We have received your request and will contact you shortly.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
