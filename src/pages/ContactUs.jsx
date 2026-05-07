import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Contact response:", data);

      if (data.success) {
        alert(data.message);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert(data.message || "Message not sent");
      }
    } catch (error) {
      console.log("Submit error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="hero">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="public/assets/the-future-of-modern-living.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>The Future of<br /> Modern Living</h1>
          <p>Convenience, Safety & Automation</p>
        </div>
      </div>

      <div
        className="contact-container"
        style={{
          backgroundImage: "url('public/assets/contact us image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      >
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}