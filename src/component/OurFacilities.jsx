import React from "react";
import Img1 from "../assets/Images/faci1.png";
import Img2 from "../assets/Images/faci2.jpg";
import MoveRight from "./icon/MoveRight";

const OurFacilities = () => {
  const facilities = [
    {
      title: "Individualized treatment plans",
      description:
        "We assess each patient’s condition and create a personalized plan for recovery.",
    },
    {
      title: "Manual therapy techniques",
      description:
        "These hands-on techniques include Soft Tissue Mobilization, Joint Mobilization/Manipulation, Myofascial release, Muscle Energy Techniques, Neural Mobilization, and stretching to improve mobility and reduce pain.",
    },
    {
      title: "Electrotherapy and ultrasound",
      description:
        "Electrotherapy refers to the use of electrical modalities such as TENS, IFT, ultrasound, and EMS to reduce pain, inflammation, and promote healing.",
    },
    {
      title: "Exercise programs and rehabilitation",
      description:
        "We design exercise programs to improve strength, flexibility, balance, and coordination.",
    },
    {
      title: "Pre and Post Operative Rehab",
      description:
        "Pre-operative care focuses on patient education, strengthening, functional training, respiratory care, and baseline assessment. Post-operative care focuses on pain management, mobility and ambulation, range of motion, strength and endurance training, functional training, respiratory care, wound care, and discharge planning.",
    },
    {
      title: "Gait and balance training",
      description:
        "This training helps patients improve their walking ability and prevent falls.",
    },
    {
      title: "Pain Management",
      description:
        "Pain management can be utilized using various techniques and modalities to alleviate pain, reduce inflammation, and promote healing.",
    },
    {
      title: "Ergonomic assessments",
      description:
        "We assess workstations and recommend modifications to prevent work-related injuries.",
    },
  ];

  return (
    <section id="ourFacilities" className="text-center py-10 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold border border-transparent px-5 py-2 border-gradient bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
        Our Facilities
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 px-5">
        {/* Facilities List */}
        <div className="flex-1 max-w-md lg:mr-8">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-start mb-5">
              <MoveRight />
              <div className="text-left">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Facilities Images */}
        <div className="flex flex-col items-center">
          <div className="max-w-md mb-5">
            <img
              src={Img1}
              alt="Facility Image 1"
              className="rounded-lg w-full"
            />
          </div>
          <div className="max-w-md">
            <img
              src={Img2}
              alt="Facility Image 2"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;
