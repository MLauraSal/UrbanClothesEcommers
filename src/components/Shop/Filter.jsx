import { useEffect, useState } from "react";

export default function Filter({ selectedCategories, setSelectedCategories }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const handleToggle = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(prev => prev.filter(cid => cid !== id));
    } else {
      setSelectedCategories(prev => [...prev, id]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]); // Desmarca todos
  };

  return (
    <aside className="p-4 border-r w-64">
      <h2 className="font-semibold text-lg mb-4">Categorías</h2>
      <ul className="space-y-2 mb-6">
        {categories.map(cat => (
          <li key={cat.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`cat-${cat.id}`}
              checked={selectedCategories.includes(cat.id)}
              onChange={() => handleToggle(cat.id)}
            />
            <label htmlFor={`cat-${cat.id}`}>{cat.name}</label>
          </li>
        ))}
      </ul>

      {selectedCategories.length > 0 && (
        <button
          onClick={clearFilters}
          className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Limpiar filtros
        </button>
      )}
    </aside>
  );
}
