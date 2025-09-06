import React from "react"; 
import { Helmet } from "react-helmet-async";
import "./Colorsownspray.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Colorsownspray() {
  return ( 
    <div className="colorownspray-container">
      <Helmet>
        <title>Colorown Spray</title>
        <meta 
          name="description" 
          content="Soaron Aerospace Innovations – Revolutionizing Aerial Painting with Colorown Spray drones." 
        />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: "url('/section1bg.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <img src="/Colorown Spray Logo.png" alt="Colorown Spray Logo" className="hero-logo" />
          <h2 className="hero-subtitle">Revolutionizing Aerial Painting</h2>
          <img src="/Drone.png" alt="Drone" className="hero-drone" />
          <button className="trail-btn">Trail</button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
