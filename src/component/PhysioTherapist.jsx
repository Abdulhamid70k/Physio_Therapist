import React from "react";
import { Home, MapPin, Laptop } from "lucide-react";
import Img1 from "../assets/Images/img1.png";

const PhysioTherapist = () => {
  return (
    <div className="bg-lightBg py-4 dark:bg-darkBg text-lightText dark:text-darkText min-h-screen">
      {/* Carousel Section */}
      <div className="w-full overflow-hidden mt-[90px]">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-full mx-auto">
            {/* Left Section */}
            <div className="bg-lightBg dark:bg-darkBg p-5 md:p-20">
              <div className="max-w-[500px]">
                <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-4">
                  <h1 className="text-2xl md:text-4xl font-bold text-[#143350] dark:text-darkText">
                    Shaping Paradigm of your Personal Wellbeing
                  </h1>
                </div>
                <p className="mb-8 leading-relaxed">
                  Physio Therapist is your one-stop solution for holistic
                  wellness. We provide physiotherapy, yoga, Pilates, and more,
                  to all your well-being needs. Experience personalized care and
                  empower your journey to balance, strength, and inner peace at
                  Ease.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=8949572153"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.101-.47-.149-.669.149-.197.297-.768.967-.94 1.165-.172.198-.345.223-.642.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.172-.297-.018-.458.131-.606.134-.133.297-.345.446-.518.149-.172.198-.297.297-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51a12.695 12.695 0 00-.572-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.718 2.006-1.413.247-.695.247-1.29.172-1.414-.075-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.46.31 2.85.88 4.1L2 22l5.975-1.885A9.981 9.981 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-[url('/carouselImage.png')] bg-cover bg-center z-0 opacity-50 dark:opacity-30"></div>
              <img
                src={Img1}
                alt="carousel-1"
                className="relative z-10 max-w-[700px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center mt-16">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Regain Your <br />
            Optimal Health and Vitality <br />
            at Ease Physio! <br />
            <br />
            Your Comprehensive <br />
            Wellness Solution.
          </h2>

          {/* Cards */}
          {[
            {
              Icon: MapPin,
              title: "Physiotherapy at Clinic",
              description:
                "Experience result-focused physiotherapy with advanced equipment at Ease Physio Clinic.",
            },
            {
              Icon: Home,
              title: "Physiotherapy at Home",
              description:
                "Regain your well-being through the convenience of expert physiotherapy services delivered to your door.",
            },
            {
              Icon: Laptop,
              title: "Online Physiotherapy",
              description:
                "Embrace the convenience of virtual physiotherapy consultations, eliminating the need for clinic visits.",
            },
          ].map((card, index) => (
            <div key={index} className="w-[300px] transition-all mb-4 duration-300 hover:scale-110 hover:shadow-light dark:hover:shadow-dark bg-white dark:bg-darkBackground p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <MapPin size={48} className="text-gradient" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
                  Physiotherapy at Clinic
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience result-focused physiotherapy with advanced
                  equipment at Ease Physio Clinic.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysioTherapist;
