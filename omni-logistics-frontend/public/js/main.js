// ===========================
// Futuristic Landing Page JavaScript
// ===========================

console.log("🚀 Omni Logistics - Futuristic Interface Loaded!");

// ===========================
// DOM Content Loaded Handler
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  initializeScrollEffects();
  initializeAnimations();
  initializeCounters();
  initializeFormValidation();
  initializeSmoothScrolling();
  initializeParallax();
  initializeDataStreams();
  initializeButtonEffects();
  initializeOrbitAnimations();
  initializeGlassEffects();
  initializePulseDots();
  initializePricingToggle();
  console.log("✨ All futuristic components initialized");
});

// ===========================
// Smooth Scrolling for Navigation
// ===========================

function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active nav link
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
}

// ===========================
// Scroll Effects & Navbar
// ===========================

function initializeScrollEffects() {
  const navbar = document.querySelector(".futuristic-nav");
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    throttle(() => {
      const currentScrollY = window.scrollY;

      // Navbar background opacity based on scroll
      if (currentScrollY > 50) {
        navbar.style.background = "rgba(10, 11, 26, 0.95)";
        navbar.style.backdropFilter = "blur(30px)";
      } else {
        navbar.style.background = "rgba(10, 11, 26, 0.8)";
        navbar.style.backdropFilter = "blur(20px)";
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;

      // Parallax effect for hero visual
      const heroVisual = document.querySelector(".hero-visual");
      if (heroVisual) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        heroVisual.style.transform = `translateY(${parallax}px)`;
      }

      // Update active nav link based on scroll position
      updateActiveNavLink();
    }, 16)
  );
}

// ===========================
// Update Active Navigation Link
// ===========================

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// ===========================
// Counter Animations
// ===========================

function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number, .metric-value");
  const observerOptions = {
    threshold: 0.7,
    rootMargin: "0px 0px -100px 0px",
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        animateCounter(entry.target);
        entry.target.classList.add("counted");
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.textContent.replace(/[^\d]/g, ""));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent =
        target.toLocaleString() +
        (element.textContent.includes(".")
          ? ".9%"
          : element.textContent.includes("+")
          ? "+"
          : "");
    }
  };

  updateCounter();
}

// ===========================
// Card Reveal Animations
// ===========================

function initializeAnimations() {
  const cards = document.querySelectorAll(
    ".service-card, .pricing-card, .feature-item"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(card);
  });
}

// ===========================
// Data Stream Animations
// ===========================

function initializeDataStreams() {
  const streams = document.querySelectorAll(".data-stream");

  streams.forEach((stream, index) => {
    setInterval(() => {
      stream.style.opacity = "0";
      stream.style.transform = "translateY(0)";

      setTimeout(() => {
        stream.style.opacity = "1";
        stream.style.transform = "translateY(20px)";

        setTimeout(() => {
          stream.style.opacity = "0";
        }, 1000);
      }, 100);
    }, 3000 + index * 500);
  });
}

// ===========================
// Parallax Effects
// ===========================

