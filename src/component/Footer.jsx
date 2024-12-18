import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import FacebookIcon from "../assets/Images/facebook.svg";
import WhatsAppIcon from "../assets/Images/whatsapp.svg";
import InstagramIcon from "../assets/Images/instagram.svg";
import Logo from "../assets/Images/logo.png";

const Footer = () => {
  const exploreLinks = [
    "Home", "About", "Services", "Our Team",
    "Facilities", "Blogs", "Contact Us",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#EEF6FF] to-white text-gray-800 dark:from-darkBackground dark:to-gray-900 dark:text-gray-300 font-['Lato']">
      {/* Contact and Social Media - Responsive */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 py-4 px-4">
        <div className="flex items-center space-x-3">
          <Phone size={18} className="text-pink-500 dark:text-orange-500" />
          <a
            href="tel:+918949572153"
            className="text-xs sm:text-sm hover:text-pink-600 dark:hover:text-orange-400"
          >
            +91 8949572153
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Mail size={18} className="text-pink-500 dark:text-orange-500" />
          <a
            href="mailto:physiotherapist@outlook.com"
            className="text-xs sm:text-sm hover:text-pink-600 dark:hover:text-orange-400"
          >
            physiotherapist@outlook.com
          </a>
        </div>
        <div className="flex items-center space-x-6">
          {[
            { icon: InstagramIcon, alt: "Instagram", href: "#" },
            { icon: FacebookIcon, alt: "Facebook", href: "#" },
            { icon: WhatsAppIcon, alt: "WhatsApp", href: "#" }
          ].map(({ icon, alt, href }) => (
            <a 
              key={alt} 
              href={href} 
              className="hover:scale-110 transition-transform"
            >
              <img src={icon} alt={alt} className="w-6 sm:w-8 h-6 sm:h-8" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer Content - 4 Sections in Single Line for Large Screens */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="Physio Therapist Logo"
            className="w-[150px] sm:w-[200px] transition-transform hover:scale-105"
          />
        </div>

        {/* Explore Links Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <div className="flex flex-col items-center space-y-2 text-sm">
            {exploreLinks.map((item) => (
              <a
                key={item}
                href={`#${item.replace(" ", "").toLowerCase()}`}
                className="hover:text-pink-500 dark:hover:text-orange-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Appointment Booking Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">Book an Appointment</h3>
          <div className="w-full max-w-xs space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 sm:p-3 border-2 border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:border-pink-500 dark:focus:border-orange-500 transition text-sm"
            />
            <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 dark:from-orange-500 dark:to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">Our Location</h3>
          <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57459.03373708979!2d72.19825276525422!3d25.830296690788384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943e8d13ce86b51%3A0xc41d3acc5c3109dd!2sBalotra%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1734459702467!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4">
        © 2024 Physio Therapist. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;