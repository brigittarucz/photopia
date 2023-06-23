"use client";
import User from "@components/User";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);

      const data = await res.json();

      setUsers(data);
      console.log(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-4xl">Users:</h2>
      {users &&
        users.map((user) => (
          <User key={user.id} name={user.name} id={user.id} />
        ))}
    </div>
  );
};

export default Users;
