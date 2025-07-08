import React from "react";

const Introduction = () => {
  return (
    <section className="min-h-screen bg-[#FFEAF6] grid grid-cols-1 md:grid-cols-5 items-center px-6 md:pl-20">
      {/* Text Content */}
      <div className="space-y-6 md:col-span-3">
        <h1 className="text-[60px] md:text-6xl font-bold leading-tight">
          Introducing Our AI Stylist <br /> Available 24/7, for free
        </h1>
        <p className="text-[#000000] text-[32px]">
          Ask what to wear on a date, which earrings go with that saree, or how
          to reuse your blazer for an event. It’s fast. It’s smart. It’s like
          texting your personal stylist.
        </p>
        <div className="space-y-2">
          <button
            className="bg-black text-white rounded-full text-[32px] font-medium"
            style={{ width: "263px", height: "71px" }}
          >
            Chat Now
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:col-span-2">
        <img
          src="/images/img3.png"
          alt="Model wearing outfit"
          className="w-[977px] h-[733px]"
        />
      </div>
    </section>
  );
};

export default Introduction;
