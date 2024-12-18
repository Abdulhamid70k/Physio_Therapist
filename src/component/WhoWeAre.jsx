import { MoveRight, Layers, Smile, Bell, Crown } from "lucide-react";
import React, { useState } from "react";
import Img1 from "../assets/Images/img5.jpg";

const WhoWeAre = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    {
      id: 1,
      title: 'The "WOW" Factor: Elevating the Patient Experience',
      description: 'Delivering exceptional care that goes beyond expectations, ensuring every patient feels valued and supported.',
      icon: <Layers size={40} color="white" />,
      bgColor: "bg-blue-500 dark:bg-blue-700",
      iconBg: "bg-blue-200 dark:bg-blue-800",
      
    },
    {
      id: 2,
      title: "Your Path to Recovery: Personalized Treatment Plans",
      description: 'Crafting individualized strategies that address your unique physical challenges and wellness goals.',
      icon: <Smile size={40} color="white" />,
      bgColor: "bg-purple-500 dark:bg-purple-700",
      iconBg: "bg-purple-200 dark:bg-purple-800",
    },
    {
      id: 3,
      title: "Unwavering Integrity: Building Trust with Our Patients",
      description: 'Committed to transparent, ethical, and compassionate care that prioritizes your health and well-being.',
      icon: <Bell size={40} color="white" />,
      bgColor: "bg-pink-500 dark:bg-pink-700",
      iconBg: "bg-pink-200 dark:bg-pink-800",
    },
    {
      id: 4,
      title: "Empowering Our Team: Committed to Excellence",
      description: 'Investing in continuous learning and professional development to provide top-tier physiotherapy services.',
      icon: <Crown size={40} color="white" />,
      bgColor: "bg-yellow-500 dark:bg-yellow-700",
      iconBg: "bg-yellow-200 dark:bg-yellow-800",
    },
  ];

  const toggleCardDetails = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="whoWeAre bg-gradient-to-br from-pink-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Responsive Upper Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Container */}
        <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
          <img
            src={Img1}
            alt="About Us"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f52e98] to-[#f87d3b] inline-block ">
            Exploring the Core of Physio Therapist
          </h2>
          <div className="h-1 bg-gradient-to-r from-pink-500 to-orange-400 dark:from-pink-300 dark:to-orange-200 w-24 mx-auto md:mx-0 mb-6"></div>

          <div className="grid md:grid-cols-1 gap-4">
            {[
              {
                title: "Our Mission",
                description: "We are passionate physiotherapists committed to enabling you to move gracefully and experience optimal well-being."
              },
              {
                title: "Personalized Care",
                description: "Our therapists craft tailored treatment plans, blending manual therapy, exercise regimens, and rehabilitation techniques."
              },
              {
                title: "Holistic Approach",
                description: "We believe in comprehensive wellness, offering complementary services to enhance flexibility and overall health."
              }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 dark:text-gray-300 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-3">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Card Section */}
      <div className="mt-16 mb-8">
        <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`relative transform transition-all duration-300 ${activeCard === card.id ? 'scale-105 shadow-2xl' : 'hover:scale-105 shadow-lg'} bg-white dark:bg-gray-800 rounded-xl p-6 text-center`}
              onClick={() => toggleCardDetails(card.id)}
            >
              {/* Icon */}
              <div className={`flex justify-center mb-4`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${card.iconBg}`}>
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className={`font-bold text-lg text-pink-600 dark:text-pink-300 mb-3 ${card.textColor}`}>
                {card.title}
              </h4>

              {/* Description */}
              {activeCard === card.id && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 animate-fade-in">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
