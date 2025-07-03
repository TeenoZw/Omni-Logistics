<script>
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<footer class="omni-footer">
  <div class="footer-container">
    <!-- Main Footer Content -->
    <div class="footer-main">
      <!-- Company Section -->
      <div class="footer-section company-section">
        <div class="footer-brand">
          <div class="brand-logo-container">
            <img src="/assets/logo.PNG" alt="Omni Logistics Logo" class="footer-logo">
            <div class="brand-text">
              <h3>Omni Logistics</h3>
              <span>Omni Eye Portal</span>
            </div>
          </div>
          <p class="company-description">
            Leading provider of professional vehicle tracking and fleet management solutions across Zimbabwe. 
            Empowering businesses and individuals with real-time insights and control over their assets.
          </p>
          
          <!-- Contact Info -->
          <div class="footer-contact-info">
            <div class="contact-info-item">
              <i class="fas fa-envelope"></i>
              <span>info@omnilogistics.co.zw</span>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-phone"></i>
              <span>+263 777 233 814</span>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>1, Emerald Drive, Redcliff, Kwekwe</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Solutions Section -->
      <div class="footer-section">
        <h4 class="footer-heading">Solutions</h4>
        <div class="footer-links">
          <button on:click={() => scrollToSection("services")} class="footer-link">
            <i class="fas fa-map-marked-alt"></i>
            <span>Real-time Tracking</span>
          </button>
          <button on:click={() => scrollToSection("services")} class="footer-link">
            <i class="fas fa-truck"></i>
            <span>Fleet Management</span>
          </button>
          <button on:click={() => scrollToSection("services")} class="footer-link">
            <i class="fas fa-shield-alt"></i>
            <span>Security Features</span>
          </button>
          <button on:click={() => scrollToSection("services")} class="footer-link">
            <i class="fas fa-chart-bar"></i>
            <span>Analytics & Reports</span>
          </button>
          <button on:click={() => scrollToSection("services")} class="footer-link">
            <i class="fas fa-wrench"></i>
            <span>Maintenance Tracking</span>
          </button>
        </div>
      </div>

      <!-- Plans Section -->
      <div class="footer-section">
        <h4 class="footer-heading">Plans & Pricing</h4>
        <div class="footer-links">
          <button on:click={() => scrollToSection("pricing")} class="footer-link">
            <i class="fas fa-user"></i>
            <span>Personal Plans</span>
          </button>
          <button on:click={() => scrollToSection("pricing")} class="footer-link">
            <i class="fas fa-building"></i>
            <span>Business Plans</span>
          </button>
          <button on:click={() => scrollToSection("contact")} class="footer-link">
            <i class="fas fa-phone"></i>
            <span>Get Quote</span>
          </button>
          <button on:click={() => scrollToSection("contact")} class="footer-link">
            <i class="fas fa-handshake"></i>
            <span>Custom Solutions</span>
          </button>
          <button on:click={() => scrollToSection("pricing")} class="footer-link">
            <i class="fas fa-calculator"></i>
            <span>Pricing Calculator</span>
          </button>
        </div>
      </div>

      <!-- Support Section -->
      <div class="footer-section">
        <h4 class="footer-heading">Support & Resources</h4>
        <div class="footer-links">
          <button on:click={() => scrollToSection("contact")} class="footer-link">
            <i class="fas fa-headset"></i>
            <span>Contact Support</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-question-circle"></i>
            <span>Help Center</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-book"></i>
            <span>Documentation</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-tools"></i>
            <span>Installation Guide</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-download"></i>
            <span>Mobile App</span>
          </button>
        </div>
      </div>

      <!-- Company Info Section -->
      <div class="footer-section">
        <h4 class="footer-heading">Company</h4>
        <div class="footer-links">
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-info-circle"></i>
            <span>About Us</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-newspaper"></i>
            <span>News & Updates</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-briefcase"></i>
            <span>Careers</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-shield-check"></i>
            <span>Privacy Policy</span>
          </button>
          <button class="footer-link" on:click={() => {}}>
            <i class="fas fa-file-contract"></i>
            <span>Terms of Service</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="footer-newsletter">
      <div class="newsletter-content">
        <div class="newsletter-info">
          <h4>Stay Updated</h4>
          <p>Get the latest updates on new features, industry insights, and exclusive offers</p>
        </div>
        <form class="newsletter-form">
          <div class="input-group">
            <input type="email" placeholder="Enter your email address" required>
            <button type="submit">
              <i class="fas fa-paper-plane"></i>
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <div class="copyright">
          <p>&copy; 2025 Code by H2O. All rights reserved.</p>
          <p>Professional Vehicle Tracking Solutions in Zimbabwe</p>
        </div>
        
        <div class="footer-stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Vehicles Tracked</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">137+</span>
            <span class="stat-label">Active Users</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">3</span>
            <span class="stat-label">Provinces Served</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
.omni-footer {
  background: linear-gradient(135deg, rgba(13, 17, 38, 0.95), rgba(26, 34, 61, 0.95));
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
}

.omni-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 162, 255, 0.5), transparent);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 0 3rem;
}

.company-section {
  grid-column: 1;
}

.footer-brand {
  margin-bottom: 2rem;
}

.brand-logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 162, 255, 0.2);
}

.brand-text h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00a2ff, #0066cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-text span {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.company-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 400px;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.contact-info-item i {
  color: var(--primary-color);
  width: 16px;
  text-align: center;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.footer-link i {
  width: 16px;
  text-align: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.footer-link:hover i {
  opacity: 1;
}

.footer-newsletter {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
}

.newsletter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.newsletter-info h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.newsletter-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.newsletter-form {
  flex-shrink: 0;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.input-group input {
  background: none;
  border: none;
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  flex: 1;
  min-width: 250px;
}

.input-group input::placeholder {
  color: var(--text-muted);
}

.input-group input:focus {
  outline: none;
}

.input-group button {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.input-group button:hover {
  background: linear-gradient(135deg, #0088cc, #0055aa);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 162, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.copyright p {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0;
}

.footer-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .footer-main {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-section:last-child {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 992px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  .company-section {
    grid-column: 1 / -1;
  }
  
  .newsletter-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .input-group input {
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0 2rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-stats {
    justify-content: center;
  }
  
  .input-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .input-group input {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .footer-stats {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .stat-divider {
    display: none;
  }
}
</style>
