import React from "react";
import BookingWidget from "./BookingWidget";
import PromoWithVideo from "./PromoWithVideo";

export default function BookingAndVideo({ reverse = false }) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
        
        {/* ويدجت الحجز */}
        <div className={`${reverse ? "order-2" : "order-1"}`}>
          <BookingWidget
            clinicWhatsApp="+201028526504"
            clinicEmail="ammarbrakat731@gmail.com"
          />
        </div>

        {/* البانر بالفيديو */}
        <div className={`${reverse ? "order-1" : "order-2"}`}>
          <PromoWithVideo
            youtubeId="m1oR0xN9r2c" // ✅ ضع ID الفيديو
            badgeImg="/assets/cbahi.png" // ✅ لو في ملف public/assets/cbahi.png
            welcome="مرحباً بكم في مجمع عيادات  "
            headline="صحتك وصحة عائلتك هي من أولوياتنا"
            subTitle="صرح متكامل تم إنشاؤه على مواصفات سباهي"
            paragraph={`في`}
            ctaText="احجز موعدًا"
            ctaHref="/contact"
          />
        </div>
      </div>
    </section>
  );
}
