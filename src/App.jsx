import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import { useAuth } from "./hooks/useAuth.js";
import { useEffect } from "react";
import Contact from "./pages/Contact.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const { verifyLog } = useAuth();

  useEffect(() => {
    verifyLog();
  }, [] );

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPage />} />

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