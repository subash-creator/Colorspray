import React from "react";
import { Helmet } from "react-helmet-async";
import "./Partner.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse same rocket image

export default function Partner() {
  return (
    <div className="Partner-container">
      <Helmet>
        <title>Partner With Us | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Collaborate with Soaron Aerospace Innovations. Our Partner With Us page is coming soon. Stay tuned for partnership opportunities!"
        />
        <meta name="keywords" content="partner, partnership, Soaron Aerospace, business collaboration, drones, aerospace" />
      </Helmet>

      <Header />

      <main className="Partner-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for partner with us page coming soon"
          className="rocket-img"
        />
        <h1 className="Partner-main-title">PARTNER WITH US — COMING SOON</h1>
        <p className="Partner-subtitle">Exciting opportunities to collaborate will be available soon!</p>
      </main>

      <Footer />
    </div>
  );
}
