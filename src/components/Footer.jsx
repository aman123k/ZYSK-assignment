import React from "react";
import logo from "../Image/logo.svg";

function Footer() {
  return (
    <section
      className=" flex flex-col gap-[64px] px-[64px] pb-[48px] pt-[64px] min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]
    max-[650px]:px-[28px] max-[650px]:py-[30px] max-[650px]:gap-[40px]"
    >
      <section className=" grid grid-cols-6 max-[900px]:grid-cols-3 max-[900px]:gap-y-8 max-[650px]:grid-cols-2 max-[650px]:gap-x-7">
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Product
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Overview
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Features
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter flex items-center gap-2 leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            <span>Solutions</span>
            <span className="border-[#ABEFC6] border bg-[#ECFDF3] text-[14px] font-normal px-3.5 py-0.5 rounded-3xl">
              New
            </span>
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Tutorials
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Pricing
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Releases
          </li>
        </ul>
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Company
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            About us
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Careers
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Press
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            News
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Media kit
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Contact
          </li>
        </ul>
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Resources
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Blog
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Newsletter
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Events
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Help centre
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Tutorials
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Support
          </li>
        </ul>
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Use cases
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Startups
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Enterprise
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Government
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            SaaS centre
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Marketplaces
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Ecommerce
          </li>
        </ul>
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Social
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Twitter
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            LinkedIn
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Facebook
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            GitHub
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            AngelList
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Dribbble
          </li>
        </ul>
        <ul className=" flex flex-col gap-[16px]">
          <li className="text-[#667085] font-inter text-[14px] font-semibold">
            Legal
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Terms
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Privacy
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Cookies
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Licenses
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Settings
          </li>
          <li className=" text-[16px] text-[#475467] font-semibold font-inter leading-[24px] cursor-pointer hover:translate-x-3 ease-in-out duration-500">
            Contact
          </li>
        </ul>
      </section>
      <section
        className=" border-t border-[#EAECF0] flex items-center justify-between max-[650px]:flex-col max-[650px]:justify-start max-[650px]:items-start
        max-[650px]:gap-5 max-[650px]:py-6
      "
      >
        <img src={logo} alt="logo" />
        <div className="text-[#667085] font-inter text-[14px] py-8  select-none font-light leading-[24px] max-[650px]:py-0">
          © 2077 zysktechnologies. All rights reserved.
        </div>
      </section>
    </section>
  );
}

export default Footer;
