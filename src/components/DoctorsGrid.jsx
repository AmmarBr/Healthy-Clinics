// src/components/DoctorsGrid.jsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

// صور افتراضية (بدّلها بصور الأطباء الفعلية)
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

function normalizeTel(v = "") {
  return v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");
}

export default function DoctorsGrid({ doctors }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // داتا افتراضية لو مفيش props
  const data = useMemo(
    () =>
      doctors ?? [
        {
          id: "michael-linden",
          name: t("docs.michael", "Dr. Michael Linden"),
          title: t("docs.throat", "Throat Specialist"),
          about: t("docs.aboutShort", "نبذة مختصرة عن خبرات الطبيب والإجراءات الأكثر شيوعًا."),
          phone: "+1-212-333-7078",
          email: "example@example.com",
          img: img1,
        },
        {
          id: "max-turner",
          name: t("docs.max", "Dr. Max Turner"),
          title: t("docs.cardiologist", "Cardiologist"),
          about: t("docs.aboutShort", "نبذة مختصرة عن خبرات الطبيب والإجراءات الأكثر شيوعًا."),
          phone: "+1-212-533-5454",
          email: "example@example.com",
          img: img2,
        },
        {
          id: "amy-adams",
          name: t("docs.amy", "Dr. Amy Adams"),
          title: t("docs.rehab", "Rehabilitation Therapy"),
          about: t("docs.aboutShort", "نبذة مختصرة عن خبرات الطبيب والإجراءات الأكثر شيوعًا."),
          phone: "+1-212-333-7078",
          email: "example@example.com",
          img: img3,
        },
        {
          id: "julia-jameson",
          name: t("docs.julia", "Dr. Julia Jameson"),
          title: t("docs.peds", "Pediatrician"),
          about: t("docs.aboutShort", "نبذة مختصرة عن خبرات الطبيب والإجراءات الأكثر شيوعًا."),
          phone: "+1-212-555-7575",
          email: "example@example.com",
          img: img4,
        },
      ],
    [i18n.language, doctors, t]
  );

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-6`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("docs.kicker", "Professionals")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">
            {t("docs.gridTitle", "Our Doctors")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((d) => (
            <article
              key={d.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm flex flex-col"
            >
              {/* صورة */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* محتوى */}
              <div className="p-5 flex-1">
                <Link
                  to={`/doctors/${d.id}`}
                  className="text-[--color-primary] text-lg font-semibold hover:underline underline-offset-4"
                >
                  {d.name}
                </Link>
                <div className="mt-1 text-gray-600 dark:text-gray-300">
                  {d.title}
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
                  {d.about}
                </p>
              </div>

              {/* معلومات الاتصال */}
              <div className="mt-auto border-t border-black/5 dark:border-white/10">
                <a
                  href={`tel:${normalizeTel(d.phone)}`}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Phone size={16} color="var(--color-primary)" className="[stroke-width:2]" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {d.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  <Mail size={16} color="var(--color-primary)" className="[stroke-width:2]" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {d.email}
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
