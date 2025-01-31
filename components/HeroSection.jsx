import React from "react";
import "../styles/HeroSection.css"; // Import the CSS file for styling
import rightImage from "../assets/image3.webp"; // Add this new image
import leftImage from "../assets/image2.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Left Side: Splashing Vegetables */}
        <div className="right-image-container">
          <img src={leftImage} alt="Organic Vegetables Left" />
        </div>

        {/* Middle: Text Content */}
        <div className="text-content">
          <h1>Nature’s Choice for Healthy Living!</h1>
          <p>
            Crafted with the highest quality organic ingredients to ensure
            freshness and sustainability.
          </p>
          <button className="cta-button">Purchase Now</button>
        </div>

        {/* Right Side: Splashing Vegetables */}
        <div className="left-image-container">
          <img src={rightImage} alt="Organic Vegetables Right" />
        </div>
      </div>

      {/* Wave Border */}
      <svg className="wave-svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,202.7C672,224,768,256,864,245.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96V320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
