import React, { useState } from "react";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query_type: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create the mailto link
    const mailtoLink = `mailto:Nm72053@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AQuery Type: ${formData.query_type}%0D%0AMessage: ${formData.message}`;
  
    // Open the default email client with the filled-in form data
    window.open(mailtoLink, '_blank');
  
    // Reset the form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      query_type: '',
      message: '',
    });
  
    // Set the success message
    setSuccessMessage('Thank you for your message! We will get back to you shortly.');
  };
  
  return (
    <section
      className="customerRelation-Banner contectUs-banner"
      id="contact"
      style={{
        backgroundImage: "url(assets/images/banner/customer-relation.jpg)",
      }}
    >
      <div className="customRelBanner-logo" id="contact-form"></div>
      <div className="container">
        <div className="col-md-8">
          <div className="customRelBanner-form">
            {successMessage && (
              <div
                id="display"
                style={{
                  width: "60%",
                  background: "#f1f1f1",
                  border: "1px solid #000",
                  padding: "10px 10px",
                  fontSize: "18px",
                  color: "#73b073",
                  display: "block",
                }}
                className="notification_ok"
              >
                {successMessage}
              </div>
            )}
            <h4>Contact US</h4>
            <form id="contact-form1" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <div className="form-select">
                    <select
                      required
                      id="query_type"
                      name="query_type"
                      className="form-control form-select"
                      value={formData.query_type}
                      onChange={handleChange}
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
                        fontWeight: "500",
                        color: "#727272e0",
                      }}
                    >
                      <option value="" disabled>
                        Subject Form
                      </option>
                      <option value="inquiry">Inquiry</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ marginBottom: "15px" }}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 mt-3">
                  <button id="submit1" type="submit" name="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;


// import React, { useState } from "react";
// import twilio from "twilio-client";
// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     query_type: "",
//     message: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     sendWhatsAppMessage(formData)
//       .then(() => {
//         setSuccessMessage("Message sent successfully!");
//       })
//       .catch((error) => {
//         console.error("There was an error sending the message to WhatsApp:", error);
//       });
//   };

//   const sendWhatsAppMessage = (formData) => {
//     const accountSid = "AC121d08bcd9951e33be2d959cfb48426c"; // Replace with your Twilio Account SID
//     const authToken = "ae742f33ee60a70e02adeef1c4995921"; // Replace with your Twilio Auth Token
//     const from = "whatsapp:+14155238886"; // Replace with your Twilio WhatsApp number
//     const to = "whatsapp:+923315397628"; // Replace with the recipient's WhatsApp number

//     const client = new twilio.Client(accountSid, authToken);

//     return client.messages.create({
//       from,
//       to,
//       body: `
//         New message from your website:
//         Name: ${formData.name}
//         Email: ${formData.email}
//         Phone: ${formData.phone}
//         Query Type: ${formData.query_type}
//         Message: ${formData.message}
//       `,
//     });
//   };
//   return (
//     <section
//           className="customerRelation-Banner contectUs-banner"
//           id="contact"
//           style={{
//             backgroundImage: "url(assets/images/banner/customer-relation.jpg)",
//           }}
//         >
//           <div className="customRelBanner-logo" id="contact-form"></div>
//           <div className="container">
//             <div className="col-md-8">
//               <div className="customRelBanner-form">
//                 {successMessage && (
//                   <div
//                     id="display"
//                     style={{
//                       width: "60%",
//                       background: "#f1f1f1",
//                       border: "1px solid #000",
//                       padding: "10px 10px",
//                       fontSize: "18px",
//                       color: "#73b073",
//                       display: "block",
//                     }}
//                     className="notification_ok"
//                   >
//                     {successMessage}
//                   </div>
//                 )}
//                 <h4>Contact US</h4>
//                 <form id="contact-form1" onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-select">
//                         <select
//                           required
//                           id="query_type"
//                           name="query_type"
//                           className="form-control form-select"
//                           value={formData.query_type}
//                           onChange={handleChange}
//                           style={{
//                             borderWidth: "1px",
//                             borderColor: "rgb(58,58,58)",
//                             borderStyle: "solid",
//                             borderRadius: "5px",
//                             backgroundColor: "rgb(241,241,241)",
//                             width: "100%",
//                             height: "42px",
//                             marginBottom: "15px",
//                             paddingLeft: "8px",
//                             fontWeight: "500",
//                             color: "#727272e0",
//                           }}
//                         >
//                           <option value="" disabled>
//                             Subject Form
//                           </option>
//                           <option value="inquiry">Inquiry</option>
//                           <option value="suggestion">Suggestion</option>
//                           <option value="complaint">Complaint</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Your Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         style={{ marginBottom: "15px" }}
//                       />
//                     </div>
//                     <div className="col-md-12 mt-3">
//                       <textarea
//                         id="message"
//                         name="message"
//                         placeholder="Your Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                       ></textarea>
//                     </div>
    
//                     <div className="col-md-12 mt-3">
//                       <button id="submit1" type="submit" name="submit">
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//   );
// };

// export default ContactUs;