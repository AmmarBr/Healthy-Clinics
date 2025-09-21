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

export default function Home() {
  return (
    <div>
      <HeroSwiper/>
      <ContactStrip/>
      <Highlights/>
      <FeatureShowcase/>
      <ServicesCarousel/>
      <TestimonialsOverlay/>
      <StatsBand/>
      <DoctorsGrid/>
      <NewsSection/>
      <FaqAccordion/>
    </div>
  )
}
