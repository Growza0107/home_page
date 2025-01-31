import React from "react";
import "../styles/AboutSection.css"; // Make sure to create this CSS file for styling
import image from "../assets/groupimage.jpg"; // Import your image
import leafImage from "../assets/leaf.svg"; // Import leaf SVG

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-image">
          <img src={image} alt="Farm Image" />
        </div>
        <div className="about-text">
          <h2>About Our Organic Farm</h2>
          <p>
            We are dedicated to providing fresh, organic produce straight from our farm to your table.
            Our commitment to sustainability and eco-friendly farming ensures that you get the healthiest,
            chemical-free food while preserving nature.
          </p>
          <p>
            Join us in our journey towards a greener future. Experience the taste of purity with every bite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
