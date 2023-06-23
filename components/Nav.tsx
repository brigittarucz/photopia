"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    const newFollow = !follow;

    setFollow((prev) => !prev);
    console.log("Follow state:", newFollow);
  };

  return (
    <ul>
      <li>
        <Link href="/">Darkroom</Link>
      </li>
      <li>
        <Link href="/users">Users Gallery</Link>
      </li>
      <li>
        <Link href="/">Innovation Lab</Link>
      </li>
      <li onClick={handleFollow}>
        <Image
          src="/assets/images/user.jpg"
          width={50}
          height={50}
          alt="User"
        />
        <Link href="/">{follow ? "Unfollow →" : "Follow →"}</Link>
      </li>
    </ul>
  );
};

export default Nav;
