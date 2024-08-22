import React from "react";
import Header from "../../layouts/partials/header";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";

const ExpressMaintenance = () => {
  return (
    <>
      <Header />
      <section>
        <div id="t-exprs" className="container mt-5 mb-5">
          <h2>Residential Moving service</h2>

          <div className="row">
            <div className="col-md-10">
              <br /> <br />
              <p className="text-justify">Dear Customers,</p>
              <br />
              <p className="text-justify">
                Make your home relocation stress-free with 
                <strong> Noor Movers & Packers'</strong> Residential Moving
                service! We understand that moving your home is more than just
                transporting items - it's about safely relocating your life and
                memories. Our expert team is ready to assist you any day of the
                week, including weekends. Learn all about our comprehensive
                residential moving service below.
              </p>
            </div>
            <div className="col-md-2">
              <img
                style={{ height: "150%", width: "170%" }}
                src="assets\images\logodena.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <img
                style={{ height: "90%", width: "60%" }}
                src="assets\images\denahero\shift4.jpeg"
              />
            </div>
          </div>
          <p className="lead">
            The Noor Movers & Packers Residential Moving Difference:
          </p>
          <br />
          <br />
          <p className="text-justify">
            {" "}
            Your peace of mind is our priority. When it comes to moving your
            home, don't let the stress overwhelm you. Noor Movers & Packers
            offers everything you need for a smooth, efficient, and careful
            relocation. Trust the experts who understand the value of your
            belongings -<strong> Noor Movers & Packers.</strong>
          </p>
          <p className="text-justify">
            {" "}
            If you're planning a move within or from Saudi Arabia, you can rest
            assured that our Residential Moving service will get you settled
            into your new home with confidence -
            <strong>Our service includes:</strong>{" "}
          </p>
          <div className="col-lg-6 col-md-6">
                    <ol
                      style={{
                        color: "#000",
                        lineHeight: 1.5,
                        fontWeight: 400,
                        fontSize: "16px",
                        listStyle: "numeric",
                        lineHeight: 1.5,
                        marginLeft: "20px",
                      }}
                    >
                      <li> Professional packing of all your household items</li>
                      <li>Disassembly and reassembly of furniture </li>
                      <li>Safe loading and unloading</li>
                      <li>Secure transportation</li>
                      <li>Unpacking and organizing at your new home</li>
                    </ol>
                  </div>
                  <br/>
                  <strong>Contact us today to schedule your residential move. We offer competitive prices, exceptional quality, and prompt service to meet your moving timeline!</strong>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ExpressMaintenance;
