import React from "react";
import { Helmet } from "react-helmet-async";
import "./Story.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

import founderImg from "../assets/rocket.png"; // placeholder
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";

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
            <hr className="hero-line" />
            <p>
              From advanced spray painting systems to robotic arm
              solutions and drone rental services—we're building
              the future of intelligent aerial automation for safer,
              faster, and more efficient operations.
            </p>
          </div>

        </section>

        {/* ===== 2. Founder Message ===== */}
        {/* ===== 2. Founder Message ===== */}
        <section className="founder-section">
          <div className="founder-content">
            {/* Left side - Text */}
            <div className="founder-text">
              <h2>Founder Message</h2>

              <div className="founder-message-box">
                <span className="quote-start">“</span>
                <p>
                  This journey started with a belief: that innovation isn't just about technology it's
                  about impact. From our earliest sketches to high-altitude trials, we've been guided
                  by the drive to make intelligent aerial systems more accessible, powerful, and purposeful.
                  Soaron is not just a company. It's a commitment to pushing boundaries and elevating ideas—quite literally.
                  This is just the beginning.
                  Thank you for being a part of our story.
                </p>
                <span className="quote-end">”</span>

                <div className="founder-info">
                  <div className="vertical-line"></div>
                  <div>
                    <h4>Shariq Ahmed</h4>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="founder-image">
              <img src={founderImg} alt="Founder" />
            </div>
          </div>
        </section>


        {/* ===== 3. Partnerships ===== */}
        <section className="partnership-section">
          <h2>Our Partnerships</h2>
          <p>
            Soaron’s innovation journey is backed by strong academic
            and institutional collaborations. We are proudly incubated
            at IIT Madras Incubation Cell and have signed a strategic
            MoU with the Institute of Aeronautical Engineering (IARE)
            to advance drone technology for construction.
          </p>

          <div className="partner-logos">
            <img src={partner2} alt="Partner 2" />
            <img src={partner1} alt="Partner 1" />

          </div>
        </section>

        {/* ===== 4. Board of Directors ===== */}
        <section className="board-section">
          <h2>Board of Directors</h2>
          <p>Meet the passionate individuals behind Soaron’s success.</p>
          <div className="board-cards">
            <div className="board-card">
              <div className="avatar"></div>
              <h3>Shariq Ahmed</h3>
              <h4>Founder & Chief Executive Officer</h4>
              <p>Visionary leader driving innovation in drone
                technology and aerial systems. Passionate about pushing</p>
            </div>
            <div className="board-card">
              <div className="avatar"></div>
              <h3>Moeeah Muneendra</h3>
              <h4>Board Member</h4>
              <p>Providing strategic guidance and oversight
                for our growth initiatives and long-term vision.</p>
            </div>
          </div>
        </section>

        {/* ===== 5. Our Team ===== */}
        <section className="team-section">
          <h2>Our Team</h2>
          <h5>Meet the passionate individuals behind Soaron’s success.</h5>

          <div className="team-grid">
            {[
              {
                name: "Srikanth",
                designation: "Software Engineer",
                description:
                  "Building scalable systems and ensuring seamless backend operations.",
              },
              {
                name: "Abdul Khadarsha",
                designation: "Frontend Developer",
                description:
                  "Crafting intuitive user interfaces and enhancing web experiences.",
              },
              {
                name: "Veera",
                designation: "AI Engineer",
                description:
                  "Developing smart algorithms and automation models for drone systems.",
              },
              {
                name: "Joseph Raj",
                designation: "Embedded Systems Engineer",
                description:
                  "Designing efficient hardware-software integrations for aerial solutions.",
              },
              {
                name: "Dineshwaran",
                designation: "Mechanical Engineer",
                description:
                  "Innovating robust drone structures with precision and reliability.",
              },
              {
                name: "Akla Gino",
                designation: "Product Designer",
                description:
                  "Creating aesthetic and functional product experiences for our users.",
              },
            ].map((member) => (
              <div key={member.name} className="team-card">
                <div className="avatar"></div>
                <h3>{member.name}</h3>
                <h4>{member.designation}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
