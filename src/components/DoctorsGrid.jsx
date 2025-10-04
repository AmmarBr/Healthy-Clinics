// src/components/DoctorsGrid.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { DOCTORS } from "../lib/doctors"; // ⬅️ استدعاء الأطباء الحقيقيين

// تطبيع الهاتف
const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function DoctorsGrid() {
  const { t, i18n } = useTranslation("doctors");
  const isAr = i18n.language?.startsWith("ar");

  // نعرض أول 4 فقط من الدكاترة
  const doctors = DOCTORS.slice(0, 4);

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

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d) => {
            const name = isAr ? d.nameAr : d.nameEn;
            const specialty = isAr ? d.specialtyAr : d.specialtyEn;

            return (
              <article
                key={d.id}
                className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border 
                           border-neutral-900/10 dark:border-neutral-50/10 shadow-sm hover:shadow-lg 
                           transition flex flex-col"
              >
                {/* الصورة */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.photo || "/assets/doctor-placeholder.jpg"}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* التفاصيل */}
                <div className="p-5 flex-1">
                  <Link
                    to={`/doctors/${d.id}`}
                    className="text-[--color-primary] text-lg font-semibold hover:underline underline-offset-4"
                  >
                    {name}
                  </Link>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {specialty}
                  </p>

                  {d.bioAr || d.bioEn ? (
                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-6 line-clamp-3">
                      {isAr ? d.bioAr : d.bioEn}
                    </p>
                  ) : null}
                </div>

                {/* السعر + الاتصال */}
                <div className="mt-auto border-t border-neutral-900/10 dark:border-neutral-50/10">
                  <div className="flex items-center justify-between px-5 py-3">
                    {/* رقم الهاتف */}
                    <a
                      href={`tel:${normTel(d.phone)}`}
                      className="flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-200 hover:opacity-80 transition"
                    >
                      <Phone size={16} color="var(--color-primary)" className="opacity-80" />
                      <span dir="ltr">{d.phone}</span>
                    </a>

                    {/* السعر مع لوجو الريال السعودي */}
                    <div className="flex items-center gap-1 text-sm font-semibold text-[--color-primary]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 240 240"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M133.663 56.3338C140.414 48.7553 144.563 45.3529 152.713 41.0513V167.247L133.663 171.184V56.3338Z" />
                        <path d="M194.529 119.779C198.478 111.443 198.943 107.738 200 99.187L53.9804 130.894C50.5177 138.607 49.4031 142.918 48.8695 150.576L194.529 119.779Z" />
                        <path d="M194.529 158.433C198.478 150.097 198.943 146.392 200 137.84L134.36 151.733C133.895 159.375 134.429 163.295 133.895 170.952L194.529 158.433Z" />
                        <path d="M194.529 197.08C198.478 188.744 198.943 185.04 200 176.488L140.168 189.477C137.148 193.645 135.289 200.591 133.895 209.6L194.529 197.08Z" />
                        <path d="M99.5134 183.919C105.321 176.741 111.361 167.711 115.543 160.301L45.1108 175.567C41.6481 183.28 40.5335 187.592 39.9999 195.249L99.5134 183.919Z" />
                        <path d="M96.4934 45.6824C103.245 38.1039 107.394 34.7015 115.543 30.3999V160.764L96.4934 164.7V45.6824Z" />
                      </svg>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
