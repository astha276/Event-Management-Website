import React, { useState, useEffect } from "react";
import "./Social.css";

const Social = () => {
  const sliderImages = [
    "https://th.bing.com/th/id/OIP.FoOveAYRv2fG3N8CCPHxlwHaE2?rs=1&pid=ImgDetMain",
    "https://laubsters.com/wp-content/uploads/2019/08/family-gathering.jpg",
    "https://www.century-banquetcenter.com/wp-content/uploads/2024/08/Depositphotos_652717150_XL-scaled.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div>
      {/* Image Slider */}
      <div className="image-slider">
        {sliderImages.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="features">
        <p className="features-intro">We offer premium event management services for all kinds of social gatherings:</p>
        
        {services.map((service, index) => (
          <div className="feature" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="feature-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Centered Book Now Button */}
      <div className="center-book-now">
        <a href="/booking" className="book-now-bottom">Book Now</a>
      </div>
    </div>
  );
};

// Social Gathering Services
const services = [
  { 
    title: "Venue Decoration", 
    image: "https://addisvenues.com/wp-content/uploads/2017/10/Best-Wedding-Venues-in-addis-ababa-Ethiopia-848x530.jpg", 
    description: "Beautifully decorated venues tailored to your theme." 
  },
  { 
    title: "Catering Services", 
    image: "https://tastytablecatering.com/wp-content/uploads/2019/04/general-events-bg.jpg", 
    description: "Exquisite dining experiences for your guests." 
  },
  { 
    title: "Event Planning & Coordination", 
    image: "https://th.bing.com/th/id/OIP.yzDRKz6QH_2BMoCcgbkRnwHaFj?rs=1&pid=ImgDetMain", 
    description: "End-to-end planning to make your social event a success." 
  },
  { 
    title: "Guest Management", 
    image: "https://ethos3.com/wp-content/uploads/2019/12/3-tips-for-surviving-the-season-of-social-gatherings-768x388.jpeg", 
    description: "Seamless guest coordination to ensure a smooth experience for everyone." 
  }
];

export default Social;
