import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#top" className="text-xl font-semibold text-gray-900">
              Shu-Yu Lin
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Experience
              </a>
              <a href="#awards" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Awards
              </a>
              <a href="#education" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Education
              </a>
              <a 
                href="/assets/CV_work_240111.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/shuuyulin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/assets/icons/github.svg" alt="Github" className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shuyulin-moore/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a 
              href="mailto:shuyulin.official@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/assets/icons/envelope.svg" alt="Mail" className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Experience
              </a>
              <a href="#awards" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Awards
              </a>
              <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Education
              </a>
              <a 
                href="/assets/CV_work_240111.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Resume
              </a>
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com/shuuyulin" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/github.svg" alt="Github" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shuyulin-moore/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="mailto:shuyulin.official@gmail.com">
                  <img src="/assets/icons/envelope.svg" alt="Mail" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;