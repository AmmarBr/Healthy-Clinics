import React from "react";
import AboutHero from "../components/AboutHero";
import AboutFaqWithImage from "../components/AboutFaqWithImage";
import img from "../assets/1.jpg";
import StatsBand from "../components/StatsBand";
import AboutCareGrid from "../components/AboutCareGrid";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutFaqWithImage img={img} reverse={false} />
      <StatsBand/>
      <AboutCareGrid/>
    </main>
  );  
}
