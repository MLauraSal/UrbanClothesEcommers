// src/context/ProductContext.jsx
import { createContext, useEffect, useState } from 'react';
import {   getAllProducts,
 
  deleteProduct,
  updateProduct,
  createProduct,
 
  getCategories,
 } from '../services/fakeApi.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const [prodRes, catRes] = await Promise.all([
      getAllProducts(),
      getCategories()
    ]);
    setProducts(prodRes);
    setCategories(catRes);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // CRUD: Productos
  const addProduct = async (productData) => {
    const newProduct = await createProduct(productData);
    setProducts((prev) => [...prev, newProduct]);
  };

  const editProduct = async (id, updatedData) => {
    const updatedProduct = await updateProduct(id, updatedData);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updatedProduct : p))
    );
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  
  return (
    <ProductContext.Provider value={{ products,
        categories,
        loading,
        addProduct,
        editProduct,
        removeProduct,
       
        setProducts,
        setCategories,
        }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
