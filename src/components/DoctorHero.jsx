import React from "react";
import { useTranslation } from "react-i18next";

/**
 * DoctorHero
 * Props:
 * - img:     مسار صورة الخلفية
 * - title:   نص العنوان (اختياري، وإلا بياخد من i18n "doctors:hero.title")
 * - subtitle:نص الوصف (اختياري)
 * - ctaText: نص الزر (اختياري)
 * - ctaHref: رابط الزر (افتراضي /contact)
 */
export default function DoctorHero({
  img = "/assets/banners/doctors-hero.jpg",
  title,
  subtitle,
  ctaText,
  ctaHref = "/contact",
}) {
  const { t, i18n } = useTranslation("doctors");
  const isAr = i18n.language?.startsWith("ar");

  return (
    <section className="relative h-[46vh] min-h-[360px] w-full overflow-hidden">
      {/* الخلفية */}
      <img
        src={img}
        alt={t("hero.alt", "Doctors team")}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* التعتيم */}
      <div className="absolute inset-0 bg-black/45" />

      {/* المحتوى */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className={`${isAr ? "text-right" : "text-left"} max-w-2xl`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {title ?? t("hero.title")}
          </h1>
          <p className="mt-4 text-white/90 leading-7">
            {subtitle ?? t("hero.subtitle")}
          </p>

          <div className="mt-6">
            <a
              href={ctaHref}
              className="inline-block rounded-lg border border-primary bg-primary
                         px-5 py-2.5 text-sm font-medium text-white hover:opacity-90
                         focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              {ctaText ?? t("hero.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
