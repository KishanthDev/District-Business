"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { DarkModeToggle } from "./DarkModeToggle";

const Header = () => {
    const pathname = usePathname();

    const links = [
        { name: "Home", path: "/" },
        { name: "Sellers", path: "/sellers" },
        { name: "Buyers", path: "/buyers" },
        { name: "Advertising", path: "/advertising" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            
            <Image style={{mixBlendMode:"darken"}} height={120} width={120} alt="Logo"  src="/logo.png" />

           
            <nav className="space-x-6">
                {links.map((link) => (
                    <a
                        key={link.path}
                        href={link.path}
                        className={`text-lg font-medium transition-colors duration-300 ${
                            pathname === link.path
                                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400" // Dark mode active link
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
                        }`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

          
            <div className="space-x-2">
                <DarkModeToggle />
                <Button variant="blue" className="dark:bg-blue-500 dark:hover:bg-blue-600">Sign Up</Button>
                <Button variant="orange" className="dark:bg-gray-800 dark:text-white dark:border-gray-600">Login</Button>
            </div>
        </header>
    );
};

export default Header;
