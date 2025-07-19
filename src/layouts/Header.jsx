import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

import { styled } from "@mui/material/styles";

import AccountMenu from "../components/Header/AccountMenu";
import Slider from "../components/Header/Slider";
import Search from "../components/Header/Search";
import NavBar from "../components/Header/NavBar";

import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcAssistant } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";



export default function Header({ toggleCart }) {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: 3,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
   <>
     <header className="bg-white">
      <div className="header-top  py-2 border-b border-gray-300">
        <div className=" container flex  justify-between items-center text-xs text-gray-600 ">
          <div className="social-items w-[30%] hidden sm:flex justify-start items-center  gap-1.5">
            <FaFacebookF className="bg-gray-500 text-amber-50 hover:bg-[#3b5998] hover:text-white w-5 h-5 rounded" />
            <FaInstagram className="bg-gray-500 text-amber-50 hover:bg-gradient-to-r from-[#8a3ab9] via-[#e95950] to-[#fccc63] hover:text-white w-5 h-5 rounded" />
            <FaSquareXTwitter className="bg-gray-500 text-amber-50 hover:text-[#555] hover:bg-white w-5 h-5 rounded" />
            <FaLinkedin className="bg-gray-500 text-amber-50 hover:text-[#176aff] hover:bg-white w-5 h-5 rounded" />
          </div>
          <div className="col2 w-[40%] flex items-center justify-center  ">
            <Slider />
          </div>
          <div className="col3 w-[30%] flex items-center justify-end">
            <ul className="flex items-center gap-2">
              <li className="list-none border-r border-gray-300 px-2  ">
                <Link
                  to="/help-center"
                  className="flex items-center text-[10px] font-500 hover:text-blue-600 transition"
                >
                  <FcAssistant className="w-5 h-5 inline mr-1" />{" "}
                  <p className="hidden md:inline">Help Center</p>
                </Link>
              </li>
              <li className="list-none  ">
                <Link
                  to="/order-tracking"
                  className="flex items-center text-[10px] font-500 hover:text-blue-600 transition"
                >
                  <FcInTransit className="w-5 h-5 inline mr-2" />{" "}
                  <p className="hidden md:inline">Order Tracking</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo/header nav */}
      <div className="header-main border-b border-gray-300 items-center py-3 sm:py-4 bg-white">
        <div className=" container flex justify-between items-center w-full  gap-4 sm:gap-0 ">
          {/* Logo */}
          <div className="col1 w-[45%] sm:w-[25%] flex justify-start px-2 sm:px-0 ">
            <a href="/" className="">
            <img
  src="/assets/img/logo/3.png"
  alt="logo"
  className="w-[130px] h-auto max-h-[80px] object-contain"
/>
            </a>
          </div>

          <div className="col2  w-[50%] hidden md:flex px-3 ">
            <Search />
          </div>
          <div className="col3 w-[25%] items-center justify-end py-3  flex">
            <ul className="flex justify-center items-center gap-[1px] sm:px-0 text-gray-600 font-medium ">
          

              <li className="ml-1">
                <IconButton aria-label="cart" onClick={toggleCart} >
                  <StyledBadge
                    badgeContent={cartItems?.length || 0}
                    showZero={true}
                    color="secondary"
                    alignItems="center"
                    justifyContent={"center"}

                  >
                    <MdOutlineShoppingBag className="w-4 h-4 sm:w-7 sm:h-7 hover:text-blue-500 transition" />
                  </StyledBadge>
                </IconButton>
              </li>
              <IconButton
                aria-label="heart"
                alignItems="center"
                justifyContent="center"
              >
                <StyledBadge badgeContent={0} showZero={true} color="secondary">
                  <FaRegHeart className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-500  transition" />
                </StyledBadge>
              </IconButton>

              <li>
                {user ? (
                  <AccountMenu user={user} logout={logout} />
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                   <IconButton
                aria-label="heart"
                alignItems="center"
                justifyContent="center"
              >
               
               
                <FaRegUser  className="w-4 h-4 sm:w-6 sm:h-6  text-gray-600 hover:text-blue-500" />
                
                
              </IconButton>
                       
                     
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavBar/>
    </header>
   </>
  );
}
