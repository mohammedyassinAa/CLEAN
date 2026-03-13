import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image / visual side */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
              <Image
                src="/logo.png"
                alt="Joud clean – logo et identité visuelle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-2xl"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                style={{ backgroundColor: siteConfig.colors.secondary }}
              >
                ✓
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">100% Satisfaction</div>
                <div className="text-xs text-slate-400">Garanti ou nous revenons</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-5 leading-tight">
              {siteConfig.about.headline}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {siteConfig.about.benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg"
                    style={{ backgroundColor: `${siteConfig.colors.primary}15` }}
                  >
                    <span role="img" aria-label={benefit.title}>{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                Demandez un devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
