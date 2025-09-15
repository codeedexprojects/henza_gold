"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     const phoneNumber = "+9710547462241"; 

  const message = `Hello, I would like to get in touch:\n\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Contact Number: ${formData.contactNumber}\n
Subject: ${formData.subject}\n
Message: ${formData.message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank"); 
  };

  return (
    <div className="font-bodies min-h-screen bg-[#1B1B1B] flex items-center justify-center p-4" id="contact">
      <div className=" overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
            <div className="absolute inset-0  bg-opacity-20"></div>
            <div className="relative z-10 w-full h-120 flex items-center justify-center">
              <img 
                src="/goldcontact.png" 
                alt="Contact us" 
                className="max-w-full max-h-full object-contain" data-aos="fade-up"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center text-center text-white">
                <div className="text-5xl mb-4">💎</div>
                <h2 className="text-2xl font-bold mb-2">HENZA GOLD</h2>
                <p className="text-yellow-200">& JEWELLERY TRADING</p>
                <p className="mt-4 text-sm">Premium Gold Trading Services</p>
              </div>
            </div>

          <div className="p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8 text-center"  data-aos="fade-up">Quick contact</h1>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"  data-aos="fade-up"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"  data-aos="fade-up"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="contactNumber"
                      placeholder="Contact number"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"  data-aos="fade-up"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"  data-aos="fade-up"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"  data-aos="fade-up"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"  data-aos="fade-up"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}