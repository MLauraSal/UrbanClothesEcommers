import React from "react";
import { useProducts } from "../../hooks/useProducts.js";
import { useCart } from "../../hooks/useCart.js";
import { Link, useNavigate } from "react-router-dom";
import {
  IoHeartOutline,
  IoEyeOutline,
  IoRepeatOutline,
  IoBagHandleOutline,
  IoStar,
  IoStarOutline,
} from "react-icons/io5";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth.js";

const ProductGrid = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();


  const handleAddToCart = (product) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Inicia sesión",
        text: "Debes estar logueado para agregar productos al carrito.",
        showCancelButton: true,
        confirmButtonText: "Ir al login",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      text: `"${product.name}" fue agregado correctamente.`,
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">New Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                 crossOrigin="anonymous"
                className="w-full h-56 object-contain p-4 bg-gray-100"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                15%
              </span>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="text-gray-600 hover:text-red-500">
                  <IoHeartOutline size={20} />
                </button>
                <Link to={`/product/${product.id}`} className="text-gray-600 hover:text-blue-500">
                  <IoEyeOutline size={20} />
                </Link>
                <button className="text-gray-600 hover:text-green-500">
                  <IoRepeatOutline size={20} />
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <IoBagHandleOutline size={20} />
                </button>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.category?.name}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-md font-semibold text-gray-800 hover:text-indigo-600 line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mt-2 text-yellow-500">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-indigo-600">${product.price}</p>
              </div>
            </div>

            <div className="p-4 border-t">
            <button
  onClick={() => handleAddToCart(product)}
  className={`w-full py-2 rounded transition font-medium ${
    user
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
  title={!user ? "Debes iniciar sesión para agregar al carrito" : ""}
>
  Add to Cart
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
