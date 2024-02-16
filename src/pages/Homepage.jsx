import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Homepage;
