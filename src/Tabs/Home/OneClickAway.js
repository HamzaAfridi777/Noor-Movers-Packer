import React, { useState, useEffect } from "react";
import axios from "axios";
const OneClickAway = () => {
  
  return (
    <div>
      <section className="call-away pad-tb" id="cta_lg-d">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="away-txt m1-h p1 p5 text-center">
                <h1>We are one click away</h1>
                <p></p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-4 ca-lft-side"
              id="sm-scrn"
            >
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-1">
                  <a href="https://api.whatsapp.com/send?phone=966592816652&app=facebook&entry_point=page_cta"
                   target="_blank">
                    <img
                      src="assets/img/whatsap-icon.png"
                      alt="whatsap-icon.png"
                    />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-1">
                  <h6>
                    Contact Us On <br />
                    WhatsApp <br />
                    <span className="fnt-15">
                    966-592816652
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-2">
                  <a href="https://www.facebook.com/noorbangash.noorbangash.3" 
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src="assets/img/fb-logo.png" alt="Facebook Logo" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-2">
                  <h6>
                    Connect Us On <br/>
                    Facebook
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-3">
                  <a href='https://www.facebook.com/noorbangash.noorbangash.3' target="_blank">
                    <img
                      src="assets/img/tiwtter-logo.png"
                      alt="tiwtter-logo.png"
                    />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-3">
                  <h6>
                    Connect Us On <br />
                    Twitter <br />
                    <span></span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-4">
                  <a href='' target="_blank">
                    <img src="assets/img/insta-logo.png" alt="insta-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-4">
                  <h6>
                    Connect Us On <br />
                    Instagram <br />
                    <span></span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-5">
                  <a href='' target="_blank">
                    <img src="assets/img/linkd-logo.png" alt="linkd-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-5">
                  <h6>
                    Connect Us On <br />
                    Linkedin
                    <br />
                    <span></span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="left-subbx ca-sm-box lft-sde-6">
                  <a href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL" target="_blank">
                    <img src="assets/img/fbmsg-logo.png" alt="fbmsg-logo.png" />
                  </a>
                </div>
                <div className="left-subbx-name lft-hovr-6">
                  <h6>
                    Connect Us On <br />
                    Messenger <br />
                    <span>https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL</span>{" "}
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 sm-ntshw">
              <div className="glob-subbx">
                <a
                  href="https://www.google.com/maps/search/%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%8A%D8%B5%D9%84,+Jubail+City+Center,+Al+Jubail+12345,+Al+Jubail,+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9+12345%E2%80%AD/@27.0161176,49.654328,16.5z?hl=en&entry=ttu"
                  target="_blank"
                >
                  <img
                    src="assets/img/giphy.gif"
                    alt="giphy.gif"
                    className="glob-img"
                  />
                </a>
              </div>
              <div className="glob-subbx-name">
                <h6>
                  Our Location <br />
                  <span className="fnt-15"></span>{" "}
                </h6>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 ca-lft-side"
              id="sm-scrn"
            >
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-1">
                  <a href="mailto:Nm72053@gmail.com" target="_blank">
                    <img
                      src="assets/img/msg-logo.png"
                      alt="msg-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-1">
                  <h6>
                    For More Information <br />
                    Email Us <br />
                    <span className="fnt-15">Nm72053@gmail.com</span>{" "}
                  </h6>
                </div>
              </div>

              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-2">
                  <a href="tel:(966)592816652">
                    <img
                      src="assets/img/face-logo.png"
                      alt=""
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-2">
                  <h6>
                    For Inquiry <br />
                    Call On <br />
                    <span className="fnt-15">
                    966-592816652
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-3">
                  <a href="#">
                    <img
                      src="assets/img/house-logo.png"
                      alt="house-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="right-subbx-name rgt-hovr-3">
                  <h6>
                    Visit Us At <br />{" "}
                    <span className="fnt-15">current town/city Jubail,Saudi Arabia</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-4">
                  <a href="online-complaints.php">
                    <img
                      src="assets/img/phone-logo.png"
                      alt="phone-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-4">
                  <h6 className="fnt-15">
                    REGISTER ONLINE COMPLAINT <span></span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-5">
                  <a href="Tel:+966-592816652">
                    <img
                      src="assets/img/cell2-logo.png"
                      alt="cell2-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-5">
                  <h6>
                    Get Information on <br />
                    Call <br />
                    <span className="fnt-15">966-592816652</span>{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="right-subbx ca-sm-box rgt-sde-6">
                  <a href="Tel:966-592816652">
                    <img
                      src="assets/img/cell-sms-logo.png"
                      alt="cell-sms-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
                <div className="right-subbx-name rgt-hovr-6">
                  <h6>
                    Get Information on <br />
                    SMS <br />
                    <span className="fnt-15">
                    966-592816652
                    </span>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* small screen start-->* */}
      <section className="call-away pad-tb" id="cta_sm-d">
        <div className="container">
          <div>
            <div className="away-txt m1-h p1 p5 text-center">
              <h1>We are one click away</h1>
              <p></p>
            </div>

            <div className="cta-sm-screen">
              <div>
                <div className="ca-sm-box">
                  <a
                    href="https://api.whatsapp.com/send?phone=966-592816652&app=facebook&entry_point=page_cta"
                    target="_blank"
                  >
                    <img
                      src="assets/img/whatsap-icon.png"
                      alt="whatsap-icon.png"
                    />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <img src="assets/img/fb-logo.png" alt="fb-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                   // href="https://twitter.com/ToyotaRawal?t=9XQtIWdGEdhLTwCZ02KU9Q&s=09"
                    target="_blank"
                  >
                    <img
                      src="assets/img/tiwtter-logo.png"
                      alt="tiwtter-logo.png"
                    />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                   // href="https://instagram.com/toyota_rawal?utm_medium=copy_link"
                    target="_blank"
                  >
                    <img src="assets/img/insta-logo.png" alt="insta-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                  //  href="https://pk.linkedin.com/company/toyota-rawal-motors"
                    target="_blank"
                  >
                    <img src="assets/img/linkd-logo.png" alt="linkd-logo.png" />
                  </a>
                </div>

                <div className="ca-sm-box">
                  <a
                    href="https://www.facebook.com/noorbangash.noorbangash.3?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <img src="assets/img/fbmsg-logo.png" alt="fbmsg-logo.png" />
                  </a>
                </div>
              </div>

              <div>
                <div className="ca-sm-box ">
                  <a href="https://mail.google.com/mail/" target="_blank">
                    <img
                      src="assets/img/msg-logo.png"
                      alt="msg-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:(966)592816652">
                    <img
                      src="assets/img/face-logo.png"
                      alt="face-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="#">
                    <img
                      src="assets/img/house-logo.png"
                      alt="house-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="online-complaints.php">
                    <img
                      src="assets/img/phone-logo.png"
                      alt="phone-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:+(966)592816652">
                    <img
                      src="assets/img/cell2-logo.png"
                      alt="cell2-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>

                <div className="ca-sm-box ">
                  <a href="Tel:(966)592816652">
                    <img
                      src="assets/img/cell-sms-logo.png"
                      alt="cell-sms-logo.png"
                      style={{ width: "90%", marginLeft: "3px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneClickAway;
