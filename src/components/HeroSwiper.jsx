// src/components/HeroSwiper.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

// صورتين فقط
const slidesData = [
  { img: img1, key: "slide1", to: "/clinics" },
  { img: img2, key: "slide2", to: "/doctors" },
];

export default function HeroSwiper() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  const slides = useMemo(
    () =>
      slidesData.map((s) => ({
        img: s.img,
        to: s.to,
        title: t(`hero.${s.key}.title`),
        subtitle: t(`hero.${s.key}.subtitle`),
        cta: t(`hero.${s.key}.cta`),
      })),
    [i18n.language]
  );

  return (
    <section className="relative">
      <Swiper
        key={isAr ? "rtl" : "ltr"}
        dir={isAr ? "rtl" : "ltr"}
        modules={[Pagination, Autoplay, A11y]}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        className="h-[72vh] sm:h-[75vh] lg:h-[80vh]"
        style={{ ["--swiper-theme-color"]: "var(--color-primary)" }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.title + i}>
            <div className="relative w-full h-full">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* تعتيم خفيف لقراءة أفضل */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.60),rgba(0,0,0,.35))]" />

              {/* المحتوى */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                      className={[
                        "max-w-xl",
                        // موبايل: في النص
                        "text-center",
                        // من md+: يمين للعربي، شمال للإنجليزي
                        isAr ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto",
                      ].join(" ")}
                    >
                      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-white/90 text-base sm:text-lg">{s.subtitle}</p>

                      <Link
                        to={s.to}
                        className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl border text-white shadow-sm transition focus-visible:outline focus-visible:outline-2"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          borderColor: "var(--color-primary)",
                          outlineColor: "var(--color-primary)",
                        }}
                      >
                        {s.cta}
                        {/* السهم ينعكس حسب الاتجاه */}
                        {isAr ? (
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                          </svg>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* إخفاء الأسهم (احتياط) */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next { display: none !important; }
      `}</style>
    </section>
  );
}
