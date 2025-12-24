import React, { FC, useState } from "react";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 md:px-10 flex justify-between items-center relative z-20">
      <div className="flex items-center">
        <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
          BrandName
        </a>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          Home
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          Features
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          Pricing
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          Contact
        </a>
      </nav>
      <button
        className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 md:hidden z-10">
          <a href="#" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            Features
          </a>
          <a href="#" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            Pricing
          </a>
          <a href="#" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};
export default Header;
