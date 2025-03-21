import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { faqs } from "../data/export";
import group from "../Image/grop.svg";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className=" px-[64px] max-[650px]:px-[28px] font-inter dark:bg-[#121212]
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] max-[650px]:gap-[40px]"
    >
      <section className=" py-16 max-[650px]:py-[30px] flex flex-col gap-14 max-[650px]:gap-6 ">
        <div className=" flex flex-col items-center gap-[20px] max-[650px]:gap-[16px]">
          <h1
            className=" font-semibold text-[36px] leading-[44px] tracking-[-2px] font-inter text-[#101828] dark:text-white
           max-[650px]:text-[28px] max-[650px]:leading-normal max-[650px]:tracking-normal"
          >
            Frequently asked questions
          </h1>
          <p className=" text-[#475467] text-[18px] leading-[20px] font-inter max-[650px]:text-[14px] dark:text-white">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className=" max-w-[768px] m-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <button
                className={`w-full flex items-center justify-between py-4 text-left focus:outline-none gap-6 
                  dark:text-white
                  ${index > 0 ? "border-t border-[#eaecf0]" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="font-medium text-[16px] max-[650px]:text-[14px]">
                  {faq.question}
                </h2>
                <span
                  className={`transform transition-transform duration-200 
                    ${openIndex === index ? "rotate-180" : ""}`}
                >
                  {openIndex === index ? (
                    <CiCircleMinus className="text-2xl text-[#98A2B3] font-semibold dark:text-white" />
                  ) : (
                    <CiCirclePlus className="text-2xl text-[#98A2B3] font-semibold dark:text-white" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-[14px] dark:text-white">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center dark:bg-[#333333] max-[650px]:p-6">
          <div className="flex justify-center mb-4">
            <img src={group} alt="group" className=" max-[650px]:w-[100px]" />
          </div>
          <h2 className="text-xl font-semibold mb-2 dark:text-white">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-[#E63F3A]  text-white px-6 py-2 rounded-md  hover:bg-[#ffffff] border-[#E63F3A] border hover:border-[#344054] hover:text-[#344054]">
            Get in touch
          </button>
        </div>
      </section>
    </section>
  );
}

export default Faq;
