import { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider-1');
    const slides = document.querySelectorAll('.slide-1');
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative ml-2 ">
      <div className="slider-1 flex text-center transition-transform duration-500 ease-in-out ">
        <div className="slide-1 w-full  flex-shrink-0  text-[10px] sm:text-xs px-2">
          <p className='text-gray-500 '>Welcome to <span className='text-blue-500 font-semibold'> Urban Clothes</span></p>
          
        </div>
        <div className="slide-1 w-full flex-shrink-0 text-[10px] sm:text-xs ">
          <p className='text-gray-500 '>Summer sale discount off <span className='text-red-500 font-semibold'>70%</span></p>
        </div>
        <div className="slide-1 w-full flex-shrink-0 text-[10px] sm:text-xs  ">
          <p className='text-gray-500  '>Time to refresh your wardrobe.</p>
        </div>
        <div className="slide-1 w-full flex-shrink-0 text-[10px] sm:text-xs  ">
          <p className='text-gray-600  '>Free Shipping on Orders Over $50</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
