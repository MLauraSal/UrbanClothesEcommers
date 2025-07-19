import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"; // Asegurate de tener este hook
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Header from "./layouts/Header.jsx";
import Cart from "./components/Header/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import UserTable from "./components/Dashboard/UserTable";
import ProductTable from "./components/Dashboard/ProductTable";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import UserProtectedRoute from "./routes/UserProtectedRoute.jsx";
import "./App.css";
import MobileNav from "./components/Header/MobileNav.jsx";
import Checkout from "./pages/Checkout.jsx";
import Footer from "./layouts/Footer.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { verificLog } = useAuth();

  useEffect(() => {
    verificLog();
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <Router>
        <MobileNav />
        <Header toggleCart={toggleCart} />
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />

        <Routes>
          {/* públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* protegidas solo para usuarios autenticados */}
          <Route
            path="/checkout"
            element={
              <UserProtectedRoute>
                <Checkout />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <UserProtectedRoute>
                <Profile />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/cartpage"
            element={
              <UserProtectedRoute>
                <CartPage />
              </UserProtectedRoute>
            }
          />

          {/* protegida para admin */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard/users" element={<UserTable />} />
            <Route path="/dashboard/products" element={<ProductTable />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
