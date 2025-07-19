import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/fakeApi";







export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);
  return (
    <div className="bg-white">
      <div className="pt-6 px-4 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-xl text-gray-700 mt-2">${product.price}</p>

        {/* Breadcrumb */}
        <nav className="mt-4" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm text-gray-500">
            <li>Home</li>
            <li>/</li>
            <li>{product.category?.name}</li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            {product.image?.slice(0, 4).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Imagen ${idx + 1}`}
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
            ))}
          </div>

          {/* Product details */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Descripción</h2>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </div>

      
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
