import React from "react";
import FaqAccordion from "./AboutFaq"; // الكومبوننت اللي عملناه قبل كده
import { useTranslation } from "react-i18next";

export default function AboutFaqWithImage({
  img = "/assets/clinic/faq-side.jpg", // مسار الصورة
  imgAlt,
  reverse = false // true يخلي الصورة شمال والنص يمين
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
            alt={imgAlt ?? t("faq.alt", "Clinic building")}
            className="w-full h-full rounded-2xl object-cover shadow"
          />
        </div>

        {/* الأكورديون */}
        <div className={`${reverse ? "order-1" : "order-2"}`}>
          <FaqAccordion type="single" defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
