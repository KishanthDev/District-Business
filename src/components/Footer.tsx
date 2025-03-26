import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-center md:text-left">

        <div className="flex flex-col space-y-2">
          <p className="text-base md:text-lg font-medium">
            © 2024-2025 <span className="font-semibold">District Business.com Pvt. Ltd.</span> All Rights Reserved.
          </p>
          <p className="text-base md:text-lg">
            <a href="https://www.indianyellowpages.com/term-condition.htm" className="text-blue-600 dark:text-blue-400 hover:underline">
              Terms of Use
            </a>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-base md:text-lg">
            Email: <a href="mailto:support@district-business.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@district-business.com
            </a>
          </p>
          <p className="text-base md:text-lg">
            Phone: <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
              +(123) 456 7890
            </a>
          </p>
        </div>

        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Flipkart">
            <SiFlipkart className="text-3xl text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Twitter">
            <FaTwitter className="text-3xl text-blue-500 dark:text-blue-300 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram">
            <FaInstagram className="text-3xl text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform" />
          </a>
        </div>


      </div>
    </footer>
  );
};
