import React from 'react';
import { Calendar, Award, Users, BookOpen } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Freelance & Personal Projects',
      period: '2023 - Present',
      description: 'Building responsive web applications for various clients using React.js, Tailwind CSS, and modern web technologies.',
      achievements: [
        'Designed and deployed personal portfolio site to showcase skills and projects.',
        'Developed and contributed to CurateChain, a group project focused on decentralized content sharing.',
        'Practiced version control and team collaboration using Git and GitHub.',
        'Continuously improving frontend skills through hands-on coding and feedback from mentors and peers.'
      ]
    },
    {
      title: 'Team Lead - CurateChain Project',
      company: 'Personal Project',
      period: '2023',
      description: 'Coordinated a 4-person team to build a decentralized social media MVP using React.js and Tailwind CSS.',
      achievements: [
        'Designed and implemented major features like the login page, metrics page, and user dashboard.',
        'Led sprint planning, task delegation, and GitHub collaboration.',
        'Gained practical experience in UI/UX design, state management, and scalable component architecture.',
        'Improved leadership and communication skills while working on a fast-paced project.'
      ]
    },
    {
      title: 'Frontend Intern – PIP3 (Virtual Training Program)',
      company: 'PIP3',
      period: '2023',
      description: 'Gained hands-on experience in front-end development, working on real-world projects and learning industry best practices.',
      achievements: [
        'Learned how to apply responsive design, component structuring, and agile principles.',
        'Collaborated with fellow interns on group tasks and coding challenges.',
        'Gained early exposure to mentoring and peer code reviews.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Frontend Web Development',
      issuer: 'NerdzFactory',
      year: '2024',
      icon: '🎓'
    },
    {
      title: 'Data Science',
      issuer: 'YomiDenzelFoundation',
      year: '2023',
      icon: '⚛️'
    },
    {
      title: 'Python Programming',
      issuer: 'YomiDenzelFoundation',
      year: '2023',
      icon: '🐍'
    },
    {
      title: 'Machine Learning',
      issuer: 'YomiDenzelFoundation',
      year: '2022',
      icon: '🤖'
    },
    {
      title: 'Blockchain Fundamentals',
      issuer: 'YomiDenzelFoundation',
      year: '2023',
      icon: '⛓️'
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'NerdzFactory',
      year: '2024',
      icon: '🎨'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-60">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in tech, leadership roles, and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center">
            <Users className="mr-3 h-6 w-6 text-blue-600" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Training */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center">
            <Award className="mr-3 h-6 w-6 text-green-600" />
            Certifications & Training
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="text-sm">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
