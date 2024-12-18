import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import OurServices from "../component/OurService";
import ContactUs from "../component/ContactUs";
import FeedbackSection from "../component/FeedbackSection";
import WhoWeAre from "../component/WhoWeAre";
import PhysioTherapist from "../component/PhysioTherapist";
import OurFacilities from "../component/OurFacilities";

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialRef = useRef(null);

  // Theme detection and initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (savedTheme === null && prefersDarkMode)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll event listener for scroll-to-top button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Update theme when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to Top Button
  const ScrollToTopButton = () => {
    if (!showScrollTop) return null;

    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 
          bg-blue-600 text-white 
          p-3 rounded-full shadow-lg 
          hover:bg-blue-700
          transition transform hover:scale-110
          animate-bounce"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden">
        <Navbar
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
          pricingRef={pricingRef}
          testimonialRef={testimonialRef}
        />
        <PhysioTherapist />
        <WhoWeAre />
        <OurServices scrollToSection={scrollToSection} featuresRef={featuresRef} />
        <OurFacilities scrollToSection={scrollToSection} testimonialRef={testimonialRef} />
        <FeedbackSection scrollToSection={scrollToSection} pricingRef={pricingRef} />
        <ContactUs />
        <Footer />
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-6 left-6 
            bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-gray-200 
            p-3 rounded-full shadow-lg 
            hover:bg-gray-300 dark:hover:bg-gray-600
            transition transform hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Homepage;
