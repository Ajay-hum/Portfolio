import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

import curate from "../Assets/crnt.png";
import encdec from "../Assets/encdec.png"


export default function Projects() {
  const projects = [
    {
      title: 'CurateChain',
      description: 'A decentralized social media platform built with React.js and blockchain technology. Features include user authentication, content curation, and decentralized storage.',
      image: curate,
      technologies: ['React.js', 'Blockchain', 'Web3', 'Tailwind CSS'],
      github: 'https://github.com/Joycrown/CurateNetProject.git',
      demo: '#',
      featured: true
    },
    {
      title: 'VoiceUp',
      description: 'VoiceUp is an anonymous, AI-powered platform that enables people to report harassment, abuse, bullying, and injustice using emotionally expressive voice and video. It transforms written or spoken experiences into anonymized AI-generated media and stores them securely on IPFS.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'EncodeDecode',
      description: 'An interactive tool for encoding and decoding text using a simple encryption algorithm, allowing users to securely transform their messages and retrieve the original text when needed',
      image: encdec,
      technologies: ['HTML5', 'CSS', 'JavaScript'],
      github: 'https://github.com/Ajay-hum/Encoder-Decoder--Javascript',
      demo: 'https://ajay-hum.github.io/Encoder-Decoder--Javascript/',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Weather API', 'Chart.js', 'CSS3'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark/light mode, smooth animations, and contact form integration.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Tailwind CSS', 'AOS', 'EmailJS'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'AI Powered Business Negotiator',
      description: 'An AI-powered business negotiation assistant, that combines natural language processing (NLP) with business intelligence to help users Analyze negotiation scenarios, Generate smart counteroffers, Predict deal outcomes and Suggest persuasive responses in real-time',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'AI API', 'WebSocket', 'Material-UI'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Project */}
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={project.title}
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View demo"
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label="View source"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4 w-fit">
                    ⭐ Featured Project
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View demo"
                    >
                      <Eye className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View source"
                    >
                      <Github className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

