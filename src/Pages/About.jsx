import React from 'react';
import { MapPin, Heart, Code, Lightbulb } from 'lucide-react';
import img from '../Assets/busyimage.png'


export default function About() {

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative">
              <img
                src={img}
                alt="Justus working"
                className="w-80 h-96 sm:w-96 sm:h-112 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Lagos, Nigeria</span>
            </div>

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <strong>Justus Asogwa</strong>, a passionate and self-driven frontend developer from Lagos, Nigeria. 
                I love building interactive and user-friendly web applications using modern tools like React.js, 
                Tailwind CSS, and JavaScript.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I've worked on personal and team projects, such as <strong>CurateChain</strong>—a decentralized 
                social media platform—and enjoy creating clean, responsive designs that improve user experience. 
                I'm also passionate about learning new technologies, especially in AI and machine learning, and 
                always looking for ways to combine design with functionality.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether it's a website, dashboard, or user interface, I aim to bring ideas to life through code 
                and creativity. Let this portfolio reflect my energy, growth, and readiness to take on real-world challenges.
              </p>
            </div>

            {/* Key traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Heart className="h-8 w-8 text-red-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Passionate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Love what I do</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Code className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Creative</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Think outside the box</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Lightbulb className="h-8 w-8 text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Innovative</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always learning</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <MapPin className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Global</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ready to work anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

