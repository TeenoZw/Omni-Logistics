"use client";

import { useEffect } from "react";

interface HeroStat {
  number: string;
  label: string;
}

interface HeroProps {
  onPortalClick?: () => void;
}

export default function Hero({ onPortalClick }: HeroProps) {
  const heroStats: HeroStat[] = [
    { number: "137+", label: "Active Users" },
    { number: "3", label: "Provinces Served" },
    { number: "247", label: "Active Assets" },
  ];

  useEffect(() => {
    // Initialize orbit animations
    const orbits = document.querySelectorAll(".orbit-ring");
    orbits.forEach((orbit, index) => {
      const element = orbit as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const handlePortalClick = () => {
    // Dispatch custom event to trigger login modal
    const event = new CustomEvent("openLoginModal");
    window.dispatchEvent(event);

    // Also call the callback if provided
    if (onPortalClick) {
      onPortalClick();
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge" onClick={handlePortalClick}>
            <span>🚀 Discover The Power of Omni Eye Portal</span>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Omni Logistics</span>
            <br />
            Empowering your fleet, Driving your success!!!
          </h1>

          <p className="hero-description">
            Professional vehicle tracking and fleet management solutions for
            individuals and businesses in Zimbabwe.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">
              <span>Get Started</span>
              <div className="btn-glow"></div>
            </button>
            <button className="hero-btn secondary" onClick={handleContactClick}>
              <i className="fas fa-phone"></i>
              <span>Contact Us</span>
            </button>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="central-hub">
            <div className="hub-core"></div>
            <div className="orbit-ring ring-1">
              <div className="orbit-dot dot-1"></div>
              <div className="orbit-dot dot-2"></div>
              <div className="orbit-dot dot-3"></div>
            </div>
            <div className="orbit-ring ring-2">
              <div className="orbit-dot dot-4"></div>
              <div className="orbit-dot dot-5"></div>
            </div>
            <div className="data-stream stream-1"></div>
            <div className="data-stream stream-2"></div>
            <div className="data-stream stream-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
