"use client";
import About from '@/components/About'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Products from '@/components/Products'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";  

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#DEA944] border-t-transparent animate-spin"></div>
          <span className="absolute inset-0 flex items-center justify-center text-[#DEA944] font-bold">
            G
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Products />
      <ContactSection />
      <Footer />
      <a 
        href="https://wa.me/+971547462241" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  )
}

export default Page
