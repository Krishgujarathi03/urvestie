import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <div className="text-[40px] font-extrabold tracking-wide text-[#000000]">
          URVESTIE
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-[28px] font-normal text-[#000000]">
        <li>
          <Link className="font-abel" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-abel" to="/">
            Let’s Chat
          </Link>
        </li>
        <li>
          <Link className="font-abel" to="/">
            About Us
          </Link>
        </li>
      </ul>

      {/* Sign Up Button */}
      <div>
        <button className="bg-black text-white w-[190px] h-[52px] rounded-3xl text-[27px] font-medium hover:bg-gray-800 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
