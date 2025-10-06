// src/components/FaqAccordion.jsx
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items: itemsProp, type = "single", defaultOpen = 0 }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ✅ الأسئلة الجديدة (fallback)
  const fallbackItems = [
    {
      q: "عندكم فك خياطة ؟",
      a: "نعم متوفر بقسم الطوارئ يوميًا على مدار 24 ساعة بدون موعد.",
    },
    {
      q: "عندكم تخريم ؟",
      a: "متوفر تخريم بالمسدس فقط بقسم الطوارئ يوميًا بدون موعد مع الحلق الطبي 70 ريال / الحلق من عندك 50 ريال.",
    },
    {
      q: "كم سعر الأشعة ؟",
      a: "يحدد حسب المنطقة المراد عمل الأشعة لها (عند تحديد المنطقة اسأل قسم الأشعة عن السعر).",
    },
    {
      q: "كم سعر التحليل الشامل ؟",
      a: "متوفر باقة صحتك وصحتك بلس 999 ريال.",
    },
    {
      q: "كم سعر الحقن العضلي ؟",
      a: "متوفر بالطوارئ يوميًا على مدار 24 ساعة بدون موعد السعر 10 ريال.",
    },
    {
      q: "كم سعر إبر الحديد ؟",
      a: "يحدد حسب الوصفة إذا كان إبرولة حديد أو ألبوتين.",
    },
    {
      q: "كم سعر البخار ؟",
      a: "يحدد حسب الوصفة — يلزم وجود وصفة طبية للبخار يبدأ من 70 ريال / في حال عدم وجود وصفة يلزم الكشف 50 ريال للطبيب العام.",
    },
  ];

  // ✅ نجيب البيانات من الترجمة أو props أو fallback
  const items = useMemo(() => {
    if (Array.isArray(itemsProp) && itemsProp.length) return itemsProp;
    const raw = t("faq.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;
    return fallbackItems;
  }, [i18n.language, itemsProp, t]);

  // حالة الفتح
  const [open, setOpen] = useState(
    type === "single" ? defaultOpen : Array(items.length).fill(false).map((_, i) => i < 1)
  );

  const toggle = (i) => {
    if (type === "single") setOpen((cur) => (cur === i ? -1 : i));
    else {
      setOpen((cur) => {
        const copy = [...cur];
        copy[i] = !copy[i];
        return copy;
      });
    }
  };

  const isOpen = (i) => (type === "single" ? open === i : open[i]);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-6`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("faq.kicker", "الأسئلة الشائعة")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-gray-900 dark:text-white">
            {t("faq.title", "إجابات على أكثر الاستفسارات")}
          </h2>
        </div>

        {/* القائمة */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm">
          {items.map((it, i) => {
            const openNow = isOpen(i);
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;

            return (
              <div key={i} className="border-b last:border-b-0 border-black/10 dark:border-white/10">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={openNow}
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-start
                    ${openNow ? "bg-[color:color-mix(in_oklab,var(--color-primary)_8%,transparent)]" : ""}
                    hover:bg-black/5 dark:hover:bg-white/5 transition`}
                >
                  <span
                    className={`font-medium ${
                      openNow ? "text-[--color-primary]" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {it.q}
                  </span>
                  {openNow ? (
                    <Minus size={18} color="var(--color-primary)" className="[stroke-width:2]" />
                  ) : (
                    <Plus size={18} color="var(--color-primary)" className="[stroke-width:2]" />
                  )}
                </button>

                {/* المحتوى */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`px-4 sm:px-5 pb-5 text-gray-600 dark:text-gray-300 leading-7 ${
                    openNow ? "block" : "hidden"
                  }`}
                >
                  {it.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
