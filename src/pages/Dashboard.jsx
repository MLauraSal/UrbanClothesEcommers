import React, { useState } from 'react';
import ProductTable from '../components/Dashboard/ProductTable';
import UserTable from '../components/Dashboard/UserTable';

const Dashboard = () => {
  const [tab, setTab] = useState('products');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      <div className="flex gap-4 mb-6">
        <button
          className= {`px-4 py-2 rounded ${tab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('products')}
        >
          Productos
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('users')}
        >
          Usuarios
        </button>
       
      </div>

      {tab === 'products' && <ProductTable />}
      {tab === 'users' && <UserTable />}
      
    </div>
  );
};

export default Dashboard;
