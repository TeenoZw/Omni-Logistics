"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
import FloatingScrollButton from "../components/FloatingScrollButton";
import Dashboard from "../components/Dashboard";

interface FormData {
  fullName: string;
  email: string;
  company?: string;
  planType?: string;
  fleetSize?: string;
  message: string;
}

interface ContactSubmissionData {
  formData: FormData;
  success: boolean;
  error?: string | null;
}

interface User {
  name: string;
  id: string;
}

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    setShowDashboard(false);
  };

  const handleContactSubmit = (data: ContactSubmissionData) => {
    console.log("Contact form submitted:", data);

    // Enhanced logging and handling
    const { formData, success, error } = data;

    if (success) {
      console.log("✅ Form submission successful:", {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        planType: formData.planType,
        fleetSize: formData.fleetSize,
        messageLength: formData.message.length,
      });

      // You could add additional success tracking here:
      // - Analytics events
      // - User feedback
      // - Redirect logic
    } else {
      console.log("❌ Form submission failed:", {
        error: error,
        formData: {
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
        },
      });

      // You could add additional error handling here:
      // - Error analytics
      // - Retry logic
      // - Alternative contact methods
    }
  };

  return (
    <>
      <FloatingElements />
      <FloatingScrollButton />
      <Header />

      {showDashboard ? (
        <Dashboard
          currentUser={currentUser}
          isVisible={showDashboard}
          onLogout={handleLogout}
        />
      ) : (
        <main>
          <Hero />
          <Services />
          <Features />
          <Pricing />
          <Contact onContactSubmit={handleContactSubmit} />
        </main>
      )}

      <Footer />
    </>
  );
}
