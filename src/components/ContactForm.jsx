import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t, i18n } = useTranslation("contact");
  const [state, setState] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // تحقق بسيط
    if (!state.name || !state.email || !state.message) {
      setError(t("form.errors.required", "Please fill the required fields."));
      return;
    }
    // هنا تقدر تبعت للباك-إند بتاعك
    try {
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(state) })
      setSent(true);
      setState({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(t("form.errors.fail", "Failed to send. Please try again later."));
    }
  };

  return (
    <div className="rounded-2xl border bg-neutral-50 dark:bg-neutral-900
                    border-black/10 dark:border-white/10 h-full ">
      <div className="px-5 py-4 border-b border-black/10 dark:border-white/10">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
          {t("form.title", "Send us a message")}
        </h3>
      </div>

      <form onSubmit={onSubmit} className="p-5 grid gap-4">
        {/* name */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {t("form.name", "Your name")} *
          </span>
          <input
            name="name"
            value={state.name}
            onChange={onChange}
            placeholder={t("form.namePh", "Full name")}
            className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                       border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                       placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* email & phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("form.email", "Email")} *
            </span>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={onChange}
              placeholder={t("form.emailPh", "name@example.com")}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                         placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {t("form.phone", "Phone")}
            </span>
            <input
              name="phone"
              value={state.phone}
              onChange={onChange}
              placeholder={t("form.phonePh", "+966 5x xxx xxxx")}
              className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                         border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                         placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
          </label>
        </div>

        {/* message */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {t("form.message", "Message")} *
          </span>
          <textarea
            name="message"
            value={state.message}
            onChange={onChange}
            rows={6}
            placeholder={t("form.messagePh", "How can we help you?")}
            className="rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950
                       border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-50
                       placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* status */}
        {error && (
          <div className="text-sm text-red-600 dark:text-red-400">{error}</div>
        )}
        {sent && (
          <div className="text-sm text-emerald-600 dark:text-emerald-400">
            {t("form.success", "Your message has been sent. We’ll contact you soon.")}
          </div>
        )}

        {/* submit */}
        <div className={i18n.language?.startsWith("ar") ? "text-right" : "text-left"}>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg border border-[--color-primary]
                       bg-[--color-primary] px-4 py-2 text-white font-medium
                       hover:opacity-90 focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-[--color-primary]"
          >
            {t("form.submit", "Send")}
          </button>
        </div>
      </form>
    </div>
  );
}
