"use client";
import React from "react";

const ProductCard = ({ image, purity, brand, productName }) => {
  return (
    <div className="font-bodies group relative flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white cursor-pointer hover:bg-yellow-400 flex-shrink-0 w-[240px] sm:w-auto">
      <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="bg-white p-3 sm:p-5 lg:p-6 flex items-center justify-center h-[150px] sm:h-[190px] lg:h-[240px] transition-all duration-500"
          data-aos="fade-up"
        >
          <img
            src={image}
            alt={`${brand} ${productName}`}
            className="max-w-full max-h-full rounded-sm object-contain w-auto h-auto group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="bg-black group-hover:bg-[#DEA944] text-white group-hover:text-black px-3 py-4 sm:px-4 sm:py-5 flex flex-col justify-start flex-1 transition-all duration-500">
          <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
            <div
              className="text-[11px] sm:text-sm text-gray-300 group-hover:text-gray-800 group-hover:font-semibold transition-all duration-500"
              data-aos="fade-up"
            >
              24K ({purity})
            </div>
            <div
              className="text-sm sm:text-base text-gray-200 group-hover:text-gray-900  group-hover:font-bold transition-all duration-500"
              data-aos="fade-up"
            >
              {brand}
            </div>
            <div
              className="text-base sm:text-lg lg:text-[400]  text-white group-hover:text-black transition-all duration-500"
              data-aos="fade-up"
            >
              {productName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      image: "/goldfirst.png",
      purity: "995.0",
      brand: "Sam Gold Bar",
      productName: "1 Kg Bar",
    },
    {
      image: "/gold4.png.png",
      purity: "999.9",
      brand: "Emirates gold bar",
      productName: "100g bar",
    },
    {
      image: "/gold2.png.png",
      purity: "999.9",
      brand: "Emirates gold bar",
      productName: "1kg bar",
    },
  ];

  return (
    <div
      className="font-bodies bg-black text-white py-6 sm:py-8 lg:py-10 scroll-mt-20"
      id="products"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-6 sm:mb-10 lg:mb-12"
          data-aos="fade-up"
        >
          Products
        </h1>

        <div className="sm:hidden mb-6 ">
          <div
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            data-aos="fade-up"
          >
            {products.map((product, index) => (
              <div key={index} className="snap-start">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      <div
  className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-center"
  data-aos="fade-up"
>
  {products.map((product, index) => (
    <ProductCard key={index} {...product} />
  ))}
</div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductsSection;
