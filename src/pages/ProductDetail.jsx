// src/pages/ProductDetail.jsx
import { useParams,useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth"; 

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { user } = useAuth(); 
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center text-gray-500 py-10">Loading...</p>;

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
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
          navigate ("/login");
        }
      });
      return;
    }
  
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      text: `"${product.title}" fue agregado correctamente.`,
      timer: 1000,
      showConfirmButton: false,
    });
  };
  
  return (
    <>
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
               crossOrigin="anonymous"
              className="w-full h-auto rounded-xl shadow-lg object-contain max-h-[500px] mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-sm text-gray-500 uppercase">{product.category?.name}</p>
            <p className="text-2xl font-semibold text-indigo-600">${product.price}</p>
            <p className="text-gray-700">{product.description || "No description available."}</p>
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
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                   crossOrigin="anonymous"
                  className="w-full h-48 object-contain mb-4"
                />
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-indigo-600 font-medium mb-2">${item.price}</p>
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
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
