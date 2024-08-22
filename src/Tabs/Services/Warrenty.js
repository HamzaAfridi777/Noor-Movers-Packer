import React from "react";
import Header from "../../layouts/partials/header";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
const Warranty = () => {
    return (
        <>
            <Header />
            <section className="warranty after-sale-section pad-tb">
            <div className="container">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
              International Moving service
              </h1>
              <div className="row">
                <div className="col-md-12">
                  <div className="after-sec1 m1-h m2-h p1">
                    <br />
                    <strong style={{ fontSize: "20px" }}>
                      Noor Movers & Packers:Your Gateway to Global Relocation
                    </strong>
                    <br />
                    <p>
                    Embarking on an international move? Let Noor Movers & Packers
                     be your trusted partner in this exciting journey.Our International Moving service is
                      designed to make your transition to a new country as smooth and stress-free as possible.
                    </p>
                    <br />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <img
                        style={{ width: "40%",height:"300px" }}
                        src="assets\images\denahero\shift5.jpeg"
                        alt=""
                      />
                      <img style={{ width: "40%",height:"300px" }} 
                      src="assets\images\denahero\shift4.jpeg" alt="" />
                    </div>
                    <h3>Our comprehensive International Moving service includes:</h3>
                    <br />
    
                    <ul
                      style={{
                        listStyle: "disc",
                        marginLeft: "45px",
                        color: "#8d8b8b",
                        lineHeight: 1.5,
                        fontWeight: 400,
                        fontSize: "20px",
                      }}
                    >
                      <li>
                      Personalized moving plans tailored to your destination country
                      </li>
                      <li>Expert packing services using high-quality materials for long-distance transport
                      </li>
                      <li>Custom crating for valuable or fragile items
                      </li>
                      <li>Door-to-door shipping via air, sea, or land as per your preference
                      </li>
                      <li>Assistance with customs documentation and clearance procedures
                      </li>
                      <li>Temporary storage solutions in origin or destination countries if needed
                      </li>
                      <li>Unpacking and setup services at your new international home
                      </li>
                      <li>Vehicle shipping services for cars, motorcycles, or boats
                      </li>
                      <li>Pet relocation assistance</li>
                      <li>Multilingual support to overcome language barriers</li>
                      <li>Guidance on international moving regulations and restrictions</li>
                      <li>Insurance options for added peace of mind</li>
                      <li>Tracking services to keep you informed about your shipment's progress</li>
                    </ul>
                    <p>
                      <b>
                      With <strong>Noor Movers & Packers</strong> distance is no obstacle. Our experienced team handles 
                      all aspects of your international move, ensuring your belongings arrive
                       safely at your new home, wherever in the world that may be.
                      </b>
                    </p>
                    <br />
    
                    <h4>
                    Contact us today for a detailed consultation and quote. Let us make your
                     international move an adventure, not a challenge!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <ContactUs />
            <Footer />
        </>
    );
};
export default Warranty;
