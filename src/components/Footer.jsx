import React from "react";
import { useTranslation } from "react-i18next";
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Linkedin, Youtube
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const BrandIcon = ({ as: Icon, size = 16, className = "" }) => (
  <Icon size={size} color="var(--color-primary)" className={`[stroke-width:2] ${className}`} />
);

export default function Footer() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language?.startsWith("ar");
  const year = new Date().getFullYear();

  const phone = "009660118342222";
  const email = "info@healthyclinics-sa.com";
  const address = t(
    "footer.address",
    "طريق ابي بكر الصديق، العارض، الرياض، المملكة العربية السعودية"
  );

  return (
    <footer className="mt-16 bg-gray-50 dark:bg-gray-950 border-t border-black/5 dark:border-white/10">
      {/* شريط CTA صغير (اختياري) */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-gray-700 dark:text-gray-300">
            {t("footer.cta", "هل تحتاج مساعدة أو تريد حجز موعد؟ يسعدنا خدمتك.")}
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white transition"
            >
              <BrandIcon as={Phone} />
              {t("footer.call", "اتصل الآن")}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[--color-primary] text-white hover:opacity-90 transition"
            >
              {t("footer.book", "احجز موعد")}
            </Link>
          </div>
        </div>
      </div>

      {/* الجسم الرئيسي */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* 1) البراند + نبذة + سوشيال */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt={t("footer.altLogo", "Healthy Clinics")} className="h-12 w-auto" />
            </Link>
            <p className={`mt-4 text-gray-600 dark:text-gray-300 ${isAr ? "text-right" : "text-left"}`}>
              {t(
                "footer.about",
                "مركز صحي متكامل يقدم عيادات متعددة مع نخبة من الأطباء وخدمة عملاء على مدار اليوم."
              )}
            </p>

            <div className="mt-4 flex gap-2">
              <a href="#" aria-label="Facebook"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Facebook} />
              </a>
              <a href="#" aria-label="Instagram"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Instagram} />
              </a>
              <a href="#" aria-label="LinkedIn"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Linkedin} />
              </a>
              <a href="#" aria-label="YouTube"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Youtube} />
              </a>
            </div>
          </div>

          {/* 2) روابط سريعة */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("footer.quick", "روابط سريعة")}
            </h3>
            <ul className={`mt-4 space-y-3 ${isAr ? "text-right" : "text-left"}`}>
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"> {t("nav.home", "الرئيسية")} </Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"> {t("nav.services", "الخدمات")} </Link></li>
              <li><Link to="/doctors" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"> {t("nav.doctors", "الأطباء")} </Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"> {t("nav.about", "من نحن")} </Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"> {t("nav.contact", "تواصل معنا")} </Link></li>
            </ul>
          </div>

          {/* 3) خدمات/عيادات (أمثلة) */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("footer.services", "العيادات")}
            </h3>
            <ul className={`mt-4 space-y-3 ${isAr ? "text-right" : "text-left"}`}>
              <li><Link to="/clinics/derma" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("clinic.derma", "الجلدية")}</Link></li>
              <li><Link to="/clinics/dental" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("clinic.dental", "الأسنان")}</Link></li>
              <li><Link to="/clinics/peds" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("clinic.peds", "الأطفال")}</Link></li>
              <li><Link to="/clinics/internal" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("clinic.internal", "الباطنة")}</Link></li>
              <li><Link to="/clinics/ent" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("clinic.ent", "الأنف والأذن")}</Link></li>
            </ul>
          </div>

          {/* 4) تواصل معنا */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("footer.contact", "تواصل معنا")}
            </h3>
            <ul className={`mt-4 space-y-4 text-gray-700 dark:text-gray-300 ${isAr ? "text-right" : "text-left"}`}>
              <li className="flex items-start gap-3">
                <BrandIcon as={MapPin} className="mt-1" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={Phone} />
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-[--color-primary]">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={Mail} />
                <a href={`mailto:${email}`} className="hover:text-[--color-primary]">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={Clock} />
                <span>{t("footer.hours", "يومياً 9:00 ص – 10:00 م")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="border-t border-black/5 dark:border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} {t("footer.rights", "جميع الحقوق محفوظة")}.
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link to="/privacy" className="hover:text-[--color-primary]">{t("footer.privacy", "سياسة الخصوصية")}</Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-[--color-primary]">{t("footer.terms", "الشروط والأحكام")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
