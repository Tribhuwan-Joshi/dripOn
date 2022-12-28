import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => (
  <>
    <nav className="h-[12%] sticky font-['Cinzel'] top-0 text-white bg-[#321F28] shadow-md flex justify-between items-center shadow-white">
      <div className="flex w-[50%] justify-between items-center">
        <img src={logo} alt="logo" className="w-[14%] min-w-[100px]" />
        <div className="text-5xl items-center justify-center">DripOn</div>
      </div>
      <div className="flex w-[30%] justify-evenly space-x-4 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-4" : ""
            } hover:scale-125 transition duration-500 ease-in-out text-sm md:text-2xl lg:text-2xl`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `${
              isActive ? "underline underline-offset-4" : ""
            } hover:scale-125 transition duration-500 ease-in-out text-sm md:text-2xl lg:text-2xl`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${isActive ? "underline underline-offset-4" : ""}`
          }
        >
          <img
            src={cart}
            alt="car"
            className="hover:scale-125 transition duration-500 ease-in-out w-[34px]"
          />
        </NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
