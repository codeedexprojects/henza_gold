"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About us", id: "about" },
    { href: "#products", label: "Products", id: "products" },
    { href: "#contact", label: "Contact us", id: "contact" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.slice(0, 2).map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                className={`transition-colors duration-200 font-medium text-sm ${
                  activeSection === id
                    ? "text-[#DEA944]"
                    : "text-white hover:text-[#DEA944]"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/" className="block">
              <div className="w-20 h-20 mt-5 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {navLinks.slice(2).map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                className={`transition-colors duration-200 font-medium text-sm ${
                  activeSection === id
                    ? "text-[#DEA944]"
                    : "text-white hover:text-[#DEA944]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="block">
              <div className="w-15 h-15 mt-2 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#DEA944] focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              {navLinks.map(({ href, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
