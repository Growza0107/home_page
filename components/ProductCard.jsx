import React, { useState, useEffect } from "react";
import "../styles/ProductCard.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";

const products = [
  { img: p1, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p2, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p3, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p4, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p5, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p6, title: "Descriptive Title", subtitle: "Date and Duration" },
  { img: p7, title: "Descriptive Title", subtitle: "Date and Duration" },
];

const CarouselItem = ({ img, title, subtitle, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : "blurred"}`}>
      <img className="carousel-item__img" src={img} alt={title} />
      <div className="carousel-item__details">
        <div className="controls">
          <span className="fas fa-play-circle"></span>
          <span className="fas fa-plus-circle"></span>
        </div>
        <h5 className="carousel-item__details--title">{title}</h5>
        <h6 className="carousel-item__details--subtitle">{subtitle}</h6>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <section className="carousel">
      <h2 className="categories__title">My List</h2>
      <button className="carousel-button left" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel__container">
        {products.map((product, index) => (
          <CarouselItem key={index} {...product} isActive={index === activeIndex} />
        ))}
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
