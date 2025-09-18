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
            <Footer />
        </div>
    );
}