import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a dummy PDF link for demonstration
    const link = document.createElement('a');
    link.href = '/resume-justus-asogwa.pdf';
    link.download = 'Justus-Asogwa-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for hire
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Justus Asogwa
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              Frontend Developer & UI/UX Enthusiast
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I craft beautiful, responsive web applications with modern technologies like React.js and Tailwind CSS. 
              Passionate about creating seamless user experiences and bringing innovative ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Ajay-hum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/justus-asogwa-726427293"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:justusasogwa9@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Justus Asogwa"
                    className="w-72 h-72 sm:w-88 sm:h-88 object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}