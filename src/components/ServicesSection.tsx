"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

type Service = (typeof siteConfig.services)[number];

// ─── Icons ─────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.956-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.262-1.232l-.305-.183-3.137.897.879-3.054-.2-.315A7.948 7.948 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Service card ────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

function ServiceCard({ service, isSelected, onSelect }: ServiceCardProps) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(service.id);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isSelected}
      aria-controls={`service-detail-${service.id}`}
      onClick={() => onSelect(service.id)}
      onKeyDown={handleKeyDown}
      className={`group bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isSelected
          ? "shadow-xl ring-2"
          : "hover:shadow-xl hover:-translate-y-1"
      }`}
      style={
        isSelected
          ? ({ "--tw-ring-color": siteConfig.colors.primary } as React.CSSProperties)
          : undefined
      }
    >
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
        {/* Selected overlay badge */}
        {isSelected && (
          <div
            className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            Sélectionné
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {service.shortDescription}
        </p>

        {/* Toggle hint */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <span
            className="text-sm font-semibold"
            style={{ color: siteConfig.colors.primary }}
          >
            {isSelected ? "Masquer les détails" : "Voir plus d'infos"}
          </span>
          <ChevronDownIcon open={isSelected} />
        </div>
      </div>
    </div>
  );
}

// ─── Service detail panel ────────────────────────────────────────────────────

function ServiceDetail({ service }: { service: Service }) {
  const phoneNumber = siteConfig.contact.phone;
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;
  const whatsappQuoteUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20le%20service%20${encodeURIComponent(service.name)}.`;
  const whatsappPhotoUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20vous%20envoie%20des%20photos%20pour%20un%20devis%20express%20${encodeURIComponent(service.name)}.`;

  return (
    <section
      id={`service-detail-${service.id}`}
      aria-label={`Détails du service : ${service.name}`}
      className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10 shadow-sm"
    >
      {/* ── Title + intro ── */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
        {service.icon} {service.name}
      </h2>
      <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">{service.intro}</p>

      {/* ── Primary CTAs ── */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href={phoneHref}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: siteConfig.colors.primary }}
        >
          <PhoneIcon />
          Appelez-nous
        </a>
        <a
          href={whatsappQuoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:scale-105"
          style={{
            borderColor: siteConfig.colors.primary,
            color: siteConfig.colors.primary,
          }}
        >
          Obtenez un devis gratuit
        </a>
      </div>

      {/* ── Devis blurb ── */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
            <PhoneIcon /> Appelez-nous
          </p>
          <p className="text-slate-500 text-sm">
            Contactez-nous par téléphone et recevez un devis immédiat.
          </p>
          <a
            href={phoneHref}
            className="mt-2 inline-block text-sm font-semibold underline"
            style={{ color: siteConfig.colors.primary }}
          >
            {phoneNumber}
          </a>
        </div>
        <div className="h-px sm:h-auto sm:w-px bg-slate-200 my-1 sm:my-0 sm:mx-2" aria-hidden="true" />
        <div className="flex-1">
          <p className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
            <WhatsAppIcon /> Devis express WhatsApp
          </p>
          <p className="text-slate-500 text-sm">
            Envoyez vos photos et recevez un devis rapide par WhatsApp.
          </p>
          <a
            href={whatsappPhotoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold underline"
            style={{ color: siteConfig.colors.primary }}
          >
            Envoyer des photos
          </a>
        </div>
      </div>

      {/* ── Benefits ── */}
      <h3 className="text-lg font-bold text-slate-900 mb-3">Points clés du service</h3>
      <ul className="mb-8 grid sm:grid-cols-2 gap-2">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
            <span className="mt-0.5 flex-shrink-0" style={{ color: siteConfig.colors.secondary }} aria-hidden="true">
              ✔
            </span>
            {b}
          </li>
        ))}
      </ul>

      {/* ── What's included ── */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="text-lg font-bold text-slate-900">Ce que comprend notre service</h3>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            Obtenez un devis gratuit
          </a>
        </div>
        <ul className="flex flex-col gap-2">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="mt-0.5 flex-shrink-0" style={{ color: siteConfig.colors.secondary }} aria-hidden="true">
                ✔
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Steps ── */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Comment se déroule l&apos;intervention ?
        </h3>
        <ol className="flex flex-col gap-3">
          {service.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-slate-600 text-sm">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                style={{ backgroundColor: siteConfig.colors.primary }}
                aria-hidden="true"
              >
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <PhoneIcon />
            Appelez-nous
          </a>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: siteConfig.colors.primary,
              color: siteConfig.colors.primary,
            }}
          >
            Obtenez un devis gratuit
          </a>
        </div>
      </div>

      {/* ── Zones ── */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Zones d&apos;intervention
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.zonesText}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <PhoneIcon />
            Appelez-nous
          </a>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: siteConfig.colors.primary,
              color: siteConfig.colors.primary,
            }}
          >
            Obtenez un devis gratuit
          </a>
        </div>
      </div>

      {/* ── Why AlphaClean ── */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          Pourquoi choisir AlphaClean&nbsp;?
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {service.whyUs.map((reason) => (
            <li key={reason} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="mt-0.5 flex-shrink-0" style={{ color: siteConfig.colors.secondary }} aria-hidden="true">
                ✔️
              </span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedService = siteConfig.services.find((s) => s.id === selectedId) ?? null;

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  // Scroll detail panel into view when it opens
  useEffect(() => {
    if (selectedId && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedId]);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Liste des services"
        >
          {siteConfig.services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard
                service={service}
                isSelected={selectedId === service.id}
                onSelect={handleSelect}
              />
            </div>
          ))}
        </div>

        {/* Expanded detail panel */}
        {selectedService && (
          <div ref={detailRef}>
            <ServiceDetail service={selectedService} />
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Vous ne savez pas quel service choisir ?</p>
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
