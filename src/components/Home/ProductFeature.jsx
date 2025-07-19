import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const featuredData = [
  {
    imageDefault: "/assets/img/shampoo.jpg",
    name: "Shampoo, Conditioner & Facewash Packs",
    price: 19.99,
    priceOriginal: 29.99,
    description:
      "Nourishing shampoo with natural ingredients. Leaves your hair soft, shiny, and healthy from the first wash. Don’t miss this limited-time offer!",
  },
  {
    name: "Leather Jacket",
    imageDefault: "/assets/img/jewellery-1.jpg",
    price: 89.99,
    priceOriginal: 129.99,
    description:
      "Elegant and lightweight earrings to elevate any look. Perfect for day or night. Special offer limited time only!",
  },
  {
    name: "Running Shoes",
    imageDefault: "/assets/img/collection-1.jpg",
    price: 49.99,
    priceOriginal: 69.99,
    description: "Lightweight running shoes for maximum performance.",
  },
];

const ProductFeature = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const snapRef = useRef(null);

  const handleItemChange = useCallback(() => {
    const sizeContainer = snapRef.current?.scrollWidth ?? 0;
    const sizeItem = sizeContainer / featuredData.length;

    if (currentItem >= featuredData.length - 1) {
      snapRef.current?.scrollBy({ left: -sizeContainer, behavior: "smooth" });
      setCurrentItem(0);
    } else {
      snapRef.current?.scrollBy({ left: sizeItem, behavior: "smooth" });
      setCurrentItem((prev) => prev + 1);
    }
  }, [currentItem]);

  useEffect(() => {
    const interval = setInterval(handleItemChange, 4000);
    return () => clearInterval(interval);
  }, [currentItem, handleItemChange]);

  // Fecha objetivo (3 días desde ahora)
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="my-8">
      <h2 className="text-eerieBlack text-base font-semibold tracking-wide capitalize border-b border-cultured mb-8 pb-2 text-center">
        Deal of the Day
      </h2>

      <div
        ref={snapRef}
        className="flex items-center gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 rounded-md"
      >
        {featuredData.map((feature, index) => (
          <div
            key={index}
            className="min-w-full bg-white border border-cultured rounded-md p-6 snap-center transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Imagen */}
              <div className="flex-1 flex justify-center">
                <img
                  src={feature.imageDefault}
                  alt={feature.name}
                  className="w-full max-w-[450px] object-cover rounded"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-3">
                <div className="flex items-center text-yellow-400 text-lg mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>

                <h3 className="text-xs uppercase font-semibold text-eerieBlack truncate mb-1">
                  {feature.name}
                </h3>

                <p className="text-xs text-sonicSilver font-light mb-2">
                  {feature.description}
                </p>

                <div className="flex gap-3 text-md font-semibold text-dodgerBlue mb-3">
                  <span>${feature.price}</span>
                  <del className="text-sonicSilver font-normal">
                    ${feature.priceOriginal}
                  </del>
                </div>

                <button className="bg-white text-dodgerBlue border border-dodgerBlue font-semibold uppercase px-4 py-2 rounded-md hover:bg-dodgerBlue hover:text-white transition mb-4">
                  Add to cart
                </button>

                {/* Barra de progreso */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs uppercase text-eerieBlack mb-2">
                    <p>
                      Already sold: <b>20</b>
                    </p>
                    <p>
                      Available: <b>40</b>
                    </p>
                  </div>
                  <div className="bg-cultured h-2 rounded relative">
                    <div className="absolute top-0 left-0 h-2 bg-dodgerBlue rounded w-[40%]"></div>
                  </div>
                </div>

                {/* Contador */}
                <p className="text-xs font-semibold uppercase text-eerieBlack mb-2">
                  Hurry Up! Offer ends in:
                </p>
                <div className="flex gap-3 justify-start flex-wrap">
                  {/* Days */}
                  <div className="flex flex-col items-center justify-center bg-cultured rounded-full w-16 h-16 hover:scale-105 transition transform shadow">
                    <p className="text-xl font-bold text-eerieBlack">
                      {timeLeft.days}
                    </p>
                    <span className="text-[10px] uppercase text-davysGray">
                      Days
                    </span>
                  </div>
                  {/* Hours */}
                  <div className="flex flex-col items-center justify-center bg-cultured rounded-full w-16 h-16 hover:scale-105 transition transform shadow">
                    <p className="text-xl font-bold text-eerieBlack">
                      {timeLeft.hours}
                    </p>
                    <span className="text-[10px] uppercase text-davysGray">
                      Hrs
                    </span>
                  </div>
                  {/* Minutes */}
                  <div className="flex flex-col items-center justify-center bg-cultured rounded-full w-16 h-16 hover:scale-105 transition transform shadow">
                    <p className="text-xl font-bold text-eerieBlack">
                      {timeLeft.minutes}
                    </p>
                    <span className="text-[10px] uppercase text-davysGray">
                      Min
                    </span>
                  </div>
                  {/* Seconds */}
                  <div className="flex flex-col items-center justify-center bg-cultured rounded-full w-16 h-16 hover:scale-105 transition transform shadow animate-pulse">
                    <p className="text-xl font-bold text-eerieBlack">
                      {timeLeft.seconds}
                    </p>
                    <span className="text-[10px] uppercase text-davysGray">
                      Sec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeature;
