import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Testimonials />
    </main>
  );
};

export default Homepage;
