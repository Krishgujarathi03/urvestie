import React from "react";
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
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-[52px] font-bold text-center mb-2">
        Meet Our Top Stylists
      </h2>
      <p className="text-[32px] text-center text-[#000000] mb-8">
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
              className="relative mx-auto flex bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${stylist.bg})`,
                backgroundSize: "1060px 980px",
                width: "850px",
                height: "527px",
              }}
            >
              {/* Left (text side of book) */}
              <div className="w-1/2 px-6 py-2 flex flex-col justify-center">
                <h3 className="text-[36px] text-center leading-tight">
                  {stylist.name}
                </h3>
                <p className="text-[20px] text-center mb-5">{stylist.role}</p>
                <p className="text-[18px] mb-1">
                  <u className="font-abel">Tags:</u> {stylist.tags}
                </p>
                <p className="text-[18px] mb-1">
                  <u className="font-abel">Specialties:</u>{" "}
                  {stylist.specialties}
                </p>
                <p className="text-[18px] mb-1">
                  <u className="font-abel">Rating:</u> {stylist.rating} ⭐
                </p>
                <p className="text-[18px] mb-2">
                  <u className="font-abel">Sessions Available:</u>{" "}
                  {stylist.sessions}
                </p>
                <p className="text-[20px] italic text-center">
                  {stylist.quote}
                </p>
              </div>

              {/* Right (stylist image side of book) */}
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  style={{
                    width: "315px",
                    height: "350px",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopStylists;
