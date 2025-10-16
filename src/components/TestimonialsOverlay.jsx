// src/components/TestimonialsOverlay.jsx
import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, FreeMode } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import bg from '../assets/1-.jpeg'
export default function TestimonialsOverlay() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ✅ نجيب الآراء (حتى لو 3 فقط)
  const items = useMemo(() => {
    const raw = t("testimonials.items", { returnObjects: true, defaultValue: [] });
    return Array.isArray(raw) ? raw : [];
  }, [i18n.language, t]);

  // ✅ نكرر الآراء لو أقل من 4 عشان نظهر صفين دايمًا
  const normalized = items.length < 4 ? [...items, ...items] : items;
  const mid = Math.ceil(normalized.length / 2);
  const firstRow = normalized.slice(0, mid);
  const secondRow = normalized.slice(mid);

  // ✅ pagination refs منفصلة لكل صف
  const pag1Ref = useRef(null);
  const pag2Ref = useRef(null);
  const perViewMax = 3;
  return (
    <section className="relative py-20 sm:py-28">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.35))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} text-white`}>
          <span className="text-sm font-medium text-[color:color-mix(in_oklab,var(--color-primary)_92%,white)]">
            {t("testimonials.kicker", "آراء العملاء")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">
            {t("testimonials.title", "ماذا يقول العملاء")}
          </h2>
          <p className="text-white/80 mt-2 text-base sm:text-lg">
            {t("testimonials.subtitle", "تجارب حقيقية من زوارنا الكرام.")}
          </p>
        </div>

        {/* ===== الصف الأول ===== */}
        <div className="mt-10">
          <Swiper
            key={`row1-${isAr ? "rtl" : "ltr"}`}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y]}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = pag1Ref.current;
            }}
            autoplay={{ delay: 3600, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={600}
            loop={items.length > perViewMax}
            pagination={{ clickable: true, type: "bullets" }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {firstRow.map((it, i) => (
              <SwiperSlide key={`top-${i}`}>
                <TestimonialCard it={it} isAr={isAr} variant="solid" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={pag1Ref} className="mt-4 flex justify-center" />
        </div>

        {/* ===== الصف الثاني ===== */}
        <div className="mt-12">
          <Swiper
            key={`row2-${isAr ? "rtl" : "ltr"}`}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y, FreeMode]}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = pag2Ref.current;
            }}
            autoplay={{ delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={850}
            freeMode={{ enabled: true, momentum: true }}
            loop={items.length > perViewMax}
            pagination={{ clickable: true, type: "progressbar" }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              768: { slidesPerView: 2.1 },
              1280: { slidesPerView: 3.1 },
            }}
          >
            {secondRow.map((it, i) => (
              <SwiperSlide key={`bottom-${i}`}>
                <TestimonialCard it={it} isAr={isAr} variant="outline" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={pag2Ref} className="mt-3" />
        </div>
      </div>
    </section>
  );
}

/* ===== بطاقة الرأي ===== */
function TestimonialCard({ it, isAr, variant = "solid" }) {
  const base =
    "h-full rounded-2xl p-6 sm:p-7 backdrop-blur border shadow-md flex flex-col hover:shadow-lg transition";

  const solid =
    "bg-white/85 dark:bg-gray-900/80 border-black/10 dark:border-white/10";
  const outline =
    "bg-white/70 dark:bg-gray-900/60 border-[1.5px] border-[color:color-mix(in_oklab,var(--color-primary)_35%,white)]";

  return (
    <article className="h-full">
      <div className={`${base} ${variant === "outline" ? outline : solid}`}>
        <div className="flex items-center gap-2 text-[--color-primary] mb-2">
          <Quote size={20} className="shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            تقييم مراجع
          </span>
        </div>

        <p
          className={`mt-3 text-gray-800 dark:text-gray-100 leading-7 flex-1 ${isAr ? "text-right" : "text-left"
            }`}
        >
          {it.text}
        </p>

        <div
          className={`mt-5 pt-4 border-t border-black/10 dark:border-white/10 ${isAr ? "text-right" : "text-left"
            }`}
        >
          <div className="font-semibold text-gray-900 dark:text-white">{it.name}</div>
          <div className="text-sm text-gray-500">{it.role}</div>
        </div>
      </div>
    </article>
  );
}
