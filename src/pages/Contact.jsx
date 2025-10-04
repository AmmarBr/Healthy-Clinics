import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import ContactStrip from "../components/ContactStrip";
import BookingWidget from "../components/BookingWidget"; // لو هتستخدم الحجز
import imghero from "../assets/Contact-us-2500px.webp";
export default function Contact() {
  const { t, i18n } = useTranslation("contact");
  const isAr = i18n.language?.startsWith("ar");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[75vh] overflow-hidden">
        <img
          src={imghero}
          alt={t("hero.alt", "Clinic front desk")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className={`text-center  text-white max-w-2xl`}>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {t("hero.title", "Contact Us")}
            </h1>
            <p className="mt-3 text-white/90">
              {t("hero.subtitle", "We’re here to help with appointments and questions.")}
            </p>
          </div>
        </div>
      </section>

      {/* شريط الاتصال السريع */}
      <ContactStrip />

      {/* Form + Info */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          {/* فورم التواصل */}
          <div className="space-y-6">
            <ContactForm />

            {/* اختياري: ويدجت الحجز */}
            {/*
            <BookingWidget
              clinicWhatsApp="+966118342222"
              clinicEmail="info@healthyclinics-sa.com"
            />
            */}
          </div>

          {/* كارت المعلومات + الخريطة */}
          <aside className="space-y-6">
            <div
              className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                         border-black/10 dark:border-white/10"
            >
              <div
                className="px-5 py-4 border-b
                           border-black/10 dark:border-white/10"
              >
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {t("info.title", "Clinic Information")}
                </h3>
              </div>

              <div className="p-5 text-sm">
                <InfoRow
                  label={t("info.address", "Address")}
                  value={t("info.addressValue", "Abi Bakr As Siddiq Rd, Al Areej, Riyadh, Saudi Arabia")}
                />
                <Divider />
                <InfoRow
                  label={t("info.hours", "Working Hours")}
                  value={t("info.hoursValue", "Sat–Thu 9:00–21:00, Fri closed")}
                />
                <Divider />
                <InfoRow
                  label={t("info.phone", "Phone")}
                  value={<span dir="ltr">{t("info.phoneValue", "+966 11 834 2222")}</span>}
                />
                <Divider />
                <InfoRow
                  label={t("info.email", "Email")}
                  value={t("info.emailValue", "info@healthyclinics-sa.com")}
                />
              </div>
            </div>

            {/* خريطة جوجل (Responsive) */}
            <div
              className="rounded-2xl overflow-hidden border
                         border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900"
            >
              <div className="px-5 py-4 border-b border-black/10 dark:border-white/10">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {t("map.title", "Location Map")}
                </h3>
              </div>

              <div className="aspect-[4/3] sm:aspect-[16/9]">
                <iframe
                  title={t("map.title", "Location Map")}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8903079201477!2d46.642319924077704!3d24.86759574497094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee534ff84a7cd%3A0xdd3a557eca5af906!2z2LnZitin2K_Yp9iqINmH2YrZhNir2Yo!5e0!3m2!1sar!2seg!4v1759071052877!5m2!1sar!2seg"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
                  <BookingWidget/>

      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-28 shrink-0 text-neutral-500">{label}</div>
      <div className="flex-1 text-neutral-900 dark:text-neutral-100">{value}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-px my-3 bg-black/10 dark:bg-white/10" />;
}
