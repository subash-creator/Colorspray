import React from "react";
import { Helmet } from "react-helmet-async";
import "./MainLanding.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import aiSmartIcon from "../assets/ai_smart_icon 1.svg";
import battleTestedIcon from "../assets/battle_tested_icon 1.svg";
import fasterIcon from "../assets/faster_icon 1.svg";
import saferIcon from "../assets/safer_icon 1.svg";

export default function MainLanding() {
  return (
    <div className="main-landing-container">
      <Helmet>
        <title>Soaron Aerospace</title>
        <meta
          name="description"
          content="Soaron Aerospace Innovations – Revolutionizing high-rise maintenance with AI-powered drones for painting, coating, cleaning, and crack repair."
        />
      </Helmet>

      <Header />

      {/* Hero + Features in one section */}
      <section className="main-hero-section">
        <h1>
          Smart Drones for <br /> Painting & Coating <br />
          Cleaning & Crack Repair <br /> on High-Rise Structures.
        </h1>

        <div className="icon-row">
          <div className="icon-box">
            <img src={saferIcon} alt="Safer" />
            <h2>Safer</h2>
          </div>

          <div className="icon-box">
            <img src={fasterIcon} alt="Faster" />
            <h2>Faster</h2>
          </div>

          <div className="icon-box">
            <img src={aiSmartIcon} alt="AI Powered" />
            <h2>AI-Powered</h2>
          </div>

          <div className="icon-box">
            <img src={battleTestedIcon} alt="Field-Tested" />
            <h2>Field-Tested</h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
