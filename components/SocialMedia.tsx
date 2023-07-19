import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="border border-gray-600 pt-1 pr-1.5 pl-1 inline-block md:border-0 md:block">
      <div className="border border-gray-600 w-fit p-2 m-1 inline-block md:bg-white md:hover:bg-slate-50 md:hover:cursor-pointer">
        <Image
          src="/assets/icons/linkedin.png"
          width="30"
          height="30"
          alt="LinkedIn"
        />
      </div>
      <div className="border border-gray-600 w-fit p-2 m-1 inline-block md:block md:bg-white md:hover:bg-slate-50 md:hover:cursor-pointer">
        <Image
          src="/assets/icons/behance.png"
          width="30"
          height="30"
          alt="Behance"
        />
      </div>
      <div className="border border-gray-600 w-fit p-2 m-1 inline-block md:bg-white md:hover:bg-slate-50 md:hover:cursor-pointer">
        <Image
          src="/assets/icons/dribbble.png"
          width="30"
          height="30"
          alt="Dribbble"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
