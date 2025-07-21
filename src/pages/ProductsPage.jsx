import { useEffect, useState } from "react";
import ProductGrid from "../components/Home/ProductGrid.jsx";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Obtener productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };

    fetchProducts();
  }, []);

  // Obtener categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error al obtener categorías:", err);
      }
    };

    fetchCategories();
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = filteredCategory
    ? products.filter((p) => p.category?.id === filteredCategory)
    : products;

  // Lógica de paginación
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 border rounded ${filteredCategory === null ? "bg-blue-600 text-white" : "bg-white"}`}
          onClick={() => setFilteredCategory(null)}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 border rounded ${
              filteredCategory === cat.id ? "bg-blue-600 text-white" : "bg-white"
            }`}
            onClick={() => {
              setFilteredCategory(cat.id);
              setCurrentPage(1);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ProductGrid products={currentProducts} />

      {/* Paginación */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded ${
              currentPage === num ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
