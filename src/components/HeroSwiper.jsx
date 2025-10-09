// src/components/HeroSwiper.jsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/1- (1).jpeg";
import img2 from "../assets/1-.jpeg";

// ضيف videoUrl لأي سلايد تحب يظهر له زر تشغيل
const slidesData = [
  { img: img1, key: "slide1", to: "/clinics", videoUrl: "/assets/intro.mp4" },
  { img: img2, key: "slide2", to: "/doctors" },
];

export default function HeroSwiper() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // نافذة الفيديو
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openVideo = useCallback((src) => {
    if (!src) return;
    setVideoSrc(src);
    setVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setVideoOpen(false);
    // تأخير بسيط لإطفاء الـ <video> بعد الانيميشن (لو حبيت تضيف)
    setTimeout(() => setVideoSrc(""), 150);
  }, []);

  // إغلاق بـ Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeVideo();
    if (videoOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen, closeVideo]);

  const slides = useMemo(
    () =>
      slidesData.map((s) => ({
        img: s.img,
        to: s.to,
        videoUrl: s.videoUrl,
        title: t(`hero.${s.key}.title`),
        subtitle: t(`hero.${s.key}.subtitle`),
        cta: t(`hero.${s.key}.cta`),
        play: t("hero.play", "Watch video"),
      })),
    [i18n.language, t]
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

              {/* المحتوى بأسفل السلايد */}
              <div className="absolute inset-0 flex items-end pb-8 sm:pb-12">
                <div className="w-full">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                      className={[
                        "max-w-xl",
                        "text-center",
                        isAr ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto",
                      ].join(" ")}
                    >
                      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-white/90 text-base sm:text-lg">{s.subtitle}</p>

                      <div className={`mt-5 flex flex-col ${isAr ? "md:items-end" : "md:items-start"} items-center gap-3 sm:flex-row sm:gap-4`}>
                        <Link
                          to={s.to}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-white shadow-sm transition focus-visible:outline focus-visible:outline-2"
                          style={{
                            backgroundColor: "var(--color-primary)",
                            borderColor: "var(--color-primary)",
                            outlineColor: "var(--color-primary)",
                          }}
                        >
                          {s.cta}
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
