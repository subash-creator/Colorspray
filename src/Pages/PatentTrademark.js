import React from "react";
import { Helmet } from "react-helmet-async";
import "./PatentTrademark.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse same rocket image

export default function PatentTrademark() {
  return (
    <div className="PatentTrademark-container">
      <Helmet>
        <title>Patent & Trademark | Soaron </title>
        <meta
          name="description"
          content="Explore patents and trademarks by Soaron Aerospace Innovations."
        />
        <meta
          name="keywords"
          content="patent, trademark, Soaron Aerospace, intellectual property, aerospace technology"
        />
      </Helmet>

      <Header />

      <main className="PatentTrademark-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for patent and trademark page coming soon"
          className="rocket-img"
        />
        <h1 className="PatentTrademark-main-title">
          PATENT & TRADEMARK — COMING SOON
        </h1>
        <p className="PatentTrademark-subtitle">
          Stay tuned for details about our innovations and intellectual property.
        </p>
      </main>

      <Footer />
    </div>
  );
}
