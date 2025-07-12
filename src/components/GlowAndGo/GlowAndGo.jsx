import React from "react";

const GlowAndGo = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-[583px] h-auto md:h-[758px] bg-white border border-black rounded-xl shadow-md flex flex-col">
        {/* Top Section */}
        <div className="px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10">
          <h2 className="text-[36px] sm:text-[50px] md:text-[70px] font-extrabold text-center mb-6 sm:mb-8 md:mb-10">
            Glow & Go
          </h2>
        </div>

        {/* Top Full-width Border */}
        <div className="w-full h-[3px] sm:h-[4px] md:h-[5px] bg-black" />

        {/* Feature List */}
        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-7 md:py-8 flex-1">
          <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-[18px] sm:text-[24px] md:text-[35px] font-extrabold">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-bold">✓</span>
              <span className="font-abel">5+ personalized looks/month</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-bold">✓</span>
              <span className="font-abel">1:1 video call with a stylist</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-bold">✓</span>
              <span className="font-abel">Save outfits to lookbook</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-bold">✓</span>
              <span className="font-abel">Unlimited stylist chats</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-bold">✓</span>
              <span className="font-abel">Wardrobe detox</span>
            </li>
          </ul>
        </div>

        {/* Bottom Full-width Border */}
        <div className="w-full h-[3px] sm:h-[4px] md:h-[5px] bg-black" />

        {/* Price Section */}
        <div className="text-[30px] sm:text-[40px] md:text-[55px] font-abel text-center py-4 sm:py-5 md:py-6">
          <p className="font-extrabold">
            ₹599
            <span className="text-[#D9D9D9] font-abel text-[20px] sm:text-[26px] md:text-[32px]">
              /month
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default GlowAndGo;
