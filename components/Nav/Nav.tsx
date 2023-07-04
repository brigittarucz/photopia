"use client";

import Link from "next/link";
import ListItem from "./components/ListItem";
import { useState } from "react";

const Nav = ({ isOpen }: { isOpen: boolean }) => {
  const navItems = [
    { name: "Darkroom", href: "/" },
    { name: "Innovation Lab", href: "/innovation" },
    { name: "Users Gallery", href: "/users" },
  ];

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    const newFollow = !follow;

    setFollow((prev) => !prev);
    console.log("Follow state:", newFollow);
  };

  return (
    <ul
      className={
        "text-slate-100 pt-2 shadow-lg absolute bg-slate-950 w-full " +
        `${!isOpen ? "hidden" : "block"}`
      }
    >
      {navItems.map((item, index) => (
        <ListItem key={index} name={item.name} href={item.href} />
      ))}

      <li className="border p-3 border-slate-700" onClick={handleFollow}>
        <p className="cursor-pointer">{follow ? "Unfollow →" : "Follow →"}</p>
      </li>
    </ul>
  );
};

export default Nav;
