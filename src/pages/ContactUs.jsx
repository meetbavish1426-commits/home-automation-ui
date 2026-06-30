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
const [loading, setLoading] = useState(false);
const API_URL = "https://backend-seven-green-81.vercel.app";
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
   const res = await fetch(
  `${API_URL}/api/contact`,
  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert(data.message || "Message not sent");
    }
  } catch (error) {
    console.log("Submit error:", error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <div className="hero">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/the-future-of-modern-living.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>The Future of<br /> Modern Living</h1>
          <p>Convenience, Safety & Automation</p>
        </div>
      </div>

      <div
        className="contact-container"
        style={{
          backgroundImage: "url('/assets/contact-us-image.webp')",
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

          <button
  type="submit"
  disabled={loading}
  className={`submit-btn ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
>
  {loading ? (
    <>
      <span className="loader"></span>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>
          </form>
        </div>
      </div>
    </>
  );
}