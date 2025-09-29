import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

import { DOCTORS } from "../lib/doctors";
import { DEPARTMENTS } from "../lib/departments";

// تطبيع للبحث بالعربي/إنجليزي
function norm(s = "") {
  return s
    .toLowerCase()
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
}
const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function AllDoctorsGrid() {
  const { t, i18n } = useTranslation("doctors");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";

  // خيارات الفلتر (أول اختيار = الكل)
  const options = useMemo(
    () => [{ slug: "all", nameAr: "الكل", nameEn: "All" }, ...DEPARTMENTS],
    []
  );

  const [q, setQ] = useState("");
  const [deptSlug, setDeptSlug] = useState("all");

  // تصفية القائمة
  const filtered = useMemo(() => {
    const query = norm(q);
    return DOCTORS.filter((d) => {
      const name = lng === "ar" ? (d.nameAr || d.nameEn) : (d.nameEn || d.nameAr);
      const spec = lng === "ar" ? (d.specialtyAr || d.specialtyEn) : (d.specialtyEn || d.specialtyAr);
      const byQuery = !query || norm(name).includes(query) || norm(spec).includes(query);
      const byDept = deptSlug === "all" || d.deptSlug === deptSlug;
      return byQuery && byDept;
    });
  }, [q, deptSlug, lng]);

  // مساعد لاسم القسم على الشارة
  const deptName = (slug) => {
    const d = DEPARTMENTS.find((x) => x.slug === slug);
    return d ? (lng === "ar" ? d.nameAr : d.nameEn) : slug;
  };

  const label = (ar, en) => (lng === "ar" ? ar : en);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            {t("list.title", "Our Doctors")}
          </h2>
        </header>

        {/* البحث + الفلتر */}
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("list.search", "Search by name or specialty")}
            className="rounded-2xl border px-3 py-2 shadow-sm
                       border-neutral-900/15 bg-neutral-50 text-neutral-900
                       dark:border-neutral-50/15 dark:bg-neutral-900 dark:text-neutral-50
                       placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
          <select
            value={deptSlug}
            onChange={(e) => setDeptSlug(e.target.value)}
            className="rounded-2xl border border-neutral-300 dark:border-neutral-700
                       bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-neutral-50 shadow-sm"
          >
            {options.map((o) => (
              <option key={o.slug} value={o.slug}>
                {label(o.nameAr, o.nameEn)}
              </option>
            ))}
          </select>
        </div>

        {/* الجريد */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => {
            const name = lng === "ar" ? (d.nameAr || d.nameEn) : (d.nameEn || d.nameAr);
            const spec = lng === "ar" ? (d.specialtyAr || d.specialtyEn) : (d.specialtyEn || d.specialtyAr);
            return (
              <article
                key={d.id}
                className="rounded-2xl overflow-hidden border
                           bg-neutral-50 dark:bg-neutral-900
                           border-neutral-900/10 dark:border-neutral-50/10
                           hover:shadow-lg transition"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={d.photo || "/assets/doctor-placeholder.jpg"}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
                    <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs
                                     border-[--color-primary] text-[--color-primary]">
                      {deptName(d.deptSlug)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{spec}</p>

                  {/* تواصل سريع */}
                  {(d.phone || d.email) && (
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                      {d.phone && (
                        <a className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200"
                           href={`tel:${normTel(d.phone)}`}>
                          <Phone size={16} className="opacity-70" />
                          <span dir="ltr">{d.phone}</span>
                        </a>
                      )}
                      {d.email && (
                        <a className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200"
                           href={`mailto:${d.email}`}>
                          <Mail size={16} className="opacity-70" />
                          <span>{d.email}</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/doctors/${d.id}`}
                      className="inline-flex items-center gap-2 rounded-lg
                                 border px-3 py-2 text-sm
                                 border-neutral-900/20 text-neutral-700 hover:bg-neutral-100
                                 dark:border-neutral-50/20 dark:text-neutral-300 dark:hover:bg-neutral-800"
                    >
                      {t("list.open", "View profile")}
                    </Link>

                    <a
                      href="/contact"
                      className="rounded-lg border border-primary bg-primary
                                 px-3 py-2 text-sm font-medium text-white hover:opacity-90
                                  focus-visible:outline-[--color-primary] "
                    >
                      {t("list.book", "Book appointment")}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-neutral-500 dark:text-neutral-400">
            {t("list.noResults", "No doctors found.")}
          </p>
        )}
      </div>
    </section>
  );
}
