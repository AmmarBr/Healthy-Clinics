import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { DEPARTMENTS } from "../lib/departments";
import { DOCTORS } from "../lib/doctors";

const normTel = (v = "") => v.trim().replace(/^00/, "+").replace(/[^\d+]/g, "");

// اصنع قائمة مواعيد للأيام القادمة
function buildDays(num = 14) {
  const out = [];
  const today = new Date();
  for (let i = 0; i < num; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // تجاهل الجمعة (مثال) لو حبيت تعطل يوم معين
    // if (d.getDay() === 5) continue;
    out.push(d);
  }
  return out;
}

// سلاّت ساعات (عدّل حسب نظامك)
const DEFAULT_SLOTS = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30"
];

export default function BookingWidget({
  clinicWhatsApp = "+966118342222",        // رقم واتساب العيادة
  clinicEmail    = "info@healthyclinics-sa.com", // إيميل العيادة
  slots          = DEFAULT_SLOTS,           // تقدر تمرر سلاّت مخصصة
}) {
  const { t, i18n } = useTranslation("booking");
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isAr = lng === "ar";

  // نماذج بيانات
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    dept: "", doctor: "",
    date: "", time: ""
  });
  const [note, setNote]   = useState("");
  const [error, setError] = useState("");
  const [sent, setSent]   = useState(false);

  // الأيام القادمة
  const days = useMemo(() => buildDays(14), []);

  // أقسام + أطباء بحسب القسم
  const deptOptions = useMemo(() => (DEPARTMENTS || []), []);
  const doctorOptions = useMemo(() => {
    if (!form.dept) return DOCTORS;
    return DOCTORS.filter(d => d.deptSlug === form.dept);
  }, [form.dept]);

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    const opts = { weekday:"short", year:"numeric", month:"short", day:"numeric" };
    return d.toLocaleDateString(lng === "ar" ? "ar-SA" : "en-US", opts);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: value }));
    if (name === "dept") setForm(s => ({ ...s, doctor: "" }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.dept || !form.date || !form.time) {
      return t("errors.required", "Please fill all required fields.");
    }
    // ايميل بسيط
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return t("errors.email", "Invalid email address.");
    }
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(""); setSent(false);
    const v = validate();
    if (v) { setError(v); return; }

    const deptName = (deptOptions.find(d => d.slug === form.dept) || {})[
      isAr ? "nameAr" : "nameEn"
    ] || form.dept;

    const doctorObj = doctorOptions.find(d => String(d.id) === String(form.doctor));
    const doctorName = doctorObj ? (isAr ? doctorObj.nameAr : doctorObj.nameEn) : t("anyDoctor", "Any available doctor");

    const dateLabel = fmtDate(form.date);
    const msgLines = [
      t("msg.header", "New appointment request"),
      "-------------------------------",
      `${t("msg.name", "Name")}: ${form.name}`,
      `${t("msg.phone", "Phone")}: ${form.phone}`,
      `${t("msg.email", "Email")}: ${form.email}`,
      `${t("msg.dept", "Department")}: ${deptName}`,
      `${t("msg.doctor", "Doctor")}: ${doctorName}`,
      `${t("msg.date", "Date")}: ${dateLabel}`,
      `${t("msg.time", "Time")}: ${form.time}`,
      note ? `${t("msg.note", "Note")}: ${note}` : undefined
    ].filter(Boolean).join("\n");

    // واتساب
    const wa = `https://wa.me/${normTel(clinicWhatsApp)}?text=${encodeURIComponent(msgLines)}`;
    // ايميل: إلى العيادة + نسخة للمستخدم (cc)
    const subject = `${t("mail.subject", "Appointment")} - ${form.name} - ${dateLabel} ${form.time}`;
    const body    = msgLines + "\n\n" + t("mail.footer", "Sent from Healthy Clinics website.");
    const mailto  = `mailto:${clinicEmail}?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // افتح واتساب في تبويب جديد
    window.open(wa, "_blank", "noopener,noreferrer");
    // افتح عميل الإيميل
    window.location.href = mailto;

    setSent(true);
  };

  return (
    <section  className="max-w-lg mx-auto rounded-2xl border bg-neutral-50 dark:bg-neutral-900
             border-black/10 dark:border-white/10 p-6 sm:p-8 mt-10">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
        {t("title", "Book an Appointment")}
      </h3>

      <form onSubmit={onSubmit} className="grid gap-4">
        {/* الاسم */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {t("fields.name", "Full name")} *
          </span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={t("ph.name", "Your full name")}
            className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                       border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                       placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* ايميل + هاتف */}
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.email", "Email")} *
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder={t("ph.email", "name@example.com")}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                         placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.phone", "Phone")} *
            </span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder={t("ph.phone", "+966 5x xxx xxxx")}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                         placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
          </label>
        </div>

        {/* القسم + الطبيب */}
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.dept", "Department")} *
            </span>
            <select
              name="dept"
              value={form.dept}
              onChange={onChange}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
            >
              <option value="">{t("ph.dept", "Select department")}</option>
              {deptOptions.map(d => (
                <option key={d.slug} value={d.slug}>
                  {isAr ? d.nameAr : d.nameEn}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.doctor", "Doctor")}
            </span>
            <select
              name="doctor"
              value={form.doctor}
              onChange={onChange}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
            >
              <option value="">{t("ph.doctor", "Any available doctor")}</option>
              {doctorOptions.map(d => (
                <option key={d.id} value={d.id}>
                  {isAr ? d.nameAr : d.nameEn}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* اليوم + الساعة */}
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.date", "Date")} *
            </span>
            <select
              name="date"
              value={form.date}
              onChange={onChange}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
            >
              <option value="">{t("ph.date", "Select date")}</option>
              {days.map(d => {
                const iso = d.toISOString().substring(0,10);
                return (
                  <option key={iso} value={iso}>
                    {fmtDate(iso)}
                  </option>
                );
              })}
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("fields.time", "Time")} *
            </span>
            <select
              name="time"
              value={form.time}
              onChange={onChange}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50"
            >
              <option value="">{t("ph.time", "Select time")}</option>
              {slots.map(tt => <option key={tt} value={tt}>{tt}</option>)}
            </select>
          </label>
        </div>

        {/* ملاحظة */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {t("fields.note", "Note")}
          </span>
          <textarea
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t("ph.note", "Optional note...")}
            className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                       border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                       placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* حالات */}
        {error && <div className="text-sm text-red-600 dark:text-red-400">{error}</div>}
        {sent &&  <div className="text-sm text-emerald-600 dark:text-emerald-400">{t("sent", "Opened WhatsApp & Email composer with your booking details.")}</div>}

        {/* زر */}
        <div className={isAr ? "text-right" : "text-left"}>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg border border-[--color-primary]
                       bg-[--color-primary] px-4 py-2 text-white font-medium
                       hover:opacity-90 focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-[--color-primary]"
          >
            {t("cta", "Confirm booking")}
          </button> 
        </div>
      </form>
    </section>
  );
}
