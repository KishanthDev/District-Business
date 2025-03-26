import React from 'react';
import Image from 'next/image';

export const Features = () => {
  return (
    <div className="px-6 sm:px-20">
      <h1 className="text-3xl sm:text-4xl text-orange-800 font-medium text-center">Features Section</h1>

      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 p-7">

        <div className="text-center">
          <div className="relative w-[150px] h-[150px]">
            <Image alt="pic1" src="/pic1.png" fill className="object-contain" />
          </div>
          <p className="mt-3.5 text-lg sm:text-xl text-orange-600">No Sales Commissions</p>
        </div>

        <div className="text-center">
          <div className="relative w-[150px] h-[150px]">
            <Image alt="pic2" src="/pic2.png" fill className="object-contain" />
          </div>
          <p className="mt-3.5 text-lg sm:text-xl text-orange-600">Integrated Advertising</p>
        </div>

        <div className="text-center">
          <div className="relative w-[150px] h-[150px]">
            <Image alt="pic3" src="/pic3.png" fill className="object-contain" />
          </div>

          <p className="mt-2 text-lg sm:text-xl text-orange-600">Affordable Store Rentals</p>
        </div>

      </div>
    </div>
  );
};
