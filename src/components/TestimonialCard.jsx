import React from "react";
import companyLogo from "../Image/companyLogo.svg";
import person from "../Image/person4.png";

function TestimonialCard() {
  return (
    <div className="bg-[#F9FAFB] text-center py-16 px-4 max-[650px]:py-8">
      <img src={companyLogo} alt="Logo" className="h-8 mx-auto mb-8" />
      <h2 className="text-3xl font-semibold mb-6 text-[#101828] max-w-2xl mx-auto max-[650px]:text-[30px]">
        We've been using Untitled to kick start every new project and can't
        imagine working without it.
      </h2>
      <div className="flex items-center justify-center">
        <div>
          <img
            src={person}
            alt="Avatar"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <p className="font-medium text-[#101828]">Candice Wu</p>
          <p className="text-[#475467]">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
