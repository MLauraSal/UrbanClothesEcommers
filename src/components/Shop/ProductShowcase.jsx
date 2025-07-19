import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';

const ProductShowcase = ({ title, compact = false }) => {
  const { products } = useProducts();
  const Products = products.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {title && (
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
          {title}
        </h3>
      )}

      <div className="flex items-center overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory">
        {Products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 snap-start min-w-[250px]">
            {/* Imagen */}
            <Link to={`/product/${product.id}`} className="shrink-0">
              <img
                src={product.images[0]}
                alt={product.title}
                width={compact ? "65" : "60"}
                height={compact ? "65" : "60"}
                className="rounded object-cover"
              />
            </Link>

            {/* Contenido */}
            <div className="w-full max-w-[200px]">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sm font-medium text-gray-800 truncate capitalize tracking-wide">
                  {product.title}
                </h3>
              </Link>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center text-yellow-500 text-xs my-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <ion-icon
                      key={n}
                      name={
                        product.rating >= n
                          ? "star"
                          : product.rating >= n - 0.5
                          ? "star-half-outline"
                          : "star-outline"
                      }
                    ></ion-icon>
                  ))}
                </div>
              )}

              {/* Categoría */}
              {product.category && (
                <p className="text-xs text-gray-500 capitalize">{product.category?.name}</p>
              )}

              {/* Precio */}
              <p className="text-sm font-semibold text-blue-500 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
