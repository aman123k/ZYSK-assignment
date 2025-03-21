import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { FiPlayCircle } from "react-icons/fi";
import chatImage from "../Image/chatImage.png";
import { brandImages } from "../data/export";

function Hero() {
  return (
    <section
      className="px-[64px] max-[650px]:px-[28px] font-inter
  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] max-[650px]:gap-[40px] dark:bg-[#121212]"
    >
      <section className=" flex flex-col gap-28 overflow-hidden max-[950px]:gap-12">
        {/* upper */}
        <div className=" flex items-center flex-col gap-[16px] text-center pt-24 max-[850px]:pt-16 max-[650px]:pt-14">
          <div
            className=" flex items-center gap-2 text-[#E63F3A] text-[14px] font-[500] leading-[14px]
           px-1 py-1 rounded-full bg-[#FEF9F9] border border-[#E63F3A4D] max-[650px]:text-[12px]"
          >
            <span className="border px-2.5 py-1.5 rounded-full border-[#E63F3A4D] bg-[#FFFFFF] max-[650px]:px-2">
              New feature
            </span>
            Check out the team dashboard
            <TiArrowRight
              color="#E63F3A99"
              className="mr-3 text-[30px] max-[650px]:text-[24px] max-[650px]:mr-0"
            />
          </div>
          <h1
            className=" text-[#101828] text-[50px] font-semibold leading-[72px] tracking-[-1px] max-[850px]:text-[36px]
           max-[850px]:leading-normal max-[850px]:tracking-normal max-[650px]:text-[34px] dark:text-white"
          >
            Beautiful analytics to grow smarter
          </h1>
          <p className=" text-[#475467] text-[20px] text-center max-w-[750px] py-[10px] max-[650px]:py-0 max-[650px]:text-[18px]  dark:text-white">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className=" flex items-center gap-[20px] mt-4 max-[650px]:flex-col-reverse max-[650px]:w-full">
            <button
              className="max-[650px]:w-full justify-center border border-[#D0D5DD] flex  dark:text-white items-center gap-3 py-2 px-3.5 rounded-full text-[#344054] text-[16px] font-semibold
             hover:border-[#E63F3A] hover:text-[#fff] hover:bg-[#E63F3A]"
            >
              <FiPlayCircle size={20} />
              Demo
            </button>
            <button
              className="max-[650px]:w-full bg-[#E63F3A] border-[#E63F3A] py-2 px-3.5 rounded-full border text-[16px] font-semibold text-[#ffff]
            hover:border-[#D0D5DD] hover:text-[#344054] hover:bg-[#fff]"
            >
              Sign up
            </button>
          </div>
        </div>
        <div
          className="border-4 border-black rounded-t-[50px] overflow-hidden max-h-[500px] max-[1050px]:max-h-[400px]
        max-[850px]:max-h-max max-[850px]:rounded-3xl dark:border-[#333333]"
        >
          <img src={chatImage} alt="" className=" object-cover" />
        </div>
      </section>

      <section className=" flex items-center flex-col gap-[32px] py-20 font-inter max-[1050px]:py-14 max-[650px]:py-10 ">
        <h4 className=" text-[#475467] font-[500] text-center leading-[24px] dark:text-white">
          Join 4,000+ companies already growing
        </h4>
        <div
          className=" grid grid-cols-6 items-center gap-14 max-[1050px]:gap-10 max-[850px]:grid-cols-3 max-[650px]:grid-cols-2
        max-[650px]:gap-x-10 max-[650px]:gap-y-4 max-[650px]:items-start dark:bg-[#333333] dark:px-4 dark:py-2.5 dark:rounded-2xl "
        >
          {brandImages.map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              className=" object-contain  max-[850px]:h-[48px] "
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Hero;
