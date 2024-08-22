import React,{useState,useEffect} from "react";
import axios from 'axios';
const ChooseUs = () => {
  return (
    <div>
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
    </div>
  );
};

export default ChooseUs;
