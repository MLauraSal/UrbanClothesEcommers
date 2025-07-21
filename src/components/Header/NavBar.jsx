import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { MdOutlineMenuOpen } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
import CategoryPanel from "../Header/CategoryPanel";

export default function NavBar() {
  const { user } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <nav className=" flex items-center justify-between bg-white  sm:px-4 px-2 sm:py-3 py-2 text-gray-700 text-sm font-medium relative">
        <div className="container flex justify-between  py-3">
          <div className="col_1 border border-gray-300 rounded  flex  justify-start bg-white h-10 w-[50%] sm:w-[30%] sm:h-full relative">
            <Button
              className="!text-gray-600 gap-2  w-full text-[12px]"
              onClick={toggleDrawer(true)}
            >
              <MdOutlineMenuOpen className="w-5 h-5" />
              Categorias
              <LiaAngleDownSolid className="w-5 h-5" />
            </Button>
          </div>
          <div className="col_2 w-full items-center justify-center hidden  md:flex">
            <ul className="flex gap-6 text-[16px]  text-gray-700">
              {/* HOME */}
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>

              {/* CATEGORIES */}
              <li className="group relative">
                <Link to="/shop" className="hover:text-blue-500">
                  Categories
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-lg border rounded-lg p-4 grid grid-cols-2 gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 min-w-[600px]">
                  {/* Men's Fashion */}
                  <ul>
                    <li className="font-bold border-b mb-2">
                      <Link to="/shop">Men's Fashion</Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/formal"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Formal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/casual"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Casual
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/sports"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/jacket"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Jacket
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/sunglasses"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Sunglasses
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link to="/shop">
                        <img
                          src="/assets/img/banner/mens-banner.jpg"
                          alt="Men"
                          className="w-full rounded"
                        />
                      </Link>
                    </li>
                  </ul>

                  {/* Women's Fashion */}
                  <ul>
                    <li className="font-bold border-b mb-2">
                      <Link to="/shop">Women's Fashion</Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/formal-w"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Formal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/casual-w"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Casual
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/perfume"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Perfume
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/cosmetics"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Cosmetics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/bags"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Bags
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link to="/shop">
                        <img
                          src="/assets/img/banner/womens-banner.jpg"
                          alt="Women"
                          className="w-full rounded"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* PAGES */}
              <li className="group relative">
                <span className="cursor-pointer hover:text-blue-500">
                  Pages
                </span>
                <ul className="absolute top-full mt-2 bg-white shadow-lg border rounded-lg p-3 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 min-w-[180px]">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      FAQs
                    </Link>
                  </li>
                  {user && user.role !== "admin" && (
                    <li>
                      <Link
                        to="/cartpage"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        Cart
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Shop
                    </Link>
                  </li>
                  {user?.role === "admin" && (
                    <li>
                      <Link
                        to="/dashboard"
                        className="text-blue-600 font-medium"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                </ul>
              </li>

              <li>
                <Link to="/products" className="hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <a href="#section-blog" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[25%] flex justify-end items-center">
            <ul>
              {!user && (
                <li className="list-none text-sm ml-10 py-1 justify-end flex items-center gap-2">
                  <Link
                    to="/login"
                    className="hover:text-blue-600  transition "
                  >
                    Login
                  </Link>
                  │
                  <Link
                    to="/register"
                    className="hover:text-blue-600  transition "
                  >
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <CategoryPanel onClose={toggleDrawer(false)} />
      </Drawer>
    </>
  );
}
