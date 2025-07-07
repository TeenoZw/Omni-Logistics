"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface NavLink {
  href: string;
  label: string;
  active: boolean;
}

export default function Header() {
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    { href: "#home", label: "Home", active: true },
    { href: "#services", label: "Services", active: false },
    { href: "#features", label: "Features", active: false },
    { href: "#pricing", label: "Pricing", active: false },
    { href: "#contact", label: "Contact", active: false },
  ]);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Initialize smooth scrolling
    const handleNavClick = (e: Event, href: string) => {
      e.preventDefault();
      const targetSection = document.querySelector(href);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active nav link
        setNavLinks((prev) =>
          prev.map((link) => ({
            ...link,
            active: link.href === href,
          }))
        );
      }
    };

    // Handle navigation scroll behavior
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show nav when near top
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide nav
        setIsNavVisible(false);
      } else {
        // Scrolling up - show nav
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Attach scroll handler
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Listen for custom login modal event
    const handleOpenLoginModal = () => {
      setShowLoginModal(true);
    };

    window.addEventListener("openLoginModal", handleOpenLoginModal);

    // Attach click handlers
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href) handleNavClick(e, href);
      });
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openLoginModal", handleOpenLoginModal);
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`futuristic-nav ${
          isNavVisible ? "nav-visible" : "nav-hidden"
        }`}
      >
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-icon">
              <Image
                src="/assets/logo.PNG"
                alt="Omni Logistics Logo"
                className="brand-logo"
                width={40}
                height={40}
              />
            </div>
            <span className="brand-text">Omni Logistics</span>
          </div>

          <div className="nav-links">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link ${link.active ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="login-btn nav-cta"
              onClick={() => setShowLoginModal(true)}
            >
              <span>Login</span>
              <i className="fas fa-sign-in-alt"></i>
            </button>
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <div
          className="login-modal"
          onClick={() => setShowLoginModal(false)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="glassy-card login-card"
            onClick={(e) => e.stopPropagation()}
            role="none"
          >
            <button
              className="close-login-modal"
              onClick={() => setShowLoginModal(false)}
            >
              &times;
            </button>
            <div className="login-logo">
              <Image
                src="/assets/omni eye portal logo.PNG"
                alt="Omni Eye Portal Logo"
                className="portal-logo-modal"
                width={80}
                height={80}
              />
            </div>
            <h2>Login to Omni Eye Portal</h2>
            <form id="loginForm">
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="submit-btn">
                <span>Login</span>
              </button>
            </form>
            <div className="login-links">
              <button
                type="button"
                id="forgotPasswordLink"
                className="link-button"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
