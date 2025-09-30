import React from "react";
import { Helmet } from "react-helmet-async";
import "./Cleanhigh.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse same rocket image or replace with drone icon if available

export default function Cleanhigh() {
  return (
    <div className="Cleanhigh-container">
      <Helmet>
        <title>CleanHigh Drone | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Discover our CleanHigh drone for high-altitude cleaning. Page coming soon!"
        />
        <meta
          name="keywords"
          content="CleanHigh drone, high-altitude cleaning drone, Soaron Aerospace, drone technology"
        />
      </Helmet>

      <Header />

      <main className="Cleanhigh-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for CleanHigh drone page coming soon"
          className="rocket-img"
        />
        <h1 className="Cleanhigh-main-title">CLEANHIGH DRONE — COMING SOON</h1>
        <p className="Cleanhigh-subtitle">
          Our high-altitude cleaning drone, CleanHigh, will be showcased here soon!
        </p>
      </main>

      <Footer />
    </div>
  );
}
