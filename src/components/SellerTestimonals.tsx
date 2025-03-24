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
    <div className="px-20 py-16">
      <h1 className="text-4xl text-orange-800 font-medium mb-20">Seller Testimonials</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md border-2 border-gray-300 rounded-lg p-8 text-center flex flex-col items-center"
          >

            <div className="flex items-center justify-center">
              <Image
                alt={`Testimonial ${index + 1}`}
                width={150}
                height={150}
                src={testimonial.img}
                className="rounded-full absolute -top-12 w-30 h-24"
                style={{mixBlendMode:"normal"}}
              />
            </div>

           
            <div className="mt-16">
              <p className="text-gray-700 text-lg italic">{testimonial.text}</p>
              <h2 className="text-xl font-semibold text-gray-900 mt-4">{testimonial.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
