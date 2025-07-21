import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export default function Search() {
  const { products } = useProducts();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const wrapperRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(results);
  };

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setFilteredProducts([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
        className="w-full h-8 px-4 border text-[12px] border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
      >
        <IoSearch className="w-5 h-5" />
      </button>

      {/* Resultados */}
      {filteredProducts.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex items-center p-2 hover:bg-gray-100 transition"
              onClick={() => setFilteredProducts([])} // cerrar al hacer click
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 object-cover rounded mr-3"
                crossOrigin="anonymous"
              />
              <span className="text-sm text-gray-700">{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
