import { siteConfig } from "@/config/siteConfig";

type Package = (typeof siteConfig.packages)[number];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingCard({ pkg }: { pkg: Package }) {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20plan.`;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        pkg.highlighted
          ? "text-white shadow-2xl scale-105"
          : "bg-white text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1"
      }`}
      style={
        pkg.highlighted
          ? {
              background: `linear-gradient(135deg, ${siteConfig.colors.primaryDark} 0%, ${siteConfig.colors.primary} 100%)`,
            }
          : {}
      }
    >
      {/* Popular badge */}
      {pkg.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
          ⭐ Most Popular
        </div>
      )}

      {/* Package name */}
      <h3
        className={`text-xl font-bold mb-1 ${
          pkg.highlighted ? "text-white" : "text-slate-900"
        }`}
      >
        {pkg.name}
      </h3>

      <p
        className={`text-sm mb-6 ${
          pkg.highlighted ? "text-white/80" : "text-slate-500"
        }`}
      >
        {pkg.description}
      </p>

      {/* Price */}
      <div className="mb-2">
        <span className={`text-4xl font-extrabold ${pkg.highlighted ? "text-white" : "text-slate-900"}`}>
          {pkg.price}
        </span>
        <span className={`ml-1 text-sm ${pkg.highlighted ? "text-white/75" : "text-slate-400"}`}>
          / {pkg.period}
        </span>
      </div>
      <div
        className={`text-xs mb-8 font-medium ${
          pkg.highlighted ? "text-white/70" : "text-slate-400"
        }`}
      >
        {pkg.frequency}
      </div>

      {/* Feature list */}
      <ul className="flex-1 space-y-3 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <span
              className={`${
                pkg.highlighted ? "text-white" : ""
              }`}
              style={!pkg.highlighted ? { color: siteConfig.colors.secondary } : {}}
            >
              <CheckIcon />
            </span>
            <span className={pkg.highlighted ? "text-white/90" : "text-slate-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={pkg.highlighted ? whatsappUrl : "#contact"}
        target={pkg.highlighted ? "_blank" : undefined}
        rel={pkg.highlighted ? "noopener noreferrer" : undefined}
        className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
          pkg.highlighted
            ? "bg-white hover:bg-slate-50"
            : "text-white hover:opacity-90"
        }`}
        style={
          pkg.highlighted
            ? { color: siteConfig.colors.primaryDark }
            : { backgroundColor: siteConfig.colors.primary }
        }
      >
        {pkg.cta}
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20"
      style={{ backgroundColor: siteConfig.colors.light }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Plans & Packages
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            Choose the plan that fits your needs. All plans include eco-friendly
            products and our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {siteConfig.packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          * Prices are indicative and may vary based on space size and specific requirements.{" "}
          <a href="#contact" className="underline" style={{ color: siteConfig.colors.primary }}>
            Request a custom quote.
          </a>
        </p>
      </div>
    </section>
  );
}
