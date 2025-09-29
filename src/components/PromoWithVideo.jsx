import React, { useState } from "react";

export default function PromoWithVideo({
  youtubeId,
  badgeImg,            // شعار (اختياري)
  badgeAlt = "Badge",
  welcome,
  headline,
  subTitle,
  paragraph,
  ctaText = "احجز موعدًا",
  ctaHref = "/contact",
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative rounded-2xl border bg-neutral-50 dark:bg-neutral-900 
                    border-black/10 dark:border-white/10 p-6 sm:p-8 text-center">
      
      {/* شعار (لو موجود) */}
      {badgeImg && (
        <img
          src={badgeImg}
          alt={badgeAlt}
          className="h-16 w-auto mx-auto mb-4"
          loading="lazy"
        />
      )}

      {/* ترحيب */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{welcome}</p>

      {/* العنوان */}
      <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
        {headline}
      </h2>
      <p className="mt-1 text-primary font-semibold">{subTitle}</p>

      {/* الفقرة */}
      <p className="mt-4 leading-7 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
        {paragraph}
      </p>

      {/* زرار تشغيل الفيديو */}
      <div className="mt-6 flex justify-center">
        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="flex h-16 w-16 items-center justify-center rounded-full 
                       bg-green-600 hover:bg-green-700 transition shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke="none"
              className="w-8 h-8"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </button>
        ) : (
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="Promo Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href={ctaHref}
          className="inline-block rounded-md bg-green-700 px-6 py-3 text-sm font-medium 
                     text-white shadow-md hover:bg-green-800"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
