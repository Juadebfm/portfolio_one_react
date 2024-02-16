import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import monaliza from "../../assets/monalisa.png";

const SimpleSlider = () => {
  return (
    <Carousel
      className="slider"
      showStatus={false}
      showThumbs={false}
      labels={false}
      autoPlay={true}
    >
      <div className="slider_box">
        <p>
          "Wow is all i can say! Alifreza did an absolute fenominal job from
          start to finish. He created exactly what I wanted and exceeded my
          expectation. Highly recommend alifreza!"
        </p>
        <div className="testimonee">
          <img src={monaliza} alt="Testimonies" />
          <div>
            <span>Monalisa Nona</span>
            <span>
              Project Manager, <span>Ruber</span>
            </span>
          </div>
        </div>
      </div>
      <div className="slider_box">
        <p>
          "Wow is all i can say! Alifreza did an absolute fenominal job from
          start to finish. He created exactly what I wanted and exceeded my
          expectation. Highly recommend alifreza!"
        </p>
        <div className="testimonee">
          <img src={monaliza} alt="Testimonies" />
          <div>
            <span>Monalisa Nona</span>
            <span>
              Project Manager, <span>Ruber</span>
            </span>
          </div>
        </div>
      </div>
      <div className="slider_box">
        <p>
          "Wow is all i can say! Alifreza did an absolute fenominal job from
          start to finish. He created exactly what I wanted and exceeded my
          expectation. Highly recommend alifreza!"
        </p>
        <div className="testimonee">
          <img src={monaliza} alt="Testimonies" />
          <div>
            <span>Monalisa Nona</span>
            <span>
              Project Manager, <span>Ruber</span>
            </span>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default SimpleSlider;
