import React from 'react';

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Education</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-1 mr-4"></div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Bachelor of Science, Computer Science and Information Engineering
            </h3>
            <p className="text-gray-600 mb-2">
              National Central University, Taiwan
            </p>
            <p className="text-gray-500 text-sm">
              2019 - 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;