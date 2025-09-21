// src/components/FeatureShowcase.jsx
import React, { useMemo } from "react";
import { Stethoscope, Ambulance, HeartPulse, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FeatureShowcase({ lang }) {
  const { t, i18n } = useTranslation("common");
  // لو مررت lang يدوي (مثلاً "ar"), هنحترمه؛ وإلا هنقرأ من i18n
  const arOverride = typeof lang === "string" ? lang.startsWith("ar") : undefined;
  const isAr = arOverride ?? i18n.language?.startsWith("ar");

  const title = t("features.title");
  const subtitle = t("features.subtitle");

  const features = useMemo(
    () => [
      { Icon: Stethoscope, heading: t("features.treatment"),      text: t("features.treatmentTxt") },
      { Icon: Ambulance,   heading: t("features.emergency"),      text: t("features.emergencyTxt") },
      { Icon: HeartPulse,  heading: t("features.professionals"),  text: t("features.professionalsTxt") },
      { Icon: Users,       heading: t("features.qualified"),      text: t("features.qualifiedTxt") },
    ],
    [i18n.language]
  );

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`${isAr ? "text-right" : "text-left"} max-w-3xl`}>
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold leading-tight text-[--color-primary]">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="group">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:color-mix(in_oklab,var(--color-primary)_12%,transparent)] border border-[color:color-mix(in_oklab,var(--color-primary)_28%,transparent)]">
                  <f.Icon className="text-[--color-primary] [stroke-width:2.25]" size={24} />
                </span>
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {f.heading}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6">
                    {f.text}
                  </p>
                </div>
              </div>
              {/* underline hover accent */}
              <div className="mt-4 h-px bg-gradient-to-r from-[color:color-mix(in_oklab,var(--color-primary)_45%,transparent)] to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
