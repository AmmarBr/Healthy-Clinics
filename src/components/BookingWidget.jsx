import React, { useMemo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import bookingImg from "../assets/imd55.jpg";
import { DEPARTMENTS } from "../lib/departments";
import { DOCTORS } from "../lib/doctors";

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

export default function BookingSection({
  clinicWhatsApp = "+966118342222",
  clinicEmail = "info@healthyclinics-sa.com",
}) {
  const { t, i18n } = useTranslation("booking");
  const isAr = i18n.language?.startsWith("ar");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    dept: "",
    doctor: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const deptOptions = useMemo(() => (DEPARTMENTS || []), []);
  const doctorOptions = useMemo(() => {
    if (!form.dept) return DOCTORS;
    return DOCTORS.filter((d) => d.deptSlug === form.dept);
  }, [form.dept]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "dept") setForm((s) => ({ ...s, doctor: "" }));
  };

  const validate = () => {
    if (!form.name || !form.phone || !form.dept)
      return t("errors.required", "Please fill all required fields.");
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const deptName =
      (deptOptions.find((d) => d.slug === form.dept) || {})[
        isAr ? "nameAr" : "nameEn"
      ] || form.dept;

    const doctorObj = doctorOptions.find(
      (d) => String(d.id) === String(form.doctor)
    );
    const doctorName = doctorObj
      ? isAr
        ? doctorObj.nameAr
        : doctorObj.nameEn
      : t("anyDoctor", "Any available doctor");

    const msgLines = [
      t("msg.header", "New appointment request"),
      "-------------------------------",
      `${t("msg.name", "Name")}: ${form.name}`,
      `${t("msg.phone", "Phone")}: ${form.phone}`,
      `${t("msg.dept", "Department")}: ${deptName}`,
      `${t("msg.doctor", "Doctor")}: ${doctorName}`,
    ].join("\n");

    const wa = `https://wa.me/${normTel(
      clinicWhatsApp
    )}?text=${encodeURIComponent(msgLines)}`;
    const subject = `${t("mail.subject", "Appointment")} - ${form.name}`;
    const body =
      msgLines + "\n\n" + t("mail.footer", "Sent from Healthy Clinics website.");
    const mailto = `mailto:${clinicEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(wa, "_blank", "noopener,noreferrer");
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[--color-primary]/5 to-transparent">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 px-4 sm:px-6 lg:px-8 ${
          isAr ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* ✅ الصورة (الآن بنفس ارتفاع النموذج) */}
        <div className="relative flex items-stretch">
          <div className="overflow-hidden rounded-3xl shadow-2xl w-full h-full flex">
            <img
              src={bookingImg}
              alt={t("imgAlt", "حجز موعد في عيادات هيلثي")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* ✅ نموذج الحجز */}
        <div className="relative z-10 flex items-stretch">
          <div className="flex flex-col justify-center w-full rounded-3xl border bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-2xl border-black/10 dark:border-white/10 p-8 sm:p-10">
            <div className={`${isAr ? "text-right" : "text-left"} mb-6`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                {t("sectionTitle", "احجز موعدك الآن بسهولة")}
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-base">
                {t(
                  "sectionSubtitle",
                  "املأ بياناتك وسنتواصل معك لتأكيد موعدك في أقرب وقت ممكن. راحتك وصحتك أولويتنا."
                )}
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {t("fields.name", "Full name")} *
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t("ph.name", "Your full name")}
                  className="rounded-xl border px-4 py-3 bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {t("fields.phone", "Phone")} *
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder={t("ph.phone", "+966 5x xxx xxxx")}
                  className="rounded-xl border px-4 py-3 bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {t("fields.dept", "Department")} *
                </span>
                <select
                  name="dept"
                  value={form.dept}
                  onChange={onChange}
                  className="rounded-xl border px-4 py-3 bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
                >
                  <option value="">
                    {t("ph.dept", "Select department")}
                  </option>
                  {deptOptions.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {isAr ? d.nameAr : d.nameEn}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {t("fields.doctor", "Doctor")}
                </span>
                <select
                  name="doctor"
                  value={form.doctor}
                  onChange={onChange}
                  className="rounded-xl border px-4 py-3 bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
                >
                  <option value="">
                    {t("ph.doctor", "Any available doctor")}
                  </option>
                  {doctorOptions.map((d) => (
                    <option key={d.id} value={d.id}>
                      {isAr ? d.nameAr : d.nameEn}
                    </option>
                  ))}
                </select>
              </label>

              {error && (
                <div className="text-sm text-red-600 dark:text-red-400">{error}</div>
              )}
              {sent && (
                <div className="text-sm text-emerald-600 dark:text-emerald-400">
                  {t(
                    "sent",
                    "Opened WhatsApp & Email composer with your booking details."
                  )}
                </div>
              )}

              <div className={isAr ? "text-right" : "text-left"}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg border border-[--color-primary] bg-[--color-primary] px-6 py-3 text-white font-medium hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-primary]"
                >
                  {t("cta", "Confirm booking")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
