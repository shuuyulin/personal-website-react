import React from 'react';

const Awards = () => {
  const awards = [
    "Undergraduate Research Fellowship, National Science & Technology Council, TW",
    "2nd Place, EECS College Special Topic Competition",
    "3rd Place, CSIE Department Special Topic Competition"
  ];

  return (
    <section id="awards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Awards</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <ul className="space-y-4">
          {awards.map((award, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <span className="text-gray-700 leading-relaxed">{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;