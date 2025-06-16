import React from 'react'

export default function Skills () {
  const skills = [
    {
      name: 'HTML5',
      level: 95,
      icon: '🌐',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS3',
      level: 90,
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'React.js',
      level: 88,
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Tailwind CSS',
      level: 92,
      icon: '💨',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      name: 'Git & GitHub',
      level: 80,
      icon: '🔧',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-14">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{skill.level}% proficiency</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'UI/UX Design',
              'Web Performance',
              'Accessibility',
              'Team Collaboration',
              'Problem Solving',
              'Machine Learning',
              'Blockchain',
              'Python',
              'AI Technologies'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
