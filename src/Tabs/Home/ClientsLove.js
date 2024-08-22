import React, { useState } from "react";

const ClientsLove = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const staticReviews = [
    {
      name: "Abdullah Al-Saud",
      service: "Home Relocation 2024",
      comment: "Noor Movers and Pickers provided excellent service for our home relocation in Riyadh. The team was professional and handled our belongings with care. They completed the move efficiently and on time. Highly recommended!",
      avatarUrl: "assets/new-img/person-av1.png"
    },
    {
      name: "Fatima Al-Qhtani",
      service: "Office Shifting 2022",
      comment: "We used Noor Movers for our company's office relocation in Jeddah. Their service was outstanding! They managed to shift all our equipment and furniture without any damage. The staff was courteous and well-trained.",
      avatarUrl: "assets/new-img/person-av2.png"
    },
    {
      name: "Mohammed Al-Ghamdi",
      service: "International Moving 2023",
      comment: "Noor Movers handled our international move from Saudi Arabia to UAE flawlessly. Their packing was meticulous, and they took care of all the customs paperwork. A stress-free experience overall!",
      avatarUrl: "assets/new-img/person-av1.png"
    },
    {
      name: "Noura Al-Rashid",
      service: "Residential Packing 2023",
      comment: "I'm impressed with Noor Movers' packing service. They came to our villa in Dammam and packed everything professionally. Their attention to detail ensured all our delicate items were safe during the move.",
      avatarUrl: "assets/new-img/person-av2.png"
    }
  ];

  const totalImages = staticReviews.length;

  const handlePrevClick = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === 0 ? totalImages - 1 : prevSelectedImage - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === totalImages - 1 ? 0 : prevSelectedImage + 1
    );
  };

  const getImageStyle = (index) => {
    if (index === selectedImage) {
      return {
        width: "120px",
        height: "120px",
        transition: "all 0.3s",
        zIndex: 1,
        transform: "scale(1.2)",
        margin: "0 10px",
      };
    }
    return {
      width: "80px",
      height: "80px",
      transition: "all 0.3s",
      opacity: 0.6,
      margin: "0 10px",
    };
  };

  const getDisplayStyle = (index) => {
    if (
      index === selectedImage ||
      index === (selectedImage + 1) % totalImages ||
      index === (selectedImage + totalImages - 1) % totalImages
    ) {
      return { display: "inline-block" };
    }
    return { display: "none" };
  };

  return (
    <div>
      <section className="hero pad-tb" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-txt m1-h text-center p1" style={{ marginBottom: "40px" }}>
                <h1>Clients love us</h1>
                <p>
                  Our customer's positive feedback always motivates us to bring
                  top quality services and maintain the highest standards.
                </p>
              </div>

              <div
                className="col-md-8 client-pic product-slid"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 40px auto",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <button
                  className="prev-button"
                  onClick={handlePrevClick}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    position: "absolute",
                    left: 0,
                    zIndex: 2,
                  }}
                >
                  {"<"}
                </button>
                <div
                  className="slider"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "320px",
                  }}
                >
                  {staticReviews.map((review, index) => (
                    <img
                      key={index}
                      src={review.avatarUrl}
                      alt={`Avatar ${index + 1}`}
                      onClick={() => setSelectedImage(index)}
                      style={{ ...getImageStyle(index), ...getDisplayStyle(index) }}
                    />
                  ))}
                </div>
                <button
                  className="next-button"
                  onClick={handleNextClick}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    position: "absolute",
                    right: 0,
                    zIndex: 2,
                  }}
                >
                  {">"}
                </button>
              </div>

              <ul
                className="client-detail client-detal"
                style={{
                  marginTop: "20px",
                  position: "relative",
                  transition: "transform 0.5s",
                }}
              >
                {staticReviews.map((review, index) => (
                  <li key={index} style={{ display: selectedImage === index ? "block" : "none", transition: "all 0.5s" }}>
                    <span className="name">{review.name}</span>
                    <img
                      src="assets/images/star.png"
                      alt="star"
                      className="star"
                    />
                    <div className="men-service">
                      <p>
                        Service <span>{review.service}</span>
                      </p>
                    </div>
                    <div className="all-detail">
                      <p>{review.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsLove;