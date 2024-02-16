import React from "react";
import MyCarousel from "./lcomp/SimpleSlider";

const Testimonials = () => {
  return (
    <section className="Testimonials">
      {/* Write Up Section */}
      <div className="Testimonial_container dflex_btw">
        <div className="Testimonial_details">
          <div className="Services_line">
            <div className="line"></div>
            <span className="green">Testimonials</span>
          </div>
          <h2>My happy clients.</h2>
        </div>
        <MyCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
