// src/pages/clinics/ClinicDetails.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";

import { DEPARTMENTS } from "../../lib/departments";
import { DOCTORS } from "../../lib/doctors";

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function ClinicDetails() {
  const { clinicId } = useParams();
  const nav = useNavigate();
  const { t, i18n } = useTranslation("services");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

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

  const title = lng === "ar" ? clinic.nameAr : clinic.nameEn;
  const description = lng === "ar" ? clinic.descriptionAr : clinic.descriptionEn;
  const banner = clinic.cover || clinic.banner || "/assets/clinic-placeholder.jpg";
  const services = (lng === "ar" ? clinic.servicesAr : clinic.servicesEn) || [];

  // الأطباء المرتبطين بالقسم
  const relatedDoctors = DOCTORS.filter((d) => d.deptSlug === clinic.slug);

  // ستايلات اللون الأساسي (مباشر)
  const primary = "var(--color-primary)";

  return (
    <main className="pb-16">
      {/* صورة العيادة */}
      <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden">
        <img src={banner} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>

      {/* المحتوى */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* وصف */}
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-lg text-neutral-800 dark:text-neutral-200 text-center">
          <p>{description}</p>
        </div>

        {/* الخدمات (بطاقات بإطار/نص/أيقونة بلون أساسي) */}
        {services.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-6" style={{ color: primary }}>
              {t("servicesOfClinic", "خدمات القسم")}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((srv, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{
                    color: primary,
                    border: `1px solid ${primary}`,
                    background:
                      "color-mix(in oklab, var(--color-primary) 6%, transparent)",
                  }}
                >
                  <BadgeCheck size={20} style={{ color: primary }} />
                  <span className="font-medium">{srv}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* الأطباء المرتبطين */}
        {relatedDoctors.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6" style={{ color: primary }}>
              {t("doctorsOfClinic", "الأطباء في هذا القسم")}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDoctors.map((doc) => {
                const name = lng === "ar" ? (doc.nameAr || doc.nameEn) : (doc.nameEn || doc.nameAr);
                const spec = lng === "ar" ? (doc.specialtyAr || doc.specialtyEn) : (doc.specialtyEn || doc.specialtyAr);
                return (
                  <article
                    key={doc.id}
                    className="rounded-2xl overflow-hidden border
                               bg-neutral-50 dark:bg-neutral-900
                               border-neutral-900/10 dark:border-neutral-50/10
                               hover:shadow-lg transition"
                  >
                    <div className="h-56 w-full overflow-hidden">
                      <img
                        src={doc.photo || "/assets/doctor-placeholder.jpg"}
                        alt={name}
                        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{spec}</p>

                      <div className="mt-3 flex items-center justify-between">
                        <a
                          href={`tel:${normTel(doc.phone)}`}
                          className="flex items-center gap-2 text-sm hover:opacity-80"
                          style={{ color: primary }}
                        >
                          <Phone size={16} style={{ color: primary }} />
                          <span dir="ltr">{doc.phone}</span>
                        </a>

                        <Link
                          to={`/doctors/${doc.id}`}
                          className="rounded-lg px-3 py-1.5 text-sm font-medium transition"
                          style={{
                            color: primary,
                            border: `1px solid ${primary}`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = primary;
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = primary;
                          }}
                        >
                          {t("viewDoctor", "عرض الطبيب")}
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* أزرار سفلية */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button
            onClick={() => nav("/services")}
            className="rounded-lg px-5 py-2.5 text-sm font-medium transition"
            style={{
              color: primary,
              border: `1px solid ${primary}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = primary;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = primary;
            }}
          >
            {t("backToList", "Back to Services")}
          </button>

          <a
            href="/contact"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-sm transition"
            style={{ backgroundColor: primary }}
          >
            {t("book", "Book Appointment")}
          </a>
        </div>
      </section>
    </main>
  );
}
