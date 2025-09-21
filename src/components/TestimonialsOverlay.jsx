// src/components/TestimonialsOverlay.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import fallbackBg from "../assets/4.jpg";

export default function TestimonialsOverlay({ bg = fallbackBg }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // احصل على المصفوفة مع فوولباك آمن
  const items = useMemo(() => {
    const raw = t("testimonials.items", { returnObjects: true, defaultValue: [] });
    return Array.isArray(raw) ? raw : [];
  }, [i18n.language, t]);

  const canLoop = items.length > 3;

  return (
    <section className="relative py-12 sm:py-16">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.55),rgba(0,0,0,.35))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} text-white`}>
          <span className="text-sm font-medium text-[color:color-mix(in_oklab,var(--color-primary)_92%,white)]">
            {t("testimonials.kicker", "آراء العملاء")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">{t("testimonials.title", "ماذا يقول مرضانا")}</h2>
          <p className="text-white/80 mt-2">{t("testimonials.subtitle", "تجارب حقيقية من زوارنا ومرضانا.")}</p>
        </div>

        {/* السلايدر */}
        <div className="mt-6 sm:mt-10">
          <Swiper
            key={isAr ? "rtl" : "ltr"}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y]}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={canLoop}
            rewind={!canLoop}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{ 0:{slidesPerView:1}, 768:{slidesPerView:2}, 1280:{slidesPerView:3} }}
          >
            {items.map((it, i) => (
              <SwiperSlide key={i}>
                <article className="h-full">
                  <div className="h-full rounded-2xl p-5 sm:p-6 bg-white/85 dark:bg-gray-900/80 backdrop-blur border border-black/10 dark:border-white/10 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 text-[--color-primary]">
                      <Quote size={18} className="shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        {t("testimonials.quote", "تقييم مراجع")}
                      </span>
                    </div>

                    <p className={`mt-3 text-gray-800 dark:text-gray-100 leading-7 ${isAr ? "text-right" : "text-left"}`}>
                      {it.text}
                    </p>

                    <div className={`mt-5 pt-4 border-t border-black/10 dark:border-white/10 ${isAr ? "text-right" : "text-left"}`}>
                      <div className="font-semibold text-gray-900 dark:text-white">{it.name}</div>
                      <div className="text-sm text-gray-500">{it.role}</div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
