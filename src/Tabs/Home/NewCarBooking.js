import React from "react";
const NewCarBooking = () => {

  return (
    <div>
      <section
        className="new-cars pad-tb"
        style={{backgroundImage:'url(assets/images/banner/shape.png)'}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="new-car-txt m1-h m2-h p1 text-center pad-btm">
                <h1>New Booking</h1>
                <p>
                  Noor Movers & Packers offers easy booking procedures for our
                  Customers providing easy and user-friendly financial plans for
                  service booking and delivery.
                </p>
              </div>
            </div>
            
            <div className="col-md-5">
              <div className="t2-cars" style={{transform: 'rotatey(175deg)'}}>
                <img
                src="assets/images/bookingimg/dena7.png"
                className="t2-cars-1img"
                alt="dena img5"
                />
                <br />
                <img
                src="assets/images/bookingimg/dena2.png"
                  className="t2-cars-2img"
                  alt="dena img 3"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="new-car-txt new-car-txt2 text-center m1-h p1 p5">
                <h1>Booking Process</h1>
                <ol style={{color: '#8d8b8b',lineHeight: 1.5,fontWeight: 400,fontSize: '20px',
                 listStyle:'numeric', lineHeight:1.5,marginLeft: '20px',marginBottom:'10px',
                 textAlign:"left"}}>
                  <li>Customer verification required before scheduling a home shifting service.</li>
                  <li>Detailed inventory list must be provided prior to the moving day.</li>  
                  <li>Insurance options available for valuable items during transit.</li>
                  <li>Final payment to be made upon successful completion of the move.</li>
                </ol>
                <a href="/GetInTouch" className="btn-b btn-c">
                  Contact Us
                </a>
                <a href="/BookingProcess" className="btn-b btn-g">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCarBooking;
