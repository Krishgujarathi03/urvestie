import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-5 items-center px-4 md:px-20 gap-10 py-10">
      {/* Text Content */}
      <div className="space-y-6 max-w-4xl md:col-span-3 text-center md:text-left">
        <h1 className="text-[42px] sm:text-[60px] md:text-[90px] leading-tight">
          Walk-In Wow
        </h1>
        <h2 className="text-[24px] sm:text-[32px] md:text-[41px] text-gray-800">
          India’s 1st elite styling for leading women.
        </h2>
        <p className="text-[#000000] text-[20px] sm:text-[28px] md:text-[36px]">
          Urvestie gives you not just outfits, but a style presence built by
          experts — so you walk, speak, and dress like you were made to be seen.
        </p>
        <div className="space-y-2">
          <button
            className="bg-black text-white rounded-full text-[20px] sm:text-[28px] md:text-[32px] font-medium"
            style={{ width: "100%", maxWidth: "263px", height: "60px" }}
          >
            Join Now
          </button>
          <div>
            <button className="text-[18px] sm:text-[22px] md:text-[25px] text-[#000000] block mx-auto md:mx-7">
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
          className="w-[80%] sm:w-[65%] md:w-[617px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
