import React from "react";
import img1 from "/images/stopitshareit/img1.jpg";
import img2 from "/images/stopitshareit/img2.jpg";
import img3 from "/images/stopitshareit/img3.jpg";
import img4 from "/images/stopitshareit/img4.jpg";
import img5 from "/images/stopitshareit/img5.jpg";
import img6 from "/images/stopitshareit/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const StopItShareIt = () => {
  return (
    <section className="relative bg-black text-white py-12 md:py-16 overflow-hidden">
      {/* Centered Text */}
      <div className="w-full px-4 md:px-6 z-10 relative">
        <h2 className="text-center mb-8">
          <span className="text-3xl sm:text-4xl md:text-[55px]">
            Spot It . Share It . Style It .
          </span>
        </h2>
        <p className="text-white text-lg sm:text-xl md:text-[32px] text-center max-w-4xl md:max-w-6xl mx-auto leading-relaxed">
          Runway. Street. Social.
          <br />
          From the latest runway looks to emerging street styles,
          <br />
          Urvestie transforms what’s hot right now into personalized outfits
          just for you.
        </p>
      </div>

      {/* Scrolling Images */}
      <div className="mt-8 md:mt-12 overflow-hidden">
        <div className="flex w-max animate-scroll gap-4 md:gap-6 px-2">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Fashion ${index + 1}`}
              className="rounded-2xl w-40 h-52 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default StopItShareIt;
