import React from "react";

const ValueTime = () => {
  
  return (
    <div>
      <section className="value pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="value-txt m1-h p1 text-center pad-btm">
                <h1>We Value Your Time</h1>
                <p>
                Experience Efficient Home Relocation Within Hours With Noor Movers and Pickers' Express Shifting Service
</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-car">
                <img 
                src="assets/images/bookingimg/dena7.png"
                alt="dena7" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-em">
                <img 
                src="assets/images/bookingimg/dena2.png"
                 alt="dena7" />
                <div className="call-now call-now-2">
                  <span>
                    Call Now:
                    <a href="tel:(966)592816652" className="call-2">
                    966-592816652
                    </a>
                  </span>
                  <a href="/ExpressMaintenance" className="btn-b">
                    Learn More
                  </a>
                </div>
              </div>
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
    </div>
  );
};

export default ValueTime;
