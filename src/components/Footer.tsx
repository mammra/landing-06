import React, { FC } from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-8 px-6 md:px-10 text-center">
      <div className="container mx-auto">
        <div className="mb-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BrandName. All rights reserved.
          </p>
        </div>
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
