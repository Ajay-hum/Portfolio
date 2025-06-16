import React from 'react';
import { Code2, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ajay-hum',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/justus-asogwa-726427293',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:justusasogwa9@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Justus Asogwa</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate frontend developer creating beautiful, responsive web applications 
              with modern technologies. Always ready to take on new challenges and bring 
              innovative ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white duration-200 hover:translate-x-2 transform transition-transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:justusasogwa9@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  justusasogwa9@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-green-400 text-sm">Available for hire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Justus Asogwa. Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>and lots of ☕</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Crafted with React & Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  );
}
