import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 ENSIGN. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.ensigninfosecurity.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/ensign-logo.png" 
                alt="Ensign College" 
                className="h-8 mr-2" 
              />
              <span className="text-gray-400 hover:text-white text-sm transition-colors">
                Website
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-600">|</span>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;