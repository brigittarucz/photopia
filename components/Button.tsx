import Link from "next/link";
import React from "react";

const Button = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <button className="bg-violet-800 text-violet-50 p-3 pl-10 pr-10 m-5 rounded-md shadow-lg">
        {title}
      </button>
    </Link>
  );
};

export default Button;
