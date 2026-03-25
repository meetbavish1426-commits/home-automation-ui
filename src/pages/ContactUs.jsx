import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className="hero">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="src/assets/the-future-of-modern-living.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>The Future of<br></br> Modern Living</h1>
        <p>Convenience, Safety & Automation</p>
      </div>
    </div>

    <div className="contact-container" style={{backgroundImage: "url('src/assets/contact us image.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" ,borderRadius: "20px" }}>
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>
          Have questions about our home automation solutions?  
          We’d love to hear from you!
        </p>

        <div className="contact-info">
          <p>📍 Address: Smart Home Street, Tech City, Ahmedabad</p>
          <p>📞 Phone: +91 9313016781</p>
          <p>📧 Email: meetbavishi08@gmail.com</p>
        </div>
      </div>

      <div className="contact-right">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}