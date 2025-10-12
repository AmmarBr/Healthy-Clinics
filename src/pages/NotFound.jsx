// src/pages/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const nav = useNavigate();
  const { t } = useTranslation("notFound");


  const title = t("title", "الصفحة غير موجودة");
  const subtitle = t("subtitle", "الرابط غير صحيح أو تم نقل الصفحة.");
  const message = t("message", "⚡ لا تقلق — سنُعيدك للطريق الصحيح بسرعة.");
  const home = t("actions.home", "العودة إلى الرئيسية");
  const back = t("actions.back", "الرجوع للخلف");

  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      {/* خلفية ناعمة */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:44px_44px]" />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vmin] w-[40vmin] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in_oklab,var(--color-primary) 40%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* المحتوى */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* 404 مع حركة */}
        <div className="inline-block relative z-0 animate-[float404_5s_ease-in-out_infinite]">
          <h1
            className="select-none text-[120px] sm:text-[160px] lg:text-[200px] font-black leading-none tracking-tight
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-[color:var(--color-primary)] via-[#ffd86b] to-[color:var(--color-primary)]
                       animate-[shine_8s_linear_infinite]
                       drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] pointer-events-none"
            style={{ WebkitBackgroundClip: "text", backgroundSize: "300% 300%" }}
            aria-hidden
          >
            404
          </h1>

          {/* الانعكاس */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[90%] opacity-25 blur-[6px] -z-10"
            aria-hidden
          >
            <h1
              className="text-[120px] sm:text-[160px] lg:text-[200px] font-black leading-none tracking-tight
                         bg-clip-text text-transparent
                         bg-gradient-to-r from-[color:var(--color-primary)] via-[#ffd86b] to-[color:var(--color-primary)]"
              style={{ transform: "scaleY(-1)", WebkitBackgroundClip: "text" }}
            >
              404
            </h1>
          </div>
        </div>

        {/* العنوان والنص */}
        <div className="mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
            {subtitle}
          </p>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {message}
          </p>
        </div>

        {/* الأزرار */}
        <div className="mt-8 relative z-10 flex justify-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => nav(-1)}
            className="rounded-xl border px-5 py-2.5 text-sm border-neutral-300 text-neutral-700 hover:bg-neutral-100
                       dark:border-white/20 dark:text-neutral-200 dark:hover:bg-white/10 transition"
          >
            {back}
          </button>
          <Link
            to="/"
            className="rounded-xl px-5 py-2.5 text-sm text-white shadow-md border transition hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-primary)",
            }}
          >
            {home}
          </Link>
        </div>
      </section>

      {/* الحركات */}
      <style>{`
        @keyframes float404 { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-15px) } }
        @keyframes shine { 0%{ background-position:0% 50% } 100%{ background-position:200% 50% } }
        @media (prefers-reduced-motion: reduce) { *{ animation: none !important; transition: none !important; } }
      `}</style>
    </main>
  );
}
