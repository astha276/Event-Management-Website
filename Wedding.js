import React from "react";
import "./Wedding.css";

const WeddingServices = () => {
  return (
    <div>
      {/* Image Slider */}
      <div className="image-slider">
        <div className="slide">
            <img src="https://outdoorceremonies.co.uk/wp-content/uploads/2021/04/Small-wedding-2048x1365-1.jpeg" alt="Slide 1" />
        </div>
        <div className="slide">
            <img src="https://i.pinimg.com/originals/f0/8b/3f/f08b3f60d95e1de522b869879300f59b.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5a70d9e2017db2025000ed6b/1670455169291-ORVHU44DUOP9UW3XLXB5/R6RZ3553.jpg" alt="Slide 3" />
        </div>
      </div>

      {/* Features Section */}
      <section className="features">
        <p className="features-intro">
          We provide the following services to make your wedding a memorable and seamless experience:
        </p>
        {services.map((service, index) => (
          <div className="feature" key={index}>
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              <img src={service.image} alt={service.title} />
            </a>
            <div className="feature-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Book Now Button */}
      <div className="center-book-now">
        <a href="/booking" className="book-now-bottom">Book Now</a>
      </div>
    </div>
  );
};

const services = [
  { title: "Venue Decoration", image: "/images/venue.jpg", description: "Beautifully crafted themes to make your venue stand out." },
  { title: "Catering Services", image: "/images/catering.jpg", description: "Delicious menus customized for your taste."},
  { title: "Photography", image: "/images/photography.jpg", description: "Capture every special moment with professional photography." },
  { title: "Haldi Ceremony", image: "/images/haldi.jpg", description: "Traditional Haldi ceremony arrangements."},
  { title: "Wedding Gifts", image: "/images/gifts.jpg", description: "Curated wedding favors for your beloved guests."}
];

export default WeddingServices;
