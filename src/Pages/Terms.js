import React from "react";
import { Helmet } from "react-helmet-async";
import "./Terms.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse the same rocket image

export default function Terms() {
  return (
    <div className="Terms-container">
      <Helmet>
        <title>Terms & Conditions | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Read the Terms & Conditions of Soaron Aerospace Innovations. This page is coming soon!"
        />
        <meta
          name="keywords"
          content="terms, conditions, Soaron Aerospace, policies, rules"
        />
      </Helmet>

      <Header />

      <main className="Terms-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for Terms & Conditions page coming soon"
          className="rocket-img"
        />
        <h1 className="Terms-main-title">TERMS & CONDITIONS — COMING SOON</h1>
        <p className="Terms-subtitle">
          Our Terms & Conditions will be available here soon.
        </p>
      </main>

      <Footer />
    </div>
  );
}
