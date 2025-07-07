"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="omni-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Section */}
          <div className="footer-section company-section">
            <div className="footer-brand">
              <div className="brand-logo-container">
                <Image
                  src="/assets/logo.PNG"
                  alt="Omni Logistics Logo"
                  className="footer-logo"
                  width={50}
                  height={50}
                />
                <div className="brand-text">
                  <h3>Omni Logistics</h3>
                  <span>Omni Eye Portal</span>
                </div>
              </div>
              <p className="company-description">
                Leading provider of professional vehicle tracking and fleet
                management solutions across Zimbabwe. Empowering businesses and
                individuals with real-time insights and control over their
                assets.
              </p>

              {/* Contact Info */}
              <div className="footer-contact-info">
                <div className="contact-info-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@omnilogistics.co.zw</span>
                </div>
                <div className="contact-info-item">
                  <i className="fas fa-phone"></i>
                  <span>+263 777 233 814</span>
                </div>
                <div className="contact-info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>1, Emerald Drive, Redcliff, Kwekwe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Solutions</h4>
            <div className="footer-links">
              <button
                onClick={() => scrollToSection("services")}
                className="footer-link"
              >
                <i className="fas fa-map-marked-alt"></i>
                <span>Real-time Tracking</span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="footer-link"
              >
                <i className="fas fa-truck"></i>
                <span>Fleet Management</span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="footer-link"
              >
                <i className="fas fa-shield-alt"></i>
                <span>Security Features</span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="footer-link"
              >
                <i className="fas fa-chart-bar"></i>
                <span>Analytics & Reports</span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="footer-link"
              >
                <i className="fas fa-wrench"></i>
                <span>Maintenance Tracking</span>
              </button>
            </div>
          </div>

          {/* Plans Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Plans & Pricing</h4>
            <div className="footer-links">
              <button
                onClick={() => scrollToSection("pricing")}
                className="footer-link"
              >
                <i className="fas fa-user"></i>
                <span>Personal Plans</span>
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="footer-link"
              >
                <i className="fas fa-building"></i>
                <span>Business Plans</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="footer-link"
              >
                <i className="fas fa-phone"></i>
                <span>Get Quote</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="footer-link"
              >
                <i className="fas fa-handshake"></i>
                <span>Custom Solutions</span>
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="footer-link"
              >
                <i className="fas fa-calculator"></i>
                <span>Pricing Calculator</span>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Support & Resources</h4>
            <div className="footer-links">
              <button
                onClick={() => scrollToSection("contact")}
                className="footer-link"
              >
                <i className="fas fa-headset"></i>
                <span>Contact Support</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-question-circle"></i>
                <span>Help Center</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-book"></i>
                <span>Documentation</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-tools"></i>
                <span>Installation Guide</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-download"></i>
                <span>Mobile App</span>
              </button>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <button className="footer-link">
                <i className="fas fa-info-circle"></i>
                <span>About Us</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-newspaper"></i>
                <span>News & Updates</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-briefcase"></i>
                <span>Careers</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-shield-check"></i>
                <span>Privacy Policy</span>
              </button>
              <button className="footer-link">
                <i className="fas fa-file-contract"></i>
                <span>Terms of Service</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h4>Stay Updated</h4>
              <p>
                Get the latest updates on new features, industry insights, and
                exclusive offers
              </p>
            </div>
            <form className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Code by H2O. All rights reserved.</p>
              <p>Professional Vehicle Tracking Solutions in Zimbabwe</p>
            </div>

            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Vehicles Tracked</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">137+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Provinces Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
