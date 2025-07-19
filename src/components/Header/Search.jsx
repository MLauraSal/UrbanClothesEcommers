import React from 'react'
import { IoSearch } from 'react-icons/io5'
export default function Search() {
  return (
    
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-8 px-4 border text-[12px] border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
        >
          <IoSearch className="w-5 h-5" />
        </button>
      </div>
    
    
  )
}
