import React, { useState, useEffect } from "react";

import "./Header.css";
const Header = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Set default to show the first category
  const [activeCategory, setActiveCategory] = useState("box-car"); // Default to show Cars & MPVs

  ///Services
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMechanicalHovered, setIsMechanicalHovered] = useState(false);
  //const [mechanicalServices, setMechanicalServices] = useState([]);
  // Menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);


  const toggleExpand = (index) => {
    // Update the expandedIndex when a category is clicked
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const showCategory = (category) => {
    //  console.log("category", category);
    setActiveCategory(category);
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu button clicked", isMenuOpen);
  };
  return (
    <div>
      <header>
        <div className="an-loader hide-loader">
          <img src="assets/images/logo.jpg" alt="" />
          <div></div>
        </div>

        <div className="top-header">
          <div className="container">
            <div className="top-all top-all1 topheader-deal">
              <div className="deal-top">
                <p>Friday Open</p>
              </div>
            </div>

            <div className="row align-items-center h_text-left">
              <div className="col-md-2 HT-leftwrap">
                <h3>Services Timings</h3>

                <ul>
                  <li>24/7</li>
                  <li>
                    <span>LUNCH BREAK </span> 01:00PM-02:00PM
                  </li>
                  <li>
                    <span>FRIDAY BREAK </span> 12:30PM-02:30PM
                  </li>
                </ul>
              </div>
              <a
                href="./"
                className="col-md-8"
                id="main-logoo"
                style={{
                  display: "flex",
                  fontFamily: "Calibri",
                  fontSize: "40px",
                  textAlign: "center",
                  color: "#d3020a",
                  paddingTop: "20px",
                }}
              >
                <img
                  src="assets/images/logo.jpg"
                  alt=""
                  style={{ height: "100%",width:"10%" }}
                />{" "}
                <h1>NOOR MOVERS & PACKERS</h1>
              </a>

              <div className="col-md-2 text-right">
                <div className="toprightHeader top-headr-rgt">
                  <div className="tr-social" style={{ paddingRight: "9px" }}>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" 
                          target="_blank"
                          className="fab fa-facebook-f"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=966592816652&app=facebook&entry_point=page_cta"
                          target="_blank"
                          className="fab fa-twitter"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=966592816652&app=facebook&entry_point=page_cta"
                          target="_blank"
                          className="fab fa-instagram"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/hamza-afridi28"
                          target="_blank"
                          className="fab fa-linkedin-in"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=966592816652&app=facebook&entry_point=page_cta"
                          target="_blank"
                          className="fab fa-whatsapp"
                          style={{ color: "#25d366" }}
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="trHead-tel">
                      <a href="tel:00966507927151">
                        <span>
                          <img src="assets/images/sauidi.png" alt="Saudi Arabia"
                          style={{width:"40px"}} />
                        </span>
                        00966507927151
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <div className="container-fluid">
              {/*  {showButton && (
            <button
              className="menu-button"
              onClick={toggleMenu}
            >
              &#9776; 
            </button>
          )}*/}
              {showButton && (
                <button
                  onClick={toggleMenu}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon menu-button">
                    {" "}
                    &#9776;
                  </span>
                </button>
              )}
              {/* Menu */}
              <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
                <li></li>
                <li className="active">
                  <a href="./">Home </a>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">Booking</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/BookingProcess">Booking Process</a>
                    </li>
                  </ul>
                </li>

                <li
                  className="dropdown-nav"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(true)}
                >
                  <span>
                    <a href="#">Services</a>
                  </span>
                  <ul
                    className="dropdown"
                    style={{
                      display: isServicesHovered ? "block" : "none",
                    }}
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(true)}
                  >
                    <li
                      className="service-nav"
                      onMouseEnter={() => setIsMechanicalHovered(true)}
                      onMouseLeave={() => setIsMechanicalHovered(true)}
                    >
                      <a href="/ResidentialMoving">Residential Moving</a>
                    </li>
                    <li className="service-nav2">
                      <a href="/CommercialRelocation">Commercial Relocation</a>
                    </li>
                    <li>
                      <a href="/InternationalMoving">
                      International Moving
                      </a>
                    </li>
                  </ul>
                </li>

               {/* <li className="dropdown-nav">
                  <span>
                    <a href="#">Parts</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/GenuineParts">Genuine Parts</a>
                    </li>
                    <li>
                      <a href="/Accessories">Accessories</a>
                    </li>
                    <li>
                      <a href="/CampaignsPromotions">
                        Campaigns and Promotions
                      </a>
                    </li>
                  </ul>
                </li>*/}

                <li className="dropdown-nav">
                  <span>
                    <a href="#">Customer Service</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/CRActivities">CS Activities</a>
                    </li>
                    <li>
                      <a href="/CROnlineAppointment">Online Appointment</a>
                    </li>
                    <li>
                      <a href="/OnlineComplaints">Online Complaints</a>
                    </li>
                    <li>
                      <a href="/Faqs">FAQ's</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">About Us</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/AboutUs">History</a>
                    </li>
                    <li>
                      <a href="/AboutUs#vision&mission">Vision and Mission</a>
                    </li>
                    <li>
                      <a href="/AboutUs">Award and Events</a>
                    </li>
                  </ul>
                </li>

               {/* <li>
                  <a href="/Insurance">Insurance</a>
                </li>
                <li>
                  <a href="/Career">Careers</a>
                </li>

                <li>
                  <a href="/CROnlineAppointment">Online Appointment</a>
                </li>*/}
                <li>
                  <a href="/CampaignsPromotions" className="blink">
                    PROMOTIONS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a
           href="https://api.whatsapp.com/send?phone=00966507927151&app=facebook&entry_point=page_cta"
          className="whatsapp"
        >
        00966507927151{" "}
          <i className="fas fa-phone"></i>
        </a>
        <a
           href="https://api.whatsapp.com/send?phone=00966507927151&app=facebook&entry_point=page_cta"
          className="icon-whtsapp"
        >
          {" "}
          <i className="fas fa-phone"></i>
        </a>
      </header>
    </div>
  );
};

export default Header;
