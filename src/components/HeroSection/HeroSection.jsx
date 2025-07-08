import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-20 gap-10">
      {/* Text Content */}
      <div className="space-y-6 max-w-4xl md:col-span-3">
        <h1 className="text-[90px] font-bold leading-tight">Walk-In Wow</h1>
        <h2 className="text-[41px] font-semibold text-gray-800">
          India’s 1st elite styling for leading women.
        </h2>
        <p className="text-[#000000] text-[36px]">
          Urvestie gives you not just outfits, but a style presence built by
          experts — so you walk, speak, and dress like you were made to be seen.
        </p>
        <div className="space-y-2">
          <button
            className="bg-black text-white rounded-full text-[32px] font-medium"
            style={{ width: "263px", height: "71px" }}
          >
            Join Now
          </button>
          <div>
            <button className="text-[25px] text-[#000000] block mx-7">
              Ask for Pairing Ideas
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:col-span-2">
        <img
          src="/images/img1.png"
          alt="Model wearing outfit"
          width={617}
          height={857}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
