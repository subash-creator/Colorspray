import React from "react";
import { Helmet } from "react-helmet-async";
import "./Story.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

import rocket from "../assets/rocket.png";
import founderImg from "../assets/rocket.png"; // placeholder
import partner1 from "../assets/rocket.png";
import partner2 from "../assets/rocket.png";

export default function Story() {
  return (
    <div className="Story-container">
      <Helmet>
        <title>Our Story | Soaron Aerospace Innovations</title>
        <meta
          name="description"
          content="Learn about the journey of Soaron Aerospace Innovations."
        />
        <meta
          name="keywords"
          content="story, journey, Soaron Aerospace, about us, aerospace technology"
        />
      </Helmet>

      <Header />

      <main className="Story-main-content">
        {/* ===== 1. Hero Section ===== */}
        <section className="story-hero">
          <div className="hero-content">
            <h1>
              Transforming Industries Through <br />
              <span>Autonomous Aerial Innovation</span>
            </h1>
            <p>
              From advanced flying systems to reliable on-ground data services —
              we’re building the future of intelligent aerial ecosystems for
              faster, safer, and smarter operations.
            </p>
          </div>
          <img src={rocket} alt="rocket" className="hero-rocket" />
        </section>

        {/* ===== 2. Founder Message ===== */}
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-text">
              <h2>Founder Message</h2>
              <p>
                This journey started with a belief that innovation can make
                aerial technology accessible to everyone. From small projects to
                large-scale deployments, every milestone we’ve achieved has
                strengthened our vision — to bring the sky closer through
                simplicity, connectivity, and intelligence. I’m incredibly proud
                of our team’s dedication and the partnerships that keep pushing
                Soaron forward every day.
              </p>
              <h4>— Shadab Ahmad</h4>
            </div>
            <div className="founder-image">
              <img src={founderImg} alt="Founder" />
            </div>
          </div>
        </section>

        {/* ===== 3. Partnerships ===== */}
        <section className="partnership-section">
          <h2>Our Partnerships</h2>
          <p>
            Soaron’s innovation journey is backed by academic and industrial
            collaborations. We are proudly associated with institutions and
            organizations that share our vision of autonomous aerial technology
            for tomorrow.
          </p>
          <div className="partner-logos">
            <img src={partner1} alt="Partner 1" />
            <img src={partner2} alt="Partner 2" />
          </div>
        </section>

        {/* ===== 4. Board of Directors ===== */}
        <section className="board-section">
          <h2>Board of Directors</h2>
          <p>Meet the passionate individuals behind Soaron’s success.</p>
          <div className="board-cards">
            <div className="board-card">
              <div className="avatar"></div>
              <h3>Shadab Ahmad</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="board-card">
              <div className="avatar"></div>
              <h3>Moeeah Muneendra</h3>
              <p>Co-Founder & Director</p>
            </div>
          </div>
        </section>

        {/* ===== 5. Our Team ===== */}
        <section className="team-section">
          <h2>Our Team</h2>
          <p>Meet the passionate individuals behind Soaron’s success.</p>
          <div className="team-grid">
            {[
              "Srikanth",
              "Abdul Khadarsha",
              "Veera",
              "Joseph Raj",
              "Dineshwaran",
              "Akla Gino",
            ].map((name) => (
              <div key={name} className="team-card">
                <div className="avatar"></div>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
