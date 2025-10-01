import React from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Pinpoint from "../Component/Pinpoint";

export default function Contact() {
  return (
    <div className="Contact-container">
      <Helmet>
        <title>Contact Us | Soaron</title>
        <meta
          name="description"
          content="Get in touch with Soaron Aerospace Innovations."
        />
        <meta
          name="keywords"
          content="contact, Soaron Aerospace, inquiry, drones, aerospace"
        />
      </Helmet>

      <Header />

      <main className="Contact-main-content">
        <div className="contact-info-map">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h1>Contact Information</h1>

            <div className="office-block">
              <h2>Office Addresses</h2>
              <h3>
                <span className="pin-icon"><Pinpoint /></span>
                Registered Office
              </h3>
              <p>
                10-1-128/1/2D, Ali Manor Complex, Masab Tank,
                <br />
                Hyderabad, Telangana - 500028
              </p>
            </div>

            <div className="office-block">
              <h3>
                <span className="pin-icon"><Pinpoint /></span>
                Incubation Office
              </h3>
              <p>
                IIT Madras Research Park, Kanagam Road, Taramani,
                <br />
                Chennai, Tamil Nadu - 600113
              </p>
            </div>

            <div className="office-block">
              <h3>
                <span className="pin-icon"><Pinpoint /></span>
                Collaboration (IARE)
              </h3>
              <p>
                Institute of Aeronautical Engineering, Dundigal,
                <br />
                Hyderabad, Telangana - 500043
              </p>
            </div>

            <div className="email-section">
              <div className="email-block">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white" />
                </svg>

                <div>
                  <a href="mailto:support@soaron.co">support@soaron.co</a>
                </div>
              </div>
            </div>

          </div>
          

          {/* Right: Map */}
          <div className="contact-map">
            <iframe
              title="Soaron Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97137178878b%3A0x411871eeffa91e74!2sSoaron!5e0!3m2!1sen!2sin!4v1759305470054!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
               referrerpolicy="no-referrer-when-downgrade"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
