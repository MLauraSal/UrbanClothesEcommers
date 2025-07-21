// src/pages/ProductDetail.jsx
import { useParams,useNavigate,Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth"; 
import {
  IoHeartOutline,
  IoEyeOutline,
  IoRepeatOutline,
  IoBagHandleOutline,
  IoStar,
  IoStarOutline,
} from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();
const { products, loading } = useProducts();
const { addToCart } = useCart();
const { user } = useAuth(); 
const navigate = useNavigate();

const product = products.find((p) => String(p.id) === String(id));


if (loading) return <p className="text-center text-gray-500 py-10">Loading...</p>;

if (!product) return <p className="text-center text-red-500 py-10">Producto no encontrado.</p>;


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
            <p className="text-sm text-gray-500 uppercase">{product.category}</p>
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
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
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
                <Link to={`/products/${item.id}`} className="text-gray-600 hover:text-blue-500">
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
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-md font-semibold text-gray-800 hover:text-indigo-600 line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-sonicSilver font-light mb-2">
                  {item.description}
                </p>
                <div className="flex items-center mt-2 text-yellow-500">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-indigo-600">${item.price}</p>
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
        </section>
      )}
    </>
  );
};

export default ProductDetail;
