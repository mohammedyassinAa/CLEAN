"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

type FAQItem = (typeof siteConfig.faq)[number];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        id={id}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          style={{ backgroundColor: siteConfig.colors.primary }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={id}
          className="px-6 pb-5 bg-white border-t border-slate-100"
        >
          <p className="text-slate-500 text-sm leading-relaxed pt-3">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left – Heading */}
          <div className="lg:sticky lg:top-28">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-5 leading-tight">
              Questions Fréquentes
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              D&apos;autres questions ? Nous sommes là pour vous aider. Envoyez-nous un message et nous vous répondrons rapidement.
            </p>
            {/* <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20services%20de%20nettoyage.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: siteConfig.colors.primary }}
            >
              <WhatsAppIcon />
              Posez votre question sur WhatsApp
            </a> */}
          </div>

          {/* Right – Accordion */}
          <div className="flex flex-col gap-3">
            {siteConfig.faq.map((item, index) => (
              <FAQAccordion key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
