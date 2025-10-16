// src/components/Footer.jsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { DEPARTMENTS } from "../lib/departments";
import { CgWorkAlt } from "react-icons/cg";
import { FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BrandIcon = ({ as: Icon, size = 16, className = "" }) => (
  <Icon size={size} color="var(--color-primary)" className={`[stroke-width:2] ${className}`} />
);

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

// تقسيم إلى عمودين فقط
function toColumns(list, cols = 2) {
  const out = Array.from({ length: cols }, () => []);
  list.forEach((item, idx) => {
    out[idx % cols].push(item);
  });
  return out;
}

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

  // كل العيادات من DEPARTMENTS
  const clinicColumns = useMemo(() => {
    const list = (DEPARTMENTS || []).map(d => ({
      to: `/clinics/${d.slug}`,
      label: isAr ? d.nameAr : d.nameEn,
    }));
    return toColumns(list, 2);
  }, [isAr]);

  return (
    <footer className="mt-16 bg-gray-50 dark:bg-gray-950 border-t border-black/5 dark:border-white/10">
      {/* شريط الاتصال العلوي */}
      <div className="py-6 border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-gray-700 dark:text-gray-300">
            {t("footer.cta", "هل تحتاج مساعدة أو تريد حجز موعد؟ يسعدنا خدمتك.")}
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${normTel(phone)}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white transition"
            >
              <BrandIcon as={Phone} />
              {t("footer.call", "اتصل الآن")}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[--color-primary] dark:text-white text-black hover:opacity-90 transition"
            >
              {t("footer.book", "احجز موعد")}
            </Link>
          </div>
        </div>
      </div>

      {/* الجسم الرئيسي */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1) الشعار + نبذة + سوشيال */}
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Facebook} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Instagram} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={Linkedin} />
              </a>
              
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={FaTiktok} />
              </a>
              <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={FaSnapchat} />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                <BrandIcon as={FaXTwitter } />
              </a>
            </div>
          </div>

          {/* 2) روابط سريعة */}
          <nav className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("footer.quick", "روابط سريعة")}
            </h3>
            <ul className={`mt-4 space-y-3 ${isAr ? "text-right" : "text-left"}`}>
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("nav.home", "الرئيسية")}</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("nav.services", "الخدمات")}</Link></li>
              <li><Link to="/doctors" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("nav.doctors", "الأطباء")}</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("nav.about", "من نحن")}</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]">{t("nav.contact", "تواصل معنا")}</Link></li>
            </ul>
          </nav>

          {/* 3) عيادات (عمودان فقط) */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("footer.services2", "العيادات")}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {clinicColumns.map((col, idx) => (
                <ul key={idx} className={`space-y-3 ${isAr ? "text-right" : "text-left"}`}>
                  {col.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-gray-600 dark:text-gray-300 hover:text-[--color-primary]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* 4) تواصل معنا */}
          <div className="lg:col-span-2">
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
                <a href={`tel:${normTel(phone)}`} className="hover:text-[--color-primary]">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={Mail} />
                <a href={`mailto:${email}`} className="hover:text-[--color-primary]">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={Clock} />
                <span>{t("footer.hours", "يومياً 9:00 ص – 10:00 م")}</span>
              </li>
              <li className="flex items-center gap-3">
                <BrandIcon as={CgWorkAlt} />
               <a href="mailto:HR@healthyclinics-sa.com"><span>{t("footer.job", "التوظيف")}</span></a>
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
