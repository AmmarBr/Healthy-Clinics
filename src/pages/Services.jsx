import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, ArrowRight } from "lucide-react";
import { DEPARTMENTS } from "../lib/departments";

// تطبيع للبحث العربي/الإنجليزي
function norm(s = "") {
  return s.toLowerCase()
    .replace(/[إأآا]/g, "ا").replace(/ى/g, "ي")
    .replace(/ؤ/g, "و").replace(/ئ/g, "ي")
    .replace(/ة/g, "ه").trim();
}

export default function Services() {
  const { t, i18n } = useTranslation("services");        // ⬅️ جبنا i18n
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";
  const nav = useNavigate();

  const [q, setQ] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("all");

  const options = useMemo(
    () => [{ slug: "all", nameAr: t("filterAll"), nameEn: t("filterAll") }, ...DEPARTMENTS],
    // إعادة حساب لما اللغة تتغير
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lng, t]
  );

  const filtered = useMemo(() => {
    const query = norm(q);
    return DEPARTMENTS.filter((d) => {
      const name = lng === "ar" ? d.nameAr : d.nameEn;
      const byQuery = !query || norm(name).includes(query);
      const bySelect = selectedSlug === "all" || d.slug === selectedSlug;
      return byQuery && bySelect;
    });
  }, [q, selectedSlug, lng]);

  const label = (ar, en) => (lng === "ar" ? ar : en);

  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الهيدر */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
            {t("title")}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            {t("subtitle")}
          </p>
        </header>

        {/* الفلترة */}
        <div className="mb-8 grid gap-3 md:grid-cols-2">
          <label className="flex items-center gap-2 rounded-2xl border px-3 py-2 shadow-sm
                            border-neutral-900/15 bg-neutral-50 text-neutral-900
                            dark:border-neutral-50/15 dark:bg-neutral-900 dark:text-neutral-50">
            <Search size={16} className="text-neutral-500 dark:text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent outline-none text-neutral-900 dark:text-neutral-50
                         placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              aria-label={t("searchPlaceholder")}
            />
          </label>

          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="rounded-2xl border border-neutral-300 dark:border-neutral-700
                       bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-neutral-50 shadow-sm"
            aria-label={t("filterAll")}
          >
            {options.map((o) => (
              <option key={o.slug} value={o.slug}>
                {label(o.nameAr, o.nameEn)}
              </option>
            ))}
          </select>
        </div>

        {/* الكروت */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.slug}
              onClick={() => nav(`/clinics/${d.slug}`)}
              onKeyDown={(e) => e.key === "Enter" && nav(`/clinics/${d.slug}`)}
              tabIndex={0}
              role="button"
              className="relative overflow-hidden rounded-2xl border
                         bg-neutral-50 dark:bg-neutral-900
                         border-neutral-900/10 dark:border-neutral-50/10
                         hover:shadow-lg transition cursor-pointer"
            >
              {/* شريط هوية */}
              <span aria-hidden className="absolute inset-y-0 start-0 w-1 bg-primary/80"></span>

              <div className="h-48 w-full overflow-hidden">
                <img
                  src={d.banner || "/assets/clinic-placeholder.jpg"}
                  alt={label(d.nameAr, d.nameEn)}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {label(d.nameAr, d.nameEn)}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    key={d.slug}
                    onClick={() => nav(`/clinics/${d.slug}`)}
                    onKeyDown={(e) => e.key === "Enter" && nav(`/clinics/${d.slug}`)}
                    tabIndex={0}
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                               border-neutral-900/20 text-neutral-700 hover:bg-neutral-100
                               dark:border-neutral-50/20 dark:text-neutral-300 dark:hover:bg-neutral-800 cursor-pointer"
                  >
                    {t("open")} <ArrowRight size={16} />
                  </button>

                  <a
                    href="/contact"
                    className="rounded-lg border border-primary bg-primary px-3 py-2 text-sm font-medium
                               text-neutral-50 hover:opacity-90 focus-visible:outline-offset-2 focus-visible:outline-primary
                               cursor-pointer"
                  >
                    {t("book")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-neutral-500 dark:text-neutral-400">
            {t("noResults")}
          </p>
        )}
      </div>
    </section>
  );
}
