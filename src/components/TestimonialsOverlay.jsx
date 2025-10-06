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

  // نجيب الآراء
  const items = useMemo(() => {
    const raw = t("testimonials.items", { returnObjects: true, defaultValue: [] });
    return Array.isArray(raw) ? raw : [];
  }, [i18n.language, t]);

  // نقسمهم لصفين (أول 3 + الباقي)
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3, 6);

  return (
    <section className="relative py-20 sm:py-28">
      {/* الخلفية مكبرة */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.35))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} text-white`}>
          <span className="text-sm font-medium text-[color:color-mix(in_oklab,var(--color-primary)_92%,white)]">
            {t("testimonials.kicker", "آراء العملاء")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">{t("testimonials.title", "ماذا يقول العملاء")}</h2>
          <p className="text-white/80 mt-2 text-base sm:text-lg">
            {t("testimonials.subtitle", "تجارب حقيقية من زوارنا  الكرام.")}
          </p>
        </div>

        {/* السطر الأول من الآراء */}
        <div className="mt-10">
          <Swiper
            key={`row1-${isAr ? "rtl" : "ltr"}`}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y]}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={false}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {firstRow.map((it, i) => (
              <SwiperSlide key={`top-${i}`}>
                <TestimonialCard it={it} isAr={isAr} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* السطر الثاني من الآراء */}
        {secondRow.length > 0 && (
          <div className="mt-12">
            <Swiper
              key={`row2-${isAr ? "rtl" : "ltr"}`}
              dir={isAr ? "rtl" : "ltr"}
              modules={[Pagination, Autoplay, A11y]}
              autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop={false}
              pagination={{ clickable: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
            >
              {secondRow.map((it, i) => (
                <SwiperSlide key={`bottom-${i}`}>
                  <TestimonialCard it={it} isAr={isAr} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===== مكون بطاقة الرأي ===== */
function TestimonialCard({ it, isAr }) {
  return (
    <article className="h-full ">
      <div
        className="h-full rounded-2xl p-6 sm:p-7 bg-white/85 dark:bg-gray-900/80 backdrop-blur
                   border border-black/10 dark:border-white/10 shadow-md flex flex-col
                   hover:shadow-lg transition mb-6"
      >
        <div className="flex items-center gap-2 text-[--color-primary] mb-2">
          <Quote size={20} className="shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            تقييم مراجع
          </span>
        </div>

        <p
          className={`mt-3 text-gray-800 dark:text-gray-100 leading-7 flex-1 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {it.text}
        </p>

        <div
          className={`mt-5 pt-4 border-t border-black/10 dark:border-white/10 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          <div className="font-semibold text-gray-900 dark:text-white">{it.name}</div>
          <div className="text-sm text-gray-500">{it.role}</div>
        </div>
      </div>
      <div
        className="h-full rounded-2xl p-6 sm:p-7 bg-white/85 dark:bg-gray-900/80 backdrop-blur
                   border border-black/10 dark:border-white/10 shadow-md flex flex-col
                   hover:shadow-lg transition"
      >
        <div className="flex items-center gap-2 text-[--color-primary] mb-2">
          <Quote size={20} className="shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            تقييم مراجع
          </span>
        </div>

        <p
          className={`mt-3 text-gray-800 dark:text-gray-100 leading-7 flex-1 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {it.text}
        </p>

        <div
          className={`mt-5 pt-4 border-t border-black/10 dark:border-white/10 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          <div className="font-semibold text-gray-900 dark:text-white">{it.name}</div>
          <div className="text-sm text-gray-500">{it.role}</div>
        </div>
      </div>
    </article>
  );
}
