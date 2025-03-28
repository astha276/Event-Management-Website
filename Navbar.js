import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar Header */}
      <header className="navbar">
        <p className="brand-name">EpicVents - Event Management</p>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login / Sign Up
        </button>
      </header>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/enquiry">Enquiry</a>
        <a href="/about">About Us</a>
      </nav>
    </div>
  );
};

export default Navbar;
