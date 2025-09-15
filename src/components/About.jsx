"use client";
import React from "react";
import { Shield, Globe, Award, ChevronDown } from "lucide-react";

const GoldInvestmentLanding = () => {
  return (
    <div
      className="font-bodies min-h-screen bg-black text-white relative overflow-hidden  scroll-mt-20"
      id="about"
    >
      <div className="hidden lg:block relative z-10 container mx-auto px-6 py-16 min-h-screen">
        <div className="flex items-center justify-between ">
          <div className="flex-1 max-w-xl" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Your Gateway
              <br />
              to <span>Trusted Gold</span>
              <br />
              Investments
            </h1>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              At Henza Gold, we believe wealth should be
              <br />
              timeless. That's why we specialize in
              <br />
              delivering 24K pure gold bars, directly from
              <br />
              the heart of Dubai's world-renowned gold
              <br />
              market.
            </p>
          </div>
          <div className="flex flex-col items-center relative mx-8">
            <div className="flex flex-col items-center relative mx-8">
              <div className="absolute top-0">
                <svg
                  width="80"
                  height="180"
                  viewBox="0 0 80 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#DEA944]"
                >
                  <path
                    d="M40 20 V80 Q40 80 20 80 V110"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="20" cy="110" r="5" fill="currentColor" />
                </svg>
                <div className="absolute left-[30px] top-[-5px] w-15 h-15 rounded-full border-2 border-[#DEA944] overflow-hidden flex items-center justify-center bg-black">
                  <img
                    src="/bar.png"
                    alt="icon"
                    className="w-full p-1 h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="animate-hang mt-35">
              <img
                src="/Group 1.png"
                alt="Gold Investment"
                className="w-90 h-100"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl pl-12">
            <p
              className="text-gray-300 text-base mb-6 leading-relaxed"
              data-aos="fade-up"
            >
             More than just gold, we offer peace of mind. Every bar is certified,
  ethically sourced, and delivered with unmatched transparency—ensuring
  your wealth grows with confidence and integrity.
            </p>
            <p
              className="text-gray-400 text-sm mb-8 leading-relaxed"
              data-aos="fade-up"
            >
              Imagine holding an asset that not only protects your future but
              also shines brighter with every generation.
            </p>
            <div
              className="bg-black p-6 rounded-lg border border-gray-800 flex items-center gap-6"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col items-center gap-6"
                data-aos="fade-up"
              >
                <Award className="w-6 h-6 text-[#DEA944]" data-aos="fade-up" />
                <Globe className="w-6 h-6 text-[#DEA944]" data-aos="fade-up" />
                <Shield className="w-6 h-6 text-[#DEA944]" data-aos="fade-up" />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <div>
                  <p className="text-[#DEA944] font-medium" data-aos="fade-up">
                    Guaranteed Purity
                  </p>
                  <p className="text-gray-400 text-xs" data-aos="fade-up">
                    24K, 999.9 certified gold bars.
                  </p>
                </div>

                <div>
                  <p className="text-[#DEA944] font-medium" data-aos="fade-up">
                    Dubai Excellence
                  </p>
                  <p className="text-gray-400 text-xs" data-aos="fade-up">
                    From the global capital of gold trade.
                  </p>
                </div>

                <div>
                  <p className="text-[#DEA944] font-medium" data-aos="fade-up">
                    Trusted & Secure
                  </p>
                  <p className="text-gray-400 text-xs" data-aos="fade-up">
                    Transparent, safe, and reliable process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <svg
            width="60"
            height="150"
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#DEA944]"
          >
            <path
              d="M40 20 V70 Q40 70 20 70 V95"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="20" cy="95" r="4" fill="currentColor" />
          </svg>
          <div className="absolute left-[25px] top-[10px] w-10 h-10 rounded-full border-2 border-[#DEA944] overflow-hidden flex items-center justify-center bg-black">
            <img
              src="/bar.png"
              alt="icon"
              className="w-full h-full object-cover p-1"
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center mb-4 mt-27"
          data-aos="fade-up"
        >
          <div className="animate-hang">
            <img
              src="/Group 1.png"
              alt="Gold Investment"
              className="w-52 h-52 sm:w-64 sm:h-64 object-contain"
            />
          </div>
        </div>
        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
            Your Gateway
            <br />
            to <span>Trusted Gold</span>
            <br />
            Investments
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
            At Henza Gold, we believe wealth should be timeless. That’s why we
            specialize in delivering 24K pure gold bars, directly from the heart
            of Dubai’s world-renowned gold market.
          </p>
        </div>
        <div className="text-center space-y-4 px-2" data-aos="fade-up">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
           More than just gold, we offer peace of mind. Every bar is certified,
  ethically sourced, and delivered with unmatched transparency—ensuring
  your wealth grows with confidence and integrity.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Imagine holding an asset that not only protects your future but also
            shines brighter with every generation.
          </p>
        </div>
        <div
          className="mt-8 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 mx-2"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Award className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#DEA944] font-semibold text-sm">
                  Guaranteed Purity
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  24K, 999.9 certified gold bars with authenticity certificates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#DEA944] font-semibold text-sm">
                  Dubai Excellence
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Sourced from the global capital of gold trade and commerce.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#DEA944] font-semibold text-sm">
                  Trusted & Secure
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Transparent, safe, and reliable process with full insurance
                  coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hang {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.1);
          }
        }
        .animate-hang {
          animation: hang infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
};

export default GoldInvestmentLanding;
