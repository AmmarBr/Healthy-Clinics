"use client";
import React, { useMemo, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Plus, Minus } from "lucide-react";

/** يزيل رموز اتجاه مخفية ممكن تكسر التنسيق */
function sanitizeBidi(str) {
  return String(str).replace(/[\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]/g, "");
}

/** فول-باك: يحوّل نص عادي فيه Markdown أو URL خام إلى عناصر <a> */
function renderFallback(text, label) {
  const s = sanitizeBidi(text);
  const out = [];
  let last = 0;

  // Markdown: [label](url) — نستبدل أي لابل بـ label الممرّر
  const md = /\[([^\]]+)\]\(\s*(https?:\/\/[^\s)]+)\s*\)/g;
  let m;
  while ((m = md.exec(s)) !== null) {
    const [full, , url] = m;
    if (m.index > last) out.push(s.slice(last, m.index));
    out.push(
      <a
        key={`md-${m.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[--color-primary] underline underline-offset-4 break-all"
      >
        {label}
      </a>
    );
    last = m.index + full.length;
  }
  if (last < s.length) out.push(s.slice(last));

  if (out.length > 1) return <span className="whitespace-pre-wrap">{out}</span>;

  // URLs خام
  const urlRe = /(https?:\/\/[^\s)]+)/g;
  const parts = s.split(urlRe);
  if (parts.length > 1) {
    const nodes = [];
    for (let i = 0; i < parts.length; i++) {
      const chunk = parts[i];
      if (urlRe.test(chunk)) {
        nodes.push(
          <a
            key={`raw-${i}`}
            href={chunk}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-primary] underline underline-offset-4 break-all"
          >
            {label}
          </a>
        );
      } else {
        nodes.push(chunk);
      }
    }
    return <span className="whitespace-pre-wrap">{nodes}</span>;
  }

  return <span className="whitespace-pre-wrap">{s}</span>;
}

/**
 * AboutFaq
 * props:
 * - items: [{ q, a }]
 * - type: "single" | "multi" (افتراضي single)
 * - defaultOpen: رقم السؤال المفتوح افتراضياً (single فقط)
 */
export default function AboutFaq({ items: itemsProp, type = "single", defaultOpen = 0 }) {
  const { t, i18n } = useTranslation("about");
  const isAr = i18n.language?.startsWith("ar");
  const linkLabel = isAr ? "هنا" : "here";

  // دالة تبني <a> بالرابط اللي تحبّه (غيّر الـhref لو مختلف)
  const LinkComp = (
    <a
      href="https://healthy-clinics-2.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[--color-primary] underline underline-offset-4 break-all"
    />
  );

  // اجلب العناصر من props أو من i18n
  const items = useMemo(() => {
    if (Array.isArray(itemsProp) && itemsProp.length) return itemsProp;

    const raw = t("faq.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;

    // fallback بسيط
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
    else setOpen((cur) => ((cur[i] = !cur[i]), [...cur]));
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

        {/* List */}
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
            const btnId = `about-faq-btn-${i}`;

            const aStr = typeof it.a === "string" ? it.a : null;
            const hasLinkTag = aStr?.includes("<link>");

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
                      <Plus size={16} color="var(--color-primary)" strokeWidth={2.25} />
                    )}
                  </span>
                </button>

                {/* Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`px-4 sm:px-5 pb-5 text-sm text-neutral-600 dark:text-neutral-300 ${
                    openNow ? "block" : "hidden"
                  }`}
                >
                  {/** 1) الحل الأساسي: استخدم Trans لو الترجمة فيها <link> */}
                  {hasLinkTag ? (
                    <Trans
                      i18nKey={null}
                      defaults={aStr}
                      values={{ label: linkLabel }}
                      components={{ link: LinkComp }}
                    />
                  ) : /** 2) فول-باك: حوّل Markdown أو URL خام إلى <a> بنص هنا/here */
                  aStr ? (
                    renderFallback(aStr, linkLabel)
                  ) : /** 3) لو a كائن {text,label,url} نعرضه مباشرة بـ Trans pseudo (بدون ترجمة) */ typeof it.a ===
                    "object" && it.a?.url ? (
                    <span className="whitespace-pre-wrap">
                      {it.a.text ? `${it.a.text} ` : ""}
                      <a
                        href={it.a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--color-primary] underline underline-offset-4 break-all"
                      >
                        {it.a.label || linkLabel}
                      </a>
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
