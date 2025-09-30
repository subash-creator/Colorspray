import React from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png";

export default function Contact() {
  return (
    <div className="Contact-container">
      <Helmet>
        <title>Contact Us | Soaron </title>
        <meta
          name="description"
          content="Get in touch with Soaron Aerospace Innovations."
        />
        <meta name="keywords" content="contact, Soaron Aerospace, inquiry, drones, aerospace" />
      </Helmet>

      <Header />

      <main className="Contact-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for contact page coming soon"
          className="rocket-img"
        />
        <h1 className="Contact-main-title">CONTACT PAGE COMING SOON</h1>
        <p className="Contact-subtitle">Stay tuned — we’ll be ready to connect with you soon!</p>
      </main>

      <Footer />
    </div>
  );
}
