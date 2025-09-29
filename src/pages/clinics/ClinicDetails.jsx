// src/pages/doctors/DoctorDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, ArrowRight } from "lucide-react";

import { DOCTORS } from "../../lib/doctors";
import { DEPARTMENTS } from "../../lib/departments";

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function DoctorDetails() {
  const { doctorId } = useParams();
  const nav = useNavigate();
  const { t, i18n } = useTranslation("doctors");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

  // الطبيب المطلوب
  const doc = DOCTORS.find((d) => String(d.id) === String(doctorId));

  if (!doc) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          {t("profile.notFound", "Doctor not found.")}
        </p>
        <button
          onClick={() => nav(-1)}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                     border-neutral-900/20 text-neutral-700 hover:bg-neutral-100
                     dark:border-neutral-50/20 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <ArrowRight className="ltr:rotate-180 rtl:rotate-0" size={16} />
          {t("profile.back", "Go back")}
        </button>
      </div>
    );
  }

  // أسماء/نصوص حسب اللغة
  const name = lng === "ar" ? (doc.nameAr || doc.nameEn) : (doc.nameEn || doc.nameAr);
  const spec = lng === "ar" ? (doc.specialtyAr || doc.specialtyEn) : (doc.specialtyEn || doc.specialtyAr);

  const dept = DEPARTMENTS.find((d) => d.slug === doc.deptSlug);
  const deptName = dept ? (lng === "ar" ? dept.nameAr : dept.nameEn) : spec;

  const degree  = doc.degree  || t("profile.degree.default", "M.D. of Medicine");
  const address = doc.address || t("profile.address.default", "Address not provided");
  const likes   = typeof doc.likes === "number" ? doc.likes : 0;
  const bio     = lng === "ar" ? (doc.bioAr || doc.bioEn) : (doc.bioEn || doc.bioAr);

  // خطأ تحميل الصورة => نعرض Placeholder
  const [imgErr, setImgErr] = useState(false);
  const showImage = Boolean(doc.photo) && !imgErr;

  return (
    <main className="pb-16">
      {/* العنوان */}
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{name}</h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-300">{spec}</p>
      </header>

      {/* جسم الصفحة */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* يسار: صورة أو Placeholder + نبذة */}
          <div className="rounded-2xl overflow-hidden border
                          bg-neutral-50 dark:bg-neutral-900
                          border-neutral-900/10 dark:border-neutral-50/10">
            {showImage ? (
              <img
                src={doc.photo}
                alt={name}
                className="w-full h-[420px] object-cover"
                loading="lazy"
                onError={() => setImgErr(true)}
              />
            ) : (
              <PlaceholderBlock label={name} />
            )}

            <div className="p-6">
              <p className="leading-7 text-neutral-700 dark:text-neutral-300">
                {bio || t("profile.bioFallback", "Professional physician providing high-quality care.")}
              </p>
            </div>
          </div>

          {/* يمين: تفاصيل البروفايل + وسائل التواصل */}
          <aside className="space-y-6">
            {/* التفاصيل */}
            <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                            border-neutral-900/10 dark:border-neutral-50/10">
              <div className="border-b px-5 py-4 font-semibold
                              border-neutral-900/10 dark:border-neutral-50/10">
                {t("profile.details", "Profile details")}
              </div>

              <div className="divide-y divide-neutral-900/10 dark:divide-neutral-50/10 text-sm">
                <Row label={t("profile.likes", "Likes")} value={`${likes}`} />
                <Row label={t("profile.specialty", "Speciality")} value={spec} />
                <Row label={t("profile.degree", "Degree")} value={degree} />
                <Row label={t("profile.address", "Address")} value={address} />
                <Row
                  label={t("profile.phone", "Phone")}
                  value={
                    doc.phone ? (
                      <a href={`tel:${normTel(doc.phone)}`} className="hover:underline" dir="ltr">
                        {doc.phone}
                      </a>
                    ) : t("profile.na", "N/A")
                  }
                />
                <Row
                  label={t("profile.email", "Email")}
                  value={
                    doc.email ? (
                      <a href={`mailto:${doc.email}`} className="hover:underline">
                        {doc.email}
                      </a>
                    ) : t("profile.na", "N/A")
                  }
                />
                <Row label={t("profile.category", "Category")} value={deptName} />
              </div>
            </div>

            {/* اتصالات سريعة */}
            <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                            border-neutral-900/10 dark:border-neutral-50/10 p-5 space-y-4">
              {doc.phone && (
                <a
                  href={`tel:${normTel(doc.phone)}`}
                  className="flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Phone size={16} className="opacity-70" />
                  <span dir="ltr">{doc.phone}</span>
                </a>
              )}
              {doc.email && (
                <a
                  href={`mailto:${doc.email}`}
                  className="flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Mail size={16} className="opacity-70" />
                  <span>{doc.email}</span>
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* صف تفاصيل */
function Row({ label, value }) {
  return (
    <div className="px-5 py-3 flex gap-3">
      <div className="w-32 shrink-0 text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="flex-1 text-neutral-900 dark:text-neutral-100">{value}</div>
    </div>
  );
}

/* Placeholder أنيق بدل الصورة */
function PlaceholderBlock({ label }) {
  return (
    <div
      className="relative w-full h-[420px] overflow-hidden
                 bg-gradient-to-br from-neutral-200 to-neutral-300
                 dark:from-neutral-800 dark:to-neutral-700"
      role="img"
      aria-label={label || "placeholder"}
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" className="text-neutral-500 dark:text-neutral-400" />
        </svg>
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-full p-4 ring-1 ring-neutral-900/10 dark:ring-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-neutral-600 dark:text-neutral-300">
            <path fill="currentColor" d="M9.4 5h5.2l1 1H18c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1.4l1-1Zm2.6 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"/>
          </svg>
        </div>
        {label ? (
          <div className="mt-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</div>
        ) : null}
      </div>
    </div>
  );
}
