import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page"  >
      {/* Hero Section */}
      <section className="about-hero"  >
        <div className="about-overlay"></div>
        <h1>About Us</h1>
        <p>Simplifying Your Smart Living</p>
      </section>

       {/* Middle Description Section */}
      <section className="about-middle">
        <div className="about-middle-box">
          <h2>Smart Living, Simplified</h2>
          <p>
            We believe that technology should make life easier — not more
            complicated. Our smart home solutions are designed to give you
            complete control of your home with just a tap on your phone or a
            simple voice command.
          </p>
          <p>
            From intelligent lighting and climate control to advanced home
            security systems, we integrate modern technology into your everyday
            life to create comfort, safety, and convenience.
          </p>
        </div>

        <div className="about-middle-cards">
          <div className="middle-card">
            <h3>Innovation</h3>
            <p>
              We use the latest smart technologies to build reliable and
              future-ready home automation systems.
            </p>
          </div>
          <div className="middle-card">
            <h3>Security</h3>
            <p>
              Your safety comes first. Our systems protect your home 24/7 with
              smart monitoring and alerts.
            </p>
          </div>
          <div className="middle-card">
            <h3>Comfort</h3>
            <p>
              Control lighting, temperature, and devices to match your lifestyle
              and mood effortlessly.
            </p>
          </div>
        </div>
      </section>

        {/* third Section*/}
      <section className="about-third"  >
        <div className="third-card"> 
         
            <h4 class="smallTitle">The Vision</h4>
            <h2 className="SecTitle">To pioneer the global transformation towards intelligent living environment</h2>
            <p className="disc">
                Smart Homes aims at revolutionizing the way individuals interact with their
                homes and
                shaping the
                future of modern living. By leveraging cutting-edge technology and innovative solutions, we aspire to
                redefine the concept of home automation, making it accessible, intuitive, and seamlessly integrated into
                the fabric of everyday life.
            </p>
        </div>
       
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            We are a smart home automation company focused on making your life
            easier, safer, and more connected. Our solutions bring comfort,
            security, and control into your home with modern technology.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create simple, reliable, and affordable smart home
            solutions that improve everyday living experiences.
          </p>
        </div>

        <div className="about-box">
          <h2>Why Choose Us</h2>
          <ul>
            <li>✔ Modern Smart Home Solutions</li>
            <li>✔ Easy Installation</li>
            <li>✔ 24/7 Support</li>
            <li>✔ Secure & Reliable Systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
}