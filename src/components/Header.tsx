"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; 
import { DarkModeToggle } from "./DarkModeToggle";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Header = () => {
    const pathname = usePathname();
    const router = useRouter(); 
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const links = [
        { name: "Home", path: "/" },
        { name: "Sellers", path: "/sellers" },
        { name: "Buyers", path: "/buyers" },
        { name: "Advertising", path: "/advertising" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-900 dark:text-white relative">
            {/* Logo / Text in Dark Mode */}
            <div 
                className="cursor-pointer flex items-center"
                onClick={() => router.push("/")}
            >
                {/* Show logo in light mode, text in dark mode */}
                <Image
                    className="block dark:hidden"
                    style={{ mixBlendMode: "darken" }}
                    height={120}
                    width={120}
                    alt="Logo"
                    src="/logo.png"
                />
                <span className="hidden dark:block text-blue-500 text-2xl font-bold">
                    District
                </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                {links.map((link) => (
                    <a
                        key={link.path}
                        href={link.path}
                        className={`text-lg font-medium transition-colors duration-300 ${
                            pathname === link.path
                                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
                        }`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Mobile & Dark Mode Section */}
            <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle (always visible) */}
                <DarkModeToggle />

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
                    <nav className="flex flex-col space-y-4 p-4">
                        {links.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                className={`text-lg font-medium transition-colors duration-300 ${
                                    pathname === link.path
                                        ? "text-blue-600 border-l-4 pl-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:border-l-4 hover:pl-2 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            {/* Buttons (always visible on desktop) */}
            <div className="hidden md:flex space-x-2">
                <Button variant="blue" className="dark:bg-blue-500 dark:hover:bg-blue-600">Sign Up</Button>
                <Button variant="orange" className="dark:bg-gray-800 dark:text-white dark:border-gray-600">Login</Button>
            </div>
        </header>
    );
};

export default Header;
