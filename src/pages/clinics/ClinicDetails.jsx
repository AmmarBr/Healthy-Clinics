// src/pages/clinics/ClinicDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

import { DEPARTMENTS } from "../../lib/departments";

export default function ClinicDetails() {
  const { clinicId } = useParams(); // ← يقرأ الباراميتر من الراوت
  const nav = useNavigate();
  const { t, i18n } = useTranslation("services");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

  // نبحث عن العيادة المطلوبة
  const clinic = DEPARTMENTS.find((d) => String(d.slug) === String(clinicId));

  if (!clinic) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          {t("notFound", "Clinic not found.")}
        </p>
        <button
          onClick={() => nav(-1)}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                     border-neutral-900/20 text-neutral-700 hover:bg-neutral-100
                     dark:border-neutral-50/20 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <ArrowRight className="ltr:rotate-180 rtl:rotate-0" size={16} />
          {t("back", "Go back")}
        </button>
      </div>
    );
  }

  // بيانات حسب اللغة
  const title = lng === "ar" ? clinic.nameAr : clinic.nameEn;
  const description = lng === "ar" ? clinic.descriptionAr : clinic.descriptionEn;
  const banner = clinic.banner || "/assets/clinic-placeholder.jpg";

  return (
    <main className="pb-16">
      {/* صورة العيادة */}
      <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden">
        <img
          src={banner}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>

      {/* المحتوى */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-lg text-neutral-800 dark:text-neutral-200">
          <p>{description}</p>
        </div>

        {/* CTA أو زر العودة */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => nav("/services")}
            className="rounded-lg border px-5 py-2.5 text-sm font-medium
                       border-[--color-primary] text-[--color-primary]
                       hover:bg-[--color-primary] hover:text-white transition"
          >
            {t("backToList", "Back to Services")}
          </button>

          <a
            href="/contact"
            className="rounded-lg bg-[--color-primary] px-5 py-2.5 text-sm font-medium text-white
                       shadow-sm hover:opacity-90 transition"
          >
            {t("book", "Book Appointment")}
          </a>
        </div>
      </section>
    </main>
  );
}
