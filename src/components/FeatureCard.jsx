import React from "react";
import { features } from "../data/export";

function FeatureCard() {
  return (
    <section
      className=" px-[64px] max-[650px]:px-[28px] font-inter
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] max-[650px]:gap-[40px]"
    >
      <section className=" py-16 max-[650px]:py-[30px] flex flex-col gap-10 text-center  border-t border-[#EAECF0]">
        <div className=" flex items-center flex-col gap-[12px]">
          <span className=" text-[#E63F3A] text-[16px] leading-[24px] font-semibold">
            Features
          </span>
          <h1 className="text-[32px] font-semibold text-[#101828] max-[750px]:text-[28px]">
            Analytics that feels like it’s from the future
          </h1>
          <p className=" text-[#475467] text-[19px] max-w-3xl font-normal text-center max-[650px]:text-[17px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 max-[1050px]:grid-cols-2 max-[1050px]:gap-8 max-[650px]:grid-cols-1">
          {features.map((feature, index) => (
            <div
              className="text-center flex flex-col justify-center items-center gap-7"
              key={index}
            >
              <div
                className="w-12 h-12 bg-[#FFFFFF] border border-[#EAECF0] text-[#344054] rounded-xl flex items-center justify-center
              text-[20px]"
              >
                {feature.icon}
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-[#101828]">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-inter font-normal leading-relaxed text-[#475467]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default FeatureCard;
