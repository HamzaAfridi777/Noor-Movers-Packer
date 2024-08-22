import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesWeOffer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const serviceSlideStyle = {
    padding: '0 15px',
    textAlign: 'center'
  };

  const serviceImageStyle = {
    maxWidth: '100%',
    height: '200px', // Set a fixed height for all images
    objectFit: 'cover', // Ensure the image covers the area without distortion
    marginBottom: '10px'
  };

  const serviceTitleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    margin: '10px 0 20px'
  };

  const containerStyle = {
    padding: '0 40px',
    position: 'relative'
  };

  return (
    <div>
      <section className="services pad-tb" style={{ backgroundImage: 'url(assets/images/banner/services-banner.png)' }}>
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-md-12">
              <div className="ser-txt text-center m1-h m2-h">
                <h1>Services We Offer</h1>
                <h3>Unmatchable Service Quality and Customer Satisfaction</h3>
              </div>
              <Slider {...settings}>
                {services.map((service, index) => (
                  <div key={index} style={serviceSlideStyle}>
                    <a href={service.link}>
                      <img src={service.image} alt={service.alt} style={serviceImageStyle} />
                      <h3 style={serviceTitleStyle}>{service.title}</h3>
                    </a>
                  </div>
                ))}
              </Slider>
              <div className="text-center" style={{ marginTop: '20px' }}>
                <a href="get-in-touch.php" className="btn-b">Contact Us</a>
                <a href="tel:(966)592816652" className="btn-b"> 966-592816652</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// The CustomNextArrow, CustomPrevArrow, and services array remain the same
const services = [
{
    link: "/ResidentialMoving",
    image: "assets/images/ser-6.png",
    alt: "ser1",
    title: "Residential Moving"
  },
  {
    link: "/CommercialRelocation",
    image: "assets/images/ser-2.png",
    alt: "ser2",
    title: "Commercial Relocation"
  },
  {
    link: "/InternationalMoving",
    image: "assets/images/ser-3.png",
    alt: "ser3",
    title: "International Moving"
  },
];

// // Custom arrow components
const CustomNextArrow = (props) => {
  const { onClick } = props;
  const buttonStyle = {
    display: 'block',
    background: 'transparent',
    color: 'white',
    fontSize: '4rem',
    border: 'none',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  const buttonStyle = {
    display: 'block',
    background: 'transparent',
    color: 'white',
    fontSize: '4rem',
    border: 'none',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    position: 'absolute',
    left: '-50px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      &lt;
    </button>
  );
};
export default ServicesWeOffer;