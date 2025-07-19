import React from "react";
import { Link } from "react-router-dom";
import {
  FaShirt,
  FaShoePrints,
  FaGlasses,
  FaSprayCan,
  FaBagShopping
} from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";


export default function CategoryPanel({ onClose }) {
  const menCategories = [
    { label: "Formal", path: "/shop/formal", icon: <FaShirt /> },
    { label: "Casual", path: "/shop/casual", icon: <FaShoePrints /> },
    { label: "Sports", path: "/shop/sports", icon: <FaShoePrints /> },
    { label: "Jacket", path: "/shop/jacket", icon: <FaShirt /> },
    { label: "Sunglasses", path: "/shop/sunglasses", icon: <FaGlasses /> }
  ];

  const womenCategories = [
    { label: "Formal", path: "/shop/formal-w", icon: <FaShirt /> },
    { label: "Casual", path: "/shop/casual-w", icon: <FaShoePrints /> },
    { label: "Perfume", path: "/shop/perfume", icon: <FaSprayCan /> },
    { label: "Cosmetics", path: "/shop/cosmetics", icon: <FaSprayCan /> },
    { label: "Bags", path: "/shop/bags", icon: <FaBagShopping /> }
  ];

  return (
    <div className="w-64 p-4" onClick={onClose}>
      <h2 className="p-3 font-[500] font-nunito text-[18px] text-blue-500 mb-4">View Categories</h2>
      <button
        className="absolute top-8 right-4 text-gray-600 hover:text-blue-500"
        onClick={onClose}>
        <IoCloseCircleOutline />
      </button>

      <div>
        <h3 className="text-lg font-monse mb-3 border-b pb-1 text[#0e7490]">
          Men’s Fashion
        </h3>
        <ul className="space-y-2">
          {menCategories.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-monse mb-3 border-b pb-1">
          Women’s Fashion
        </h3>
        <ul className="space-y-2">
          {womenCategories.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
