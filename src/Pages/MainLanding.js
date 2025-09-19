import React from "react";

import { Helmet } from "react-helmet-async";
import "./MainLanding.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
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
                <p>Soaron is an aerospace-tech company developing drones that transform the way construction projects are maintained.
                    From industrial coatings to façade cleaning, our systems deliver high-precision results without putting human lives at risk.</p>
                <div className="container">
                    <div className="box">
                        <h1>9</h1>
                        <p>Working Prototypes Built</p>
                    </div>
                    <div className="box">
                        <h1>₹50L</h1>
                        <p>Working Prototypes Built</p>
                    </div>
                    <div className="box">
                        <h1>2+</h1>
                        <p>Leading Construction Firms</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}