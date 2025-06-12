import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science, Electrical and Computer Engineering",
      school: "University of Washington",
      location: "Seattle, WA, USA",
      period: "2024 - 2026",
      details: [
        "Focus on Machine Learning and Computer Vision",
        "Coursework in Advanced Algorithms, Deep Learning, and Signal Processing",
        "Graduate Research Assistant"
      ]
    },
    {
      degree: "Bachelor of Science, Computer Science and Information Engineering",
      school: "National Central University",
      location: "Taoyuan, Taiwan",
      period: "2019 - 2023",
      details: [
        "Graduated with Honors",
        "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Computer Networks",
        "Undergraduate Research in Space Weather Prediction"
      ]
    }
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Education</h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-green-600 font-medium mb-1">
                  {edu.school}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {edu.location}
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {edu.period}
                </span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {edu.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;