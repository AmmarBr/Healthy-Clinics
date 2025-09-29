// src/components/AboutCareGrid.jsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function AboutCareGrid({ items: itemsProp }) {
  const { t, i18n } = useTranslation("about");
  const isAr = i18n.language?.startsWith("ar");

  const items = useMemo(() => {
    if (Array.isArray(itemsProp) && itemsProp.length) return itemsProp;

    // جلب من الترجمة
    const raw = t("care.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;

    // Fallback بسيط
    return [
      {
        title: isAr ? "اعتنِ بصحتك" : "Embrace your Health",
        text:
          isAr
            ? "نص تجريبي يوضح اهتمامنا بصحتك مع تقديم رعاية شاملة."
            : "Sample copy about caring for your health with comprehensive care.",
        img: "/assets/about/care-1.jpg",
        alt: isAr ? "عمليات جراحية" : "Surgery team",
      },
      {
        title: isAr ? "الرعاية الأولية" : "Primary Health Care",
        text:
          isAr
            ? "خدمات الرعاية الأولية والمتابعة المنتظمة للحفاظ على صحتك."
            : "Primary care and regular follow-ups to keep you healthy.",
        img: "/assets/about/care-2.jpg",
        alt: isAr ? "فريق الرعاية الأولية" : "Primary care team",
      },
      {
        title: isAr ? "نحو رعاية أفضل" : "Achieving Better Health Care",
        text:
          isAr
            ? "نستخدم أحدث التقنيات للوصول لأفضل النتائج العلاجية."
            : "We use the latest tech to achieve better clinical outcomes.",
        img: "/assets/about/care-3.jpg",
        alt: isAr ? "فحص بصري" : "Ophthalmology check",
      },
    ];
  }, [itemsProp, t, i18n.language, isAr]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-8`}>
          <div className="text-[--color-primary] text-sm font-medium">
            {t("care.kicker", "Professionals")}
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            {t("care.title", "We Care About You")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {items.map((it, idx) => (
            <article key={idx} className="group">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border
                              bg-neutral-50 dark:bg-neutral-900
                              border-black/10 dark:border-white/10">
                <img
                  src={it.img || "/assets/placeholder-wide.jpg"}
                  alt={it.alt || it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {it.title}
              </h3>

              {/* خط صغير باللون الأساسي تحت العنوان */}
              <span className="mt-2 inline-block h-[3px] w-14 rounded bg-[--color-primary]" />

              <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-7">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
