// src/components/AboutVisionWithImage.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutVisionWithImage({
  img = "/assets/clinic/faq-side.jpg",
  imgAlt,
  reverse = false, // يعكس الترتيب (صورة شمال أو يمين)
}) {
  const { t, i18n } = useTranslation("about");
  const isAr = i18n.language?.startsWith("ar");

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
        {/* الصورة */}
        <div className={`${reverse ? "order-2" : "order-1"}`}>
          <img
            src={img}
            alt={imgAlt ?? t("vision.alt", "Healthy Clinic Building")}
            className="w-full h-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* النصوص */}
        <div className={`${reverse ? "order-1" : "order-2"} text-center lg:text-start`}>
          <span className="text-[color:var(--color-primary)] font-semibold text-sm sm:text-base">
            {t("vision.kicker", "رؤيتنا")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-neutral-900 dark:text-white">
            {t("vision.title", "نطمح أن نكون الوجهة الأولى للرعاية الصحية المتكاملة")}
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 leading-7 text-base sm:text-lg">
            {t(
              "vision.text",
              "نؤمن بأن صحة الإنسان هي الأساس لحياة أفضل، لذلك نعمل على تقديم خدمات طبية متميزة بأحدث التقنيات وبأعلى معايير الجودة لتلبية احتياجات جميع أفراد المجتمع."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
