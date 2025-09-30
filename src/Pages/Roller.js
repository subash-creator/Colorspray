import React from "react";
import { Helmet } from "react-helmet-async";
import "./Roller.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse the same rocket image or replace with roller icon if available

export default function Roller() {
  return (
    <div className="Roller-container">
      <Helmet>
        <title>Roller Drone | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Learn about our innovative Roller drone for painting. Page coming soon!"
        />
        <meta
          name="keywords"
          content="roller drone, painting drone, Soaron Aerospace, drone technology"
        />
      </Helmet>

      <Header />

      <main className="Roller-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for Roller drone page coming soon"
          className="rocket-img"
        />
        <h1 className="Roller-main-title">ROLLER DRONE — COMING SOON</h1>
        <p className="Roller-subtitle">
          Our innovative painting drone, Roller, will be showcased here soon!
        </p>
      </main>

      <Footer />
    </div>
  );
}
