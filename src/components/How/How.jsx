import React from "react";
import img1 from "/images/how/img1.png";
import img2 from "/images/how/img2.png";
import img3 from "/images/how/img3.png";
import img4 from "/images/how/img4.png";
import img5 from "/images/how/img5.png";
import bgimg1 from "/images/bg/img1.jpg";
import { motion } from "framer-motion";

const How = () => {
  const steps = [
    {
      title: "Unlock the Quiz (for Members Only)",
      image: img1, // Replace with your actual image path
      description:
        "Answer questions about your style preferences, lifestyle, events, and body type. This is the foundation of your wardrobe transformation.",
      bg: "bg-[#F9B1D9]",
      lightBg: "bg-[#f2d1e2]",
    },
    {
      title: "Get Your AI + Human Stylist Combo",
      image: img2, // Replace with your actual image path
      description:
        "We assign you a dedicated fashion stylist and give you access to our AI assistant. Use them to get quick suggestions, ask budget-based questions, and build influencer-style wardrobes.",
      bg: "bg-[#C3F3FF]",
      lightBg: "bg-[#d7f7ff]",
    },
    {
      title: "Lookbooks + Video Styling Sessions",
      image: img3, // Replace with your actual image path
      description:
        "Get 4–5 expert sessions a month where we discuss: What to wear, Hairstyles for face types, Budget shopping for luxury, Event prep (functions, launches, shoots), Building your Instagram-ready presence",
      bg: "bg-[#FFCF87]",
      lightBg: "bg-[#fcd9a5]",
    },
  ];

  return (
    <div
      className="py-12 px-4 md:px-16 bg-[#FFFAE5] mt-16"
      style={{
        backgroundImage: `url(${bgimg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8">
        How Urvestie Works
      </h2>
      <p className="text-center text-lg sm:text-xl md:text-[32px]">
        Your Fashion Concierge, Simplified.
      </p>
      <p className="text-center text-lg sm:text-xl md:text-[32px] font-medium mb-16">
        From Click to Closet — Styling Made Simple in 3 steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className={`${step.bg} rounded-xl shadow-md flex flex-col items-center text-center mx-auto relative`} // <-- NOTE 'relative'
            style={{
              width: "100%",
              maxWidth: "390px",
              height: "auto",
            }}
          >
            {/* Small top-left icon */}
            <img
              src={img4} // Your icon URL here
              alt="pin"
              className="absolute top-[-35px] left-[-80px] w-[170px] h-[117px] z-20" // position/size: adjust as needed!
            />

            {/* The rest of your card */}
            <img
              src={img5}
              alt=""
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[120px] mt-4"
            />
            <div
              className={`${step.lightBg} flex justify-center items-center mb-4 w-full`}
              style={{
                maxWidth: "362px",
                height: "auto",
                minHeight: "150px",
              }}
            >
              <img
                src={step.image}
                alt={`Step ${index + 1}`}
                className="w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg text-[#000000] mb-2 px-4">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base text-[#000000] px-4 mb-4">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default How;
