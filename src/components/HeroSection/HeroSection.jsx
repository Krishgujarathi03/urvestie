import React from "react";
import img3 from "/images/bg/img3.jpg";
import top from "/images/hero/img1.png";
import jeans from "/images/hero/img2.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-5 items-center px-4 md:px-20 gap-10 py-10 mb-16"
      style={{
        backgroundImage: `url(${img3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
      }}
    >
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

      <div className="relative md:col-span-2 flex justify-center items-center">
        {/* Bottom Image (img1.png) */}
        <img
          src="/images/img1.png"
          alt="Model wearing outfit"
          className="w-[80%] sm:w-[65%] md:w-[617px] h-auto object-contain z-10"
        />

        {/* Top Image (img2.png) */}
        <motion.img
          src={top}
          alt="Top"
          className="absolute w-[260px] h-[389px] top-[60px] right-30 z-20 hidden md:block"
          initial={{ x: 300, opacity: 0 }} // start from right and invisible
          whileInView={{ x: 0, opacity: 1 }} // animate to original position
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        />

        <motion.img
          src={jeans}
          alt="Jeans"
          className="absolute w-[330px] h-[489px] top-[300px] right-30 z-20 hidden md:block"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // delay for stagger effect
          viewport={{ amount: 0.5 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
