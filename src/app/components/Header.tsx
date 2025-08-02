'use client'

import { useState } from "react";
import { Menu } from "lucide-react"; // Optional: Replace with your icon system

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-green-700">
          Akhuwat <span className="text-gray-800">Microfinance</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 font-medium hover:text-green-600 transition">
            About
          </a>
          <a href="#loan" className="text-gray-700 font-medium hover:text-green-600 transition">
            Loan Info
          </a>
          <a href="#testimonials" className="text-gray-700 font-medium hover:text-green-600 transition">
            Testimonials
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition"
          >
            WhatsApp
          </a>
          <a
            href="#apply"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col gap-3">
          <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
          <a href="#loan" className="text-gray-700 hover:text-green-600 transition">Loan Info</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition">Testimonials</a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium"
          >
            WhatsApp
          </a>
          <a
            href="#apply"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}
