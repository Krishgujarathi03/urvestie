import React from "react";
import img1 from "/images/how/img1.png";
import img2 from "/images/how/img2.png";
import img3 from "/images/how/img3.png";
import img4 from "/images/how/img4.png";
import img5 from "/images/how/img5.png";

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
    <div className="py-12 px-4 md:px-16 bg-[#FFFAE5]">
      <h2 className="text-[52px] text-center mb-2">How Urvestie Works</h2>
      <p className="text-center text-[32px]">
        Your Fashion Concierge, Simplified.
      </p>
      <p className="text-center text-[32px] font-medium mb-16">
        From Click to Closet — Styling Made Simple in 3 steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.bg} rounded-xl shadow-md flex flex-col items-center text-center`}
            style={{ width: "390px", height: "463px" }} // Exact size
          >
            <img
              src={img5}
              alt=""
              style={{ height: "120px", width: "130px" }}
            />
            <div
              className={`${step.lightBg} flex justify-center mb-4`}
              style={{ height: "199px", width: "362px" }}
            >
              <img
                src={step.image}
                alt={`Step ${index + 1}`}
                className="mb-4"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }} // Exact image size
              />
            </div>
            <h3 className="text-lg text-[#000000] mb-2 px-4">{step.title}</h3>
            <p className="text-[15px] text-[#000000] px-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
