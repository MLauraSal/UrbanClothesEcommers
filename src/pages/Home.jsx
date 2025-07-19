import React from "react";

import Banner from "../components/Home/Banner";
import ProductFeature from "../components/Home/ProductFeature";
import Testimonial from "../components/Home/Testimonial";
import Blog from "../components/Home/Blog";
import BannerBottom from "../components/Home/BannerBottom";

import ProductGrid from "../components/Home/ProductGrid";



export default function Home({products, addToCart}) {
 


 
  return (
    <>
      <div className="w-full mx-auto">
        <Banner />
        
       
       
          <div className="max-w-container mx-auto px-4">
          <BannerBottom />
          <ProductFeature/>
          <ProductGrid products={products} addToCart={addToCart}/>
          </div>
        
        <Testimonial />
        <Blog />
      </div>
    </>
  );
}
