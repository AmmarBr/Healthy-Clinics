import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { DEPARTMENTS } from "../lib/departments"; // تأكد من المسار الصحيح

import {
  Stethoscope,
  HeartPulse,
  Baby,
  Activity,
  Smile,
  Microscope,
  Syringe,
  Eye,
  Bone,
  Hospital,
  ScanLine,
  TestTube2,
  Dumbbell,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// خريطة الأيقونات حسب slug
const ICONS = {
  "general-er": Hospital,
  dental: Smile,
  "dermatology-cosmetic": Syringe,
  skincare: Sparkles,
  obgyn: HeartPulse,
  "internal-med": Stethoscope,
  ophthalmology: Eye,
  orthopedics: Bone,
  physiotherapy: Dumbbell,
  ent: Activity,
  pediatrics: Baby,
  lab: Microscope,
  radiology: ScanLine,
  cssd: ShieldCheck,
  dialysis: TestTube2,
};

export default function ServicesCarousel() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");
  const [swiper, setSwiper] = useState(null);

  // نختار أول 6 أقسام
  const clinics = useMemo(() => {
    const selected = DEPARTMENTS.slice(0, 6);
    return selected.map((d) => {
      const Icon = ICONS[d.slug] || Stethoscope;
      return {
        id: d.slug,
        title: isAr ? d.nameAr : d.nameEn,
        desc: isAr ? d.descriptionAr : d.descriptionEn,
        img: d.cover,
        Icon,
        to: `/clinics/${d.slug}`,
      };
    });
  }, [i18n.language]);

  const goTo = (idx) => swiper?.slideToLoop(idx);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* القائمة الجانبية */}
        <aside
          className={`lg:col-span-4 order-2 lg:order-1 `}
        >
          <div className={`rounded-2xl overflow-hidden border border-black/20 dark:border-white/30 bg-white dark:bg-gray-900 shadow-sm `}>
            <div className="px-6 py-5 bg-[--color-primary] text-black dark:text-white">
              <h3 className="text-lg font-semibold">{t("services.sidebarTitle", "الأقسام")}</h3>
            </div>
            <ul className="p-2">
              {clinics.map((c, idx) => (
                <li
                  key={c.id}
                  onClick={() => goTo(idx)}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl
                             text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                                   border border-[--color-primary]
                                   bg-[color:color-mix(in_oklab,var(--color-primary)_10%,transparent)]">
                    <c.Icon size={18} color="var(--color-primary)" className="[stroke-width:2]" />
                  </span>
                  <span className="font-medium">{c.title}</span>
                </li>
              ))}
              <li className="px-4 py-3">
                <Link to="/services" className="text-[--color-primary] font-semibold hover:underline underline-offset-4">
                  {t("services.viewAll", "عرض الكل")}
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* السلايدر */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className={`${isAr ? "text-right" : "text-left"} mb-4`}>
            <span className="text-[--color-primary] text-sm font-medium">{t("services.kicker", "ابتكار")}</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">{t("services.title", "عياداتنا")}</h2>
          </div>

          <Swiper
            key={isAr ? "rtl" : "ltr"}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y]}
            onSwiper={setSwiper}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {clinics.map((c) => (
              <SwiperSlide key={c.id}>
                <article className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                    <span className="absolute top-3 ltr:right-3 rtl:left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl
                                     bg-[color:color-mix(in_oklab,var(--color-primary)_92%,#000)] text-white shadow-md">
                      <c.Icon size={18} color="white" className="[stroke-width:2]" />
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <Link to={c.to} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[--color-primary] transition">
                      {c.title}
                    </Link>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6 line-clamp-3">{c.desc}</p>
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
