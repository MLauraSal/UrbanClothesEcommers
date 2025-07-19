import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Sale() {
  // Fecha objetivo para la promo (3 días desde ahora)
  const targetDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          
          {/* Texto principal */}
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Summer Sale is Here!
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Get ready to shop the hottest trends with up to 30% OFF for a limited time.
            </p>

            {/* Contador */}
            <div className="mt-6 text-xl font-bold text-indigo-600">
              Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
          </div>

          {/* Botón */}
          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-white font-semibold text-lg shadow hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* Galería con overlay y badge */}
          <div
            aria-hidden="true"
            className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                "home-page-03-hero-image-tile-01.jpg",
                "home-page-03-hero-image-tile-02.jpg",
                "home-page-03-hero-image-tile-03.jpg",
                "home-page-03-hero-image-tile-04.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105"
                >
                  <img
                    src={`https://tailwindcss.com/plus-assets/img/ecommerce-images/${img}`}
                    alt="Sale Item"
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition"></div>
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                    30% OFF
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
