import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
const Shop = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { product, products } = useProducts();

  const handleProductDetails = () => {
    navigate(`/products/${product.id}`, {
      state: {
        item: product,
      },
    });
  };

  

  return (
    <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id}  className="border border-cultured rounded-md overflow-hidden relative transition hover:shadow-md flex flex-col justify-between">
          <div className="relative flex justify-center items-center h-48 bg-white overflow-hidden mt-4">
            <div>
              <img
                className="w-full h-full object-contain"
                src={product.image[0]}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col justify-between p-4 min-h-[150px]">
              {product.category && (
                <p className="text-dodgerBlue text-xs font-medium uppercase mb-2">
                  {product.category?.name}
                </p>
              )}
            </div>
            <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
              <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                  Compare
                  <span>
                    <GiReturnArrow />
                  </span>
                </li>
                <li
                  onClick={addToCart}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Add to Cart
                  <span>
                    <FaShoppingCart />
                  </span>
                </li>
                <li
                  onClick={handleProductDetails}
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
          <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
            <div className="flex items-center justify-between font-titleFont">
              <h2 className="text-lg text-primeColor font-bold truncate">
                {product.title}
              </h2>
              <p className="text-[#767676] text-[14px]">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Shop;
