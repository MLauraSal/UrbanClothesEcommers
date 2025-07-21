const API_BASE = " https://687acab0abb83744b7eddd67.mockapi.io/";


// Obtener todos los productos
export const getAllProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return await res.json();
};

// Crear un producto
export const createProduct = async (data) => {
  const res = await fetch(`${API_BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
};

// Actualizar un producto
export const updateProduct = async (id, data) => {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
};

// Borrar un producto
export const deleteProduct = async (id) => {
  await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
};

// Obtener categorías si tenés una colección separada
export const getCategories = async () => {
  const res = await fetch(`${API_BASE}/categories`);
  return await res.json();
};
