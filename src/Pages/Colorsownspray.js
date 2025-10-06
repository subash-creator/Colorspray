import React from "react";
import { Helmet } from "react-helmet-async";
import "./Colorsownspray.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

import logo from "../assets/Colorown Spray Logo.webp";
import drone from "../assets/Drone.webp";
import drone1 from "../assets/Drone1.webp";


export default function Colorsownspray() {
    return (
        <div className="color-container">
            <Helmet>
                <title>Colorown Spray</title>
                <meta
                    name="description"
                    content="Soaron Aerospace Innovations – Revolutionizing aerial painting with Colorown Spray drones."
                />
                <link rel="preload" as="image" href="../assets/section1bg.webp" />
                <link rel="preload" as="image" href={require("../assets/Colorown Spray Logo.webp")} />
                <link rel="preload" as="image" href={require("../assets/Drone.webp")} />
                <link rel="preload" as="image" href={require("../assets/Drone1.webp")} />
                <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            </Helmet>

            <Header />

            {/* Hero Section */}
            <section className="color-hero">
                <div className="color-overlay"></div>
                <div className="color-hero-content">
                    <img src={logo} alt="Colorown Spray Logo" className="color-hero-logo" loading="lazy" />
                    <h2 className="color-hero-subtitle">Revolutionizing Aerial Painting</h2>
                    <img src={drone} alt="Spray Drone" className="color-hero-drone" loading="lazy" />
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
                    <img src={drone1} alt="Feature Drone" className="color-drone-img" loading="lazy" />
                </div>
            </section>

            {/* Section Three */}
            <section className="color-section-three">
                <div className="color-section-three-content">
                    <div className="video-responsive">
                        <iframe
                            loading="lazy"
                            src="https://www.youtube.com/embed/qqqm14NKLYU?rel=0&si=c3fcGUJDbLeTTRCO&autoplay=1&mute=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>


                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
