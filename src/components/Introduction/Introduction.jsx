import React from "react";
import img2 from "/images/bg/img2.jpg";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      className="min-h-screen bg-[#FFEAF6] grid grid-cols-1 md:grid-cols-5 items-center px-4 md:pl-20 py-10 md:py-0 mt-16"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
      }}
    >
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

      {/* Show only on laptops/desktops (md and above) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        style={{
          top: "-100px",
          right: "250px",
          width: "850px",
          height: "618px",
          position: "relative",
          zIndex: 100,
        }}
        className="hidden md:block"
      >
        <img
          src="/images/img3.png"
          alt="Model wearing outfit"
          className="
      md:w-[1100px] md:h-[850px] md:max-w-none
      mx-auto
    "
          style={{
            objectFit: "contain",
            overflow: "hidden",
          }}
        />
      </motion.div>

      {/* Show only on mobile (below md) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className="block md:hidden w-full max-w-[350px] mx-auto"
      >
        <img
          src="/images/img3.png"
          alt="Model wearing outfit"
          className="w-full h-auto object-contain overflow-hidden"
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
