import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import "../assets/style.css";

const ProductMinimal = () => {
  const { products } = useProducts();
  const minimalProducts = products.slice(0, 4);
  return (
    <div className="product-minimal product-minimal flex flex-wrap justify-center gap-5 lg:mb-5 ">
      <div className="product-showcase product-showcase w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
        <h2 className="title text-eerieBlack text-sm font-semibold capitalize truncate mb-[2px] ">
          New Arrivals
        </h2>

        <div className="showcase-wrapper flex items-center overflow-x-auto overscroll-x-contain snap-mandatory has-scrollbar">
          <div className="showcase-container min-w-full xs:min-w-1/2 md:min-w-[50%] lg:min-w-[calc(33.33%-14px)] snap-start px-[5px] lg:p-[2px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container min-w-[100%] md:min-w-[50%] snap-start pl-[5px] pr-[5px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-showcase product-showcase w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
        <h2 className="title text-eerieBlack text-sm font-semibold capitalize truncate mb-[2px] ">
          Trending
        </h2>
        <div className="showcase-wrapper flex items-center overflow-x-auto overscroll-x-contain snap-mandatory has-scrollbar">
          <div className="showcase-container min-w-full xs:min-w-1/2 md:min-w-[50%] lg:min-w-[calc(33.33%-14px)] snap-start px-[5px] lg:p-[2px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container min-w-[100%] md:min-w-[50%] snap-start pl-[5px] pr-[5px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-showcase product-showcase w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
        <h2 className="title text-eerieBlack text-sm font-semibold capitalize truncate mb-[2px] ">
          Top Rated
        </h2>

        <div className="showcase-wrapper flex items-center overflow-x-auto overscroll-x-contain snap-mandatory has-scrollbar">
          <div className="showcase-container min-w-full xs:min-w-1/2 md:min-w-[50%] lg:min-w-[calc(33.33%-14px)] snap-start px-[5px] lg:p-[2px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-container min-w-[100%] md:min-w-[50%] snap-start pl-[5px] pr-[5px]">
            {minimalProducts.map((product) => (
              <div
                className="showcase flex items-center justify-start gap-4 border border-cultured p-[15px] rounded-xl bg-[rgb(246, 252, 250)]"
                key={product.id}
              >
                <a href="#" className="showcase-img-box">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="showcase-img w-[70px] h-[70px] object-cover  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                  />
                </a>

                <div className="showcase-content w-[calc(100% - 85px)]">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="showcase-title">{product.title}</h4>
                  </Link>
                  <a
                    href="#"
                    className="showcase-category size-max text-davysGray text-sm capitalize mb-[3px] "
                  >
                    {product.category?.name}
                  </a>
                  <div className="price-box flex items-center gap-3">
                    <p className="price text-sm font-semibold text-deepSkyBlue">
                      ${product.price}
                    </p>
                    <del className="text-sm text-sonicSilver">
                      ${(product.price * 1.3).toFixed(2)}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMinimal;
