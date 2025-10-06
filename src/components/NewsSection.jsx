// src/components/NewsSection.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

export default function NewsSection({ posts: postsProp, autoplayDelay = 4000 }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  // ✅ 4 مقالات فقط بنفس التصميم والطول
  const posts = useMemo(() => {
    if (Array.isArray(postsProp) && postsProp.length) return postsProp;

    return [
      {
        id: "post-1",
        date: isAr ? "10 فبراير 2025" : "Feb 10, 2025",
        title: isAr ? "كيف تحافظ على صحة عائلتك اليومية؟" : "How to Maintain Your Family’s Daily Health",
        excerpt: isAr
          ? "تعرف على أفضل الممارسات للحفاظ على صحة العائلة في الحياة اليومية وتجنب الأمراض الموسمية."
          : "Learn best practices to keep your family healthy and avoid seasonal diseases.",
        img: img1,
        to: "/blog/post-1",
      },
      {
        id: "post-2",
        date: isAr ? "12 فبراير 2025" : "Feb 12, 2025",
        title: isAr ? "فوائد الفحص الدوري لصحتك" : "Benefits of Regular Health Checkups",
        excerpt: isAr
          ? "الفحوصات الدورية تساعد في اكتشاف الأمراض مبكرًا وتحسين جودة الحياة بشكل ملحوظ."
          : "Regular checkups help detect diseases early and improve quality of life significantly.",
        img: img2,
        to: "/blog/post-2",
      },
      {
        id: "post-3",
        date: isAr ? "15 فبراير 2025" : "Feb 15, 2025",
        title: isAr ? "نصائح لتقوية المناعة للأطفال" : "Tips to Boost Kids’ Immunity",
        excerpt: isAr
          ? "طرق فعالة لتقوية مناعة الأطفال من خلال التغذية السليمة والنشاط البدني المنتظم."
          : "Effective ways to strengthen children’s immunity through proper nutrition and exercise.",
        img: img3,
        to: "/blog/post-3",
      },
      {
        id: "post-4",
        date: isAr ? "18 فبراير 2025" : "Feb 18, 2025",
        title: isAr ? "أهمية النوم الجيد لصحة الجسم" : "The Importance of Good Sleep",
        excerpt: isAr
          ? "النوم الكافي يساعد على تجديد طاقة الجسم وتعزيز التركيز والمناعة بشكل طبيعي."
          : "Adequate sleep helps restore energy and enhances focus and immunity naturally.",
        img: img4,
        to: "/blog/post-4",
      },
    ];
  }, [i18n.language, isAr, postsProp]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-8`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("news.kicker", "Latest News")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">
            {t("news.title", "Stay Informed with Healthy Clinics")}
          </h2>
        </div>

        {/* شبكة المقالات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border
                         border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition
                         flex flex-col h-full min-h-[480px]" // ✅ نفس الطول
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarDays size={16} color="var(--color-primary)" className="[stroke-width:2]" />
                    <span>{p.date}</span>
                  </div>

                  <Link
                    to={p.to}
                    className="mt-3 block text-[--color-primary] font-semibold hover:underline underline-offset-4"
                  >
                    {p.title}
                  </Link>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6 line-clamp-4">
                    {p.excerpt}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    to={p.to}
                    className="inline-block text-sm font-medium text-[--color-primary] hover:underline underline-offset-4"
                  >
                    {t("news.readMore", "Read More")}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
