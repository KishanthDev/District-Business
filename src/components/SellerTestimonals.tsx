import Image from "next/image";
import React from "react";

export const SellerTestimonials = () => {
  const testimonials = [
    {
      img: "/img1.png",
      text: "When people use your brand name as a verb, that is remarkable.",
      name: "Meg Whitman",
    },
    {
      img: "/img2.png",
      text: "Our primary businesses in wholesale pipelines, utilities, and retail were all doing extremely well.",
      name: "Kenneth Lay",
    },
    {
      img: "/img3.png",
      text: "If you make a sale, you make a living. If you make an investment of time and good service in a customer, you can make a fortune.",
      name: "Jim Rohan",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-16">
      <h1 className="text-3xl sm:text-4xl text-orange-800 font-medium text-center mb-16">
        Seller Testimonials
      </h1>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-900 shadow-md border border-gray-300 rounded-lg p-8 text-center flex flex-col items-center"
          >
            <Image
              alt={`Testimonial ${index + 1}`}
              src={testimonial.img}
              width={120}
              height={120}
              layout="intrinsic"
              className="rounded-full -mt-14 border-4 border-white dark:border-gray-900"
            />


            <div className="mt-6">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg italic">
                {testimonial.text}
              </p>
              <h2 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-900 mt-4">
                {testimonial.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
