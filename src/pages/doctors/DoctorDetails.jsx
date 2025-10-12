// src/pages/doctors/DoctorDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { DOCTORS } from "../../lib/doctors";
import { DEPARTMENTS } from "../../lib/departments";

// نفس شكل الأيقونة الموحّد
function SocialIcon({ href = "#", label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center h-10 w-10 rounded-lg border
                 border-neutral-300 text-primary hover:bg-primary/10 transition"
    >
      {children}
    </a>
  );
}

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function DoctorDetails() {
  const { doctorId } = useParams();
  const nav = useNavigate();
  const { t, i18n } = useTranslation("doctors");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

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

  const name = lng === "ar" ? (doc.nameAr || doc.nameEn) : (doc.nameEn || doc.nameAr);
  const spec = lng === "ar" ? (doc.specialtyAr || doc.specialtyEn) : (doc.specialtyEn || doc.specialtyAr);

  const dept = DEPARTMENTS.find((d) => d.slug === doc.deptSlug);
  const deptName = dept ? (lng === "ar" ? dept.nameAr : dept.nameEn) : spec;

  const degree =
    (lng === "ar" ? doc.degreeAr : doc.degreeEn) ||
    doc.degree ||
    t("profile.degree.default", "M.D. of Medicine");

  const bio = lng === "ar" ? (doc.bioAr || doc.bioEn) : (doc.bioEn || doc.bioAr);

  const phoneLink = doc.phone ? normTel(doc.phone) : "";

  return (
    <main className="pb-16">
      {/* العنوان العلوي */}
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{name}</h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-300">{spec}</p>
      </header>

      {/* المحتوى */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* الصورة + الوصف */}
          <div className="rounded-2xl overflow-hidden border
                          bg-neutral-50 dark:bg-neutral-900
                          border-neutral-900/10 dark:border-neutral-50/10 grid-cols-2">
            <div className="h-[360px] sm:h-[420px] w-full overflow-hidden">
              <img
                src={doc.photo || "/assets/doctor-placeholder.jpg"}
                alt={name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                {t("detail.aboutDoctor", "About the Doctor")}
              </h3>
              <p className="leading-7 text-neutral-700 dark:text-neutral-300">
                {bio ||
                  t("profile.bioFallback", "Professional physician providing high-quality care to patients.")}
              </p>

              {/* أيقونات السوشيال */}
              <div className="mt-5 flex gap-3">
                <SocialIcon label="Twitter"><Twitter size={18} /></SocialIcon>
                <SocialIcon label="Facebook"><Facebook size={18} /></SocialIcon>
                <SocialIcon label="Instagram"><Instagram size={18} /></SocialIcon>
                <SocialIcon label="LinkedIn"><Linkedin size={18} /></SocialIcon>
                <SocialIcon label="YouTube"><Youtube size={18} /></SocialIcon>
              </div>
            </div>
          </div>

          {/* التفاصيل */}
          <aside className="space-y-6 grid-cols-2">
            {/* بطاقة التفاصيل */}
            <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                            border-neutral-900/10 dark:border-neutral-50/10">
              <div className="border-b rounded-t-2xl px-5 py-4
                              border-neutral-900/10 dark:border-neutral-50/10">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {t("profile.details", "Profile details")}
                </h3>
              </div>

              <div className="divide-y divide-neutral-900/10 dark:divide-neutral-50/10 text-sm">
                <Row label={t("profile.specialty", "Speciality")} value={spec} />
                <Row label={t("profile.category", "Category")} value={deptName} />
                <Row label={t("profile.degree", "Degree")} value={degree} />
                <Row
                  label={t("profile.phone", "Phone")}
                  value={
                    doc.phone ? (
                      <a href={`tel:${phoneLink}`} className="hover:underline" dir="ltr">
                        {doc.phone}
                      </a>
                    ) : t("profile.na", "N/A")
                  }
                />
              </div>
            </div>

            {/* بطاقة الاتصال السريع */}
            <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                            border-neutral-900/10 dark:border-neutral-50/10 p-5 space-y-4">
              {doc.phone && (
                <>
                  {/* الاتصال */}
                  <a
                    href={`tel:${phoneLink}`}
                    className="flex items-center gap-3 rounded-lg border px-3 py-2
                               border-neutral-300 hover:bg-primary/10
                               text-neutral-900 dark:text-neutral-100 transition"
                  >
                    <span className="grid place-items-center h-10 w-10 rounded-lg border border-neutral-300 text-primary">
                      <Phone size={18} />
                    </span>
                    <span dir="ltr">{doc.phone}</span>
                  </a>

                  {/* واتساب */}
                  <a
                    href={`https://wa.me/${phoneLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border px-3 py-2
                               border-neutral-300 hover:bg-primary/10
                               text-neutral-900 dark:text-neutral-100 transition"
                  >
                    <span className="grid place-items-center h-10 w-10 rounded-lg border border-neutral-300 text-primary">
                      <FaWhatsapp size={18} />
                    </span>
                    <span>{t("profile.whatsapp", "Chat on WhatsApp")}</span>
                  </a>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }) {
  return (
    <div className="px-5 py-3 flex items-start gap-3">
      <div className="w-36 shrink-0 text-neutral-500">{label}</div>
      <div className="flex-1 text-neutral-900 dark:text-neutral-100">{value}</div>
    </div>
  );
}
