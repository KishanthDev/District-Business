import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="p-20 flex flex-col lg:flex-row items-center justify-between">
      
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-medium">
          Your Gateway to Commission-Free e-commerce
        </h1>
        <p className="text-2xl mt-4">Sell more, Keep more - No hidden fees</p>

        <div className="mt-7 flex gap-6">
          <Button className="p-7 text-xl font-normal" variant="blue">
            Start Selling
          </Button>
          <Button className="p-7 text-xl font-normal" variant="orange">
            Explore Stores
          </Button>
        </div>
      </div>

   
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <Image
          alt="business"
          width={900}
          height={900}
          src="/business.png"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
