import React, { useEffect, useState } from "react";
import img1 from "/images/top-stylists/img2.png";
import img2 from "/images/top-stylists/img1.png";
import img3 from "/images/top-stylists/img3.png";
import img4 from "/images/top-stylists/img4.png";
import img5 from "/images/top-stylists/img5.png";
import img6 from "/images/top-stylists/img6.png";
import img7 from "/images/top-stylists/img7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import bgimg1 from "/images/bg/img2.jpg";

const TopStylists = () => {
  const stylists = [
    {
      name: "Alina Kapoor",
      role: "Lead Stylist – Contemporary & Elevated Basics",
      tags: "Capsule Wardrobes, Soft Neutrals",
      specialties: "Workwear looks, Closet detox",
      rating: 4.9,
      sessions: "Weekdays, Virtual",
      quote: `"Blending comfort with clean lines, Alina builds wardrobes that feel effortless."`,
      image: img1,
      bg: img5,
    },
    {
      name: "Rhea Malhotra",
      role: "Stylist – Boho Luxe & Festival Edits",
      tags: "Boho Layers, Bold Prints, Fringe Details",
      specialties: "Resort looks, Creative events",
      rating: 4.8,
      sessions: "Evenings, Travel styling",
      quote: `"Think sun-soaked palettes and layered accessories
           — that’s Rhea’s signature touch."`,
      image: img2,
      bg: img5,
    },
    {
      name: "Tanya Singh",
      role: "Stylist – Streetwear & Gen-Z Cool",
      tags: "Streetwear Layers, Sneakers, Oversized Fits",
      specialties: "Trend pairing, Statement jackets",
      rating: 4.7,
      sessions: "Weekends, 1on1 Chat Sessions",
      quote: `"Your off-duty fit just got promoted. 
      Tanya makes trends wearable and powerful."`,
      image: img3,
      bg: img5,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on screen width
    const updateView = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateView(); // Set initial value on mount
    window.addEventListener("resize", updateView); // Listen for screen resizes

    return () => window.removeEventListener("resize", updateView); // Cleanup
  }, []);

  return (
    <div
      className="w-full mt-16"
      style={{
        backgroundImage: `url(${bgimg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
      }}
    >
      <div
        className="w-full md:h-[1000px] flex bg-center h-[750px]"
        style={{
          backgroundImage: window.innerWidth >= 768 ? `url(${img7})` : "none",
        }}
      >
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
          <h2 className="text-[52px] font-bold text-center mb-2 max-md:text-[32px]">
            Meet Our Top Stylists
          </h2>
          <p className="text-[32px] text-center text-[#000000] mb-8 max-md:text-[18px]">
            Helping you dress better, effortlessly.
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {stylists.map((stylist, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative mx-auto flex bg-no-repeat bg-center max-md:bg-none ${
                    // desktop styles
                    "w-[850px] h-[527px] bg-[length:1060px_980px]"
                  } max-md:flex-col max-md:w-full max-md:h-auto`}
                  style={{
                    backgroundImage:
                      window.innerWidth >= 768 ? `url(${stylist.bg})` : "none",
                  }}
                >
                  <img
                    src={img6}
                    alt="pin"
                    className="absolute top-[-65px] left-[-120px] w-[284px] h-[284px] z-20 hidden md:block"
                  />
                  {/* Left (text side of book) */}
                  <div className="w-1/2 max-md:w-full px-6 py-2 flex flex-col justify-center">
                    <h3 className="text-[36px] leading-tight max-md:text-[24px]">
                      {stylist.name}
                    </h3>
                    <p className="text-[20px] mb-5 max-md:text-[16px]">
                      {stylist.role}
                    </p>
                    <p className="text-[18px] mb-1 max-md:text-[14px]">
                      <u className="font-abel">Tags:</u> {stylist.tags}
                    </p>
                    <p className="text-[18px] mb-1 max-md:text-[14px]">
                      <u className="font-abel">Specialties:</u>{" "}
                      {stylist.specialties}
                    </p>
                    <p className="text-[18px] mb-1 max-md:text-[14px]">
                      <u className="font-abel">Rating:</u> {stylist.rating} ⭐
                    </p>
                    <p className="text-[18px] mb-2 max-md:text-[14px]">
                      <u className="font-abel">Sessions Available:</u>{" "}
                      {stylist.sessions}
                    </p>
                    <p className="text-[20px] italic max-md:text-[16px]">
                      {stylist.quote}
                    </p>
                  </div>

                  {/* Right (stylist image side of book) */}
                  <div className="w-1/2 max-md:w-full flex items-center justify-center mt-4 max-md:mt-2">
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-[315px] h-[350px] max-md:w-[200px] max-md:h-[240px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopStylists;
