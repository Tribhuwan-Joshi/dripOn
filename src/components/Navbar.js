import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const NavItems = () => (
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
    <NavLink to="/cart">
      <div className="flex hover:scale-125 transition duration-500 ease-in-out">
        <img src={cart} alt="car" className=" cart-img w-[38px]" />
        <div className="rounded-full font-mono bg-white text-bold text-black px-1 h-fit">
          99+
        </div>
      </div>
    </NavLink>
  </div>
);

const Navbar = () => (
  <>
    <nav className="h-[12%] z-10 sticky font-['Cinzel'] top-0 text-white bg-[#321F28] shadow-md flex justify-between items-center shadow-gray-500">
      <div className="flex w-[50%] justify-between items-center">
        <img src={logo} alt="logo" className="w-[14%] min-w-[100px]" />
        <div className="text-5xl items-center justify-center">DripOn</div>
      </div>
      <NavItems />
    </nav>
  </>
);

export default Navbar;
