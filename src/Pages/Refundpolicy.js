import React from "react";
import { Helmet } from "react-helmet-async";
import "./Refundpolicy.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png"; // reuse the same rocket image

export default function Refundpolicy() {
  return (
    <div className="Refundpolicy-container">
      <Helmet>
        <title>Refund Policy | Soaron </title>
        <meta
          name="description"
          content="Learn about the refund policy of Soaron Aerospace Innovations."
        />
        <meta
          name="keywords"
          content="refund policy, returns, Soaron Aerospace, customer service, money back"
        />
      </Helmet>

      <Header />

      <main className="Refundpolicy-main-content">
        <img
          src={rocket}
          alt="Rocket illustration for refund policy page coming soon"
          className="rocket-img"
        />
        <h1 className="Refundpolicy-main-title">REFUND POLICY — COMING SOON</h1>
        <p className="Refundpolicy-subtitle">
          Our refund policy and procedures will be available here soon.
        </p>
      </main>

      <Footer />
    </div>
  );
}
