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
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={Logo}
            alt="Physio Therapist Logo"
            className="w-[200px] md:w-[250px] mb-4 transition-transform hover:scale-105"
          />
          <p className="text-center md:text-left text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Dedicated to providing holistic physiotherapy solutions with compassion and expertise.
          </p>
        </div>

        {/* Center Section - Navigation & Socials */}
        <div className="flex flex-col items-center space-y-6">
          {/* Explore Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Explore</h3>
            <div className="grid grid-cols-2 gap-2 text-[14px]">
              {exploreLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(" ", "").toLowerCase()}`}
                  className="hover:text-pink-500 dark:hover:text-orange-500 transition text-gray-700 dark:text-gray-400 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center space-x-6">
            {[
              { icon: InstagramIcon, alt: "Instagram", href: "#" },
              { icon: FacebookIcon, alt: "Facebook", href: "#" },
              { icon: WhatsAppIcon, alt: "WhatsApp", href: "#" },
            ].map(({ icon, alt, href }) => (
              <a
                key={alt}
                href={href}
                className="hover:scale-110 transition-transform group"
              >
                <img
                  src={icon}
                  alt={alt}
                  className="w-8 h-8 group-hover:drop-shadow-md"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Contact & Appointment */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Contact Info */}
          <div className="space-y-4 w-full max-w-xs">
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800 shadow-md dark:shadow-dark rounded-full flex items-center justify-center">
                <Phone size={18} className="text-pink-500 dark:text-orange-500" />
              </div>
              <a href="tel:+918949572153" className="text-sm font-medium hover:text-pink-600 dark:hover:text-orange-400">
                +91 8949572153
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800 shadow-md dark:shadow-dark rounded-full flex items-center justify-center">
                <Mail size={18} className="text-pink-500 dark:text-orange-500" />
              </div>
              <a href="mailto:physiotherapist@outlook.com" className="text-sm font-medium hover:text-pink-600 dark:hover:text-orange-400">
                physiotherapist@outlook.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800 shadow-md dark:shadow-dark rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-pink-500 dark:text-orange-500" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Balotra, Rajasthan</span>
            </div>
          </div>

          {/* Appointment Booking */}
          <div className="w-full max-w-xs space-y-4">
            <h3 className="text-lg font-bold text-center md:text-right text-gray-800 dark:text-gray-200">
              Book an Appointment
            </h3>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:border-pink-500 dark:focus:border-orange-500 transition"
              />
              <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 dark:from-orange-500 dark:to-pink-500 text-white py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Map & Copyright */}
      <div className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57459.03373708979!2d72.19825276525422!3d25.830296690788384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943e8d13ce86b51%3A0xc41d3acc5c3109dd!2sBalotra%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1734459702467!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            © 2024 Physio Therapist. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
