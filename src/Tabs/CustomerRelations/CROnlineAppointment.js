import React, { useEffect, useRef, useState } from "react";
import Header from "../../layouts/partials/header";
import Footer from "../../layouts/partials/footer";
import "intl-tel-input/build/css/intlTelInput.css";
import axios from "axios";
import "intl-tel-input/build/css/intlTelInput.css";
const CROnlineAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    appointment_date: "",
    registration_number: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "appointment_date") {
      const formattedDate = new Date(value)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      setFormData((prev) => ({
        ...prev,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create the mailto link
    const mailtoLink = `mailto:Nm72053@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AQuery Type: ${formData.query_type}%0D%0AMessage: ${formData.message}`;
  
    // Open the default email client with the filled-in form data
    window.open(mailtoLink, '_blank');
  
    // Reset the form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      appointment_date: "",
      registration_number: "",
      message: "",
    });
    
    // Set the success message
    setSuccessMessage('Thank you for your message! We will get back to you shortly.');
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setTimeout(async () => {
  //   //  console.log("Form Data Before Submit:", formData);

  //     try {
  //       const response = await axios.post("/api/appointments", formData);
  //       console.log("Form submitted successfully:", response.data);
  //       alert(response.data.message);
  //     } catch (error) {
  //       console.error("Submission error:", error.response || error);
  //       alert("There was an error submitting the form.");
  //     }
  //   }, 100);
  // };
  const [selectedImage, setSelectedImage] = useState(0);
  const totalImages = 3;

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
        transition: "width 0.3s",
        zIndex: 1,
        transform: "scale(1.2)",
        margin: "0 10px",
      };
    }
    return {
      width: "80px",
      height: "auto",
      transition: "width 0.3s",
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
    <>
      <Header />
      <section
        className="customerRelation-Banner"
        style={{
          backgroundImage: "url(assets/images/banner/customer-relation.jpg",
        }}
      >
        <div className="customRelBanner-logo"></div>

        <div className="container">
          <div className="col-md-8">
            <div className="customRelBanner-form">
              <h4>Online Appointment</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-select">
                      <select
                        name="subject"
                        className="form-control form-select"
                        style={{
                          borderWidth: "1px",
                          borderColor: "rgb(58,58,58)",
                          borderStyle: "solid",
                          borderRadius: "5px",
                          backgroundColor: "rgb(241,241,241)",
                          width: "100%",
                          height: "42px",
                          marginBottom: "15px",
                          paddingLeft: "8px",
                          fontWeight: 500,
                          color: "#727272e0",
                        }}
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Subject Form
                        </option>
                        <option value="Prepaid Periodic Maintenance">
                          Prepaid Periodic Maintenance
                        </option>
                        <option value="Express Maintenance">
                          Express Maintenance
                        </option>
                        <option value="General Repair">General Repair</option>
                        <option value="Body And Paint">Body And Paint</option>
                        <option value="Top Wash">Top Wash</option>
                        <option value="Claim Warranty">Claim Warranty</option>
                        <option value="1st Free Checkup">
                          1st Free Checkup
                        </option>
                        <option value="Mobile Service">Mobile Service</option>
                        <option value="Toyota Sure">Toyota Sure</option>
                        <option value="Seasonal Campaign">
                          Seasonal Campaign
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      //  ref={phoneInputRef}
                      name="phone"
                      type="tel"
                      placeholder="312-3456789"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="datetime-local"
                      name="appointment_date"
                      required
                      style={{
                        borderWidth: "1px",
                        borderColor: "rgb(58,58,58)",
                        borderStyle: "solid",
                        borderRadius: "5px",
                        backgroundColor: "rgb(241,241,241)",
                        width: "100%",
                        height: "42px",
                        marginBottom: "15px",
                        paddingLeft: "8px",
                        fontWeight: 500,
                        color: "#727272e0",
                      }}
                      value={formData.appointment_date}
                      onChange={handleInputChange}
                    />
                    <span className="validity"></span>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="registration_number"
                      placeholder="Registration Number"
                      value={formData.registration_number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="changes"
        style={{backgroundImage:
          //"url(assets/images/bookingimg/dena2.png)"
          "url(assets/images/banner/change.png)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="changes-txt m1-h m2-h text-center">
                <h1>VALUE ADDED SERVICES</h1>
                {/*<h3>For Any QUERY REGARDING</h3> */}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 mt-5 mb-5">
              <div className="check">
                <ul className="check-list">
             
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                       Dena HomeShift Express
                  </li>
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Extended Warranty
                  </li> 
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Dena HomeLift
                  </li> 
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Dena Relocation Experts
                  </li>         
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Dena EasyMove
                  </li> 
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Dena Home Transit Solutions
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="number-count pad-tb"
        style={{ backgroundImage: "url(assets/images/banner/num-banner.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="num-txt-wrap text-center m1-h m2-h pad-btm">
                <h1>Why Choose Noor Movers & Pickers?</h1>
                <p> We aim to provide the best home and office shifting services in Saudi Arabia while ensuring cost-effectiveness. At Noor Movers & Pickers, our valued customers enjoy expertise, attention to detail, and commitment, leading to a hassle-free relocation experience with our Dena vehicles.
                </p>

              </div>

              <ul className="counter">
                <li>
                  <span className="count">10</span>
                  <span>+</span>
                  <h3>Toyota Certified Experience</h3>
                </li>
                <li>
                  <span className="count">98</span>
                  <span>%</span>
                  <h3>Certified Movers</h3>
                </li>
                <li>
                  <span className="count">500</span>
                  <span>%</span>
                  <h3>Successful Relocations</h3>
                </li>
                <li>
                  <span className="count">99</span>
                  <span>%</span>
                  <h3>Employee Satisfaction</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3554.4520704684455!2d49.65457681566078!3d27.015877438241688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a111f73143ff%3A0x5d1706225780cb72!2sFeels!5e0!3m2!1sen!2s!4v1724213909524!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0, allowfullscreen: "", loading: "lazy" }}
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default CROnlineAppointment;
