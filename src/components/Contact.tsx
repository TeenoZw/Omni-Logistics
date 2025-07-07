"use client";

import { useState } from "react";
import { getPlanOptions } from "../lib/plans";
import { getContactMethods } from "../lib/contact-config";

interface ContactSubmissionData {
  formData: {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    planType?: string;
    fleetSize?: string;
    message: string;
  };
  success: boolean;
  error?: string | null;
}

interface ContactProps {
  onContactSubmit: (data: ContactSubmissionData) => void;
}

export default function Contact({ onContactSubmit }: ContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    planType: "",
    fleetSize: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
    ""
  );

  // Get plan options from shared data
  const planOptions = getPlanOptions();

  // Get contact methods from configuration
  const contactMethods = getContactMethods();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showNotification = (message: string, status: "success" | "error") => {
    setSubmitMessage(message);
    setSubmitStatus(status);

    // Auto-hide after 8 seconds
    setTimeout(() => {
      setSubmitMessage("");
      setSubmitStatus("");
    }, 8000);

    // Scroll to the contact section to show notification
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      showNotification(
        "Please fill in all required fields (Name, Email, Message)",
        "error"
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Dispatch event to parent component
        onContactSubmit({ formData, success: true });

        showNotification(
          result.message ||
            "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.",
          "success"
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          planType: "",
          fleetSize: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, there was an error sending your message. Please try again.";
      onContactSubmit({ formData, success: false, error: errorMessage });
      showNotification(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Background Pattern */}
        <div className="contact-bg-pattern">
          <div className="pattern-element pattern-1"></div>
          <div className="pattern-element pattern-2"></div>
          <div className="pattern-element pattern-3"></div>
        </div>

        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <i className="fas fa-headset"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="contact-title">
            Ready to Transform Your{" "}
            <span className="gradient-text">Fleet Management</span>?
          </h2>
          <p className="contact-subtitle">
            Join hundreds of satisfied customers across Zimbabwe who trust Omni
            Logistics for their vehicle tracking needs
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-card">
            <div className="info-header">
              <h3>Let&apos;s Start Your Journey</h3>
              <p>
                Connect with our expert team to discover the perfect solution
                for your needs
              </p>
            </div>

            {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">
                    <i className={method.icon}></i>
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p>{method.detail}</p>
                    <small>{method.subtitle}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4>Quick Actions</h4>
              <div className="action-buttons">
                <button className="action-btn primary">
                  <i className="fas fa-rocket"></i>
                  <span>Get Started</span>
                </button>
                <button className="action-btn secondary">
                  <i className="fas fa-calendar"></i>
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>

            {/* Service Information */}
            <div className="service-info">
              <div className="service-badge">
                <i className="fas fa-tools"></i>
                <span>Professional Installation</span>
              </div>
              <p>
                All plans include professional hardware installation and setup
                by our certified technicians
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>
                Tell us about your fleet management needs and we&apos;ll provide
                a tailored solution
              </p>
            </div>

            {/* Notification */}
            {submitMessage && (
              <div className={`notification ${submitStatus}`}>
                <i
                  className={`fas ${
                    submitStatus === "success"
                      ? "fa-check-circle"
                      : "fa-exclamation-circle"
                  }`}
                ></i>
                <span>{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="planType">Interested Plan</label>
                  <select
                    id="planType"
                    name="planType"
                    value={formData.planType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a plan...</option>
                    {planOptions.map((plan) => (
                      <option key={plan.value} value={plan.value}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fleetSize">Fleet Size</label>
                  <select
                    id="fleetSize"
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleInputChange}
                  >
                    <option value="">Select fleet size...</option>
                    <option value="1-5">1-5 vehicles</option>
                    <option value="6-15">6-15 vehicles</option>
                    <option value="16-50">16-50 vehicles</option>
                    <option value="51-100">51-100 vehicles</option>
                    <option value="100+">100+ vehicles</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your fleet management needs, any specific requirements, or questions you have about our services..."
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
