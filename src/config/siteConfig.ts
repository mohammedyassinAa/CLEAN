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
    badge: "Joud clean",
    headline: "Nettoyage professionnel",
    subheadline:
      "nous intervenons avec rigueur, précision et des protocoles validés pour un espace parfaitement propre et sain",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nos services",
    backgroundImage: "/logo.png",
  },

  // ----------------------------------------------------------
  // Services list
  // ----------------------------------------------------------
  services: [
    {
      id: "canape-matelas",
      icon: "🛋️",
      image: "/nonettoyagecanapeetmatelas.jpg",
      name: "Nettoyage canapés et matelas",
      shortDescription:
        "Nettoyage vapeur professionnel de vos canapés et matelas avec désinfection complète, élimination des acariens et séchage rapide — résultat garanti à 100 %.",
      basePrice: "Sur devis",
      period: "ponctuel",
      intro:
        "Notre équipe spécialisée prend en charge le nettoyage professionnel de vos canapés et matelas grâce à une technologie vapeur haute pression. Nous éliminons en profondeur les allergènes, les acariens et les taches tenaces pour vous offrir un résultat impeccable et un séchage maîtrisé.",
      benefits: [
        "Traitement vapeur haute pression pénétrant en profondeur dans les fibres",
        "Élimination efficace des taches, mauvaises odeurs et allergènes",
        "Désinfection complète contre les acariens et bactéries",
        "Séchage maîtrisé permettant une utilisation rapide après l'intervention",
        "Équipe ponctuelle, discrète et rigoureuse",
        "Service disponible à Casablanca, Rabat, Mohammedia, Témara et environs",
      ],
      included: [
        "Inspection préalable de l'état de vos meubles",
        "Prétraitement ciblé des taches résistantes",
        "Nettoyage vapeur en profondeur du canapé et du matelas",
        "Désodorisation et désinfection complète",
        "Contrôle final de la qualité avec le client",
      ],
      steps: [
        "Vous nous contactez par téléphone ou via WhatsApp",
        "Nous évaluons votre besoin et vous adressons un devis gratuit",
        "Notre équipe intervient rapidement à votre domicile",
        "Vos canapés et matelas sont nettoyés, désinfectés et prêts à l'usage après séchage",
      ],
      zonesText:
        "AlphaClean intervient rapidement à Casablanca, Rabat, Mohammedia, Témara et leurs environs, au service des particuliers comme des professionnels (hôtels, résidences, bureaux).",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
    },
    {
      id: "fin-de-chantier",
      icon: "🏗️",
      image: "/nettoyagedechantier.jpg",
      name: "Nettoyage fin de chantier",
      shortDescription:
        "Nettoyage complet après travaux : élimination des poussières, résidus de plâtre et débris pour rendre vos locaux impeccables et prêts à être occupés.",
      basePrice: "Sur devis",
      period: "ponctuel",
      intro:
        "Après des travaux de rénovation ou de construction, AlphaClean assure un nettoyage complet et minutieux de vos locaux. Nous évacuons les poussières, éliminons les résidus de plâtre, de peinture et les débris pour vous restituer un espace propre, sain et prêt à être habité ou exploité.",
      benefits: [
        "Élimination totale des poussières de plâtre, ciment et gravats",
        "Dégraissage des surfaces peintes et nettoyage des menuiseries",
        "Nettoyage des vitres, carrelages et sanitaires post-travaux",
        "Aspiration et lavage des sols de toutes surfaces",
        "Intervention rapide pour respecter vos délais de livraison",
        "Équipe expérimentée et équipée de matériel adapté",
      ],
      included: [
        "Dépoussiérage de toutes les surfaces (murs, plafonds, rebords)",
        "Nettoyage des vitres et menuiseries intérieures et extérieures",
        "Lavage des sols, carrelages et parquets",
        "Nettoyage des sanitaires et de la cuisine",
        "Évacuation des déchets légers restants",
      ],
      steps: [
        "Vous nous décrivez l'ampleur des travaux réalisés",
        "Nous évaluons le chantier et vous proposons un devis gratuit",
        "Notre équipe intervient selon le calendrier convenu",
        "Livraison d'un espace propre, sain et prêt à l'occupation",
      ],
      zonesText:
        "AlphaClean intervient sur les chantiers à Casablanca, Rabat, Mohammedia, Témara et les zones avoisinantes, pour les particuliers comme pour les promoteurs immobiliers et les entreprises.",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
    },
    {
      id: "vitres-facades",
      icon: "🪟",
      image: "/nettoyagevitreetfacades.jpg",
      name: "Nettoyage vitres et façades",
      shortDescription:
        "Nettoyage professionnel de vitres, baies vitrées et façades d'immeubles pour une brillance durable et une façade valorisée.",
      basePrice: "Sur devis",
      period: "ponctuel ou régulier",
      intro:
        "AlphaClean propose un service professionnel de nettoyage de vitres, baies vitrées et façades d'immeubles. Nos techniciens utilisent des équipements adaptés aux grandes hauteurs pour garantir une transparence parfaite et une façade lumineuse qui valorise votre bâtiment.",
      benefits: [
        "Nettoyage de vitres et baies vitrées de toutes dimensions",
        "Traitement des façades : carrelage, peinture, verre et pierre",
        "Équipement adapté aux travaux en hauteur en toute sécurité",
        "Résultat brillant et durable sans traces ni résidus",
        "Intervention soigneuse et rapide",
        "Service disponible pour particuliers et copropriétés",
      ],
      included: [
        "Nettoyage des vitres intérieures et extérieures",
        "Dégraissage des cadres et jointures de fenêtres",
        "Nettoyage et traitement des façades de bâtiments",
        "Élimination des traces de pollution, de calcaire et de mousse",
        "Contrôle final de satisfaction avec le client",
      ],
      steps: [
        "Vous nous contactez pour décrire vos besoins",
        "Nous étudions votre bâtiment et vous envoyons un devis sur mesure",
        "Nos techniciens interviennent dans les délais convenus",
        "Vos vitres et façades retrouvent leur éclat d'origine",
      ],
      zonesText:
        "Nous intervenons à Casablanca, Rabat, Mohammedia, Témara et les villes voisines, pour les résidences privées, les immeubles de bureaux et les établissements hôteliers.",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
    },
    {
      id: "femmes-de-menage",
      icon: "🧹",
      image: "/femmedemenage.jpg",
      name: "Femmes de ménage",
      shortDescription:
        "Agents de ménage qualifiées pour l'entretien régulier ou ponctuel de votre domicile ou bureau. Disponibles 7j/7, discrètes et de confiance.",
      basePrice: "À partir de 350 MAD / passage",
      period: "ponctuel ou régulier",
      intro:
        "AlphaClean met à votre disposition des agentes de ménage qualifiées et de confiance pour l'entretien régulier ou ponctuel de votre domicile ou de vos locaux professionnels. Disponibles 7j/7, elles s'adaptent à votre emploi du temps et à vos exigences particulières.",
      benefits: [
        "Agentes sélectionnées, formées et de confiance",
        "Disponibilité 7j/7 selon vos horaires",
        "Entretien régulier ou intervention ponctuelle selon vos besoins",
        "Discrétion absolue et respect de votre espace",
        "Possibilité de confier une clé pour les interventions en votre absence",
        "Service adapté aux domiciles, bureaux et petits commerces",
      ],
      included: [
        "Dépoussiérage et aspiration de toutes les pièces",
        "Nettoyage des surfaces, meubles et équipements",
        "Entretien de la cuisine et des sanitaires",
        "Lavage et lustrage des sols",
        "Rangement léger selon vos consignes",
      ],
      steps: [
        "Vous nous faites part de vos besoins et de la fréquence souhaitée",
        "Nous vous proposons une agente disponible selon votre planning",
        "Première intervention avec présentation de l'agente dédiée",
        "Entretien régulier assuré avec le même interlocuteur attitré",
      ],
      zonesText:
        "Nos agentes de ménage interviennent à Casablanca, Rabat, Mohammedia, Témara et les quartiers environnants, pour les particuliers et les professionnels.",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
    },
    {
      id: "tapis-moquettes",
      icon: "🧶",
      image: "/nettoyagetapisetmpoquette.jpg",
      name: "Nettoyage tapis et moquettes",
      shortDescription:
        "Nettoyage vapeur en profondeur pour tapis, moquettes et revêtements de sol textiles — couleurs ravivées, fibres protégées.",
      basePrice: "À partir de 150 MAD / pièce",
      period: "ponctuel",
      intro:
        "AlphaClean prend en charge le nettoyage vapeur de vos tapis, moquettes et revêtements textiles. Notre procédé en profondeur élimine les salissures incrustées, les taches persistantes et les bactéries pour redonner vie à vos sols tout en préservant les fibres.",
      benefits: [
        "Nettoyage vapeur haute performance pour tapis et moquettes de toutes tailles",
        "Élimination des taches, odeurs tenaces et micro-organismes",
        "Préservation et ravivage des couleurs et des fibres",
        "Séchage optimisé pour une utilisation rapide après nettoyage",
        "Traitement antiparasitaire disponible en option",
        "Service à domicile ou en atelier selon vos préférences",
      ],
      included: [
        "Inspection et évaluation de l'état de vos revêtements",
        "Prétraitement ciblé des taches résistantes",
        "Nettoyage vapeur en profondeur",
        "Rinçage et extraction de l'humidité",
        "Désodorisation et contrôle final de qualité",
      ],
      steps: [
        "Vous nous contactez avec une description de vos tapis et moquettes",
        "Nous établissons un devis gratuit adapté à vos besoins",
        "Intervention à votre domicile aux horaires convenus",
        "Vos revêtements retrouvent leur aspect d'origine, propres et sains",
      ],
      zonesText:
        "AlphaClean intervient pour le nettoyage de tapis et moquettes à Casablanca, Rabat, Mohammedia, Témara et les régions avoisinantes, chez les particuliers et les professionnels.",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
    },
    {
      id: "deratisation",
      icon: "🦟",
      image: "/deratisation.jfif",
      name: "Dératisation, désinsectisation et antiparasites",
      shortDescription:
        "Traitement professionnel contre les nuisibles : rats, insectes et parasites, avec des produits homologués et sécurisés.",
      basePrice: "Sur devis",
      period: "ponctuel ou régulier",
      intro:
        "AlphaClean propose un traitement professionnel et sécurisé contre tous les nuisibles : rats, souris, cafards, punaises, moustiques et autres parasites. Nous utilisons des produits homologués efficaces et sans danger pour les occupants et l'environnement.",
      benefits: [
        "Identification précise des foyers d'infestation avant traitement",
        "Produits homologués et sécurisés pour les personnes et animaux domestiques",
        "Traitement ciblé et discret par des techniciens certifiés",
        "Efficacité rapide avec résultats durables",
        "Intervention préventive ou curative selon votre situation",
        "Rapport d'intervention remis après chaque traitement",
      ],
      included: [
        "Diagnostic complet de votre espace",
        "Mise en place de pièges et appâts adaptés",
        "Application de produits désinsectisants et dératisants homologués",
        "Traitement préventif des zones à risque",
        "Rapport d'intervention et recommandations post-traitement",
      ],
      steps: [
        "Vous nous décrivez votre problème de nuisibles",
        "Nous évaluons la situation et vous proposons une solution sur devis",
        "Nos techniciens interviennent discrètement dans les délais convenus",
        "Suivi post-traitement pour garantir l'efficacité de l'intervention",
      ],
      zonesText:
        "AlphaClean assure ses interventions de dératisation et désinsectisation à Casablanca, Rabat, Mohammedia, Témara et alentours, pour les particuliers, entreprises, restaurateurs et établissements de santé.",
      whyUs: [
        "Équipe formée, ponctuelle et professionnelle",
        "Matériel haut de gamme et produits certifiés",
        "Résultats durables et garantis",
        "Devis gratuit et sans engagement",
      ],
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
