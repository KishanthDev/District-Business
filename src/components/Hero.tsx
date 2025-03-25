import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-medium leading-tight">
          Your Gateway to Commission-Free e-commerce
        </h1>
        <p className="text-base sm:text-2xl mt-4">
          Sell more, Keep more - No hidden fees
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <Button className="p-5 sm:p-7 text-lg sm:text-xl font-normal" variant="blue">
            Start Selling
          </Button>
          <Button className="p-5 sm:p-7 text-lg sm:text-xl font-normal" variant="orange">
            Explore Stores
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <Image
          alt="business"
          width={600}
          height={600}
          src="/business.png"
          className="w-full sm:w-3/4 lg:w-auto max-w-[500px] sm:max-w-[700px] h-auto"
        />
      </div>
    </div>
  );
};
