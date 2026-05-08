// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

 
const servicesData = [
  {
    title: "Smart Lighting",
    desc: "Control lighting from anywhere. Set moods, schedules, and save energy.",
    icon: "💡",
  },
  {
    title: "Smart Security",
    desc: "Protect your home with smart cameras, locks, and motion alerts.",
    icon: "🔒",
  },
  {
    title: "Climate Control",
    desc: "Enjoy perfect temperature with smart thermostats and automation.",
    icon: "🌡️",
  },
  {
    title: "Smart Entertainment",
    desc: "Multi-room audio, smart TV setup, and voice control integration.",
    icon: "🎵",
  },
  {
    title: "Full Home Automation",
    desc: "One app to control lighting, security, climate, and devices.",
    icon: "📱",
  },
  {
    title: "Custom Installation",
    desc: "Professional design, installation, and after-sales support.",
    icon: "🛠️",
  },
];

export default function Services() {
   const navigate = useNavigate();
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" style={{ backgroundImage: "url('/assets/2-page.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" ,borderRadius: "20px" }}>
        <h1>Smart Home Services</h1>
        <p>Upgrade your lifestyle with comfort, security, and automation.</p>
        <button className="cta-btn">Get Free Consultation</button>
        </section>

      {/* Services Grid */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <h4>Free Consultation</h4>
            <p>We understand your needs and home layout.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h4>Custom Installation</h4>
            <p>We design and install your smart home system.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h4>Enjoy Smart Living</h4>
            <p>Control everything from your phone.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to Make Your Home Smarter?</h2>
        <p>Book a free demo and consultation today.</p>
        <button className="cta-btn" onClick={() => navigate("/ContactUs")}>
          Contact Us
        </button>
      </section>
    </div>
  );
}