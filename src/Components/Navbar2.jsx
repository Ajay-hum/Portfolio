import { useState } from "react";
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
    <header className="writing w-full md:pl-4 sm:pl-2 lg:pl-32 pr-6 py-4 flex justify-between items-center shadow-lg fixed bg-black z-50">
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
        <ul className="flex flex-col md:flex-row md:space-x-4 max-sm:gap-3 p-6 md:p-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="name hover:text-blue-400 underline"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item.text}
              </Link>
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
      <div
        onClick={toggleMenu}
        className="text-white md:hidden cursor-pointer"
      >
        <AiOutlineMenu size={30} />
      </div>
    </header>
  );
}

      {/* <div className="flex justify-center items-center">
        <img 
          src={img} 
          alt="Example" 
          className="h-72 md:h-96 w-full" 
        />
        <img
          src={profile}
          alt="Small Photo"
          className="absolute left-3/4 transform -translate-x-1/2 rounded-full border-white shadow-lg max-325px:bottom-10 max-375px:bottom-32 max-414px:bottom-48 max-480px:bottom-52 max-600px:bottom-60 md:bottom-72 lg:bottom-80 xl:bottom-96 w-40 h-40 md:w-80 md:h-80 border-4 "
        />
      </div> */}
