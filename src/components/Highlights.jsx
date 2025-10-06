// src/components/Highlights.jsx
import React, { useMemo } from "react";
import { Stethoscope, Clock, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Highlights() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ✅ ساعات العمل المخصصة
  const hours = useMemo(
    () => [
      { label: t("highlights.emergency", "طوارئ"), time: "24 ساعة" },
      { label: t("highlights.clinics", "العيادات من السبت إلى الخميس"), time: "1:30 – 9:30" },
      { label: t("highlights.friday", "الجمعة"), time: t("highlights.off", "راحة") },
    ],
    [i18n.language]
  );

  // الخلفيات
  const bgA =
    "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_92%,#000),color-mix(in_oklab,var(--color-primary)_75%,#000))]";
  const bgB =
    "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_84%,#000),color-mix(in_oklab,var(--color-primary)_62%,#000))]";
  const bgC =
    "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_76%,#000),color-mix(in_oklab,var(--color-primary)_54%,#000))]";
  const cardBase =
    "relative overflow-hidden rounded-2xl p-8 text-white shadow-sm [text-shadow:0_1px_1px_rgba(0,0,0,.25)]";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1) أفضل الأطباء */}
        <div className={`${cardBase} ${bgA}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <Stethoscope size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.topDoctors", "أفضل الأطباء")}</h3>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              {t(
                "highlights.topDoctorsTxt",
                "نخبة من الأطباء المتخصصين لضمان رعاية طبية عالية الجودة."
              )}
            </p>
            <a
              href="/doctors"
              className="inline-block px-5 py-2.5 rounded-xl border border-white/70 hover:bg-white/10 transition"
            >
              {t("highlights.readMore", "اقرأ المزيد")}
            </a>
          </div>
        </div>

        {/* 2) خدمة 24 ساعة */}
        <div className={`${cardBase} ${bgB}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <Clock size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.service24", "خدمة 24 ساعة")}</h3>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              {t(
                "highlights.service24Txt",
                "نقدم خدمات طبية طارئة على مدار الساعة لضمان سلامتك."
              )}
            </p>
            <a
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-xl border border-white/70 hover:bg-white/10 transition"
            >
              {t("highlights.readMore", "اقرأ المزيد")}
            </a>
          </div>
        </div>

        {/* 3) ساعات العمل */}
        <div className={`${cardBase} ${bgC} ${isAr ? "text-right" : "text-left"}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <CalendarDays size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.hours", "ساعات العمل")}</h3>
            </div>

            <ul className="space-y-4">
              {hours.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-white/20 last:border-b-0"
                >
                  <span className="text-white/90">{d.label}</span>
                  <span className="font-semibold">{d.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
