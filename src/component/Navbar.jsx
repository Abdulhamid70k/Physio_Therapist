import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/Images/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { label: 'Home', href: '#carousel' },
    { label: 'About', href: '#whoWeAre' },
    { label: 'Services', href: '#ourServices' },
    { label: 'Our Team', href: '/ourteam' },
    { label: 'Facilities', href: '#ourFacilities' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '#contactUs' }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('#carousel, #whoWeAre, #ourServices, #ourFacilities, #houseVisit, #reviews, #contactUs');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchingLink = navLinks.find(link => link.href === `#${sectionId}`);
          if (matchingLink) {
            setActiveSection(matchingLink.label);
          }
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[80px] flex items-center justify-between px-5 md:px-20 shadow-sm">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img 
          src={Logo} 
          alt="Logo" 
          className="max-w-[250px] max-h-[170px]" 
        />
      </a>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`
        fixed md:static
        top-[60px] left-0 right-0 
        bg-white 
        md:flex md:items-center md:space-x-4 
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'block' : 'hidden'}
        md:block
        h-[calc(100vh-60px)] md:h-auto
        pt-10 md:pt-0
        text-center md:text-left
      `}>
        {navLinks.map((link) => (
          <li key={link.label} className="md:inline-block py-2 md:py-0">
            <a 
              href={link.href} 
              className={`
                block md:inline-block p-2
                ${activeSection === link.label 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bold'
                  : 'text-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent'}
              `}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <a 
        href="#contactUs" 
        className="hidden md:block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-9 py-4 rounded-md"
      >
        Book an Appointment
      </a>
    </nav>
  );
};

export default Navbar;