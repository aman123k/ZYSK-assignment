import React from "react";

function Trial() {
  return (
    <section className="bg-[#F9FAFB] flex flex-col justify-center items-center py-24 max-[650px]:py-12 max-[650px]:px-[28px]">
      <section className=" text-center flex flex-col gap-[32px]">
        <h1 className=" text-[#101828] text-[36px] font-inter font-semibold max-[650px]:text-[30px]">
          Start your free trial
        </h1>
        <p className=" text-[#475467] font-inter text-[20px] max-[650px]:text-[18px]">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className=" flex gap-4 m-auto max-[650px]:flex-col-reverse max-[650px]:w-full">
          <button
            className=" bg-[#FFFFFF] text-[#344054] border-[#D0D5DD] border text-[16px] font-semibold px-4 py-2 rounded-lg
           hover:bg-[#E63F3A] hover:border-[#E63F3A] hover:text-[#ffff]"
          >
            Learn more
          </button>
          <button
            className=" bg-[#E63F3A] text-[#ffffff] border-[#E63F3A] border text-[16px] font-semibold px-4 py-2 rounded-lg
           hover:bg-[#ffffff] hover:border-[#344054] hover:text-[#344054]"
          >
            Get started
          </button>
        </div>
      </section>
    </section>
  );
}

export default Trial;
