import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="relative pb-6">
      <p className="text-[0.9rem] text-center text-gray-300/30">
        © 2025 All Rights Reserved
      </p>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="p-2 z-30 absolute bottom-6  right-6 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default Footer;
