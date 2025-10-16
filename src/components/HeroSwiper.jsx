// src/components/HeroSwiper.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// صور السلايدر (أضف نسخ webp/avif لو متاحة كحقول اختيارية في slidesData)
import img1 from "../assets/1- (1).jpeg";
import img2 from "../assets/1-.jpeg";

// ===================== بيانات السلايدز =====================
const slidesData = [
  // { img, imgWebp, imgAvif, key, to }
  { img: img1, key: "slide1", to: "/services" },
  { img: img2, key: "slide2", to: "/doctors" },
];

export default function HeroSwiper() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  const hostRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [swp, setSwp] = useState(null);

  // ===================== مراقبة الظهور =====================
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { rootMargin: "200px" }
    );
    if (hostRef.current) io.observe(hostRef.current);
    return () => io.disconnect();
  }, []);

  // ===================== تحميل Swiper ديناميكياً =====================
  useEffect(() => {
    if (!inView || swp) return;
    (async () => {
      await Promise.all([import("swiper/css"), import("swiper/css/pagination")]);
      const [{ Swiper, SwiperSlide }, mods] = await Promise.all([
        import("swiper/react"),
        import("swiper/modules"),
      ]);
      setSwp({
        Swiper,
        SwiperSlide,
        modules: [mods.Pagination, mods.Autoplay, mods.A11y],
      });
    })();
  }, [inView, swp]);

  // ===================== ترجمة السلايدز =====================
  const slides = useMemo(
    () =>
      slidesData.map((s) => ({
        ...s,
        title: t(`hero.${s.key}.title`),
        subtitle: t(`hero.${s.key}.subtitle`),
        cta: t(`hero.${s.key}.cta`),
      })),
    [i18n.language, t]
  );

  // ===================== Autoplay/Reduced Motion =====================
  const prefersReduced = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const autoplay = useMemo(
    () =>
      prefersReduced
        ? false
        : {
            delay: window.matchMedia("(max-width: 640px)").matches ? 5200 : 4200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
    [prefersReduced]
  );

  // أوقف/شغّل autoplay عند تبدّل رؤية الصفحة
  useEffect(() => {
    if (!swp) return;
    const onVis = () => {
      const api = swp?.autoplay;
      if (!api) return;
      document.hidden ? api.stop?.() : api.start?.();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [swp]);

  // ===================== Render =====================
  return (
    <section
      ref={hostRef}
      className="relative z-0"
      aria-label={t("hero.sectionLabel", "Hero slider")}
    >
      {/* Fallback خفيف قبل تحميل Swiper */}
      {!swp && (
        <div className="h-[72vh] sm:h-[75vh] lg:h-[80vh] w-full bg-neutral-900/60 grid place-items-end relative z-0">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10 relative z-10">
            <div className="animate-pulse space-y-3 max-w-xl">
              <div className="h-8 rounded bg-white/20" />
              <div className="h-4 rounded bg-white/15 w-3/4" />
              <div className="h-10 rounded bg-[--color-primary]/80 w-48" />
            </div>
          </div>
        </div>
      )}

      {/* Swiper بعد التحميل */}
      {swp && (
        <swp.Swiper
          key={isAr ? "rtl" : "ltr"}
          dir={isAr ? "rtl" : "ltr"}
          modules={swp.modules}
          autoplay={autoplay}
          loop
          pagination={{ clickable: true }}
          a11y={{ enabled: true }}
          touchMoveStopPropagation
          touchStartPreventDefault={false}
          className="h-[72vh] sm:h-[75vh] lg:h-[80vh] relative z-0"
          style={{ ["--swiper-theme-color"]: "var(--color-primary)" }}
        >
          {slides.map((s, i) => (
            <swp.SwiperSlide key={s.title + i}>
              <div className="relative w-full h-full">
                {/* لو عندك AVIF/WEBP أضفها في slidesData واستخدم <picture>؛ غير كده استخدم <img> */}
                {"imgAvif" in s || "imgWebp" in s ? (
                  <picture>
                    {s.imgAvif && <source srcSet={s.imgAvif} type="image/avif" />}
                    {s.imgWebp && <source srcSet={s.imgWebp} type="image/webp" />}
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1920}
                      height={900}
                      decoding="async"
                      fetchpriority={i === 0 ? "high" : "auto"}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                ) : (
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1920}
                    height={900}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "auto"}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* التعتيم (طبقة منخفضة لا تمسك كليك) */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(0deg,rgba(0,0,0,.60),rgba(0,0,0,.35))]" />

                {/* المحتوى */}
                <div className="absolute inset-0 z-10 flex items-end pb-8 sm:pb-12">
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
                        <p className="mt-3 text-white/90 text-base sm:text-lg">
                          {s.subtitle}
                        </p>

                        <div
                          className={`mt-5 flex flex-col ${
                            isAr ? "md:items-end" : "md:items-start"
                          } items-center gap-3 sm:flex-row sm:gap-4`}
                        >
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
                              <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                                fill="currentColor"
                                aria-hidden
                              >
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                                fill="currentColor"
                                aria-hidden
                              >
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
            </swp.SwiperSlide>
          ))}
        </swp.Swiper>
      )}

      {/* إخفاء الأسهم الافتراضية */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next { display: none !important; }
      `}</style>
    </section>
  );
}
