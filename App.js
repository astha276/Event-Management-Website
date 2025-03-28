import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpicVents from "./EpicVents";
import Enquiry from "./Enquiry";
import AboutUs from "./About";
import Navbar from "./Navbar"; 
import Wedding from "./Wedding";
import Social from "./Social";
import Footer from "./Footer";
import Login from "./Login"; // Adjust path if necessary
import "./App.css"; // Ensure global styles are applied

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar remains on all pages */}

      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<EpicVents />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wedding-services" element={<Wedding />} />
          <Route path="/social" element={<Social />} /> 
        </Routes>
      </div>

      <Footer /> {/* Footer remains on all pages */}
    </Router>
  );
};

export default App;
