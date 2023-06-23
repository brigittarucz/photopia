import Link from "next/link";
import React from "react";

const User = ({ name, id }: { name: string; id: number }) => {
  return (
    <div>
      <Link href={`/users/${encodeURIComponent(id)}`}>User: {name}</Link>
    </div>
  );
};

export default User;
