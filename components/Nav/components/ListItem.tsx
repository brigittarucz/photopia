import Link from "next/link";
import React from "react";
import IconOver from "./IconOver";

const ListItem = ({
  href,
  name,
  available,
}: {
  href: string;
  name: string;
  available: boolean;
}) => {
  return (
    <li className="border p-3 border-slate-700 relative text-center">
      <Link href={href}>{name}</Link>
      {!available && <IconOver />}
    </li>
  );
};

export default ListItem;
