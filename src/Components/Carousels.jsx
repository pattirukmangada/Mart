import React from "react";
import Slider from "react-slick";
import { SliderData } from "./products";
import "../App.css"

const Carousels = () => {
  const settings = {
    dots: false,        // Hide navigation dots
    infinite: true,     // Infinite loop of slides
    speed: 500,         // Transition speed (in ms)
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Enable auto-play
    autoplaySpeed: 5000, // Auto-play speed (5 seconds per slide)
    pauseOnHover: false, // Disable pause on hover, so it continues scrolling automatically
    arrows: true,       // Enable navigation arrows
  };

  return (
    <div>
      {/* Slider Section with React Slick */}
      <section style={{background:'#ECF6FA'}}>
        <Slider {...settings}>
          {SliderData.map((slide) => (
            <div key={slide.id}>
              <div className="Slider-Card">
              <div className="Content">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
              <div className="Slider-Image">
                <img src={slide.cover} alt={slide.title} />
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Carousels;
