import React from "react";
import { Helmet } from "react-helmet-async";
import "./Help.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse same rocket image

export default function Help() {
  return (
    <div className="Help-container">
      <Helmet>
        <title>Help & Support | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Need help? The Help & Support page of Soaron Aerospace Innovations is coming soon. Stay tuned!"
        />
        <meta name="keywords" content="help, support, Soaron Aerospace, FAQs, customer service" />
      </Helmet>

      <Header />

      <main className="Help-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for help page coming soon"
          className="rocket-img"
        />
        <h1 className="Help-main-title">HELP & SUPPORT COMING SOON</h1>
        <p className="Help-subtitle">We’ll be here soon to assist you with everything you need.</p>
      </main>

      <Footer />
    </div>
  );
}
