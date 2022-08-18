import React from "react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(true);

  const menuHandler = () => {
    setMenu(!menu);
    setLogo(!logo);
  };

  return (
    <div
      className="flex justify-between
     items-center w-full text-white absolute z-10 h-20 px-4"
    >
      <div>
        <h1 onClick={menuHandler} className={!logo ? "hidden" : "block"}>
          Voyage Africa
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About</li>
        <li>View</li>
        <li>Blog</li>
      </ul>
      <ul className="hidden md:flex md:justify-around">
        <li><BiSearch /></li>
        <li><BsPerson /></li>
      </ul>
      {/* Hamburger menu */}
      <div onClick={menuHandler} className="md:hidden z-10">
        {!menu ? (
          <HiMenuAlt4 size={30} className="cursor-pointer" />
        ) : (
          <AiOutlineClose size={30} className="md:hidden cursor-pointer text-black" />
        )}
      </div>
      {/* Mobile dropdown menu */}
      <div
        onClick={menuHandler}
        className={
          menu
            ? " bg-[#cfcfcf] md:hidden text-black absolute ease-in-out duration-100 left-0 right-0 top-0 w-full  flex flex-col px-4 py-4"
            : "fixed px-4 py-4 left-0 right-0 top-[-100%] ease-in-out duration-50"
        }
      >
        <ul>
          <h1>Voyage Africa</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Contact Us</li>
          <li className="border-b">About</li>
          <li className="border-b">View</li>
          <li className="border-b">Blog</li>
          <div className="flex flex-col ">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex left my-5 justify-between">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
