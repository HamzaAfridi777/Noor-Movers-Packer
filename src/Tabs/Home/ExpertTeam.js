// import React, {useState, useRef,useEffect, } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
// const ExpertTeam = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   const arrowButtonStyle = {
//     display: "inline-block",
//     background: "white",
//     zIndex: 1,
//     position: 'relative',
//     borderRadius: "0",
//     width: "40px",
//     height: "40px",
//     lineHeight: "40px",
//     textAlign: "center",
//     color: "black",
//     fontSize: "30px",
//     marginLeft: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     marginBottom: "70px"
//   };

//   return (
//     <div>
//       <section className="our-team pad-tb">
//         <div className="container">
//           <div className="team-txt pad-btm m1-h p1 p5 text-center">
//             <h1>OUR EXPERT TEAM</h1>
//             <p>
//               Meet our highly dedicated Team of experts who strive to bring you
//               the best quality services.
//             </p>
//           </div>
//           <div style={{ position: "relative" }}>
//             <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
//               <button onClick={() => sliderRef.current.slickPrev()} style={arrowButtonStyle}>←</button>
//               <button onClick={() => sliderRef.current.slickNext()} style={arrowButtonStyle}>→</button>
//             </div>
//           </div>
//           <Slider ref={sliderRef} {...settings}>
           
//               <div  style={{margin: "0 10px", borderBottom: "2px solid black"}}>
//                 <img  src='assets/noorimg/old1.png'
//                 alt=''
//                   style={{ width: "100%" }}
//                 />
//                 <span className="m-name" style={{ display: "block", marginTop: "10px", textAlign: "center",
//                            color: "black", fontSize: "1.2rem", borderBottom: "2px solid black",
//                            paddingBottom: "5px",}}>
//                            Owner
//                 </span>
//               </div>
//              </Slider>
//         </div>
//       </section>
//     </div>
//   );
// };


// export default ExpertTeam;
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExpertTeam = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const arrowButtonStyle = {
    display: "inline-block",
    background: "white",
    zIndex: 1,
    position: 'relative',
    borderRadius: "0",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "black",
    fontSize: "30px",
    marginLeft: '5px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: "70px"
  };

  const teamMembers = [
    { image: 'assets/noorimg/old.png', name: 'Noor Muhammad Owner' },
    { image: 'assets/noorimg/abdulaziz.png', name: 'Abul Aziz' },
    { image: 'assets/noorimg/youns.jpg', name: 'Younas' },
    { image: 'assets/noorimg/youns1.png', name: 'Muhammad' },
    // Add more team members as needed
  ];

  return (
    <div>
      <section className="our-team pad-tb">
        <div className="container">
          <div className="team-txt pad-btm m1-h p1 p5 text-center">
            <h1>OUR EXPERT TEAM</h1>
            <p>
              Meet our highly dedicated Team of experts who strive to bring you
              the best quality services.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
              <button onClick={() => sliderRef.current.slickPrev()} style={arrowButtonStyle}>←</button>
              <button onClick={() => sliderRef.current.slickNext()} style={arrowButtonStyle}>→</button>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{margin: "0 10px"}}>
                <img 
               
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "350px" }}
                />
                <span className="m-name" style={{ 
                  display: "block", 
                  marginTop: "10px", 
                  textAlign: "center",
                  color: "black", 
                  fontSize: "1.2rem", 
                  borderBottom: "2px solid black",
                  paddingBottom: "5px",
                }}>
                  {member.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ExpertTeam;