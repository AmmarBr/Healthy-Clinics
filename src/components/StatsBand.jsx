// src/components/StatsBand.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function useCount(to = 0, start = false, duration = 1500) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();
  useEffect(() => {
    if (!start) { setValue(0); return; }
    const from = 0, t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      setValue(Math.round(from + (to - from) * ease(p)));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [to, start, duration]);
  return value;
}

function Counter({ to, start, duration, suffix = "", locale }) {
  const val = useCount(to, start, duration);
  const formatted = new Intl.NumberFormat(locale || undefined).format(val);
  return <span>{formatted}{suffix}</span>;
}

export default function StatsBand({ items: itemsProp, duration = 1600, tone = "brand" }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  const items = useMemo(() => {
    if (Array.isArray(itemsProp)) return itemsProp;
    const raw = t("stats.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw)) return raw;
    return [
      { value: 100,  label: isAr ? "الجودة" : "Quality",              suffix: "%" },
      { value: 2480, label: isAr ? "مرضى سنويًا" : "Patients a year" },
      { value: 26,   label: isAr ? "طاقم العمل" : "People working" },
      { value: 38,   label: isAr ? "سنوات خبرة" : "Years of experience" },
      { value: 7856, label: isAr ? "ابتسامات سعيدة" : "Happy Smiles" },
    ];
  }, [itemsProp, i18n.language]);

  // تشغيل العد عند ظهور السكشن
  const bandRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); }}, {threshold: 0.35});
    if (bandRef.current) io.observe(bandRef.current);
    return () => io.disconnect();
  }, []);

  // ثيمات الألوان الأساسية
  const tones = {
    brand:
      "text-white bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-primary)_88%,#000),color-mix(in_oklab,var(--color-primary)_70%,#000))]",
    light:
      "text-gray-900 bg-[color:color-mix(in_oklab,var(--color-primary)_12%,white)]",
    dark:
      "text-white bg-[color:color-mix(in_oklab,var(--color-primary)_92%,#000)]",
  };
  const labelColor =
    tone === "light" ? "text-gray-700" : "text-white/90";

  return (
    <section ref={bandRef} className={`relative py-10 sm:py-12 ${tones[tone]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 text-center">
          {items.map((it, idx) => (
            <div key={idx} className="px-2">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight">
                <Counter
                  to={Number(it.value) || 0}
                  start={inView}
                  duration={duration}
                  suffix={it.suffix || ""}
                  locale={i18n.language}
                />
              </div>
              <div className={`mt-2 text-sm sm:text-base ${labelColor}`}>
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
