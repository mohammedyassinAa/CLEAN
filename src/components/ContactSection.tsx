"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/siteConfig";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  date: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  date: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");

  const buildWhatsAppMessage = (f: FormState) =>
    [
      `Bonjour, je souhaite demander un devis pour un service de nettoyage :`,
      `Nom : ${f.name}`,
      `Téléphone : ${f.phone}`,
      f.email ? `Email : ${f.email}` : "",
      `Ville : ${f.city}`,
      f.service ? `Service : ${f.service}` : "",
      f.date ? `Date souhaitée : ${f.date}` : "",
      f.message ? `Détails : ${f.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(buildWhatsAppMessage(form));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: siteConfig.colors.light }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left – Info */}
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              Nous Contacter
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-5 leading-tight">
              {siteConfig.contactForm.headline}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {siteConfig.contactForm.subheadline}
            </p>

            <div className="flex flex-col gap-4">
              <ContactDetail
                icon="📱"
                label="WhatsApp"
                value={siteConfig.contact.whatsapp}
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
              />
              <ContactDetail
                icon="📞"
                label="Téléphone"
                value={siteConfig.contact.phone}
                href={`tel:${siteConfig.contact.phone}`}
              />
              <ContactDetail
                icon="📧"
                label="Email"
                value={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
              />
              <ContactDetail
                icon="📍"
                label="Adresse"
                value={siteConfig.contact.address}
              />
              <ContactDetail
                icon="🕐"
                label="Horaires"
                value={siteConfig.contact.workingHours}
              />
            </div>

            {/* Direct WhatsApp CTA */}
            {/* <a
              href={`https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20de%20nettoyage.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon />
              Chat sur WhatsApp
            </a> */}
          </div>

          {/* Right – Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-slate-500">{siteConfig.contactForm.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label={siteConfig.contactForm.fields.name}
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                  />
                  <FormInput
                    label={siteConfig.contactForm.fields.phone}
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+212 6 xx xx xx xx"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label={siteConfig.contactForm.fields.email}
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  <FormInput
                    label={siteConfig.contactForm.fields.city}
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="ex. Casablanca"
                  />
                </div>

                {/* Service selector */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">
                    {siteConfig.contactForm.fields.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un service…</option>
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <FormInput
                  label={siteConfig.contactForm.fields.date}
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    {siteConfig.contactForm.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez vos besoins…"
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-full font-bold text-white text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-3"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  <WhatsAppIcon />
                  {siteConfig.contactForm.submitLabel}
                </button>

                <p className="text-center text-xs text-slate-400">
                  En soumettant ce formulaire, WhatsApp s&apos;ouvrira avec vos informations pré-remplies.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {props.required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        {...props}
        className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:border-transparent"
      />
    </div>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-base"
        style={{ backgroundColor: `${siteConfig.colors.primary}15` }}
      >
        <span role="img" aria-label={label}>{icon}</span>
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</div>
        {href ? (
          <a href={href} className="text-sm text-slate-700 font-medium hover:underline" style={{ color: siteConfig.colors.primaryDark }}>
            {value}
          </a>
        ) : (
          <div className="text-sm text-slate-700 font-medium">{value}</div>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
