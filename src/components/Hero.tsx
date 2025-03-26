import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between">

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-medium leading-tight">
          Your Gateway to Commission-Free e-commerce
        </h1>
        <p className="text-base sm:text-2xl mt-4">
          Sell more, Keep more - No hidden fees
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <Button className="p-5 sm:p-7 text-lg sm:text-xl font-normal bg-orange-700 hover:bg-orange-800 text-white shadow-md">
            Start Selling
          </Button>
          <Button className="p-5 sm:p-7 text-lg sm:text-xl font-normal bg-blue-700 hover:bg-blue-800 text-white shadow-md">
            Explore Stores
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="relative w-[600px] h-[600px]">
          <Image
            alt="business"
            fill
            src="/business.png"
            priority
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
};
