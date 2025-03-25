import React, { useState, useContext } from "react";
import logo from "../Image/logo.svg";
import person from "../Image/person1.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LuMoon, LuSun } from "react-icons/lu";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`px-[64px] max-[650px]:px-[28px] font-inter
  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] max-[650px]:gap-[40px] dark:bg-[#121212]`}
    >
      <div className="flex justify-between items-center py-4 border-b border-[#EAECF0] dark:border-[#333333]">
        <div className="flex gap-[40px] items-center">
          <img src={logo} alt="" />
          <div
            className={`max-[850px]:fixed max-[850px]:bg-[#ffff] max-[850px]:w-[350px] max-[650px]:w-[250px] duration-700 ease-in-out
                 max-[850px]:top-0 max-[850px]:h-[100dvh] max-[850px]:left-0 max-[850px]:z-10 max-[850px]:drop-shadow-xl max-[650px]:dark:bg-[#333333]
                ${
                  openMenu ? "translate-x-0" : "max-[850px]:translate-x-[-200%]"
                }`}
          >
            <div className="max-[650px]:px-5 items-center justify-between max-[850px]:flex hidden max-[850px]:py-4 max-[850px]:px-10">
              <img src={logo} alt="" />
              <RxCross2
                size={30}
                className=" dark:text-white text-[#344054]"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <ul
              className="flex items-center gap-[32px] max-[850px]:flex-col max-[850px]:items-start max-[850px]:gap-4
            max-[850px]:border-t max-[850px]:border-[#EAECF0] max-[850px]:py-6 max-[650px]:gap-3 dark:text-white"
            >
              <li
                className="leading-[24px] text-[#475467] font-semibold cursor-pointer max-[850px]:w-full max-[850px]:px-10 max-[850px]:py-3 
                max-[850px]:hover:bg-gray-100 max-[650px]:dark:hover:bg-black max-[850px]:rounded-lg max-[650px]:px-5 dark:text-white"
              >
                Home
              </li>
              <li
                className="leading-[24px] text-[#475467] max-[650px]:dark:hover:bg-black  font-semibold cursor-pointer max-[850px]:w-full max-[850px]:px-10 max-[850px]:py-3 
                max-[850px]:hover:bg-gray-100  max-[850px]:rounded-lg flex items-center gap-3 max-[650px]:px-5 dark:text-white"
              >
                <span>Products</span>
                <FaAngleDown
                  size={18}
                  className="dark:text-white text-[#475467]"
                />
              </li>
              <li
                className="leading-[24px] text-[#475467] max-[650px]:max-[650px]:dark:hover:bg-black  font-semibold cursor-pointer max-[850px]:w-full max-[850px]:px-10 max-[850px]:py-3 
                max-[850px]:hover:bg-gray-100 max-[850px]:rounded-lg flex items-center gap-3 max-[650px]:px-5 dark:text-white"
              >
                <span>Resources</span>
                <FaAngleDown
                  size={18}
                  className="dark:text-white text-[#475467]"
                />
              </li>
              <li
                className="leading-[24px] text-[#475467] max-[650px]:dark:hover:bg-black  font-semibold cursor-pointer max-[850px]:w-full max-[850px]:px-10 max-[850px]:py-3 
                max-[850px]:hover:bg-gray-100 max-[850px]:rounded-lg max-[650px]:px-5 dark:text-white"
              >
                Pricing
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-8 max-[650px]:gap-4">
          <div
            className="bg-[#efefef] p-2 rounded-lg cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <LuSun className="text-xl cursor-pointer max-[650px]:text-lg" />
            ) : (
              <LuMoon className="text-xl cursor-pointer max-[650px]:text-lg" />
            )}
          </div>
          <div>
            <img
              src={person}
              alt=""
              className="w-[40px] h-[40px] rounded-full drop-shadow-sm bg-[#D1CFCB] max-[850px]:hidden"
            />
            <IoMenu
              className="hidden max-[850px]:block text-3xl cursor-pointer dark:text-white text-[#344054]"
              onClick={() => setOpenMenu(true)}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-[100dvh] bg-black opacity-45 duration-100 ease-in-out
            ${openMenu ? "translate-x-0" : "translate-x-[-200%]"}`}
      ></div>
    </header>
  );
}

export default Header;
