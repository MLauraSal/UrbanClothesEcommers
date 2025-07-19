import React from 'react'
import { useCart } from '../hooks/useCart'


import Sale from './Sale'
import ProductGrid from './ProductGrid'
import ProductFeature from './ProductFeature'



export default function ProductContainer() {
  
  
  const { addToCart } = useCart(); 
  
  

 

  return (

  <>
    
    
    
      <div className="container-fluid max-w-container mx-auto px-4">
        <Sale />
        <ProductFeature  />
        <ProductGrid  addToCart={addToCart} />
        
      </div>
    
  </>
    
  )
}
