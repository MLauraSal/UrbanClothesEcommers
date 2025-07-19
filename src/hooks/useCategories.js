import { useState, useEffect } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories/{id}/products')

      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar categorías');
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar las categorías');
      })
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading, error };
};
