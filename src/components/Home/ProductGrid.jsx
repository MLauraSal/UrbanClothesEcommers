import React from "react";

import { useProducts } from "../../hooks/useProducts.js";
import { useCart } from "../../hooks/useCart.js";
import { Link,useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";

import { MdOutlineLabelImportant } from "react-icons/md";


const ProductGrid = () => {
  const {products } = useProducts();
  const navigate = useNavigate();
  const { addToCart } = useCart();

 
  const handleProductDetails = (product) => {
  navigate(`/products/${product.id}`, {
    state: { item: product },
  });
};

  return (
    <div className="mb-8 max-w-container mx-auto px-4">
      <h2 className="text-eerieBlack text-base font-semibold tracking-wide capitalize border-b border-cultured mb-8 pb-2">
        New Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 group">
        {products.slice(0, 20).map((product) => (
          <div
            key={product.id}
            className="w-[80%] border border-cultured rounded-md overflow-hidden relative transition hover:shadow-md flex flex-col justify-center"
          >
            <div className="relative flex justify-center items-center h-48 bg-white overflow-hidden ">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              <p className="absolute top-4 left-4 bg-oceanGreen text-white text-xs font-medium px-2 py-0.5 rounded-sm z-10">
                15%
              </p>
              <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
                            <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                                Compare
                                <span>
                                  <GiReturnArrow />
                                </span>
                              </li>
                             
                              <li
                                 onClick={() => handleProductDetails(product)}
                                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                              >
                                View Details
                                <span className="text-lg">
                                  <MdOutlineLabelImportant />
                                </span>
                              </li>
                              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                                Add to Wish List
                                <span>
                                  <BsSuitHeartFill />
                                </span>
                              </li>
                            </ul>
                          </div>
            </div>

            <div className="flex flex-col justify-between p-4 min-h-[150px]">
              <p className="text-dodgerBlue text-xs font-medium uppercase mb-2">
                {product.category?.name}
              </p>
            
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sonicSilver text-sm font-light capitalize tracking-wide leading-snug line-clamp-3 hover:text-eerieBlack transition mb-2">
                  {product.title}
                </h3>
              </Link>
              <div className="flex text-yellow-400 text-base mb-2">
                 <FaStar /><FaStar />
                               <FaStar /><FaStar />
                               <FaStarHalfAlt />
              </div>
              <div className="flex gap-2 text-sm font-semibold text-eerieBlack mb-3">
                <p>${product.price}</p>
              </div>
             <div className="flex flex-col items-center">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-white text-dodgerBlue border border-dodgerBlue font-semibold uppercase px-4 py-2 rounded-md hover:bg-dodgerBlue hover:text-white transition mb-4"
                >
                  Add to Cart
                </button>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
