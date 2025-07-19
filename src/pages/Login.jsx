import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
import { AccountCircle, Lock } from "@mui/icons-material";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    let fakeUser = null;

    // Verificación de credenciales
    if (
      (username.toLowerCase() === "admin@ejemplo.com" || username === "admin") &&
      password === "admin1234"
    ) {
      fakeUser = {
        username,
        profilePic: "/assets/img/avatar/user-default.jpg",
        role: "admin",
      };
    } else if (username && password === "user1234") {
      fakeUser = {
        username,
        profilePic: "/assets/img/user-default.jpg",
        role: "user",
      };
    }

    if (fakeUser) {
      login(fakeUser);

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: `Hola, ${username}!`,
        timer: 1000,
        showConfirmButton: false,
      }).then(() => {
        navigate(fakeUser.role === "admin" ? "/dashboard" : "/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Por favor verifica tu usuario y contraseña.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Bienvenido</h1>
          <h2 className="text-lg font-semibold text-gray-600">Login</h2>
          <p className="text-sm mt-2 text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Regístrate
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-600">
              Usuario
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">
                <AccountCircle fontSize="small" />
              </span>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Usuario"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">
              Contraseña
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">
                <Lock fontSize="small" />
              </span>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Recuérdame</span>
            </label>
            <Link to="" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
