import React, { useState, useEffect } from "react";
import Header from "../../layouts/partials/header";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
import axios from "axios";
const BookingProcess = () => {
  // const [arrivalData, setArrivalData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const DataResponse = await axios.get("/api/new-arrivals");
  //     const arrivalData = DataResponse.data;
  //     setArrivalData(arrivalData);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Header />
      <section className="text-booking pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="process-text m1-h m2-h p1">
                <p>Dear Customers,</p>
                <p>
                  Welcome to Noor Movers & Packer, your trusted partner for all
                  your home, office, and company relocation needs in Saudi
                  Arabia and the Gulf states.
                </p>
                <h3>BOOKING PROCESS GUIDELINES:</h3>
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
                  <li>
                    Contact our customer service team to schedule a free
                    consultation and survey of your relocation requirements.
                  </li>
                  <li>
                    Our representative will provide you with a detailed estimate
                    and timeline for the services.
                  </li>
                  <li>
                    To confirm your booking, make the full payment through bank
                    transfer or cash deposit in the name of "Noor Movers &
                    Packer".
                  </li>
                  <li>
                    Provide a copy of your valid national ID/passport for our
                    records.
                  </li>
                  <li>
                    All prices are inclusive of freight charges and subject to
                    change without prior notice.
                  </li>
                </ol>
                <h3>OUR SERVICES INCLUDE:</h3>
                <div className="row">
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
                      <li>
                        Disassembling of all types of furniture (IKEA, Home
                        Center, local, Chinese).
                      </li>
                      <li>
                        Packing of all household goods with utmost care and
                        attention.
                      </li>
                      <li>Loading into our specialized moving trucks.</li>
                      <li>
                        Transportation services anywhere in KSA and the Gulf
                        states.
                      </li>
                      <li>
                        Offloading and reassembling of all types of furniture at
                        the new location.
                      </li>
                      <li>
                        Storage and warehouse services for your furniture and
                        household items.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3>
                      We are committed to providing the best relocation
                      experience in the region. Feel free to contact us at the
                      following numbers:
                    </h3>
                    <h3 style={{ color: "blue" }}>
                      ContactUs:<p>0507927151, 0592816652</p>{" "}
                    </h3>
                    <p>Thank you for choosing Noor Movers & Packer.</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ol></ol>
                  </div>
                </div>
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

export default BookingProcess;
