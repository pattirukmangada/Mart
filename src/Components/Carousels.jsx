import React from "react";
import Slider from "react-slick";
import Furniture from '../Images/carousels Image/Furniture.png'
import Iphone from '../Images/carousels Image/phone-08.png'
import Earbud from '../Images/carousels Image/wireless-04.png'
import HeadPhone from '../Images/carousels Image/wireless-01.png'
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
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="Slide">
            <div className="container-slide">
            <div className="left">
                <h1>50% Off For your First Shopping</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quasi impedit amet, dolores nobis cum dignissimos quae deleniti officiis, consequatur numquam, perspiciatis at facilis beatae eos eaque natus assumenda? Laboriosam.</p>
                <button>Visit Collection</button>
            </div>
            <div className="right">
                <img src={Furniture} alt="Slide 1" />
            </div>
            </div>
        </div>
        <div className="Slide">
            <div className="container-slide">
            <div className="left">
                <h1>50% Off For your First Shopping</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quasi impedit amet, dolores nobis cum dignissimos quae deleniti officiis, consequatur numquam, perspiciatis at facilis beatae eos eaque natus assumenda? Laboriosam.</p>
                <button>Visit Collection</button>
            </div>
            <div className="right">
                <img src={Iphone} alt="Slide 1" />
            </div>
            </div>
        </div>
        <div className="Slide">
            <div className="container-slide">
            <div className="left">
                <h1>50% Off For your First Shopping</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quasi impedit amet, dolores nobis cum dignissimos quae deleniti officiis, consequatur numquam, perspiciatis at facilis beatae eos eaque natus assumenda? Laboriosam.</p>
                <button>Visit Collection</button>
            </div>
            <div className="right">
                <img src={Earbud} alt="Slide 1" />
            </div>
            </div>
        </div>
        <div className="Slide">
            <div className="container-slide">
            <div className="left">
                <h1>50% Off For your First Shopping</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quasi impedit amet, dolores nobis cum dignissimos quae deleniti officiis, consequatur numquam, perspiciatis at facilis beatae eos eaque natus assumenda? Laboriosam.</p>
                <button>Visit Collection</button>
            </div>
            <div className="right">
                <img src={HeadPhone} alt="Slide 1" />
            </div>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousels;
