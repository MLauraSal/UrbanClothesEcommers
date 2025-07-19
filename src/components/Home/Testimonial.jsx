import React from 'react';
import { IoBoatOutline, IoRocketOutline, IoCallOutline, IoArrowUndoOutline, IoTicketOutline } from 'react-icons/io5';

const Testimonial = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Testimonial */}
      <div className="text-center border p-6 rounded-md shadow flex flex-col justify-between">
        <h2 className="text-xl font-bold uppercase mb-4 text-gray-800">Testimonial</h2>
        <img
          src="/assets/img/testimonial-1.jpg"
          alt="alan doe"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-700 font-semibold">Alan Doe</p>
        <p className="text-sm text-gray-500 mb-4">CEO & Founder Invision</p>
        <img
          src="/assets/img/icons/quotes.svg"
          alt="quotation"
          className="w-6 h-6 mx-auto mb-3"
        />
        <p className="text-gray-600 max-w-xs mx-auto">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
        </p>
      </div>
  
      {/* CTA */}
      <div className="relative rounded-md overflow-hidden shadow group">
        <img
          src="/assets/img/banner/cta-banner.jpg"
          alt="summer collection"
          className="w-full h-full object-cover"
        />
        <a
          href="#"
          className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center text-center p-6 transition group-hover:bg-white/90"
        >
          <p className="bg-black text-white px-2 text-sm rounded uppercase mb-2">25% Discount</p>
          <h2 className="text-2xl font-semibold text-gray-800">Summer collection</h2>
          <p className="text-gray-500 mb-2">Starting @ $10</p>
          <button className="mt-2 px-3 py-2 mb-2 border border-gray-700 text-gray-700 uppercase text-sm rounded hover:bg-gray-800 hover:text-white transition">
            Shop now
          </button>
        </a>
      </div>
  
   
    </div>
  </div>
  );
};

export default Testimonial;
