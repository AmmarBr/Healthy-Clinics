import React from 'react'
import HeroSwiper from '../components/HeroSwiper'
import ContactStrip from '../components/ContactStrip'
import Highlights from '../components/Highlights'
import FeatureShowcase from '../components/FeatureShowcase'
import ServicesCarousel from '../components/ServicesCarousel'
import TestimonialsOverlay from '../components/TestimonialsOverlay'
import StatsBand from '../components/StatsBand'
import DoctorsGrid from '../components/DoctorsGrid'
import NewsSection from '../components/NewsSection'
import FaqAccordion from '../components/FaqAccordion'
import BookingWidget from '../components/BookingWidget'
import PromoWithVideo from '../components/PromoWithVideo'
import badgeImg from '../assets/cbahi5-150x150.png'
import { useTranslation } from 'react-i18next'

export default function Home() {
   const { t } = useTranslation("common");
  return (
    <div>
      <HeroSwiper />

      <ContactStrip />
      <PromoWithVideo
        youtubeId="m1oR0xN9r2c"
      badgeImg={badgeImg}
      welcome={t("promo.welcome")}
      headline={t("promo.headline")}
      subTitle={t("promo.subtitle")}
      paragraph={t("promo.paragraph")}
      ctaText={t("promo.cta")}
      />
      <BookingWidget
        clinicWhatsApp="+201028526504"
        clinicEmail="ammarbrakat731@gmail.com"
      />
      <Highlights />
      <FeatureShowcase />
      <ServicesCarousel />
      <DoctorsGrid />
      <NewsSection />
      <TestimonialsOverlay />
      <StatsBand />
      <FaqAccordion />
    </div>
  )
}
