import React, { useMemo } from "react";
import { Stethoscope, Clock, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Highlights({ hours }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ساعات عمل افتراضية مبنية على i18n (تقدر تغيّر الأوقات براحتك)
  const defaultHours = useMemo(() => ([
    { label: t("highlights.monFri"), time: "08:00 – 17:00" },
    { label: t("highlights.sat"),    time: "09:30 – 17:30" },
    { label: t("highlights.sun"),    time: "09:30 – 15:00" },
  ]), [i18n.language]);

  // لو مرّرت hours من برّا بصيغة {label,time} أو {labelEn,labelAr,time} هنظبطها
  const list = useMemo(() => {
    if (!hours) return defaultHours;
    return hours.map(d => ({
      label: d.label ?? (isAr ? d.labelAr : d.labelEn),
      time: d.time,
    }));
  }, [hours, defaultHours, isAr]);

  // خلفيات متدرجة من اللون الرئيسي
  const bgA = "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_92%,#000),color-mix(in_oklab,var(--color-primary)_75%,#000))]";
  const bgB = "bg_[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_84%,#000),color-mix(in_oklab,var(--color-primary)_62%,#000))]".replace("_","-");
  const bgC = "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_76%,#000),color-mix(in_oklab,var(--color-primary)_54%,#000))]";

  const cardBase = "relative overflow-hidden rounded-2xl p-8 text-white shadow-sm [text-shadow:0_1px_1px_rgba(0,0,0,.25)]";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* 1) Top Doctors */}
        <div className={`${cardBase} ${bgA}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <Stethoscope size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.topDoctors")}</h3>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              {t("highlights.topDoctorsTxt")}
            </p>
            <a
              href="/doctors"
              className="inline-block px-5 py-2.5 rounded-xl border border-white/70 hover:bg-white/10 transition"
            >
              {t("highlights.readMore")}
            </a>
          </div>
        </div>

        {/* 2) 24 Hours Service */}
        <div className={`${cardBase} ${bgB}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <Clock size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.service24")}</h3>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              {t("highlights.service24Txt")}
            </p>
            <a
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-xl border border-white/70 hover:bg-white/10 transition"  /* ← أصلحنا الكلاس */
            >
              {t("highlights.readMore")}
            </a>
          </div>
        </div>

        {/* 3) Opening Hours */}
        <div className={`${cardBase} ${bgC} ${isAr ? "text-right" : "text-left"}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                <CalendarDays size={20} color="white" />
              </span>
              <h3 className="text-xl font-semibold">{t("highlights.hours")}</h3>
            </div>

            <ul className="space-y-4">
              {list.map((d, i) => (
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
