import Link from "next/link";
import React from "react";

const ListItem = ({ href, name }: { href: string; name: string }) => {
  return (
    <li className="border p-3 border-slate-700">
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default ListItem;
