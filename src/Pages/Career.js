import React from "react";
import { Helmet } from "react-helmet-async";
import "./Career.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png";

export default function Career() {
  return (
    <div className="Career-container">
      <Helmet>
        <title>Careers at Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Join Soaron Aerospace Innovations – explore exciting career opportunities in aerospace, drones, and advanced technology."
        />
        <meta name="keywords" content="careers, aerospace jobs, drone jobs, Soaron Aerospace Innovations" />
      </Helmet>

      <Header />

      <main className="Career-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for careers coming soon"
          className="rocket-img"
        />
        <h1 className="Career-main-title">WE ARE HIRING SOON!!</h1>
        <p className="Career-subtitle">Stay tuned for something amazing</p>
      </main>

      <Footer />
    </div>
  );
}
