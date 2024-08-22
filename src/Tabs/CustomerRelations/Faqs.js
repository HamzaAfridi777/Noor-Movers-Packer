import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Faqs = () => {
    
  return (
    <div>
  <Header/>
      <div class="container">
        <div class="col-md-12">
            <div id="faq-content" role="main">
                  
              <div class="entry-content">
               {/* <!-- <h1 class="entry-title">FAQS</h1> -->*/}
                <div class="news-para">
                  <br/>
                  <h2>List of Topics</h2>
                  <br/>
                  <ul class="topic-lists">
                      <li><a data-target="#collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="collapsed">Residential Moving FAQs</a></li>
                      <li><a data-target="#collapseTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" class="collapsed">Commercial Relocation FAQs</a></li>
                      <li><a data-target="#collapseThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" class="collapsed">International Moving FAQs</a></li>
                      <li><a data-target="#collapseFour" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour" class="collapsed">Packing Services FAQs</a></li>
                      <li><a data-target="#collapseFive" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive" class="collapsed">Storage Solutions FAQs</a></li>
                      <li><a data-target="#collapseSix" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix" class="collapsed">Furniture Disassembly and Assembly FAQs</a></li>
                      <li><a data-target="#collapseSeven" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" class="collapsed">Specialty Item Moving  FAQs</a></li>
                      <li><a data-target="#collapseEight" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight" class="collapsed">Insurance and Liability FAQs</a></li>
                      <li><a data-target="#collapseNine" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="true" aria-controls="collapseNine" class="collapsed">Pricing and Quotes FAQs</a></li>
                      <li><a data-target="#collapseTen" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="true" aria-controls="collapseTen" class="collapsed">Booking Process  FAQs</a></li>
                      <li><a data-target="#collapseEleven" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven" class="collapsed">Moving Day Preparation FAQs</a></li>
                      <li><a data-target="#collapseTweleve" data-toggle="collapse" data-parent="#accordion" href="#collapseTweleve" aria-expanded="true" aria-controls="collapseTweleve" class="collapsed">Post-Move Support FAQs</a></li>
                      <li><a data-target="#collapseThirteen" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen" class="collapsed">Payment Options FAQs</a></li>
                      <li><a data-target="#collapseFourteen" data-toggle="collapse" data-parent="#accordion" href="#collapseFourteen" aria-expanded="true" aria-controls="collapseFourteen" class="collapsed">Cancellation and Refund Policy FAQs</a></li>
                      <li><a data-target="#collapseFifteen" data-toggle="collapse" data-parent="#accordion" href="#collapseFifteen" aria-expanded="true" aria-controls="collapseFifteen" class="collapsed">Pet Relocation  FAQs</a></li>
                      <li><a data-target="#collapseSixteen" data-toggle="collapse" data-parent="#accordion" href="#collapseSixteen" aria-expanded="true" aria-controls="collapseSixteen" class="collapsed">Vehicle Transportation FAQs</a></li>
                      <li><a data-target="#collapseEighteen" data-toggle="collapse" data-parent="#accordion" href="#collapseEighteen" aria-expanded="true" aria-controls="collapseEighteen" class="collapsed">Customs and Documentation FAQs</a></li>
                      <li><a data-target="#collapseNineteen" data-toggle="collapse" data-parent="#accordion" href="#collapseNineteen" aria-expanded="true" aria-controls="collapseNineteen" class="collapsed">Eco-Friendly Moving Options FAQs</a></li>
                  </ul>
                  <div class="panel-group mt-5 mb-5" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Residential Moving FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Commercial Relocation FAQs
                        </a>
                      </h4>
                      </div>
                    </div>
                    <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      International Moving
                      </a>
                    </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Packing Services
                    </a>
                  </h4>
                  </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Storage Solutions
                      </a>
                    </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Furniture Disassembly and Assembly
                      </a>
                    </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Specialty Item Moving 
                      </a>
                    </h4>
                    </div>
                  </div>


                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Insurance and Liability FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFour">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pricing and Quotes FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Booking Process FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSix">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Moving Day Preparation  FAQs
                        </a>
                      </h4>
                      </div>
                     
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingSeven">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Post-Move Support FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingEight">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        Payment Options FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingNine">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        Cancellation and Refund Policy FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTen">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        Pet Relocation FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingEleven">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        Vehicle Transportation FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTweleve">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTweleve" aria-expanded="false" aria-controls="collapseTweleve">
                        Customs and Documentation FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThirteen">
                        <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        Eco-Friendly Moving Options FAQs
                        </a>
                      </h4>
                      </div>
                    </div>

                    <div class="panel panel-default">
                    
                      <div id="collapseSeventeen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeventeen">
                        <div class="panel-body">
                        
                        </div>
                      </div>
                    </div>
                  </div>

              </div>

            </div>
            
          </div>
        </div>

    <div class="clearfix"></div>
    </div>
         <ContactUs/>
         <Footer/>
    </div>
  );
}

export default Faqs;
