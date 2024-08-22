import React, { useState, useEffect } from "react";
import axios from "axios";
const Footer = () => {
 

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="pad-tb footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget widget1">
                <div className="footer-logo">
                  <a href="./">
                    <img
                    style={{width:"70%"}}
                      src="assets/images/logo.jpg"
                      alt="Toyota Rawal Logo"
                      // onError={(e) => console.error('Image loading error:', e)}
                    />
                  </a>
                </div>
                <p>
                  Welcome to NOOR PACKING AND MOVING. Find out more about our latest home and office shifting services. Get updates on our current promotions and compare our service offerings.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h3>Useful Links</h3>
                <ul className="widget-list">
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="/ToyotaContact">Contact</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">Event & News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h3>Our Services</h3>

                <ul className="widget-list">
                  <li>
                    <a href="/ResidentialMoving">Residential Moving</a>
                  </li>
                  <li>
                    <a href="/CommercialRelocation">Commercial Relocation</a>
                  </li>
                  <li>
                    <a href="/InternationalMoving">International Moving</a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="widget">
                <h3>Quick Link</h3>

                <ul className="widget-list">
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/GetInTouch">Get In Touch</a>
                  </li>
                  <li>
                    <a href="/BookingProcess">Booking Process</a>
                  </li>
                  <li>
                    <a href="/CompanyProfile">Company Profile</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="widget">
                <h3>Follow Us</h3>
                <ul className="widget-list">
                  <li className="first">
                    <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" target="_blank">
                      <i className="fab fa-facebook-f"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" target="_blank">
                      <i className="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" target="_blank">
                      <i className="fab fa-linkedin-in"></i>LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" target="_blank">
                      <i className="fab fa-instagram"></i>Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="copy-txt">
                <p> &copy; {currentYear} NOOR MOVERS & PACKERS All Rights Reserved. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copy-txt">
                <p>Powered By NOOR MOVERS & PACKERS</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copy-txt">
                <p>
                  <a href="/PrivacyPolicy">Privacy policy</a>
                  <span>|</span>
                  <a href="/TermsConditions">Terms & Condition</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>

      <script>
        document.getElementById('copyright').appendChild(document.createTextNode(new
        Date().getFullYear()))
      </script>
    </>
  );
};

export default Footer;
