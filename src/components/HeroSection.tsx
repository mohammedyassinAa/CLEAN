import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20de%20nettoyage.`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background: nettoyage photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.hero.backgroundImage}
          alt="Nettoyage professionnel Casablanca"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(2,132,199,0.72) 0%, rgba(14,165,233,0.55) 60%, rgba(16,185,129,0.45) 100%)",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl bg-white hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15 blur-3xl bg-white hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
         {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
          {siteConfig.hero.headline}
        </h1>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span>Nettoyage professionnel</span>
        </div>

       

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.hero.subheadline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA – WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ color: siteConfig.colors.primaryDark }}
          >
            <WhatsAppIcon />
            {siteConfig.hero.ctaPrimary}
          </a>

          {/* Secondary CTA – Services */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/70 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/15 hover:border-white"
          >
            {siteConfig.hero.ctaSecondary}
            <ArrowDownIcon />
          </a>
        </div>

      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0 80H1440V40C1200 0 960 80 720 40C480 0 240 80 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
