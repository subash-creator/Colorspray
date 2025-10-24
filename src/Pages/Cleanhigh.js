import React from "react";
import { Helmet } from "react-helmet-async";
import "./Cleanhigh.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

// ✅ Import your images correctly
import cleanhighImg1 from "../assets/cleanhighimg1.png";
import cleanhighImg2 from "../assets/cleanhighimg2.png";
import cleanhighImg3 from "../assets/cleanhighimg3.png";

export default function Cleanhigh() {
  return (
    <div className="Cleanhigh-container">
      <Helmet>
        <title>CleanHigh Drone | Soaron</title>
        <meta
          name="description"
          content="Discover our CleanHigh drone for high-altitude cleaning."
        />
        <meta
          name="keywords"
          content="CleanHigh drone, high-altitude cleaning drone, Soaron Aerospace, drone technology"
        />
      </Helmet>

      <Header />

      <main className="Cleanhigh-main-content">
        {/* Hero Section */}
        <section className="cleanhigh-hero">
          <h1>CLEAN HIGH</h1>
          <p>Effortless High-Rise Cleaning, Fast and Flawless</p>
           <button className="cleanhigh-trial-btn">Trial Coming soon</button>
        </section>

        {/* Subject Section */}
        <section className="cleanhigh-subject">
          <h2>Subject</h2>
          <div className="cleanhigh-subject-grid">
            <div className="cleanhigh-subject-item">
              <img src={cleanhighImg1} alt="Building glass" />
              <p>Are you sick of dusty and stained building glasses?</p>
            </div>

            <div className="cleanhigh-subject-item">
              <img src={cleanhighImg2} alt="Cleaning service" />
              <p>Are regular glass cleaning services taking too long and involving a lot of risk?</p>
            </div>

            <div className="cleanhigh-subject-item">
              <img src={cleanhighImg3} alt="Robot cleaning" />
              <p>Are robotics glass cleaning services getting way too expensive for you?</p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="cleanhigh-advantages">
          <h2>Advantages</h2>
          <div className="cleanhigh-advantage-boxes">
            <div className="cleanhigh-advantage-box">
              <h3>End-to-End</h3>
              <p>From planning to cleaning, our drone takes care of it all seamlessly.</p>
            </div>

            <div className="cleanhigh-advantage-box">
              <h3>Effective</h3>
              <p>Precision-based spraying and wiping for spotless results.</p>
            </div>

            <div className="cleanhigh-advantage-box">
              <h3>Accessible</h3>
              <p>Reach even the toughest spots without scaffolding or human risk.</p>
            </div>

            <div className="cleanhigh-advantage-box">
              <h3>Faster</h3>
              <p>Complete glass cleaning in a fraction of the time of manual methods.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
