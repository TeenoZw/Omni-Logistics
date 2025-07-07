"use client";

import { useState } from "react";
import { personalPlans, businessPlans } from "../lib/plans";

export default function Pricing() {
  const [selectedPlanType, setSelectedPlanType] = useState<
    "personal" | "business"
  >("personal");

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const currentPlans =
    selectedPlanType === "personal" ? personalPlans : businessPlans;

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <div className="pricing-badge">
            <i className="fas fa-sparkles"></i>
            <span>Flexible Plans</span>
          </div>
          <h2 className="pricing-title">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="pricing-subtitle">
            Tailored solutions for every need - from individual tracking to
            enterprise fleet management
          </p>

          {/* Plan Type Toggle */}
          <div className="plan-type-switcher">
            <div className="switcher-container">
              <button
                className={`type-btn ${
                  selectedPlanType === "personal" ? "active" : ""
                }`}
                onClick={() => setSelectedPlanType("personal")}
              >
                <div className="btn-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="btn-content">
                  <span className="btn-title">Individual</span>
                  <span className="btn-subtitle">Up to 2 users</span>
                </div>
              </button>
              <button
                className={`type-btn ${
                  selectedPlanType === "business" ? "active" : ""
                }`}
                onClick={() => setSelectedPlanType("business")}
              >
                <div className="btn-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="btn-content">
                  <span className="btn-title">Company</span>
                  <span className="btn-subtitle">Multiple users</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.badge && (
                <div className="plan-badge">
                  <i className={plan.badgeIcon}></i>
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon">
                  <i className={plan.icon}></i>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <i
                      className={`fas ${
                        feature.included ? "fa-check" : "fa-times"
                      } feature-icon ${
                        feature.included ? "included" : "excluded"
                      }`}
                    ></i>
                    <span
                      className={feature.included ? "included" : "excluded"}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="plan-action">
                <button className="plan-btn" onClick={handleContactClick}>
                  {plan.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
