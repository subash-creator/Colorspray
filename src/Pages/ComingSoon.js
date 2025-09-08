import React from "react"; 
import { Helmet } from "react-helmet-async";
import "./ComingSoon.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

// ✅ Import image from src/assets
import rocket from "../assets/rocket.png";

export default function ComingSoon() {
  return ( 
    <div className="comingsoon-container">
      <Helmet>
        <title>Soaron</title>
        <meta 
          name="description" 
          content="Soaron Aerospace Innovations – We are coming soon with something amazing!" 
        />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <img
          src={rocket}
          alt="Rocket"
          className="rocket-img"
        />
        <h2 className="main-title">WE ARE COMING SOON!!</h2>
        <p className="subtitle">Stay tuned for something amazing</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
