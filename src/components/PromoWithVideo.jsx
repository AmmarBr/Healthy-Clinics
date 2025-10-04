// src/components/PromoWithVideo.jsx
import React, { useEffect, useState } from "react";

export default function PromoWithVideo({
  youtubeId,
  badgeImg,
  badgeAlt = "Badge",
  welcome = "مرحباً بكم في عيادات هلثي",
  headline = "صحتك وصحة عائلتك هي من أولوياتنا",
  subTitle = "صرح متكامل تم إنشاؤه على مواصفات سباهي",
  paragraph = "",
  ctaText = "احجز موعدًا",
  ctaHref = "/contact",
  align = "right", // "right" | "left" | "center"
}) {
  const [showVideo, setShowVideo] = useState(false);

  // إغلاق الفيديو بالـ Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowVideo(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // محاذاة الكارد في الشاشات الكبيرة
  const posClass =
    align === "left"
      ? "md:justify-start"
      : align === "center"
        ? "md:justify-center"
        : "md:justify-end";

  return (
    <>
      <div
        className={`z-20 relative w-full px-4 sm:px-6 lg:px-8
                    md:absolute md:left-4 md:inset-0 md:flex md:items-center ${posClass}
                    pointer-events-none`}
        aria-hidden={showVideo}
      >
        <div
          className={`
            w-full max-w-sm sm:max-w-md lg:max-w-lg
            rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg

            /* Light mode */
            bg-white/95 text-neutral-900 border border-black/10 backdrop-blur-0
            /* Dark mode */
            dark:bg-neutral-900/80 dark:text-neutral-100 dark:border-white/10 dark:backdrop-blur-sm
            /* Overlay look للشاشات الكبيرة */
            md:bg-black/20 md:text-white md:border-white/10 md:backdrop-blur-sm
            dark:md:bg-black/30
          `}
        >
          {/* الشعار */}
          {badgeImg && (
            <img
              src={badgeImg}
              alt={badgeAlt}
              className="h-14 sm:h-16 w-auto mx-auto mb-4"
              loading="lazy"
            />
          )}

          {/* النصوص */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-black/70 dark:text-white/80 md:text-white/80">
              {welcome}
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-snug md:text-white">
              {headline}
            </h2>

            <p className="mt-1 text-[--color-primary] font-semibold">{subTitle}</p>

            {paragraph && (
              <p className="mt-4 leading-7 text-black/80 dark:text-white/90 md:text-white/90 whitespace-pre-line">
                {paragraph}
              </p>
            )}
          </div>

          {/* زر التشغيل */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowVideo(true)}
              className="
                relative inline-grid place-items-center
                h-16 w-16 sm:h-18 sm:w-18
                rounded-full text-white shadow-lg hover:opacity-95 transition
                focus-visible:outline-none
              "
              style={{ backgroundColor: "var(--color-primary)" }}
              aria-label="تشغيل الفيديو"
            >
              {/* نبض باستخدام اللون الأساسي */}
              <span
                className="
                  absolute inset-0 rounded-full
                  ring-2 ring-offset-0
                  animate-[ping_2s_linear_infinite]
                "
                style={{ borderColor: "var(--color-primary)" }}
                aria-hidden
              />
              {/* حلقة خارجية رقيقة */}
              <span
                className="absolute inset-0 rounded-full border border-white/30"
                aria-hidden
              />
              {/* Play Icon */}
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 w-8 h-8"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="mt-6 text-center">
            <a
              href={ctaHref}
              className="
                inline-block rounded-lg px-6 py-2.5 text-sm font-medium text-white
                shadow-md hover:opacity-90 border
              "
              style={{
                backgroundColor: "var(--color-primary)",
                borderColor: "var(--color-primary)",
              }}
            >
              {ctaText}
            </a>
          </div>

          {/* CTA */}

        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {showVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] grid place-items-center
                     bg-black/80 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="Promo Video"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Close button */}
            <button
              aria-label="إغلاق الفيديو"
              onClick={() => setShowVideo(false)}
              className="absolute -top-3 -right-3 sm:top-3 sm:right-3
                         h-9 w-9 grid place-items-center
                         rounded-full bg-white/90 text-black
                         hover:bg-white shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.3-1.41-1.41 6.3-6.3-6.29-6.29L4.3 4.3 10.6 10.6l6.29-6.3 1.41 1.41z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
