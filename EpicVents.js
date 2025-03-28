import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EpicVents.css"; 
import Footer from "./Footer";
import collageImage from "./collage.jpg"; 
import marriage from "./marriage.jpg";
import social from "./social.jpg";
import birthday from "./birthday.jpg";
import corporate from "./corporate.jpg";
import inaugration from "./inaugration.jpg";

const EpicVents = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("text").classList.add("visible");
  }, []);

  return (
    <div>
      <div className="image-container">
        <img src={collageImage} alt="Event Management Banner" />
        <p className="text-overlay" id="text">EpicVents</p>
      </div>

      <div className="content">
        <h2>Welcome to EpicVents</h2>
        <p>Explore our services, know more about us, or send an enquiry to get started on your memorable event.</p>

        {events.map((event, index) => (
          <div className="event-section" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-text">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              {event.link && (
                <button 
                  className="learn-more-btn"
                  onClick={() => navigate(event.link)}
                >
                  Learn More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

const events = [
  { title: "Wedding Planning", image: marriage, description: "We handle every detail to ensure your special day is flawless.", link: "/wedding-services" },
  { title: "Social Gatherings", image: social, description: "We create memorable social events with a wonderful experience.", link: "/social" }, // Updated Link
  { title: "Birthday Parties", image: birthday, description: "Custom-themed decorations and fun activities for birthdays.", link: "/birthday-services" },
  { title: "Corporate Events", image: corporate, description: "We plan professional corporate events with seamless execution.", link: "/corporate-services" },
  { title: "Inauguration Parties", image: inaugration, description: "Perfect inauguration events to make your venture stand out.", link: "/inaugration-services" }
];

export default EpicVents;
