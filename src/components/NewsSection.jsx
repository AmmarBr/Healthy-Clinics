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
import promoImg from "../assets/4.jpg";

export default function NewsSection({ posts: postsProp, promo: promoProp, autoplayDelay = 3500 }) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  const posts = useMemo(() => {
    if (Array.isArray(postsProp) && postsProp.length) return postsProp;
    const raw = t("news.items", { returnObjects: true, defaultValue: [] });
    if (Array.isArray(raw) && raw.length) return raw;

    return [
      {
        id: "post-1",
        date: isAr ? "20 نوفمبر 2015" : "November 20, 2015",
        title: isAr ? "كيف تتعامل مع أمراض أطفالك الغامضة؟" : "How to Handle Your Kids’ Mystery Ailments",
        excerpt: isAr ? "نص مختصر عن الموضوع ونصائح عامة للآباء…" : "Short intro about the topic and general tips for parents…",
        img: img1,
        to: "/blog/post-1",
      },
      {
        id: "post-2",
        date: isAr ? "15 نوفمبر 2015" : "November 15, 2015",
        title: isAr ? "هل تعرف أساسيات الرعاية الصحية؟" : "Do You Know the ABCs of Health Care?",
        excerpt: isAr ? "ملخص سريع مع أفضل الممارسات…" : "Quick summary with best practices…",
        img: img2,
        to: "/blog/post-2",
      },
      {
        id: "post-3",
        date: isAr ? "10 نوفمبر 2015" : "November 10, 2015",
        title: isAr ? "أسئلة صحة الأطفال" : "Kids’ Health Questions",
        excerpt: isAr ? "أكثر الأسئلة شيوعًا وإجابات مختصرة…" : "Most common questions with concise answers…",
        img: img3,
        to: "/blog/post-3",
      },
    ];
  }, [postsProp, i18n.language, t, isAr]);

  const promo = useMemo(
    () =>
      promoProp || {
        img: promoImg,
        title: isAr ? "تأمين صحي" : "Health Insurance",
        subtitle: isAr ? "رعاية فردية مخصّصة" : "Medcenter with individual approach",
        to: "/services/insurance",
      },
    [promoProp, isAr]
  );

  const canLoop = posts.length > 3;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`${isAr ? "text-right" : "text-left"} mb-6`}>
          <span className="text-[--color-primary] text-sm font-medium">
            {t("news.kicker", "Latest News")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">
            {t("news.title", "Be the first to read")}
          </h2>
        </div>

        {/* لاحظ items-stretch + بانر أطول */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* السلايدر */}
          <div className="lg:col-span-9">
            <Swiper
              key={isAr ? "rtl" : "ltr"}
              dir={isAr ? "rtl" : "ltr"}
              modules={[Pagination, Autoplay, A11y]}
              autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop={canLoop}
              rewind={!canLoop}
              pagination={{ clickable: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {posts.map((p) => (
                <SwiperSlide key={p.id}>
                  <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm h-full flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>

                    <div className="p-5 flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarDays size={16} color="var(--color-primary)" className="[stroke-width:2]" />
                        <span>{p.date}</span>
                      </div>

                      <Link
                        to={p.to}
                        className="mt-3 block text-[--color-primary] font-semibold hover:underline underline-offset-4"
                      >
                        {p.title}
                      </Link>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6">
                        {p.excerpt}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* البانر الجانبي الطويل */}
          <aside className="lg:col-span-3">
            <Link to={promo.to} className="group block rounded-2xl overflow-hidden">
              <div className="relative min-h-[28rem] sm:min-h-[32rem] lg:min-h-[30rem]">
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.25))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{promo.title}</h3>
                  <p className="text-white/90">{promo.subtitle}</p>
                </div>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
