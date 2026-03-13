/**
 * ============================================================
 * SITE CONFIGURATION FILE – Joud clean
 * ============================================================
 * Edit this file to customize all branding, contact details,
 * services, pricing, and content for the cleaning business.
 * ============================================================
 */

export const siteConfig = {
  // ----------------------------------------------------------
  // Business name
  // ----------------------------------------------------------
  businessName: "Joud clean",

  // ----------------------------------------------------------
  // Tagline
  // ----------------------------------------------------------
  tagline: "Services de nettoyage professionnels",

  // ----------------------------------------------------------
  // Logo: text-based logo rendered in-UI (no image file needed)
  // ----------------------------------------------------------
  logoUrl: "",
  logoAlt: "Joud clean logo",

  // ----------------------------------------------------------
  // Brand colors
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
  // ----------------------------------------------------------
  contact: {
    // Primary WhatsApp number – formatted for display.
    // Used in wa.me links via .replace(/\D/g, '') to strip non-digits.
    whatsapp: "+212 623-306290",
    whatsappLabel: "Contacter sur WhatsApp",
    // Secondary phone number
    phone: "+212 649-033392",
    email: "Paraouafik23@gmail.com",
    address: "Casablanca quartier el inara rue 1 n37",
    city: "Casablanca",
    serviceAreas: ["Casablanca", "Mohammedia", "Salé", "Rabat"],
    workingHours: "7j/7 de 8h à 22h",
  },

  // ----------------------------------------------------------
  // Social media links
  // ----------------------------------------------------------
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/pressing_ouafik",
    tiktok: "#",
    linkedin: "#",
  },

  // ----------------------------------------------------------
  // SEO / Meta
  // ----------------------------------------------------------
  seo: {
    title: "Joud clean – Services de nettoyage professionnels à Casablanca",
    description:
      "Joud clean propose des services de nettoyage résidentiel et commercial professionnels à Casablanca. Pressing, nettoyage en profondeur, désinfection. Contactez-nous 7j/7 de 8h à 22h.",
    keywords:
      "nettoyage, pressing, nettoyage maison, nettoyage bureau, Casablanca, Maroc, Joud clean",
    lang: "fr",
    ogLocale: "fr_FR",
  },

  // ----------------------------------------------------------
  // Hero section
  // ----------------------------------------------------------
  hero: {
    headline: "Un espace propre, une vie sereine",
    subheadline:
      "Services de nettoyage et pressing professionnels à Casablanca. Disponibles 7j/7 de 8h à 22h. Des centaines de clients satisfaits nous font confiance.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nos services",
    backgroundImage: "/logo.png",
  },

  // ----------------------------------------------------------
  // Services list
  // ----------------------------------------------------------
  services: [
    {
      id: "fin-de-chantier",
      icon: "🏗️",
      image: "/services/fin-de-chantier.svg",
      name: "Nettoyage fin de chantier",
      shortDescription:
        "Nettoyage complet après travaux : élimination des poussières, résidus de plâtre et débris pour rendre vos locaux impeccables.",
      basePrice: "Sur devis",
      period: "ponctuel",
    },
    {
      id: "vitres-facades",
      icon: "🪟",
      image: "/services/vitres-facades.svg",
      name: "Nettoyage vitres et facades",
      shortDescription:
        "Nettoyage professionnel de vitres, baies vitrées et façades d'immeubles pour une brillance durable.",
      basePrice: "Sur devis",
      period: "ponctuel ou régulier",
    },
    {
      id: "femmes-de-menage",
      icon: "🧹",
      image: "/services/femmes-de-menage.svg",
      name: "Femmes de ménage",
      shortDescription:
        "Agents de ménage qualifiées pour l'entretien régulier de votre domicile ou bureau. Disponibles 7j/7.",
      basePrice: "À partir de 350 MAD / passage",
      period: "ponctuel ou régulier",
    },
    {
      id: "tapis-moquettes",
      icon: "🛋️",
      image: "/services/tapis-moquettes.svg",
      name: "Nettoyage tapis et moquettes",
      shortDescription:
        "Nettoyage vapeur en profondeur pour tapis, moquettes et revêtements de sol textiles.",
      basePrice: "À partir de 150 MAD / pièce",
      period: "ponctuel",
    },
    {
      id: "deratisation",
      icon: "🦟",
      image: "/services/deratisation.svg",
      name: "Dératisation, désinsectisation et antiparasites",
      shortDescription:
        "Traitement professionnel contre les nuisibles : rats, insectes et parasites, avec des produits homologués.",
      basePrice: "Sur devis",
      period: "ponctuel ou régulier",
    },
  ],

  // ----------------------------------------------------------
  // Pricing packages
  // ----------------------------------------------------------
  packages: [
    {
      id: "basic",
      name: "Essentiel",
      description: "Idéal pour les petits appartements ou les besoins ponctuels.",
      price: "350 MAD",
      period: "par passage",
      frequency: "ponctuel",
      features: [
        "Jusqu'à 80 m²",
        "Cuisine & salles de bain",
        "Dépoussiérage & aspiration",
        "Lavage des sols",
        "Produits écologiques",
      ],
      highlighted: false,
      cta: "Réserver",
    },
    {
      id: "standard",
      name: "Plan Hebdomadaire",
      description: "Parfait pour les familles actives ou les petits bureaux.",
      price: "1 200 MAD",
      period: "par mois",
      frequency: "hebdomadaire (4 passages)",
      features: [
        "Jusqu'à 150 m²",
        "Toutes les pièces incluses",
        "Cuisine & salles de bain",
        "Nettoyage vitres (intérieur)",
        "Produits écologiques",
        "Équipe dédiée",
      ],
      highlighted: true,
      cta: "Commencer",
    },
    {
      id: "premium",
      name: "Contrat Mensuel",
      description: "Meilleur rapport qualité-prix pour bureaux et grandes résidences.",
      price: "2 500 MAD",
      period: "par mois",
      frequency: "3 passages/semaine",
      features: [
        "Surface illimitée",
        "Tous les services inclus",
        "Nettoyage en profondeur mensuel",
        "Nettoyage tapis & canapés",
        "Planification prioritaire",
        "Responsable de compte dédié",
        "Garantie satisfaction",
      ],
      highlighted: false,
      cta: "Nous contacter",
    },
  ],

  // ----------------------------------------------------------
  // About / Why Choose Us section
  // ----------------------------------------------------------
  about: {
    headline: "Pourquoi des centaines de clients nous font confiance",
    description:
      "Joud clean est votre partenaire de confiance pour un intérieur impeccable à Casablanca. Notre équipe de professionnels formés utilise des produits écologiques et un équipement moderne pour garantir un résultat parfait. Disponibles 7j/7 de 8h à 22h, nous nous adaptons à votre emploi du temps.",
    image: "/images/about.jpg",
    imageAlt: "Équipe Joud clean en train de nettoyer un bureau moderne",
    stats: [
      { value: "500+", label: "Clients satisfaits" },
      { value: "5 000+", label: "Nettoyages réalisés" },
      { value: "7j/7", label: "Disponibilité" },
      { value: "100%", label: "Satisfaction garantie" },
    ],
    benefits: [
      {
        icon: "🌿",
        title: "Produits Écologiques",
        description: "Nous utilisons des produits de nettoyage certifiés et respectueux de l'environnement.",
      },
      {
        icon: "🛡️",
        title: "Personnel Vérifié",
        description: "Tout notre personnel est soigneusement sélectionné et formé.",
      },
      {
        icon: "⏰",
        title: "Ponctualité Garantie",
        description:
          "Nous respectons votre emploi du temps et garantissons des arrivées ponctuelles.",
      },
      {
        icon: "💰",
        title: "Tarifs Transparents",
        description: "Aucun frais caché. Le prix annoncé est le prix payé.",
      },
    ],
  },

  // ----------------------------------------------------------
  // Testimonials
  // ----------------------------------------------------------
  testimonials: [
    {
      id: 1,
      name: "Fatima Z.",
      location: "Casablanca",
      rating: 5,
      text: "Service absolument remarquable ! Mon appartement n'a jamais été aussi propre. L'équipe était professionnelle, sympathique et a terminé en avance sur le planning.",
      avatar: null,
    },
    {
      id: 2,
      name: "Karim M.",
      location: "Casablanca",
      rating: 5,
      text: "Nous faisons appel à Joud clean pour notre bureau chaque semaine. Fiables, minutieux et à un tarif compétitif. Vivement recommandé !",
      avatar: null,
    },
    {
      id: 3,
      name: "Nadia B.",
      location: "Casablanca",
      rating: 5,
      text: "Le nettoyage du pressing était exceptionnel. Ils ont rendu mes vêtements impeccables. Je ferai certainement appel à eux de nouveau.",
      avatar: null,
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: [
    {
      question: "Quelles zones desservez-vous ?",
      answer:
        "Nous intervenons principalement à Casablanca (quartier el inara et environs) ainsi que dans les villes proches. Contactez-nous pour vérifier la disponibilité dans votre zone.",
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Envoyez-nous simplement un message WhatsApp ou remplissez le formulaire de contact sur cette page. Nous vous répondons dans les plus brefs délais pour confirmer votre rendez-vous.",
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer:
        "Nous utilisons des produits de nettoyage écologiques et certifiés, sans danger pour les enfants, les animaux et l'environnement.",
    },
    {
      question: "Dois-je être présent(e) pendant le nettoyage ?",
      answer:
        "Votre présence n'est pas obligatoire, mais vous êtes le(la) bienvenu(e) si vous le souhaitez. De nombreux clients nous confient une clé ou un code d'accès après le premier passage.",
    },
    {
      question: "Comment le prix est-il calculé ?",
      answer:
        "Le tarif dépend du type de service, de la superficie et de la fréquence. Nous fournissons un devis gratuit et sans engagement avant toute intervention.",
    },
    {
      question: "Et si je ne suis pas satisfait(e) du nettoyage ?",
      answer:
        "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait(e), contactez-nous dans les 24 heures et nous reviendrons corriger le problème sans frais supplémentaires.",
    },
    {
      question: "Apportez-vous votre propre matériel et produits ?",
      answer:
        "Oui, notre équipe arrive avec tout le matériel et les produits nécessaires. Vous n'avez rien à fournir.",
    },
    {
      question: "Puis-je annuler ou reporter mon rendez-vous ?",
      answer:
        "Oui, vous pouvez annuler ou reporter sans frais en nous prévenant au moins 24 heures à l'avance.",
    },
  ],

  // ----------------------------------------------------------
  // Contact form fields configuration
  // ----------------------------------------------------------
  contactForm: {
    headline: "Demandez un devis gratuit",
    subheadline:
      "Remplissez vos coordonnées et nous vous recontactons dans les plus brefs délais.",
    fields: {
      name: "Nom complet",
      phone: "Téléphone / WhatsApp",
      email: "Adresse e-mail",
      city: "Ville / Quartier",
      service: "Type de service",
      date: "Date souhaitée",
      message: "Informations complémentaires (facultatif)",
    },
    submitLabel: "Envoyer la demande",
    successMessage:
      "Merci ! Nous avons bien reçu votre demande et vous contacterons très prochainement.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
