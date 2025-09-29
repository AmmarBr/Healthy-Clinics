// src/components/FeaturedDoctor.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { DOCTORS } from "../lib/doctors"; // عدّل المسار لو مختلف

function normTel(v = "") {
  return v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");
}

export default function FeaturedDoctor({ title, kicker, doctor }) {
  const { t, i18n } = useTranslation("doctors");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

  // 👇 fallback لو prop مش مبعوت
  const d = doctor || DOCTORS[0];
  if (!d) {
    console.warn("[FeaturedDoctor] no doctor provided and DOCTORS is empty.");
    return null;
  }

  const name = lng === "ar" ? (d.nameAr || d.nameEn) : (d.nameEn || d.nameAr);
  const spec = lng === "ar" ? (d.specialtyAr || d.specialtyEn) : (d.specialtyEn || d.specialtyAr);
  const bio  = lng === "ar" ? (d.bioAr || d.bioEn) : (d.bioEn || d.bioAr);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-primary text-sm mb-1">
          {kicker ?? t("featured.kicker", "Professionals")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-5">
          {title ?? t("featured.title", "Chief of Medicine")}
        </h2>

        <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                        border-neutral-900/10 dark:border-neutral-50/10 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* الصورة */}
            <div className="md:w-[320px] shrink-0">
              <img
                src={d.photo || "/assets/doctor-placeholder.jpg"}
                alt={name}
                className="h-64 md:h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* المحتوى */}
            <div className="flex-1 p-5 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-primary">{name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-0.5">{spec}</div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  {d.phone && (
                    <a
                      href={`tel:${normTel(d.phone)}`}
                      className="inline-flex items-center gap-2 text-primary hover:opacity-80"
                    >
                      <Phone size={16} />
                      <span dir="ltr">{d.phone}</span>
                    </a>
                  )}
                  {d.email && (
                    <a
                      href={`mailto:${d.email}`}
                      className="inline-flex items-center gap-2 text-primary hover:opacity-80"
                    >
                      <Mail size={16} />
                      <span>{d.email}</span>
                    </a>
                  )}
                </div>
              </div>

              <hr className="my-4 border-neutral-900/10 dark:border-neutral-50/10" />

              <p className="leading-7 text-neutral-700 dark:text-neutral-300">
                {bio ||
                  "Etiam eu molestie eros, commodo hendrerit sapien. Maecenas tempus leo ac nisi iaculis porta."}
              </p>

              {/* السوشيال */}
              <div className="mt-5 flex gap-2">
                <a className="grid place-items-center h-9 w-9 rounded-md border text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800"
                   href="#" aria-label="Twitter"><Twitter size={16} /></a>
                <a className="grid place-items-center h-9 w-9 rounded-md border text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800"
                   href="#" aria-label="Facebook"><Facebook size={16} /></a>
                <a className="grid place-items-center h-9 w-9 rounded-md border text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800"
                   href="#" aria-label="Instagram"><Instagram size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
