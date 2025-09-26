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
        <div className="color-container">
            <Helmet>
                <title>Colorown Spray</title>
                <meta
                    name="description"
                    content="Soaron Aerospace Innovations – Revolutionizing aerial painting with Colorown Spray drones."
                />
            </Helmet>

            <Header />

            {/* Hero Section */}
            <section className="color-hero">
                <div className="color-overlay"></div>
                <div className="color-hero-content">
                    <img src={logo} alt="Colorown Spray Logo" className="color-hero-logo" />
                    <h2 className="color-hero-subtitle">Revolutionizing Aerial Painting</h2>
                    <img src={drone} alt="Spray Drone" className="color-hero-drone" />
                    <button className="color-trial-btn">Trial</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="color-features">
                <div className="color-features-grid">
                    <div className="color-feature-box">
                        <h3>Safer</h3>
                        <p>Designed with safety as a priority, our system minimizes risks and maximizes operator protection.</p>
                    </div>
                    <div className="color-feature-box">
                        <h3>Precise</h3>
                        <p>Achieve pinpoint accuracy with every spray, ensuring consistent coverage and reduced waste.</p>
                    </div>
                    <div className="color-feature-box">
                        <h3>Advanced</h3>
                        <p>Leverage cutting-edge technology for superior performance and unmatched efficiency.</p>
                    </div>
                    <div className="color-feature-box">
                        <h3>Faster</h3>
                        <p>Accelerate your painting projects with our high-performance drones, delivering rapid and reliable results.</p>
                    </div>
                </div>

                <div className="color-features-drone">
                    <div className="color-outer-circle"></div>
                    <div className="color-inner-circle"></div>
                    <img src={drone1} alt="Feature Drone" className="color-drone-img" />
                </div>
            </section>

            {/* Section Three */}
            <section className="color-section-three">
                <div className="color-section-three-content">
                    <img src={section3bg} alt="Drone in Action" className="color-section-three-img" />
                </div>
            </section>

            <Footer />
        </div>
    );
}
