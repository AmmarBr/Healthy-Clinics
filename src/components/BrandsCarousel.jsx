// src/components/BrandsCarousel.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";

// أمثلة صور (اختيارية) — تقدر تمسحها لو بتمرر props من برّا
import titleLightFallback from "../assets/22211.png";
import titleDarkFallback from "../assets/عروض-الأسنان---تصميم_0001s_0000_logos.png";
import img2 from "../assets/logo (1).svg";
import img3 from "../assets/logo.svg";
import img4 from "../assets/Malath-01.svg";
import img5 from "../assets/Medgulf_logo.png";
import img6 from "../assets/شعار تكافل الراجحي – SVG.svg";
import img7 from "../assets/شعار_التعاونية_للتأمين_2023.svg";

export default function BrandsCarousel({
  // ✅ لوجو العنوان حسب الثيم
  titleLogoLight = titleLightFallback,
  titleLogoDark = titleDarkFallback,

  // ✅ مصفوفة الوجوهات: [{src, alt?, href?}]
  items = [],

  // إعدادات
  autoplayDelay = 2000,
  cardHeight = 96, // كبّرنا الكارت افتراضيًا
}) {
  const { i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");

  // فوولباك بسيط لو مفيش داتا
  const logos = useMemo(() => {
    if (items?.length) return items;
    return [
      { src: img2, alt: "Brand 1" },
      { src: img3, alt: "Brand 2" },
      { src: img4, alt: "Brand 3" },
      { src: img5, alt: "Brand 4" },
      { src: img6, alt: "Brand 5" },
      { src: img7, alt: "Brand 6" },
    ];
  }, [items]);

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ لوجو العنوان (فاتح/داكن) مكبّر */}
        <div className="mb-8 flex items-center justify-center">
          {titleLogoLight && (
            <img
              src={titleLogoLight}
              alt="Main Logo"
              className="h-20 sm:h-24 w-auto object-contain dark:hidden"
              loading="lazy"
            />
          )}
          {titleLogoDark && (
            <img
              src={titleLogoDark}
              alt="Main Logo Dark"
              className="h-20 sm:h-24 w-auto object-contain hidden dark:block"
              loading="lazy"
            />
          )}
        </div>

        {/* ✅ سلايدر الوجوهات (4 ظاهرين – الباقي سكرول) */}
        <Swiper
          key={isAr ? "rtl" : "ltr"}
          dir={isAr ? "rtl" : "ltr"}
          modules={[Autoplay, A11y]}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={800}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((b, i) => {
            const content = (
              <div
                className="h-full w-full rounded-xl border shadow-sm flex items-center justify-center transition duration-300
                           bg-white/95 dark:bg-gray-900/95
                           hover:bg-[color:color-mix(in_oklab,var(--color-primary)_10%,white)]
                           dark:hover:bg-[color:color-mix(in_oklab,var(--color-primary)_10%,#111111)]"
                style={{
                  height: cardHeight,
                  borderColor: "var(--color-primary)", // ✅ لون البوردر الأساسي
                }}
              >
                <img
                  src={b.src}
                  alt={b.alt || `brand-${i + 1}`}
                  className="max-h-[82%] max-w-[82%] object-contain transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            );

            return (
              <SwiperSlide key={i} className="!h-auto">
                {b.href ? (
                  <a href={b.href} target="_blank" rel="noopener noreferrer" title={b.alt || ""}>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
