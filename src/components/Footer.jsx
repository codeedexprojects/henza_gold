import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-time relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            <img
              src="/logo.png"
              alt="Henza Gold & Jewellery Trading"
              className="w-40 sm:w-48 md:w-52 lg:w-60 h-auto object-contain"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg text-[#DEA944] font-semibold text-center md:text-left mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-start justify-center sm:justify-start md:justify-start space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-0 md:space-y-3">
              <div className="flex items-start space-x-3 w-full sm:w-auto md:w-full justify-center sm:justify-start md:justify-start">
                <Mail className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
                <a
                  href="mailto:admin@henzagold.net"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm break-all text-center sm:text-left"
                >
                  admin@henzagold.net
                </a>
              </div>

              <div className="flex items-start space-x-3 w-full sm:w-auto md:w-full justify-center sm:justify-start md:justify-start">
                <Phone className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
                <a
                  href="tel:+971045486978"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm text-center sm:text-left"
                >
                  +971 045486978
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 justify-center md:justify-start mt-4">
              <MapPin className="w-5 h-5 text-[#DEA944] mt-1 flex-shrink-0" />
              <div className="text-gray-300 text-sm text-center md:text-left">
                <p className="font-medium">
                  HENZA GOLD & JEWELLERY TRADING LLC
                </p>
                <p>MAJID ALKHATIB BUILDING</p>
                <p>SHOP NO 1, PLOT NO 501,</p>
                <p>AL DAGAYA, DEIRA, DUBAI</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg text-[#DEA944] font-semibold text-center md:text-left mb-4">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2 font-normal">
              <a
                href="#home"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-center md:text-left py-1"
              >
                Home
              </a>
              <a
                href="#benefits"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-center md:text-left py-1"
              >
                Benefits
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-center md:text-left py-1"
              >
                About us
              </a>
              <a
                href="#product"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-center md:text-left py-1"
              >
                Product
              </a>
            </nav>
          </div>

<div className="space-y-4 lg:col-span-1">
  <h3 className="text-lg text-[#DEA944] font-semibold text-center md:text-left">
    Follow Us
  </h3>
  <div className="flex justify-center md:justify-start space-x-4">
    <a
      href="#"
      className="w-10 h-10 bg-white text-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
    >
      <Facebook className="w-5 h-5" />
    </a>
    <a
      href="#"
      className="w-10 h-10 bg-white text-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
    >
      <Twitter className="w-5 h-5" />
    </a>
    <a
      href="https://www.instagram.com/henza.gold/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white text-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
    >
      <Instagram className="w-5 h-5" />
    </a>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 mt-4">
    <img
      src="/scanner.png"
      alt="QR Code"
      className="w-24 h-24 object-cover rounded-lg shadow-md"
    />
    <a
      href="https://maps.app.goo.gl/bJtxAR5hug9wLafJ9?g_st=ac/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 md:mt-0 px-4 py-2 bg-[#DEA944] text-black rounded-lg shadow hover:bg-yellow-600 hover:text-white transition-all text-sm font-medium"
    >
      Click to see location
    </a>
  </div>
</div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-gray-400 text-sm font-normal">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
