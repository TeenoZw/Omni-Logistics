<script>
  import { onMount } from 'svelte';

  onMount(() => {
    initializeScrollEffects();
    initializeAnimations();
    initializeParallax();
    initializeSmoothScrolling();
  });

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Smooth Scrolling for Navigation
  function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"], [data-scroll-to]');

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href") || this.getAttribute("data-scroll-to");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href;
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
        }
      });
    });
  }

  // Scroll Effects & Navbar
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

  // Update Active Navigation Link
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // Element Animation on Scroll
  function initializeAnimations() {
    const cards = document.querySelectorAll(
      ".service-card, .pricing-card, .feature-item, .plan-card, .feature-card, .info-card"
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
          entry.target.classList.add('animate-in');
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

    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header, .pricing-header');
    sectionHeaders.forEach((header, index) => {
      header.style.opacity = "0";
      header.style.transform = "translateY(20px)";
      header.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
      
      const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);
      
      headerObserver.observe(header);
    });
  }

  // Parallax Effects
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

        // Parallax for background elements
        const parallaxBgs = document.querySelectorAll('.parallax-bg');
        parallaxBgs.forEach((bg, index) => {
          const speed = 0.5 + index * 0.1;
          const yPos = scrolled * speed;
          bg.style.transform = `translateY(${yPos}px)`;
        });
      }, 16)
    );
  }

  // Counter Animations
  function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number, .metric-value');
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
          const increment = target / 50;
          let current = 0;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // Initialize counters when component mounts
  onMount(() => {
    // Delay counter initialization to ensure DOM is ready
    setTimeout(() => {
      initializeCounters();
    }, 100);
  });
</script>

<!-- No template needed - this is a pure behavior component -->
