import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { blogData } from "../data/export";

function Blog() {
  return (
    <section
      className=" px-[64px] max-[650px]:px-[28px] font-inter
    min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] max-[650px]:gap-[40px]"
    >
      <section className=" flex flex-col gap-16 max-[650px]:gap-8  py-16  max-[650px]:py-[30px]  border-t border-[#EAECF0]">
        {/* blog header */}
        <div className=" flex justify-between items-start font-inter">
          <div className="flex flex-col gap-[20px] max-[650px]:gap-[14px]">
            <span className=" text-[#E63F3A] font-semibold text-[16px] leading-[24px]">
              Our blog
            </span>
            <h2 className=" text-[#101828] text-[36px] font-semibold leading-[44px] max-[650px]:text-[30px]">
              Lastest blog posts
            </h2>
            <p className=" text-[#475467] text-[18px] leading-[20px] font-light max-[650px]:text-[14px] max-[650px]:leading-normal">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button
            className=" flex-shrink-0 bg-[#E63F3A] text-[#ffff] font-inter text-[16px] py-2 px-4 rounded-md border border-[#E63F3A] max-[650px]:hidden
              hover:bg-[#ffffff] hover:border-[#344054] hover:text-[#344054]"
          >
            View all posts
          </button>
        </div>

        {/* posts */}
        <div
          className=" grid grid-cols-3 gap-[32px] max-[1050px]:gap-[26px] max-[950px]:grid-cols-2  max-[650px]:grid-cols-1
        max-[650px]:mt-3"
        >
          {blogData.map((data) => {
            return (
              <div key={data.id} className=" flex flex-col gap-2">
                <img src={data.image} alt="" />
                <span className="text-[#E63F3A] text-[14px] leading-[20px] font-semibold">
                  {data.position}
                </span>
                <div className=" flex justify-between items-center">
                  <h3
                    className=" text-[#101828] font-semibold text-[24px] leading-[32px] max-[1050px]:text-[20px] max-[950px]:text-[24px] 
                  max-[850px]:text-[20px]"
                  >
                    {data.title}
                  </h3>
                  <FiArrowUpRight color="#101828" className=" text-2xl" />
                </div>
                <p className=" text-[#475467] text-[16px] leading-[24px] tracking-wide py-2 max-[650px]:text-[14px] max-[650px]:py-0 max-[650px]:pb-2">
                  {data.des}
                </p>
                <div className=" flex items-center gap-[12px]">
                  <img
                    src={data.person}
                    alt=""
                    className=" w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <h6 className=" text-[#101828] text-[14px] leading-[20px] font-semibold">
                      {data.name}
                    </h6>
                    <span className=" text-[#475467] text-[14px] leading-[20px]">
                      {data.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className=" bg-[#E63F3A] text-[#ffff] font-inter font-semibold text-[16px] py-2 px-4 rounded-lg border border-[#E63F3A] max-[650px]:block hidden
            hover:bg-[#ffffff] hover:border-[#344054] hover:text-[#344054]"
        >
          View all posts
        </button>
      </section>
    </section>
  );
}

export default Blog;
