import React from "react";

const Introduction = () => {
  return (
    <section className="min-h-screen bg-[#FFEAF6] grid grid-cols-1 md:grid-cols-5 items-center px-4 md:pl-20 py-10 md:py-0">
      {/* Text Content */}
      <div className="space-y-6 md:col-span-3 text-center md:text-left">
        <h1 className="text-[34px] sm:text-[44px] md:text-6xl leading-tight">
          Introducing Our AI Stylist <br className="hidden sm:block" />{" "}
          Available 24/7, for free
        </h1>
        <p className="text-[#000000] text-[18px] sm:text-[24px] md:text-[32px]">
          Ask what to wear on a date, which earrings go with that saree, or how
          to reuse your blazer for an event. It’s fast. It’s smart. It’s like
          texting your personal stylist.
        </p>
        <div className="space-y-2">
          <button className="bg-black text-white rounded-full text-[20px] sm:text-[24px] md:text-[32px] font-medium w-[200px] sm:w-[240px] md:w-[263px] h-[55px] sm:h-[65px] md:h-[71px]">
            Chat Now
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:col-span-2 mt-8 md:mt-0">
        <img
          src="/images/img3.png"
          alt="Model wearing outfit"
          className="w-full sm:w-[90%] md:w-[977px] h-auto md:h-[733px] object-contain"
        />
      </div>
    </section>
  );
};

export default Introduction;
