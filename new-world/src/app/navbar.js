"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-gray-100">
          Portfolio
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-100 focus:outline-none"
        >
          <span className="text-3xl">&#9776;</span>
        </button>

        {/* Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto transition-all duration-300`}
        >
          <ul className="md:flex md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link href="/home" className="block py-2 text-gray-100 hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="block py-2 text-gray-100 hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Project" className="block py-2 text-gray-100 hover:text-blue-400">
                Project
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                className="flex items-center py-2 w-full text-gray-100 hover:text-blue-400 focus:outline-none"
              >
                Dropdown ▾
              </button>
              {isDropdownOpen && (
                <ul
                  className="absolute bg-gray-800 shadow-lg rounded-lg mt-2 py-2 w-40 z-10 transition-all duration-300"
                  role="menu"
                >
                  <li>
                    <Link href="/About" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/Skill" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Disabled Link */}
            <li>
              <span className="block py-2 text-gray-500 cursor-not-allowed">
                Block
              </span>
            </li>
          </ul>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-700 bg-gray-800 text-gray-100 px-3 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="border border-gray-700 bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-500 transition">
            Search
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-4 md:hidden">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </nav>
  );
}


