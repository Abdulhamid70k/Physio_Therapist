import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import Img1 from "../assets/Images/profile1.png";
import Img2 from "../assets/Images/profile2.png";
import Img3 from "../assets/Images/profile3.png";
import Img4 from "../assets/Images/profile4.png";

const FeedbackCard = ({ img, name, role, feedback }) => {
  return (
    <div className="bg-white dark:bg-darkBackground p-6 md:p-8 rounded-2xl shadow-light dark:shadow-dark transition-all duration-300 ease-in-out transform hover:-translate-y-2 min-w-[280px] max-w-[500px] w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <img
              src={img}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-800 dark:text-gray-200">{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </div>
        <Quote className="rotate-180 text-blue-600 dark:text-blue-400 opacity-50" size={32} />
      </div>
      <hr className="border-t border-gray-200 dark:border-gray-700 mb-4" />
      <div>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 line-clamp-3">
          {feedback}
        </p>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className="text-yellow-400 fill-current" 
              size={20} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const feedbacks = [
    {
      img: Img1,
      name: "Robert Davis",
      role: "Physio Patient",
      feedback: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate."
    },
    {
      img: Img2,
      name: "Vanseena Adams",
      role: "Recovery Patient",
      feedback: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate."
    },
    {
      img: Img3,
      name: "Robert Adams",
      role: "Recovery Patient",
      feedback: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate."
    },
    {
      img: Img4,
      name: "Vanseena Adams",
      role: "Recovery Patient",
      feedback: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate."
    }
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += direction * slideWidth;
      
      // Update current slide
      setCurrentSlide(prev => {
        const newSlide = prev + direction;
        return Math.max(0, Math.min(newSlide, feedbacks.length - 1));
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-darkBackground dark:to-darkBackground py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">
          Client Testimonials
        </h2>

        <div className="relative">
          {/* Left Navigation */}
          <button 
            onClick={() => scrollSlider(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block"
          >
            <ChevronLeft className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Right Navigation */}
          <button 
            onClick={() => scrollSlider(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block"
          >
            <ChevronRight className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto space-x-6 pb-6 px-4 scroll-smooth scrollbar-hide"
          >
            {feedbacks.map((feedback, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <FeedbackCard {...feedback} />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {feedbacks.map((_, index) => (
              <span 
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;