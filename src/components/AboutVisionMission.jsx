// src/components/AboutVisionMission.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Eye,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Handshake,
  Shield,
  Stethoscope,
} from "lucide-react";

function Chip({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold
                     border-[color:color-mix(in_oklab,var(--color-primary)_30%,white)]
                     bg-[color:color-mix(in_oklab,var(--color-primary)_6%,transparent)]
                     text-[color:color-mix(in_oklab,var(--color-primary)_96%,black)]">
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}

function GradientCard({ title, icon: Icon, children }) {
  return (
    <article className="relative rounded-3xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 h-full">
      <div className="h-full rounded-3xl p-[1px] bg-gradient-to-br from-[color:color-mix(in_oklab,var(--color-primary)_40%,transparent)] via-transparent to-[color:color-mix(in_oklab,var(--color-primary)_30%,transparent)]">
        <div className="h-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white/90 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 shadow-[0_18px_40px_-18px_rgba(0,0,0,.35)]">
          <div>
            <div className="flex items-start gap-3">
              {Icon && (
                <span className="grid h-11 w-11 place-items-center rounded-2xl
                                 border border-white/30 bg-[color:color-mix(in_oklab,var(--color-primary)_14%,white)]
                                 text-[color:color-mix(in_oklab,var(--color-primary)_96%,black)]">
                  <Icon size={18} />
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                {title}
              </h3>
            </div>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-7">{children}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AboutVisionMission({  showValues = true }) {
  const { t, i18n } = useTranslation("about");
  const isAr = i18n.language?.startsWith("ar");

  const values =
    t("values.items", { returnObjects: true, defaultValue: [] }) || [];

  const valueIcons = [Sparkles, Handshake, Shield, HeartPulse, Stethoscope];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* خلفية ناعمة */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-[48vmin] w-[48vmin] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in_oklab,var(--color-primary) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,.10),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الهيدر */}
        <header
          className={`flex items-center justify-center gap-6 ${
            isAr ? "text-center" : "text-center"
          }`}
        >
          <div>
            <div className="inline-flex items-center justify-center gap-2 text-[--color-primary]">
              <Eye className="h-6 w-6" />
              <span className="text-sm font-semibold">
                {t("vision.kicker", "رؤيتنا ورسالتنا")}
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              {t(
                "vision.title",
                "نُقدّم رعاية طبية استثنائية ترتكز على الجودة والإنسان"
              )}
            </h2>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Chip icon={ShieldCheck}>
                {t("badges.quality", "جودة معتمدة")}
              </Chip>
              <Chip icon={HeartPulse}>
                {t("badges.patientFirst", "المريض أولاً")}
              </Chip>
              <Chip icon={Sparkles}>{t("badges.innovation", "ابتكار")}</Chip>
            </div>
          </div>

      
        </header>

        {/* الكروت: الرؤية والرسالة */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-stretch">
          <GradientCard title={t("vision.heading", "رؤيتنا")} icon={Sparkles}>
            {t(
              "vision.text",
              "أن نكون الخيار الأول لمراجعي المجمعات الطبية في منطقة شمال الرياض."
            )}
          </GradientCard>

          <GradientCard title={t("mission.heading", "رسالتنا")} icon={HeartPulse}>
            {t(
              "mission.text",
              "تمكين الصحة والعافية من خلال تقديم رعاية طبية استثنائية تركز على المريض، قوامها الجودة والالتزام والمبادرة."
            )}
          </GradientCard>
        </div>

        {/* قيمنا */}
        {showValues && values.length > 0 && (
          <div className="mt-10">
            <div className="text-[--color-primary] text-sm font-semibold mb-3">
              {t("values.kicker", "قيمنا")}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div
                    key={`${v.title}-${i}`}
                    className="group rounded-2xl p-4 border bg-white/85 dark:bg-white/5
                               border-black/10 dark:border-white/10 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-xl
                                       border border-white/30 bg-[color:color-mix(in_oklab,var(--color-primary)_14%,white)]
                                       text-[color:color-mix(in_oklab,var(--color-primary)_96%,black)]"
                      >
                        <Icon size={16} />
                      </span>
                      <div className="text-base font-semibold text-neutral-900 dark:text-white">
                        {v.title}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-6">
                      {v.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
