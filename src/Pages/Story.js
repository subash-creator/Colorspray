import React from "react";
import { Helmet } from "react-helmet-async";
import "./Story.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse the same rocket image

export default function Story() {
  return (
    <div className="Story-container">
      <Helmet>
        <title>Our Story | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Learn about the journey of Soaron Aerospace Innovations. Our Story page is coming soon!"
        />
        <meta
          name="keywords"
          content="story, journey, Soaron Aerospace, about us, aerospace technology"
        />
      </Helmet>

      <Header />

      <main className="Story-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for Our Story page coming soon"
          className="rocket-img"
        />
        <h1 className="Story-main-title">OUR STORY — COMING SOON</h1>
        <p className="Story-subtitle">
          Discover the journey of Soaron Aerospace Innovations soon!
        </p>
      </main>

      <Footer />
    </div>
  );
}
