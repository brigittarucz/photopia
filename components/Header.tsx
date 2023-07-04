"use client";

import React, { useState } from "react";
import Image from "next/image";
import Nav from "./Nav/Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-slate-950 p-2 flex justify-between items-center shadow">
        <Image
          src="/assets/images/yourphotos-logo-white.svg"
          width={200}
          height={50}
          alt="Logo"
        />
        <div className="cursor-pointer">
          <Image
            src={isOpen ? "/assets/icons/cancel.png" : "/assets/icons/menu.png"}
            width={20}
            height={20}
            alt="Logo"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div className="relative">
        <Nav isOpen={isOpen} />
      </div>
    </>
  );
};

export default Header;
