import React from 'react';
import resumePDF from "../Assets/resume-justus-asogwa.pdf"
import { Download, FileText, Star } from 'lucide-react';

export default function Resume() {

  const resumeHighlights = [
    'Frontend Developer with 2+ years experience',
    'Expert in React.js, JavaScript, and Tailwind CSS',
    'Led development of CurateChain decentralized platform',
    'Multiple certifications in web development and AI',
    'Strong track record in team collaboration',
    'Passionate about innovative web technologies'
  ];

  return (
    <section className="py-20 px-4 sm:px-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
              <FileText className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Download My Resume
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and achievements in a professional format.
            </p>
          </div>

          {/* Resume Preview Card */}
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12 hover:shadow-3xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-32 h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                    <FileText className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Justus Asogwa
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    Frontend Developer & UI/UX Enthusiast
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Professional resume showcasing skills, experience, projects, and achievements
                  </p>
                </div>
              </div>

              {/* Resume Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center md:justify-start">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Key Highlights
                </h4>
                
                <div className="space-y-3">
                  {resumeHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start text-left">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a
              href={resumePDF}
              download="Justus-Asogwa-Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </a>
   
            <button
              onClick={() => window.open(resumePDF, '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Online
            </button>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8" data-aos="fade-up" data-aos-delay="600">
            Updated regularly with latest projects and achievements
          </p>
        </div>
      </div>
    </section>
  );
};
