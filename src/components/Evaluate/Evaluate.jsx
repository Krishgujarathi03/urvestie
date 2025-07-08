import img1 from "/images/evaluate/img1.jpg";
import img2 from "/images/evaluate/img2.jpg";
import img3 from "/images/evaluate/img3.jpg";
import img4 from "/images/evaluate/img4.jpg";
import img5 from "/images/evaluate/img5.jpg";
import img6 from "/images/evaluate/img6.jpg";
import img7 from "/images/evaluate/img7.jpg";
import img8 from "/images/evaluate/img8.jpg";
import img9 from "/images/evaluate/img9.jpg";
import img10 from "/images/evaluate/img10.jpg";
import img11 from "/images/evaluate/img11.jpg";
import img12 from "/images/evaluate/img12.jpg";
import img13 from "/images/evaluate/img13.jpg";
import img14 from "/images/evaluate/img14.jpg";
import img15 from "/images/evaluate/img15.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Evaluate = () => {
  const rows = chunkArray(images, 5);

  return (
    <div className="bg-black relative w-full h-[1018px] overflow-hidden px-[40px]">
      {/* Image Rows */}
      <div className="flex flex-col gap-4 h-full pt-10">
        {rows.map((rowImages, rowIndex) => {
          // repeat images 3 times for smooth looping
          const repeatedImages = [...rowImages, ...rowImages, ...rowImages];

          return (
            <div
              key={rowIndex}
              className="relative w-full h-[296px] overflow-hidden"
            >
              <div
                className={`flex gap-2 min-w-max absolute top-0 ${
                  rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
                }`}
              >
                {repeatedImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    className="w-[320px] h-[296px] object-cover brightness-50 opacity-60 rounded-lg"
                    alt={`style-${rowIndex}-${idx}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center pl-20">
        <h2 className="text-white text-[60px] mb-4 leading-tight">
          Ready to Elevate your Style?
        </h2>
        <p className="text-white text-[32px] max-w-2xl">
          Say goodbye to styling stress — get personalized outfits delivered to
          your inbox every month, curated to match your lifestyle and goals.
        </p>
      </div>
    </div>
  );
};

export default Evaluate;
