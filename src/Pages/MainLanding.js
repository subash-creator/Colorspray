import React from "react";

import { Helmet } from "react-helmet-async";
import "./MainLanding.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import aiSmartIcon from "../assets/ai_smart_icon 1.svg";
import battleTestedIcon from "../assets/battle_tested_icon 1.svg";
import cleaningIcon from "../assets/cleaning_icon 1.svg";
import coatingIcon from "../assets/coating_icon 1.svg";
import fasterIcon from "../assets/faster_icon 1.svg";
import paintingIcon from "../assets/painting_icon (2) 1.svg";
import saferIcon from "../assets/safer_icon 1.svg";


export default function MainLanding() {
    return (
        <div className="main-landing-container">
            <Helmet>
                <title>Soaron</title>
                <meta
                    name="description"
                    content="Soaron Aerospace Innovations Private Limited – Revolutionizing Aerial Painting with Colorown Spray drones."
                />
            </Helmet>
            <Header />
            <section className="section-1">
                <h1>Revolutionizing Construction with Drone Technology</h1>
                <p>Autonomous drones for precision painting, industrial coating, and high-rise cleaning — safer, faster, and smarter.</p>
                <div className="button-group">
                    <button className="waitlist">Join Our Waitlist</button>
                    <button className="Partner">Partner With Us</button>
                </div>
            </section>
            <section className="section-2">
                <h1>Who We Are</h1>
                <p>
                    Soaron is an aerospace-tech company developing drones that transform the way
                    construction projects are maintained. From industrial coatings to façade
                    cleaning, our systems deliver high-precision results without putting human
                    lives at risk.
                </p>
                <div className="container">
                    <div className="box">
                        <h1>9</h1>
                        <p>Working Prototypes Built</p>
                    </div>
                    <div className="box">
                        <h1>₹50L</h1>
                        <p>Funds Raised</p>
                    </div>
                    <div className="box">
                        <h1>2+</h1>
                        <p>Leading Construction Firms</p>
                    </div>
                </div>
            </section>

            <section className="section-3">
                <h1>Drone Solutions for Construction</h1>
                <p>Autonomous aerial systems for safer, faster, and smarter construction maintenance.</p>
                <div className="container">
                    <div className="box1">
                        <img src={paintingIcon} alt="Painting" />
                        <h1>Painting</h1>
                        <p>Large-scale exterior & high-rise painting with unmatched precision and coverage.</p>
                    </div>
                    <div className="box1">
                        <img src={coatingIcon} alt="Coating" />
                        <h1>Coating</h1>
                        <p>Protective, industrial-grade coatings applied with consistent thickness and quality.</p>
                    </div>
                    <div className="box1">
                        <img src={cleaningIcon} alt="Cleaning" />
                        <h1>Cleaning</h1>
                        <p>Façade & glass cleaning at hazardous heights without scaffolding.</p>
                    </div>
                </div>
            </section>


            <section className="section-4">
                <h1>Why Choose Soaron?</h1>
                <p>Experience the future of construction with our proven technology and unmatched benefits</p>
                <div className="features-list">
                    <div className="feature-row">
                        <img src={saferIcon} alt="Safer" />
                        <div>
                            <h2>Safer</h2>
                            <p>Eliminates risky scaffolding work and reduces workplace accidents by 95%. Protect your workforce with autonomous solutions.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <img src={fasterIcon} alt="Faster" />
                        <div>
                            <h2>Faster</h2>
                            <p>Our drones complete construction jobs 3–5x quicker than traditional methods, dramatically reducing project timelines.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <img src={aiSmartIcon} alt="AI Powered" />
                        <div>
                            <h2>AI-Powered Smart</h2>
                            <p>Advanced AI precision technology reduces material waste by up to 40% while ensuring consistent, high-quality results every time.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <img src={battleTestedIcon} alt="Battle Tested" />
                        <div>
                            <h2>Battle-Tested Proven</h2>
                            <p>Multiple prototypes rigorously tested and validated with leading construction firms. Ready for real-world deployment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}