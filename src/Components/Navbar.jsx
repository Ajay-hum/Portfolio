import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation with loading
  const handleNavigation = (path) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate(path); // Navigate to the path
      setLoading(false); // Stop loading after navigation
    }, 1000); // Simulate loading delay
  };

  return (
    <header className="writing w-full md:pl-4 sm:pl-2 lg:pl-32 pr-6 py-4 flex justify-between items-center shadow-lg fixed bg-black z-50">
      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="spinner border-t-4 border-b-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {/* Logo Section */}
      <nav className="flex items-center pl-10">
        <Link to="/" className="w-12 h-12 rounded-3xl">
          <img src={logo} alt="Icon" />
        </Link>
      </nav>

      {/* Toggle Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 md:w-2/5 bg-black md:mr-12 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:translate-x-0 md:flex md:items-center md:mr-36`}
      >
        {/* Links Section */}
        <ul className="flex flex-col md:flex-row md:space-x-4 max-767px:gap-3 p-6 md:p-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setIsMenuOpen(false); // Close menu on click of link
                  handleNavigation(item.link); // Navigate with loading
                }}
                className="name hover:text-blue-400 underline"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons Section */}
        <div className="flex space-x-4 sm:ml-6 md:ml-12 p-6 md:p-0">
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
          className="absolute top-7 right-4 text-white border-white border-2 md:hidden cursor-pointer"
        >
          <AiOutlineClose size={30} />
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div onClick={toggleMenu} className="text-white md:hidden cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>
    </header>
  );
}


