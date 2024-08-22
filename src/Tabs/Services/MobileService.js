import React from "react";
import Header from "../../layouts/partials/header";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
const MobileService = () => {
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
              Commercial Relocation service
              </h1>
              <div className="row">
                <div className="col-md-12">
                  <div className="after-sec1 m1-h m2-h p1">
                    <br />
                    <strong style={{ fontSize: "20px" }}>
                    Noor Movers & Packers: Your Trusted Partner for Seamless Business Relocations
                    </strong>
                    <br />
                    <p>
                    At Noor Movers & Packers, we understand that relocating your business is a complex process that requires precision, efficiency, and minimal disruption to your operations. Our Commercial Relocation service is designed to meet the unique needs of businesses of all sizes.
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
                    <h3>Our Commercial Relocation service includes:</h3>
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
                      Customized moving plans tailored to your business needs
                      </li>
                      <li>Careful packing and labeling of office equipment and documents
                      </li>
                      <li>Safe transport of sensitive electronic equipment and servers
                      </li>
                      <li>Disassembly and reassembly of office furniture and workstations
                      </li>
                      <li>Efficient setup at your new location to minimize downtime
                      </li>
                      <li>Specialized handling of industrial equipment for factory relocations
                      </li>
                      <li>Secure storage solutions for excess inventory or equipment
                      </li>
                      <li>After-hours and weekend moving options to suit your schedule
                      </li>
                      <li>Proper disposal or recycling of unwanted items</li>
                      <li>Post-move support and troubleshooting</li>
                    </ul>
                    <p>
                      <b>
                      Trust <strong>Noor Movers & Packers</strong>  to handle your commercial relocation with the utmost care and professionalism. We ensure a smooth transition so you can focus on what matters most - running your business.
                      </b>
                    </p>
                    <br />
    
                    <h4>
                    Contact us today for a comprehensive quote and let us take the stress out of your commercial move!
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
export default MobileService;