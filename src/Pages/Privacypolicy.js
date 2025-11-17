import React from "react";
import { Helmet } from "react-helmet-async";
import "./Privacypolicy.css";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Privacypolicy() {
  return (
    <div className="Privacypolicy-container">
      <Helmet>
        <title>Privacy Policy | Soaron</title>
        <meta
          name="description"
          content="Learn about how Soaron Technologies handles your privacy and data."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, user privacy, Soaron"
        />
      </Helmet>

      <Header />

      <main className="Privacypolicy-main-content">
        <h1>Privacy Policy</h1>

        <div className="policy-text">

          <p><strong>1. Introduction</strong></p>
          <p>
            Welcome to Soaron Technologies Pvt Ltd ("Soaron," "we," "our," or "us").
            We are committed to protecting your privacy and handling your personal 
            information with care and respect. This Privacy Policy explains how we 
            collect, use, disclose, and safeguard your information when you visit 
            our website https://soaron.co/ or engage with our services.
          </p>

          <p><strong>2. Information We Collect</strong></p>
          <p><strong>2.1 Personal Information You Provide</strong></p>
          <p>
            When you interact with our website, we may collect your name, email,
            phone number, company name, and any additional data you provide.
          </p>

          <p><strong>2.2 Automatically Collected Information</strong></p>
          <p>
            We use Google Analytics to collect anonymized usage data such as pages 
            visited, time spent, browser type, and device information.
          </p>

          <p><strong>3. How We Use Your Information</strong></p>
          <p><strong>3.1 Business Operations</strong></p>
          <p>
            To respond to inquiries, provide drone technology solutions, communicate 
            with clients, process service requests, and maintain business relationships.
          </p>

          <p><strong>3.2 Website Improvement</strong></p>
          <p>
            To analyze website usage and improve user experience.
          </p>

          <p><strong>3.3 Legal and Compliance</strong></p>
          <p>
            To comply with Indian laws and protect our legal rights.
          </p>

          <p><strong>4. How We Share Your Information</strong></p>
          <p>
            We do not sell or rent your information. We share it only with trusted 
            service providers, legal authorities, or with your consent.
          </p>

          <p><strong>5. Data Security</strong></p>
          <p>
            We use security measures to protect your data, but no system is 100% secure.
          </p>

          <p><strong>6. Data Retention</strong></p>
          <p>
            We retain data only as long as necessary or as permitted by law.
          </p>

          <p><strong>7. Your Rights</strong></p>
          <p>
            You have rights to access, correct, delete, or withdraw consent regarding 
            your personal data under India's DPDP Act, 2023.
          </p>

          <p><strong>8. Cookies & Tracking</strong></p>
          <p>
            We use essential cookies and Google Analytics (anonymized).
          </p>

          <p><strong>9. Third-Party Links</strong></p>
          <p>
            We are not responsible for privacy practices of external websites.
          </p>

          <p><strong>10. Children's Privacy</strong></p>
          <p>
            We do not collect information from individuals under 18.
          </p>

          <p><strong>11. International Data Transfers</strong></p>
          <p>
            Your data may be stored and processed in India.
          </p>

          <p><strong>12. Changes to This Privacy Policy</strong></p>
          <p>
            We may update the policy and will publish updates on our website.
          </p>

          <p><strong>13. Grievance Officer</strong></p>
          <p>
            Email: support@soaron.co  
            Phone: +91 90594 89056  
            Address: 10-1-128/1/2D, Ali Manor Complex, Masab Tank, Hyderabad – 500028  
          </p>

          <p><strong>14. Contact Us</strong></p>
          <p>
            Soaron Technologies Pvt Ltd  
            Email: support@soaron.co  
            Phone: +91 90594 89056  
            Website: https://soaron.co/
          </p>

          <p><strong>15. Governing Law</strong></p>
          <p>
            Governed by Indian Law. Jurisdiction: Hyderabad, Telangana.
          </p>

        </div>
      </main>
      <Footer />

    </div>
  );
}
