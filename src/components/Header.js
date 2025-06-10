import React from 'react';

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-2 lg:col-span-3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Shu-Yu Lin
          </h1>
          <blockquote className="text-lg md:text-xl text-gray-600 italic font-medium ml-0 md:ml-6">
            "LIFE IS LIKE CODING, TRIAL AND ERROR."
          </blockquote>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-48 md:w-56 lg:w-64">
            <img
              src="/assets/images/portrait.jpg"
              alt="Portrait of Shu-Yu Lin"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;