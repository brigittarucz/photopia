"use client";
import { useNavigationEvent } from "@hooks/useNavigationEvent";
import ListItem from "./components/ListItem";
import { useState } from "react";

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => {};
}) => {
  useNavigationEvent(() => {
    setIsOpen(false);
  });

  const navItems = [
    { name: "Darkroom", href: "/", available: false },
    { name: "Innovation Lab", href: "/innovation", available: false },
    { name: "Sessions", href: "/sessions", available: true },
    { name: "Users Gallery", href: "/", available: false },
  ];

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

  return (
    <ul
      className={
        "text-lg z-10 text-slate-100 pt-2 shadow-lg absolute bg-slate-950 w-full " +
        `${!isOpen ? "hidden" : "block"}`
      }
    >
      {navItems.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          href={item.href}
          available={item.available}
        />
      ))}

      <li
        className="border p-3 border-slate-700 text-center"
        onClick={handleFollow}
      >
        <p className="cursor-pointer">{follow ? "Unfollow →" : "Follow →"}</p>
      </li>
    </ul>
  );
};

export default Nav;