function initializeParallax() {
  const parallaxElements = document.querySelectorAll(".floating-element");

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + index * 0.05;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) rotate(${
          scrolled * 0.02
        }deg)`;
      });
    }, 16)
  );
}

// ===========================
// Form Validation & Submission
// ===========================

function initializeFormValidation() {
  const form = document.querySelector(".glass-form");
  const submitBtn = document.querySelector(".submit-btn");

  if (form && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const inputs = form.querySelectorAll(
        "input[required], select[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#ef4444";
          input.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.1)";
        } else {
          input.style.borderColor = "var(--glass-border)";
          input.style.boxShadow = "none";
        }
      });

      if (isValid) {
        // Simulate form submission
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.background =
            "linear-gradient(135deg, #10b981, #059669)";

          setTimeout(() => {
            submitBtn.innerHTML =
              '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = "var(--gradient-primary)";
            submitBtn.disabled = false;
            form.reset();
          }, 2000);
        }, 1500);
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.style.borderColor = "var(--accent-blue)";
        this.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
      });

      input.addEventListener("blur", function () {
        if (this.hasAttribute("required") && !this.value.trim()) {
          this.style.borderColor = "#ef4444";
          this.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.1)";
        } else {
          this.style.borderColor = "var(--glass-border)";
          this.style.boxShadow = "none";
        }
      });
    });
  }
}

// ===========================
// Glowing Button Effects
// ===========================

function initializeButtonEffects() {
  const buttons = document.querySelectorAll(
    ".hero-btn.primary, .nav-cta, .plan-btn.primary, .submit-btn"
  );

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.6)";
      this.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
      this.style.transform = "translateY(-2px)";
    });
  });
}

// ===========================
// Orbit Animation Controls
// ===========================

function initializeOrbitAnimations() {
  const orbitRings = document.querySelectorAll(".orbit-ring");
  let isPaused = false;

  orbitRings.forEach((ring) => {
    ring.addEventListener("mouseenter", () => {
      if (!isPaused) {
        ring.style.animationPlayState = "paused";
      }
    });

    ring.addEventListener("mouseleave", () => {
      if (!isPaused) {
        ring.style.animationPlayState = "running";
      }
    });
  });

  // Pause animations when page is not visible
  document.addEventListener("visibilitychange", () => {
    isPaused = document.hidden;
    orbitRings.forEach((ring) => {
      ring.style.animationPlayState = isPaused ? "paused" : "running";
    });
  });
}

// ===========================
// Glass Card Hover Effects
// ===========================

function initializeGlassEffects() {
  const glassCards = document.querySelectorAll(
    ".service-card, .pricing-card, .glass-dashboard"
  );

  glassCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.background = "rgba(255, 255, 255, 0.08)";
      this.style.borderColor = "var(--accent-blue)";
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.background = "var(--glass-bg)";
      this.style.borderColor = "var(--glass-border)";
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// ===========================
// Pulse Dot Animations
// ===========================

function initializePulseDots() {
  const pulseDots = document.querySelectorAll(
    ".map-dot, .pulse-dot, .orbit-dot"
  );

  pulseDots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.5}s`;

    // Add random pulse variations
    setInterval(() => {
      if (dot) {
        dot.style.boxShadow = `0 0 ${
          Math.random() * 30 + 10
        }px rgba(6, 182, 212, ${Math.random() * 0.5 + 0.3})`;
      }
    }, 2000 + index * 500);
  });
}

// ===========================
// Performance Optimizations
// ===========================

// Throttle scroll events for better performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Debounce resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===========================
// Pricing Toggle Functionality - Modern Redesign
// ===========================

function initializePricingToggle() {
  const typeButtons = document.querySelectorAll(".type-btn");
  const plansSections = document.querySelectorAll(".plans-section");

  console.log("🎯 Initializing modern pricing toggle...");
  console.log("Type buttons found:", typeButtons.length);
  console.log("Plans sections found:", plansSections.length);

  if (!typeButtons.length || !plansSections.length) {
    console.warn("❌ Missing type buttons or plans sections");
    return;
  }

  // Ensure personal plans are visible by default
  const personalPlans = document.querySelector(".personal-plans");
  if (personalPlans) {
    personalPlans.classList.add("active");
    console.log("✅ Personal plans made visible by default");
  }

  // Hide all other plans initially
  plansSections.forEach((section) => {
    if (!section.classList.contains("personal-plans")) {
      section.classList.remove("active");
    }
  });

  // Add click event listeners to type buttons
  typeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const planType = this.getAttribute("data-type");
      console.log(`🔄 Switching to ${planType} plans`);

      // Remove active class from all type buttons
      typeButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Hide all plans sections
      plansSections.forEach((section) => {
        section.classList.remove("active");
      });

      // Show selected plans section
      const targetSection = document.querySelector(
        `[data-plans="${planType}"]`
      );

      if (targetSection) {
        // Add active class to trigger CSS animation
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 150); // Slight delay for smooth transition

        console.log(`✅ Switched to ${planType} plans`);
      } else {
        console.error(`❌ Could not find section for ${planType} plans`);
      }
    });
  });

  // Initialize plan card hover effects
  initializePlanCardEffects();
}

// Initialize plan card hover and interaction effects
function initializePlanCardEffects() {
  const planCards = document.querySelectorAll(".plan-card");

  planCards.forEach((card) => {
    // Add entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    // Set initial state for animation
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
  });

  // Add button click effects
  const planButtons = document.querySelectorAll(".plan-btn");
  planButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    });
  });
}

