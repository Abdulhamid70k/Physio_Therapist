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
       bg-gradient-to-r from-pink-500 to-orange-500 text-white 
          p-3 rounded-full shadow-lg 
          transition transform hover:scale-110
          animate-bounce z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden relative">
        <Navbar
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
          pricingRef={pricingRef}
          testimonialRef={testimonialRef}
        />
        <PhysioTherapist />
        <WhoWeAre />
        <OurServices
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
        />
        <OurFacilities
          scrollToSection={scrollToSection}
          testimonialRef={testimonialRef}
        />
        <FeedbackSection
          scrollToSection={scrollToSection}
          pricingRef={pricingRef}
        />
        <ContactUs />
        <Footer />
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 
    bg-gradient-to-r from-green-400 to-blue-500
    text-white
    p-3 rounded-full shadow-lg 
    hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400
    transition transform hover:scale-110 z-50"
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
