import { NavLink } from 'react-router-dom';
import { FaUser, FaBox, FaHome } from 'react-icons/fa';

const DashboardSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 hover:text-blue-400 ${
      isActive ? 'text-blue-500 font-semibold' : ''
    }`;

  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard" end className={linkClass}>
          <FaHome /> Inicio
        </NavLink>
        <NavLink to="/dashboard/users" className={linkClass}>
          <FaUser /> Usuarios
        </NavLink>
        <NavLink to="/dashboard/products" className={linkClass}>
          <FaBox /> Productos
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

