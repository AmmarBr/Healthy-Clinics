import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";

/**
 * AboutFaq
 * props:
 * - items: [{ q, a }] اختياري (لو مبعوت هنستخدمه بدل الترجمة)
 * - type: "single" | "multi" (افتراضي single)
 * - defaultOpen: رقم السؤال المفتوح افتراضياً (single فقط)
 */
export default function AboutFaq({ items: itemsProp, type = "single", defaultOpen = 0 }) {
  const { t, i18n } = useTranslation("about");
  const isAr = i18n.language?.startsWith("ar");

  // نجمع الداتا من props أو من i18n أو fallback
  const items = useMemo(() => {
    if (Array.isArray(itemsProp) && itemsProp.length) return itemsProp;

    const raw = t("faq.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;

    // fallback بسيط في حال ماكانش فيه ترجمة
    return [
      {
        q: isAr ? "ما هي مواعيد العمل؟" : "What are your regular office hours?",
        a: isAr
          ? "نص تجريبي عن مواعيد العمل والخدمات المتاحة أثناء اليوم…"
          : "Sample text about opening hours and services available during the day…",
      },
      {
        q: isAr ? "ما هي سياسة المواعيد؟" : "What is your appointment policy?",
        a: isAr
          ? "تفاصيل عن الحجز والإلغاء وإعادة الجدولة…"
          : "Details about booking, cancellation and rescheduling…",
      },
      {
        q: isAr ? "ماذا أفعل إذا كنت مريضًا؟" : "What should I do if I’m ill?",
        a: isAr
          ? "اتصل بالعيادة أو استخدم نظام الحجز السريع عبر الموقع…"
          : "Call the clinic or use our quick booking system online…",
      },
      {
        q: isAr ? "كيف أجدد وصفتي الطبية؟" : "How do I get a refill on my prescription?",
        a: isAr
          ? "يمكنك طلب التجديد من خلال الحساب أو عن طريق خدمة العملاء…"
          : "Request a refill via your account or by contacting support…",
      },
    ];
  }, [itemsProp, t, i18n.language, isAr]);

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
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-neutral-900 dark:text-neutral-50">
            {t("faq.title", "Have some Questions?")}
          </h2>
        </div>

        {/* List — يدعم لايت/دارك */}
        <div
          className="
            rounded-2xl overflow-hidden border divide-y shadow-sm
            bg-white text-neutral-900 border-black/10 divide-black/10
            dark:bg-neutral-900 dark:text-neutral-100 dark:border-white/10 dark:divide-white/10
          "
        >
          {items.map((it, i) => {
            const openNow = isOpen(i);
            const panelId = `about-faq-panel-${i}`;
            const btnId   = `about-faq-btn-${i}`;

            return (
              <div key={i}>
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={openNow}
                  onClick={() => toggle(i)}
                  className={`
                    group w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-start
                    hover:bg-black/5 dark:hover:bg-white/5 transition-colors
                    ${openNow ? "bg-black/[0.035] dark:bg-white/[0.04]" : ""}
                  `}
                >
                  <span className={`font-medium ${openNow ? "text-[--color-primary]" : ""}`}>
                    {it.q}
                  </span>

                  {/* أيقونة + / - بنفس ستايل السكين شوت */}
                  <span
                    className="
                      inline-grid place-items-center h-7 w-7 rounded-xl
                      border bg-transparent
                      border-black/10 group-hover:bg-black/5
                      dark:border-white/15 dark:group-hover:bg-white/5
                    "
                    aria-hidden
                  >
                    {openNow ? (
                      <Minus size={16} color="var(--color-primary)" strokeWidth={2.25} />
                    ) : (
                      <Plus  size={16} color="var(--color-primary)" strokeWidth={2.25} />
                    )}
                  </span>
                </button>

                {/* Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`px-4 sm:px-5 pb-5 text-sm
                    text-neutral-600 dark:text-neutral-300 ${openNow ? "block" : "hidden"}`}
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
