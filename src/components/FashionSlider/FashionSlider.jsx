import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "/images/Big/img1.png";
import img2 from "/images/Big/img2.jpg";
import img3 from "/images/Big/img3.png";
import img4 from "/images/Big/img4.png";

const FashionSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      heading: "It’s Not Just Fashion\nIt’s Influence",
      text: "When you wear a look styled by Urvestie, you don’t follow trends — you lead them. Every piece reflects confidence, class, and character.",
      topImg: img1,
    },
    {
      heading: "Designed for India’s Power Women",
      text: "Whether you're a founder, creator, or corporate force — your life is complex. Your wardrobe should keep up. We personalize fashion around your real routines.",
      topImg: img4,
    },
    {
      heading: "Every Look Says “She’s Somebody.”",
      text: "You’re not just dressing for today — you’re creating a digital-first presence. Whether it’s reels, meetings, brunches or boardrooms — your outfits will speak before you do.",
      topImg: img3,
    },
    {
      heading: "Stylists + AI, Working for You.",
      text: "Our proprietary tech + expert stylists work together to give you unmatched clarity in clothing. No guesswork, no confusion — just the right look, every time.",
      topImg: img2,
    },
  ];

  return (
    <div className="bg-white w-full max-w-[1385px] h-auto md:h-[738px] mx-auto relative px-4">
      {/* Custom arrows */}
      <button
        ref={prevRef}
        className={`custom-swiper-button-prev absolute top-1/2 left-4 z-10 text-[#000000] text-[28px] md:text-[35px] ${
          activeIndex === 0 ? "hidden" : ""
        }`}
      >
        &#10094;
      </button>

      <button
        ref={nextRef}
        className={`custom-swiper-button-next absolute top-1/2 right-4 z-10 text-[#000000] text-[28px] md:text-[35px] ${
          activeIndex === slides.length - 1 ? "hidden" : ""
        }`}
      >
        &#10095;
      </button>

      <Swiper
        className="w-full h-full border-[3px] md:border-[3.5px] border-[#1DC3EC] rounded-[5%] px-2 md:px-6"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        modules={[Navigation, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-blue-100 rounded-3xl p-4 md:p-6 shadow-md w-full h-full relative">
              {/* Text Section */}
              <div className="text-center md:text-left w-full md:max-w-[50%]">
                <h2 className="text-[28px] sm:text-[34px] md:text-[42px] whitespace-pre-line">
                  {slide.heading}
                </h2>
                <p className="text-[20px] sm:text-[26px] md:text-[32px] mt-3 text-[#000000]">
                  {slide.text}
                </p>
              </div>

              {/* Image Section */}
              <img
                src={slide.topImg}
                alt="top"
                className="w-[90%] sm:w-[80%] md:w-[756px] h-auto md:h-[738px] object-contain mt-6 md:mt-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FashionSlider;
