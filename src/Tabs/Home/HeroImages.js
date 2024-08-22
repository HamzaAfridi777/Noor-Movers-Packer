
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroImages = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Slider {...settings}>
        <div>
          <img
            src="assets/images/denahero/dena img5.JPG"
            alt="toyotacross"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="assets/images/denahero/dena img 3.jpg"
            alt="rocco"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="assets/images/denahero/dena img 4.jpg"
            alt="dena img 2"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="assets/images/denahero/dena img 6.jpg"
            alt="dena img 2"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="assets/images/denahero/dena img 7.jpg"
            alt="dena img 2"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
};

// CustomNextArrow and CustomPrevArrow components remain the same
// Custom arrow components
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        right: 10, // Positioning
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Adjust for center
      }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        left: 10, // Positioning
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Adjust for center
      }}
      onClick={onClick}
    >
      Previous
    </button>
  );
};
export default HeroImages;