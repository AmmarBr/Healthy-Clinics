import React from "react";
import { Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa"; // أيقونة واتساب

function normalizeTel(v = "") {
  return v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");
}

export default function ContactStrip({
  phone = "009660118342222", // رقم الهاتف الأساسي
  whatsapp = "009660118342222", // رقم واتساب
  address = "طريق ابي بكر الصديق، العارض، الرياض المملكة العربية السعودية",
  mapsUrl = "https://maps.app.goo.gl/PV9YoKP6CzapriLU8",
}) {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");

  const items = [
    {
      Icon: Phone,
      title: t("strip.call", "اتصل الآن"),
      value: phone,
      href: `tel:${normalizeTel(phone)}`,
      external: false,
    },
    {
      Icon: FaWhatsapp,
      title: t("strip.whatsapp", "واتساب"),
      value: normalizeTel(whatsapp),
      href: `https://wa.me/${normalizeTel(whatsapp)}?text=${encodeURIComponent(
        "السلام عليكم، أريد حجز موعد"
      )}`,
      external: true,
    },

    {
      Icon: MapPin,
      title: t("strip.visit", "زورنا"),
      value: address,
      href: mapsUrl,
      external: true,
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-black/5 dark:border-white/10 shadow-sm">
          {items.map((it, idx) => (
            <a
              key={idx}
              href={it.href}
              {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`flex items-center gap-4 p-5 sm:p-6 hover:bg-black/5 dark:hover:bg-white/5 transition
              ${idx !== 0 ? "border-t sm:border-t-0 ltr:sm:border-l rtl:sm:border-r border-black/5 dark:border-white/10" : ""}`}
              aria-label={`${it.title}: ${it.value}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[--color-primary] bg-white/10">
                <it.Icon size={22} color="var(--color-primary)" className="[stroke-width:2]" />
              </span>
              <div className={`${isAr ? "text-right" : "text-left"}`}>
                <div className="text-gray-500 text-sm">{it.title}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{it.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
