"use client";

import React, { useState } from "react";
import Image from "next/image";
import Nav from "./Nav/Nav";
import Link from "next/link";
import IconOver from "./Nav/components/IconOver";
import navItems from "./Nav/components/navItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-900 p-2 flex justify-between items-center shadow md:hidden">
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
      <div className="relative md:hidden">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="hidden md:flex h-32">
        <div className="w-2/6 ml-15 pr-10 border-r-gray-800 border-r-2 flex">
          <Link href="/" className="self-center">
            <Image
              src="/assets/images/yourphotos-logo-black.svg"
              width={230}
              height={50}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-4/6 border-b-gray-800 border-b-2">
          <div className="bg-stone-900 ml-5 h-5/6">
            <ul className="flex justify-between items-center h-full mr-10  ml-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative text-l lg:text-xl text-gray-200 text-center"
                >
                  <Link href={item.href}>{item.name}</Link>
                  {!item.available && <IconOver />}
                </li>
              ))}

              <div className="flex justify-end items-center ml-10">
                <Image
                  src="/assets/images/user.jpg"
                  width={35}
                  height={35}
                  alt="User"
                  className="rounded-full mr-5"
                />
                <p className="text-l lg:text-xl text-gray-200">Follow →</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
