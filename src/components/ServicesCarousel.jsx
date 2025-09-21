// src/components/ServicesCarousel.jsx
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules"; // ← من غير Navigation
import { useTranslation } from "react-i18next";
import { Stethoscope, Baby, HeartPulse, BriefcaseMedical, Activity, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

export default function ServicesCarousel() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");
  const [swiper, setSwiper] = useState(null);

  const departments = useMemo(
    () => [
      { id: "lab",   title: t("services.lab", "تحاليل مخبرية"),                 Icon: Microscope,        img: img1, to: "/services#lab"   },
      { id: "peds",  title: t("services.peds", "عيادة الأطفال"),                 Icon: Baby,              img: img2, to: "/services#peds"  },
      { id: "ent",   title: t("services.ent", "عيادة الأنف والأذن والحنجرة"),    Icon: Activity,          img: img3, to: "/services#ent"   },
      { id: "card",  title: t("services.card", "عيادة القلب"),                   Icon: HeartPulse,        img: img4, to: "/services#card"  },
      { id: "opht",  title: t("services.opht", "عيادة العيون"),                  Icon: Stethoscope,       img: img5, to: "/services#opht"  },
      { id: "rehab", title: t("services.rehab","تأهيل المرضى الخارجي"),          Icon: BriefcaseMedical,  img: img1, to: "/services#rehab" },
    ],
    [i18n.language]
  );

  const goTo = (idx) => swiper?.slideToLoop(idx);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* القائمة الجانبية */}
        <aside className="lg:col-span-4 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm">
            {/* هيدر ملون */}
            <div className="px-6 py-5 bg-[--color-primary] text-black dark:text-white">
              <h3 className="text-lg font-semibold">{t("services.sidebarTitle", "الأقسام")}</h3>
            </div>

            <ul className="p-2">
              {departments.map((d, idx) => (
                <li
                  key={d.id}
                  onClick={() => goTo(idx)}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl
                             text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                                   border border-[--color-primary]
                                   bg-[color:color-mix(in_oklab,var(--color-primary)_10%,transparent)]">
                    <d.Icon size={18} color="var(--color-primary)" className="[stroke-width:2]" />
                  </span>
                  <span className="font-medium">{d.title}</span>
                </li>
              ))}
              <li className="px-4 py-3">
                <Link
                  to="/services"
                  className="text-[--color-primary] font-semibold hover:underline underline-offset-4"
                >
                  {t("services.viewAll", "عرض الكل")}
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* السلايدر */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className={`${isAr ? "text-right" : "text-left"} mb-4`}>
            <span className="text-[--color-primary] text-sm font-medium">
              {t("services.kicker", "ابتكار")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">
              {t("services.title", "خدماتنا")}
            </h2>
          </div>

          <Swiper
            key={isAr ? "rtl" : "ltr"}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Pagination, Autoplay, A11y]}        // ← بدون Navigation
            onSwiper={setSwiper}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0:    { slidesPerView: 1 },
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {departments.map((d) => (
              <SwiperSlide key={d.id}>
                <article className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
                                    border border-black/5 dark:border-white/10 shadow-sm
                                    min-h-[420px] flex flex-col">   {/* ← أطول */}
                  {/* صورة أعلى */}
                  <div className="relative h-52 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                    <img src={d.img} alt={d.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                    {/* أيقونة صغيرة أعلى الصورة */}
                    <span className="absolute top-3 ltr:right-3 rtl:left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl
                                     bg-[color:color-mix(in_oklab,var(--color-primary)_92%,#000)] text-white shadow-md">
                      <d.Icon size={18} color="white" className="[stroke-width:2]" />
                    </span>
                  </div>

                  {/* نص */}
                  <div className="p-5 flex-1 flex flex-col">
                    <Link to={d.to} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[--color-primary] transition">
                      {d.title}
                    </Link>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6">
                      {t("services.cardExcerpt", "وصف مختصر عن القسم والإجراءات الأكثر شيوعًا.")}
                    </p>
                    <div className="mt-auto pt-4 h-px bg-gradient-to-r from-[color:color-mix(in_oklab,var(--color-primary)_45%,transparent)] to-transparent" />
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
