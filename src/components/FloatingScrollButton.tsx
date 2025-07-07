"use client";

import { useEffect, useState } from "react";

export default function FloatingScrollButton() {
  const [isVisible, setIsVisible] = useState(false); // Back to normal visibility logic
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button when scrolled down more than 100px
      setIsVisible(currentScrollY > 100);

      // Determine if we're closer to top or bottom
      const scrollPercentage = currentScrollY / (documentHeight - windowHeight);

      // If we're in the last 30% of the page, show "contact us" arrow
      // Otherwise, show "go to top" arrow
      if (scrollPercentage > 0.7) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = () => {
    if (scrollDirection === "up") {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className={`floating-scroll-btn ${scrollDirection}`}
      aria-label={scrollDirection === "up" ? "Scroll to top" : "Contact us"}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        width: "3.5rem",
        height: "3.5rem",
        backgroundColor: "#00a2ff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        boxShadow: "0 4px 20px rgba(0, 162, 255, 0.3)",
      }}
    >
      <i
        className={`fas ${
          scrollDirection === "up" ? "fa-chevron-up" : "fa-chevron-down"
        }`}
      ></i>
      <span className="scroll-btn-tooltip">
        {scrollDirection === "up" ? "Back to Top" : "Contact Us"}
      </span>
    </button>
  );
}
