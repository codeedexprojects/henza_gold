"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="relative heading min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      id="home"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <img
        src="/bar.png"
        alt="Decorative Top Right"
        className="absolute right-6 w-40 md:w-32 lg:w-50 opacity-90"
        data-aos="fade-left"
      />
      <img
        src="/bar.png"
        alt="Decorative Bottom Left"
        className="absolute bottom-6 -left-1/15 w-40 md:w-32 lg:w-70 opacity-90"
        data-aos="fade-right"
      />
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
       <h1 className="font-times text-3xl md:text-5xl lg:text-7xl leading-tight max-w-6xl mx-auto">
  <span className="text-white " data-aos="fade-down">
    Elevate Your Wealth with
  </span>
  <br />
  <span className="text-white" data-aos="fade-up">
    Golden Opportunities
  </span>
  <span className="text-white" data-aos="fade-down">
    {" "} –
  </span>
  <br />
  <span className="text-white" data-aos="fade-down">
    Secure Your{" "}
  </span>
  <span
    className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
    data-aos="fade-down"
  >
    Future Today.
  </span>
</h1>

     <div className="p-2 md:p-2 max-w-3xl mx-auto" data-aos="fade-up">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    {/* Paragraph */}
    <div data-aos="fade-right" className="text-center md:text-left">
      <p className="font-bodies text-white text-base md:text-lg leading-relaxed font-medium">
        Discover certified gold bars with <br />unmatched purity, delivered
        securely in <br />Dubai and worldwide.
      </p>
    </div>

    {/* Button */}
    <div data-aos="fade-left">
      <button className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 
        hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 
        text-black font-bold px-8 py-4 rounded-lg text-base 
        transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
        <span className="font-bodies flex items-center gap-2">
          Invest in Purity
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
