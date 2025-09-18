import React from "react";

import { Helmet } from "react-helmet-async";
import "./MainLanding.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
export default function MainLanding() {
    return(
        <div className="main-landing-container">
            <Helmet>
                <title>Soaron</title>
                <meta
                    name="description"
                    content="Soaron Aerospace Innovations Private Limited – Revolutionizing Aerial Painting with Colorown Spray drones."
                />
            </Helmet>
            <Header />
            <section className="main-landing-hero">
                </section>
            <Footer />
        </div>
    );
}