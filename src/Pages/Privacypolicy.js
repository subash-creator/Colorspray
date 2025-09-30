import React from "react";
import { Helmet } from "react-helmet-async";
import "./Privacypolicy.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse same rocket

export default function Privacypolicy() {
  return (
    <div className="Privacypolicy-container">
      <Helmet>
        <title>Privacy Policy | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Learn about how Soaron Aerospace Innovations handles your privacy and data. Privacy Policy page coming soon!"
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, user privacy, Soaron Aerospace"
        />
      </Helmet>

      <Header />

      <main className="Privacypolicy-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for privacy policy page coming soon"
          className="rocket-img"
        />
        <h1 className="Privacypolicy-main-title">PRIVACY POLICY — COMING SOON</h1>
        <p className="Privacypolicy-subtitle">
          Our commitment to protecting your data and privacy will be available soon.
        </p>
      </main>

      <Footer />
    </div>
  );
}
