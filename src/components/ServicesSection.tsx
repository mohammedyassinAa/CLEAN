import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

type Service = (typeof siteConfig.services)[number];

function ServiceCard({ service }: { service: Service }) {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20service%20${encodeURIComponent(service.name)}.`;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Service image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {service.shortDescription}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            Réserver
          </a>
        </div>
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
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: siteConfig.colors.primary }}>
            Nos prestations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Nos Services de Nettoyage
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            Du nettoyage fin de chantier à la dératisation — des prestations professionnelles adaptées à tous vos besoins.
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
            Vous ne savez pas quel service choisir ?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20pour%20choisir%20un%20service%20de%20nettoyage.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            Demandez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
