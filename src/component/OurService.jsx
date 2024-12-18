import React from "react";
import Img1 from "../assets/Images/ourserv.jpg";
import Img2 from "../assets/Images/ourserv1.jpg";
import Img3 from "../assets/Images/ourserv2.jpg";
import Img4 from "../assets/Images/ourserv3.jpg";
import Img5 from "../assets/Images/ourserv4.jpg";
import Img6 from "../assets/Images/ourserv5.jpg";
import Img7 from "../assets/Images/ourserv6.jpg";
import Img8 from "../assets/Images/ourserv7.jpg";

// Service Data
const services = [
  { id: 1, title: "ORTHOPEDIC PHYSIOTHERAPY", description: "Focuses on joints, muscles, bones, ligaments, and tendons.", image: Img1 },
  { id: 2, title: "NEURO PHYSIOTHERAPY", description: "Treats neurological conditions.", image: Img2 },
  { id: 3, title: "GERIATRIC PHYSIOTHERAPY", description: "Promotes functional independence for older adults.", image: Img3 },
  { id: 4, title: "POSTURE AND ERGONOMICS", description: "Addresses posture and injury risks.", image: Img4 },
  { id: 5, title: "PRE AND POST OPERATIVE PHYSIOTHERAPY", description: "Optimizes recovery pre and post-surgery.", image: Img5 },
  { id: 6, title: "YOGA", description: "Improves flexibility, strength, and well-being.", image: Img6 },
  { id: 7, title: "PILATES", description: "Emphasizes core strength and posture.", image: Img7 },
  { id: 8, title: "AEROBICS", description: "Improves cardiovascular endurance.", image: Img8 },
];

const OurServices = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-12 text-center" id="ourServices">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flip-card w-full h-64"
          >
            {/* Card Inner */}
            <div className="flip-card-inner relative w-full h-full">
              {/* Front Side */}
              <div className="flip-card-front absolute inset-0 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 flex flex-col justify-center items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4 w-full h-32 object-cover"
                />
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">{service.title}</h3>
              </div>

              {/* Back Side */}
              <div className="flip-card-back absolute inset-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-xl p-4 transform rotate-y-180">
                <p className="text-sm text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
