import React from "react";
import logo from "../../assets/blackLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Headertop = () => {
  return (
    <div className="w-full py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* logo */}
        <div className="w-full cursor-pointer px-8 flex items-center justify-center lg:items-start lg:w-64">
          <img className="w-36" src={logo} alt="logo" />
        </div>
        {/* search bar */}
        <div
          className="h-12 rounded-md hidden lg:flex flex-grow items-center justify-start relative border-[1px]
         border-gray-500"
        >
          <input
            className="w-[60%] h-full hidden md:inline-flex absolute left-10 text-gray-700 font-base font-poppins border-white border-none outline-none"
            type="text"
            placeholder="What do you want to learn?"
          />
          <div></div>
          <SearchIcon className="absolute left-4 text-gray-700" />
        </div>
        {/* navbutton */}
        <div>
          <button className="bg-buttonBlue text-white py-2 px-8 font-semibold text-md font-poppins rounded-md hidden lg:inline-flex">
            Login/Register
          </button>
        </div>
        <span className="absolute left-6 lg:hidden">
          <MenuIcon />
        </span>
        <span className="absolute right-6 lg:hidden">
          <SearchIcon />
        </span>
      </div>
    </div>
  );
};

export default Headertop;
