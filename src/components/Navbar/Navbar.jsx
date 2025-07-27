import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white relative">
      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <div className="text-[40px] font-extrabold tracking-wide text-[#000000]">
          URVESTIE
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8 text-[28px] font-normal text-[#000000]">
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
          <Link className="font-abel" to="/about">
            About Us
          </Link>
        </li>
      </ul>

      {/* Desktop Sign Up Button */}
      <Link to="/login" className="hidden md:block">
        <button className="bg-black text-white w-[190px] h-[52px] rounded-3xl text-[27px] font-medium hover:bg-gray-800 transition">
          Sign Up
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md z-10 flex flex-col items-start px-8 py-4 space-y-4 text-[22px] font-abel">
          <Link className="font-abel" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="font-abel" to="/" onClick={() => setIsOpen(false)}>
            Let’s Chat
          </Link>
          <Link
            className="font-abel"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="font-abel bg-black text-white w-[30%] h-[48px] rounded-3xl text-[22px] font-medium hover:bg-gray-800 transition px-4 py-2"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
