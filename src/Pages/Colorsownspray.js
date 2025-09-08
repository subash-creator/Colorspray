import React from "react";
import { Helmet } from "react-helmet-async";
import "./Colorsownspray.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";


import logo from "../assets/Colorown Spray Logo.png";
import drone from "../assets/Drone.png";
import drone1 from "../assets/Drone1.png";
import section3bg from "../assets/section3bg.png";

export default function Colorsownspray() {
    return (
        <div className="colorownspray-container">
            <Helmet>
                <title>Colorown Spray</title>
                <meta
                    name="description"
                    content="Soaron Aerospace Innovations – Revolutionizing Aerial Painting with Colorown Spray drones."
                />
            </Helmet>

            <Header />

            {/* Hero Section */}
            <section
                className="hero-section"
            >
                <div className="overlay"></div>
                <div className="hero-content">
                    <img src={logo} alt="" className="hero-logo" />
                    <h2 className="hero-subtitle">Revolutionizing Aerial Painting</h2>
                    <img src={drone} alt="Drone" className="hero-drone" />
                    <button className="trail-btn">Trail</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-box">
                        <h3>Safer</h3>
                        <p>Designed with safety in mind, our system reduces risks and enhances operator protection.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Precise</h3>
                        <p>Achieve pinpoint accuracy with every spray, ensuring flawless coverage and minimal waste.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Advanced</h3>
                        <p>Harness cutting-edge technology for superior performance and unparalleled efficiency.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Faster</h3>
                        <p>Speed up your painting projects with our high-performance drone, delivering rapid, consistent results.</p>
                    </div>
                </div>

                <div className="features-drone">
                    <div className="outer-circle"></div>
                    <div className="inner-circle"></div>
                    <img src={drone1} alt="" className="drone-img" />
                </div>
            </section>

            {/* Section Three */}
            <section className="section-three">
                <div className="section-three-content">
                    <img src={section3bg} alt="Section 3 Visual" className="section-three-img" />
                </div>
            </section>

            <Footer />
        </div>
    );
}
