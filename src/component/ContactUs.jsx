import React, { useState } from 'react';
import Img1 from "../assets/Images/honeycom.png";
import Img2 from "../assets/Images/honeycom2.png";
import Img3 from "../assets/Images/calendarMan.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName) errors.fullName = "Full Name is required";
    
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number (10 digits required)";
    }
    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    
    if (!formData.message) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Appointment Booked Successfully!');
      // Here you would typically send the data to a backend
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <section className="relative bg-[#0052A9] dark:bg-gray-900 py-16 overflow-hidden">
      {/* Honeycomb background images */}
      <img 
        src={Img1}
        alt="Honeycomb" 
        className="absolute bottom-0 left-0 w-1/5 opacity-50"
      />
      <img 
        src={Img2}
        alt="Honeycomb" 
        className="absolute top-0 right-0 w-1/5 opacity-50"
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center text-white">
            <h2 className="text-3xl font-semibold mb-6 dark:text-gray-200">
              Schedule an in-person or virtual appointment today
            </h2>
            <img 
              src={Img3} 
              alt="Calendar" 
              className="max-h-72 object-contain"
            />
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                  >
                    Full Name
                  </label>
                  <input 
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white 
                      ${formErrors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="phoneNumber" 
                    className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className={`w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white 
                      ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white 
                      ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter your message"
                    className={`w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white resize-vertical 
                      ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#F52E98] to-[#F87D3B] 
                    text-white py-3 rounded-md hover:opacity-90 transition duration-300"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
