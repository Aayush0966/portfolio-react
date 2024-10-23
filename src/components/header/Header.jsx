import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Portfolio', 'Contact'];

  return (
    <header className="fixed w-full top-5 z-50 transition-all duration-300">
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0 flex items-center">
          <h1 className=" font-poppins p-2 uppercase text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent
            hover:from-green-600 hover:to-teal-600 transition-all duration-300">
            Aayush
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item} className="relative">
                <a href={`#${item.toLowerCase()}`} className="px-3 py-2 font-poppins text-xl  rounded-md transition-all duration-300 relative group flex items-center gap-2 hover:text-green-500 dark:hover:text-green-400">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300 transform origin-left group-hover:w-full w-0" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 relative overflow-hidden">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;