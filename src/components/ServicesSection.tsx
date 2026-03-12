import { siteConfig } from "@/config/siteConfig";

type Service = (typeof siteConfig.services)[number];

function ServiceCard({ service }: { service: Service }) {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.name)}%20service.`;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col">
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${siteConfig.colors.primary}15` }}
      >
        <span role="img" aria-label={service.name}>{service.icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
        {service.shortDescription}
      </p>

      {/* Pricing info */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <div>
          <span
            className="text-sm font-semibold"
            style={{ color: siteConfig.colors.primaryDark }}
          >
            {service.basePrice}
          </span>
          <span className="text-xs text-slate-400 ml-1">· {service.period}</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: siteConfig.colors.primary }}
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            From regular home cleaning to specialized commercial and deep-cleaning
            services — we have you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">
            Not sure which service is right for you?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=Hello%2C%20I%20need%20help%20choosing%20a%20cleaning%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
