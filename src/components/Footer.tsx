import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Left Side - Contact Info & Copyright */}
        <div className="md:flex md:items-center md:space-x-4">
          <p className="text-lg font-medium">
            © 2024-2025 <span className="font-semibold">District Business.com Pvt. Ltd.</span> All Rights Reserved.
          </p>
          <p className="text-lg mt-1">
            <a href="https://www.indianyellowpages.com/term-condition.htm" className="text-blue-600 dark:text-blue-400 hover:underline">
              Terms of Use
            </a>
          </p>
          <p className="text-lg">
            Email: <a href="mailto:support@district-business.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@district-business.com
            </a>
          </p>
          <p className="text-lg">
            Phone: <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
              +(123) 456 7890
            </a>
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
            <SiFlipkart className="text-3xl text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-blue-500 dark:text-blue-300 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
};
