import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Preview.png";

// Importing icons for use
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/projects", text: "Projects" },
  { link: "/downloadcv", text: "Resume" },
  { link: "/contact", text: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-6 py-4 md:px-20 md:py-4 flex justify-between items-center shadow-lg fixed top-0 left-0 bg-white z-50">
      {/* Logo Section */}
      <nav className="flex items-center">
        <Link to="/" className="w-12 h-12 rounded-3xl">
          <img src={logo} alt="Icon" />
        </Link>
        <div className="name text-lg flex ml-2 flex-col">
          <h1>Mary</h1>
          <h1>ASOGWA</h1>
        </div>
      </nav>

      {/* Toggle Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:translate-x-0 md:flex md:items-center md:space-x-8`}
      >
        {/* Links Section */}
        <ul className="flex flex-col md:flex-row md:space-x-8 p-6 md:p-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="name text-gray-800 hover:text-blue-400 underline"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons Section */}
        <div className="flex space-x-4 md:space-x-6 p-6 md:p-0">
          <a href="https://www.linkedin.com/in/justus-asogwa-726427293">
            <ImLinkedin size={30} className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/Ajay-hum">
            <FaGithub size={30} className="hover:text-blue-400" />
          </a>
        </div>

        {/* Close Button for Mobile */}
        <div
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 md:hidden"
        >
          <AiOutlineClose size={30} />
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        onClick={toggleMenu}
        className="text-gray-800 md:hidden cursor-pointer"
      >
        <AiOutlineMenu size={30} />
      </div>
    </header>
  );
}
