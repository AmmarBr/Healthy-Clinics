// src/components/DoctorsGrid.jsx  (أو DoctorsCarousel.jsx)
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { DOCTORS } from "../lib/doctors";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// 🔧 تطبيع رقم الهاتف
const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function DoctorsGrid() {
  const { t, i18n } = useTranslation("doctors");
  const isAr = i18n.language?.startsWith("ar");
  const [swiper, setSwiper] = useState(null);

  const doctors = useMemo(() => DOCTORS.slice(0, 12), []);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-8`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("featured.kicker", "Professionals")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-neutral-900 dark:text-neutral-50">
            {t("featured.title", "Our Doctors")}
          </h2>
        </div>

        {/* السلايدر */}
        <Swiper
          key={isAr ? "rtl" : "ltr"}
          dir={isAr ? "rtl" : "ltr"}
          modules={[Pagination, Autoplay, A11y]}
          onSwiper={setSwiper}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={doctors.length > 4}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-10"
          style={{ ["--swiper-theme-color"]: "var(--color-primary)" }}
        >
          {doctors.map((d) => {
            const name = isAr ? (d.nameAr || d.nameEn) : (d.nameEn || d.nameAr);
            const specialty = isAr ? (d.specialtyAr || d.specialtyEn) : (d.specialtyEn || d.specialtyAr);

            return (
              <SwiperSlide key={d.id}>
                <article
                  className="flex flex-col justify-between bg-white dark:bg-neutral-900 rounded-2xl 
                             overflow-hidden border border-neutral-900/10 dark:border-neutral-50/10 
                             shadow-sm hover:shadow-lg transition h-full min-h-[460px]" // 🔹 تثبيت ارتفاع موحد
                >
                  {/* الصورة */}
                  <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
                    <img
                      src={d.photo || "/assets/doctor-placeholder.jpg"}
                      alt={name}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* التفاصيل */}
                  <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                      <Link
                        to={`/doctors/${d.id}`}
                        className="text-[--color-primary] text-lg font-semibold hover:underline underline-offset-4"
                      >
                        {name}
                      </Link>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {specialty}
                      </p>

                      {(d.bioAr || d.bioEn) && (
                        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-6 line-clamp-3">
                          {isAr ? d.bioAr : d.bioEn}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* الاتصال */}
                  <div className="border-t border-neutral-900/10 dark:border-neutral-50/10 mt-auto">
                    <div className="flex items-center justify-between px-5 py-3">
                      {d.phone ? (
                        <a
                          href={`tel:${normTel(d.phone)}`}
                          className="flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-200 hover:opacity-80 transition"
                        >
                          <Phone size={16} color="var(--color-primary)" className="opacity-80" />
                          <span dir="ltr">{d.phone}</span>
                        </a>
                      ) : (
                        <span className="text-sm text-neutral-500">{t("noPhone", "No phone")}</span>
                      )}

                      <Link
                        to={`/doctors/${d.id}`}
                        className="text-sm font-medium text-[--color-primary] hover:underline underline-offset-4"
                      >
                        {t("featured.view", "View profile")}
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* إخفاء الأسهم لو اتضافت بالغلط */}
      <style>{`
        .swiper-button-prev, .swiper-button-next { display: none !important; }
      `}</style>
    </section>
  );
}
