import React from "react";
import { Helmet } from "react-helmet-async";
import "./Press.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse rocket image

export default function Press() {
  return (
    <div className="Press-container">
      <Helmet>
        <title>Press | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Stay updated with the latest news and press releases from Soaron Aerospace Innovations. Press page coming soon!"
        />
        <meta
          name="keywords"
          content="press, news, Soaron Aerospace, media, aerospace technology"
        />
      </Helmet>

      <Header />

      <main className="Press-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for press page coming soon"
          className="rocket-img"
        />
        <h1 className="Press-main-title">PRESS & MEDIA - COMING SOON</h1>
        <p className="Press-subtitle">
          Stay tuned for exciting updates, announcements, and press releases.
        </p>
      </main>

      <Footer />
    </div>
  );
}
