"use client";

import React, { useState } from "react";
import Image from "next/image";
import Nav from "./Nav/Nav";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-stone-900 p-2 flex justify-between items-center shadow">
        <Link href="/">
          <Image
            src="/assets/images/yourphotos-logo-white.svg"
            width={200}
            height={50}
            alt="Logo"
          />
        </Link>
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
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
