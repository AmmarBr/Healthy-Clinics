import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items: itemsProp, type = "single", defaultOpen = 0 }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // داتا من i18n أو props أو فوولباك
  const items = useMemo(() => {
    if (Array.isArray(itemsProp) && itemsProp.length) return itemsProp;
    const raw = t("faq.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;
    return [
      {
        q: isAr ? "ما هي مواعيد العمل؟" : "What are your regular office hours?",
        a:
          isAr
            ? "نص تجريبي عن مواعيد العمل والخدمات المتاحة أثناء اليوم…"
            : "Sample text about opening hours and services available during the day…",
      },
      {
        q: isAr ? "ما هي سياسة المواعيد؟" : "What is your appointment policy?",
        a:
          isAr
            ? "تفاصيل عن الحجز والإلغاء وإعادة الجدولة…"
            : "Details about booking, cancellation and rescheduling…",
      },
      {
        q: isAr ? "ماذا أفعل إذا كنت مريضًا؟" : "What should I do if I’m ill?",
        a:
          isAr
            ? "اتصل بالعيادة أو استخدم نظام الحجز السريع عبر الموقع…"
            : "Call the clinic or use our quick booking system online…",
      },
      {
        q: isAr ? "كيف أجدد وصفتي الطبية؟" : "How do I get a refill on my prescription?",
        a:
          isAr
            ? "يمكنك طلب التجديد من خلال الحساب أو عن طريق خدمة العملاء…"
            : "Request a refill via your account or by contacting support…",
      },
    ];
  }, [i18n.language, itemsProp, t, isAr]);

  // حالة الفتح
  const [open, setOpen] = useState(
    type === "single" ? defaultOpen : Array(items.length).fill(false).map((_, i) => i < 1)
  );

  const toggle = (i) => {
    if (type === "single") setOpen((cur) => (cur === i ? -1 : i));
    else
      setOpen((cur) => {
        const copy = [...cur];
        copy[i] = !copy[i];
        return copy;
      });
  };

  const isOpen = (i) => (type === "single" ? open === i : open[i]);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-6`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("faq.kicker", "FAQ")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">
            {t("faq.title", "Have some Questions?")}
          </h2>
        </div>

        {/* List */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900">
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

                {/* Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`px-4 sm:px-5 pb-5 text-gray-600 dark:text-gray-300
                    ${openNow ? "block" : "hidden"}`}
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
