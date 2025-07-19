const BASE_URL = " https://api.escuelajs.co/api/v1";

/**
 * Obtener todos los productos
 */
export async function getAllProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

/* Obtener productos por categoría */
export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching category "${category}":`, error);
    return [];
  }
}

/* Obtener un producto por ID */
export async function getProductById(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

/* Obtener todas las categorías */
export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE_URL}/categories`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
export const createProduct = (product) =>
  fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then(res => res.json());

export const updateProduct = (id, product) =>
  fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then(res => res.json());

export const deleteProduct = (id) =>
  fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });


// =================== USUARIOS ===================
export const getUsers = () => fetch(`${BASE_URL}/users`).then(res => res.json());

export const createUser = (user) =>
  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(res => res.json());

// =================== CATEGORÍAS ===================
export const getCategories = () => fetch(`${BASE_URL}/categories`).then(res => res.json());

export const createCategory = (category) =>
  fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
  }).then(res => res.json());

export const deleteCategory = (id) =>
  fetch(`${BASE_URL}/categories/${id}`, { method: "DELETE" });

export default {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  getAllCategories,
  deleteProduct,
  updateProduct,
  createProduct,
  getUsers,
  createUser,
  getCategories,
  createCategory,
  deleteCategory
  
};
