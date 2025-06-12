import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">
            Copyright &copy; {new Date().getFullYear()} Shu-Yu Lin. All rights reserved.
          </p>
          <p className="text-sm mb-2">
            Built with React & Tailwind CSS. Icons from Bootstrap Icons.
          </p>
          <p className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;