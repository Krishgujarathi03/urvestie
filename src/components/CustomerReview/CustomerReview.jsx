import React from "react";
import img1 from "/images/customerreview/img1.jpg";
import img2 from "/images/customerreview/img2.jpg";
import img3 from "/images/customerreview/img3.jpg";
const reviews = [
  {
    name: "Pia",
    age: 24,
    image: img1,
    review:
      "I literally wear everything they styled for me. I feel confident, put-together, and still me.",
  },
  {
    name: "Ritika",
    age: 20,
    image: img2,
    review:
      "The lookbook delivery was super fast, and every outfit made me feel like a main character. Fashion girl era unlocked.",
  },
  {
    name: "Sophie",
    age: 23,
    image: img3,
    review:
      "I didn’t know where to start with styling myself. Urvestie made it so fun and easy.",
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-[36px] sm:text-[60px] mb-2">Customer Reviews</h2>
        <p className="text-[18px] sm:text-[28px] text-gray-300">
          Real stories from real fashion lovers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full px-2 sm:px-4 md:px-8 md:divide-x md:divide-white">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="px-4 py-6 sm:px-6 sm:py-8 text-center space-y-3 sm:space-y-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] rounded-full mx-auto object-cover"
            />
            <p className="font-medium text-[20px] sm:text-[28px]">
              {item.name}, {item.age}
            </p>
            <p className="text-white text-[18px] sm:text-[28px] leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
