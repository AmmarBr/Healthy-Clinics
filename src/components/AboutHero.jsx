// src/components/AboutHero.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import imgpanr from '../assets/1-2.jpg' // غيّر المسار حسب الصورة عندك
export default function AboutHero({
  img = imgpanr,
  title,
  subtitle,
  ctaText,
  ctaHref = "/services",
}) {
  const { t, i18n } = useTranslation("about"); // ✅ نستخدم about بدل common
  const isAr = i18n.language?.startsWith("ar");

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      {/* الخلفية */}
      <img
        src={img}
        alt={t("hero.alt", "About our Clinic")}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* المحتوى */}
      <div className="relative z-10 mx-auto h-full max-w-7xl flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`${isAr ? "text-center " : "text-center"} max-w-2xl text-white`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title ?? t("hero.title", "About our Clinic")}
          </h1>
          <p className="mt-4 leading-relaxed text-white/90">
            {subtitle ?? t("hero.subtitle",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida."
            )}
          </p>

          <div className="mt-6">
            <a
              href={ctaHref}
              className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow-md hover:opacity-90"
            >
              {ctaText ?? t("hero.cta", "View All Departments")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
