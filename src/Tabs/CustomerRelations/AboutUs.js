import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const AboutUs = () => {
  return (
    <div>
    <Header/>
    <section>
        <div className="container">
         <div id="Loyalty">

             <h3 id="hist&achive" className="mt-5">HISTORY</h3><br/>
                <ul style={{listStyle:"disc"}}>
                   <li>Established in 2010, headquartered in KHOBAR, Saudi Arabia</li>
                   <li>Full-service moving company specializing in residential, commercial, and international relocations</li>
                   <li>Certified by the Saudi Arabian General Investment Authority (SAGIA)</li>
                   <li>One of the largest moving companies in the Kingdom of Saudi Arabia</li>
                   <li>Number of Employees: 100+</li>
                   
                </ul>
                <h3 className="mt-4">Achievements:</h3>
                <ul style={{listStyle:"disc"}}>
                   <li>Best Moving Company in Western Region (2015, 2017, 2019)</li>
                   <li>Excellence in Customer Service Award (2016, 2018, 2020)
                   </li>
                   <li>Top International Mover Award (2018, 2021)</li>
                   <li>Best Eco-Friendly Moving Practices Award (2019)</li>
                   <li>Recognized for Outstanding Corporate Relocation Services (2020)</li>
                   <li>Highest customer retention rate in Saudi Arabia (2017-2021) <br/> CR Regional Award 2018.
                   </li>
                   <li>ISO 9001:2015 Certified for Quality Management Systems</li>

                </ul>
             <div className="mb-5">
                <h3 id="vision&mission"></h3><br/>
                <h3>Our Vision</h3>
                <p>
                To be the most trusted and innovative moving and relocation service provider in the Middle East, delivering exceptional experiences while upholding the highest standards of professionalism and Islamic principles.
                </p>
                <h3>Our Mission</h3>
                <p>
                To simplify the moving process for our clients by providing comprehensive, tailored relocation solutions that exceed expectations. We are committed to continuous improvement, leveraging cutting-edge technology, and nurturing a skilled workforce to ensure seamless transitions for homes, offices, and international moves.
                </p>
             </div>
                
             
         </div>
            
        </div>
    </section>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default AboutUs;
