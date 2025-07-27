import { ArrowLeft, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is Urvestie?",
    answer:
      "Urvestie is a trend-driven fashion and lifestyle platform curating the best of outfit inspirations, product edits, and visual content — all in one place. From runway to real way, we translate what’s hot into what’s wearable.",
  },
  {
    question: "How does Urvestie work?",
    answer:
      "Urvestie brings you curated outfit inspiration and guides, so you can stay on trend and find what works for you.",
  },
  {
    question: "Who is Urvestie for?",
    answer:
      "Urvestie is for anyone passionate about fashion, lifestyle, and self-expression.",
  },
  {
    question: "Can I contribute to Urvestie?",
    answer:
      "Absolutely! We welcome contributions from our community. Reach out via our contact form.",
  },
  {
    question: "Is Urvestie a shopping platform?",
    answer:
      "No, Urvestie is focused on inspiration and curation, but we provide product recommendations and guides.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative max-w-[1200px] max-h-[1280px] mx-auto my-28 md:my-20 p-3 md:p-6 bg-white rounded-2xl shadow-lg w-full">
      <Link to="/">
        <ArrowLeft className="h-[50px] w-[50px] absolute top-[0%] left-[8%] cursor-pointer" />
      </Link>
      <h1
        className="
      text-center text-2xl xs:text-3xl md:text-[96px] mb-6 md:mb-10 leading-tight
    "
      >
        Frequently <br className="md:hidden" /> Asked Questions
      </h1>
      <div className="mb-8 px-2 xs:px-4 sm:px-6 md:px-28">
        {faqData.map((item, idx) => (
          <div key={item.question} className="mb-3 md:mb-4">
            <button
              className={`w-full flex justify-between items-center text-left px-3 md:px-5 py-2 md:py-4 rounded-xl transition
            ${
              openIndex === idx
                ? "bg-white text-black border border-gray-200"
                : "bg-black text-white hover:bg-gray-800 border border-transparent"
            }
          `}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="text-lg xs:text-xl sm:text-2xl md:text-[32px]">
                {item.question}
              </span>
              <span className="ml-2 xs:ml-4">
                {openIndex === idx ? (
                  <X className="h-6 w-6 md:h-[36px] md:w-[36px] font-extrabold" />
                ) : (
                  <Plus className="h-6 w-6 md:h-[36px] md:w-[36px] font-extrabold" />
                )}
              </span>
            </button>
            {openIndex === idx && (
              <p className="font-abel text-sm xs:text-base md:text-[20px] mt-2 px-3 md:px-5 py-2 md:py-4 bg-gray-50 text-black rounded-b-xl border border-t-0 border-gray-200">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6 md:mt-8">
        <p className="my-6 md:my-10 text-xl xs:text-2xl md:text-[40px] font-abel">
          Still have questions?
        </p>
        <button className="text-base xs:text-lg md:text-[27px] rounded-full px-6 py-2 md:px-8 md:py-3 bg-black text-white font-medium hover:bg-gray-900 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default Faq;