// Add CSS animation for ripple effect
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Handle resize events
window.addEventListener(
  "resize",
  debounce(function () {
    console.log("🔄 Window resized - reinitializing responsive elements");
  }, 250)
);

// ===========================
// Scroll to Top Function
// ===========================

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }
});

// ===========================
// Modern Contact Form Enhancement
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  initializeContactForm();
  initializeNewsletterForm();
});

function initializeContactForm() {
  const contactForm = document.querySelector(".modern-contact-form");
  if (!contactForm) return;

  // Add floating label effect
  const formFields = contactForm.querySelectorAll(".form-field");
  formFields.forEach((field) => {
    const input = field.querySelector("input, select, textarea");
    const label = field.querySelector("label");

    if (input && label) {
      input.addEventListener("focus", () => {
        field.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          field.classList.remove("focused");
        }
      });

      input.addEventListener("input", () => {
        if (input.value) {
          field.classList.add("has-value");
        } else {
          field.classList.remove("has-value");
        }
      });
    }
  });

  // Form submission with Netlify function
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.querySelector("span").textContent;
    const formData = new FormData(this);

    // Collect form data
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      planType: formData.get("planType"),
      fleetSize: formData.get("fleetSize"),
      message: formData.get("message"),
    };

    // Update button state
    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = "Sending...";
    submitBtn.classList.add("loading");

    try {
      // Call Netlify function
      const response = await fetch("/.netlify/functions/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Success state
        submitBtn.querySelector("span").textContent = "Message Sent!";
        submitBtn.classList.remove("loading");
        submitBtn.classList.add("success");

        // Show success message
        showNotification(
          "Thank you! We will get back to you within 24 hours.",
          "success"
        );

        // Reset form after delay
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.querySelector("span").textContent = originalText;
          submitBtn.classList.remove("success");
          contactForm.reset();

          // Reset field states
          formFields.forEach((field) => {
            field.classList.remove("focused", "has-value");
          });
        }, 3000);

        // Call lead scoring function (optional)
        try {
          await fetch("/.netlify/functions/lead-scoring", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        } catch (scoringError) {
          console.log("Lead scoring failed:", scoringError);
          // Don't show error to user as this is internal
        }
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      // Error state
      submitBtn.querySelector("span").textContent = "Failed to Send";
      submitBtn.classList.remove("loading");
      submitBtn.classList.add("error");

      // Show error message
      showNotification(
        "Sorry, there was an error sending your message. Please try again.",
        "error"
      );

      // Reset button after delay
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = originalText;
        submitBtn.classList.remove("error");
      }, 3000);
    }
  });
}

function initializeNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector("button");
    const originalText = submitBtn.querySelector("span").textContent;

    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = "Subscribing...";

    setTimeout(() => {
      submitBtn.querySelector("span").textContent = "Subscribed!";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = originalText;
        this.reset();
      }, 2000);
    }, 1500);
  });
}

// ===========================
// Notification System
// ===========================

function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(
    ".notification-toast"
  );
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification-toast notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${
        type === "success"
          ? "fa-check-circle"
          : type === "error"
          ? "fa-exclamation-circle"
          : "fa-info-circle"
      }"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add styles if not already present
  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style");
    styles.id = "notification-styles";
    styles.textContent = `
      .notification-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        padding: 16px 20px;
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: all 0.3s ease;
        border-left: 4px solid #007bff;
      }
      
      .notification-toast.notification-success {
        border-left-color: #28a745;
      }
      
      .notification-toast.notification-error {
        border-left-color: #dc3545;
      }
      
      .notification-toast.show {
        transform: translateX(0);
      }
      
      .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .notification-content i {
        font-size: 16px;
      }
      
      .notification-success .notification-content i {
        color: #28a745;
      }
      
      .notification-error .notification-content i {
        color: #dc3545;
      }
      
      .notification-close {
        position: absolute;
        top: 8px;
        right: 8px;
        background: none;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s ease;
      }
      
      .notification-close:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(styles);
  }

  // Add to DOM
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Auto hide after 5 seconds
  const autoHideTimeout = setTimeout(() => {
    hideNotification(notification);
  }, 5000);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    clearTimeout(autoHideTimeout);
    hideNotification(notification);
  });
}

function hideNotification(notification) {
  notification.classList.remove("show");
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 300);
}
