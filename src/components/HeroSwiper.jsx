// src/components/HeroSwiper.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const slidesData = [
  { img: img1, key: "slide1", to: "/clinics" },
  { img: img2, key: "slide2", to: "/doctors" },
  { img: img3, key: "slide3", to: "/contact" },
  { img: img4, key: "slide4", to: "/services" },
  { img: img5, key: "slide5", to: "/about" },
];

export default function HeroSwiper() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ابنِ الشرائح من ملفات الترجمة
  const slides = useMemo(
    () =>
      slidesData.map((s) => ({
        img: s.img,
        to: s.to,
        title: t(`hero.${s.key}.title`),
        subtitle: t(`hero.${s.key}.subtitle`),
        cta: t(`hero.${s.key}.cta`),
      })),
    [i18n.language] // يعيد الحساب لما اللغة تتغير
  );

  return (
    <section className="relative">
      <Swiper
        key={isAr ? "rtl" : "ltr"}            // يجبر الـ Swiper يعيد التهيئة
        dir={isAr ? "rtl" : "ltr"}            // يضبط الاتجاه الحالي
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        navigation
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        className="h-[60vh] sm:h-[70vh] lg:h-[80vh]"
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
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.55),rgba(0,0,0,0.25))]" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`max-w-xl ${isAr ? "text-right" : "text-left"}`}>
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-white/90 text-base sm:text-lg">{s.subtitle}</p>
                    <Link
                      to={s.to}
                      className="inline-block mt-5 px-6 py-3 rounded-xl bg-[--color-primary] text-white hover:opacity-90 transition"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
