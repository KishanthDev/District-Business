"use client"
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Next.js hook to get active page

const Header = () => {
  const pathname = usePathname(); // Get current page path

  const links = [
    { name: "Home", path: "/" },
    { name: "Sellers", path: "/sellers" },
    { name: "Buyers", path: "/buyers" },
    { name: "Advertising", path: "/advertising" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
   
      <Image height={120} width={120} alt="Logo" src="/logo.png" />

      <nav className="space-x-6">
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`text-lg font-medium transition-colors duration-300 ${
              pathname === link.path
                ? "text-blue-600 border-b-2 border-blue-600" // Active link
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="space-x-2">
      <Button variant="blue">Sign Up</Button>
        <Button variant="orange">Login</Button>
      </div>
    </header>
  );
};

export default Header;
