import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#5aacef62] py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center items-center justify-between">
          <h1 className="text-[#fff]">Travel Africa</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-3">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex ">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About</li>
            <li>View</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
