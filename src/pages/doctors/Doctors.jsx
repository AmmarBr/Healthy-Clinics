import React from "react";
import DoctorHero from "../../components/DoctorHero"; // عدل المسار حسب alias/المجلدات
import { useTranslation } from "react-i18next";
import FeaturedDoctor from "../../components/FeaturedDoctor";
import { DOCTORS } from "../../lib/doctors";
import AllDoctorsGrid from "../../components/AllDoctorsGrid";
export default function Doctors() {
  const { t } = useTranslation("doctors");
  const featured = DOCTORS[0];
  return (
    <main>
      <DoctorHero />
      {/* <FeaturedDoctor
        title={t("featured.title", "Chief of Medicine")}
        kicker={t("featured.kicker", "Professionals")}
        doctor={featured}   // 👈 مهم
      /> */}
      <AllDoctorsGrid/>
    </main>
  );
}
