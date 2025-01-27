import { useState } from "react";
import { useNavigate } from "react-router-dom";

const footerlinks = [
  { link: "/about", text: "About" },
  { link: "/projects", text: "Projects" },
  { link: "/downloadcv", text: "Resume" },
  { link: "/contact", text: "Contact" },
];

export default function Footer() {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Function to handle navigation with loading
  const handleNavigation = (path) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate(path); // Navigate to the path
      setLoading(false); // Stop loading after navigation
    }, 1000); // Simulate loading delay
  };

  return (
    <footer className="relative items-center bg-black gap-4 p-4 flex-col flex md:flex-row md:justify-between lg:px-20 md:px-12 md:py-8 text-white font-semibold">
      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="spinner border-t-4 border-b-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {/* Footer Content */}
      <div>
        <p>&copy; {new Date().getFullYear()} Justus Asogwa</p>
      </div>
      <div>
        <ul className="flex space-x-8">
          {footerlinks.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.link)} // Navigate with loading
                className="flex hover:text-blue-400 underline"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
