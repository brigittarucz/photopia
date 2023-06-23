"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

interface Album {
  id: number;
  title: string;
  url: string;
}

const User = () => {
  const params = useParams();

  const [user, setUser] = useState<User | null>(null);
  const [album, setAlbum] = useState<Album[] | null>(null);
  useEffect(() => {
    if (!params) {
      return;
    }

    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );

      const data = await res.json();

      setUser(data);
      console.log(data);
    };

    const fetchAlbum = async () => {
      const res = await fetch(
        ` https://jsonplaceholder.typicode.com/albums/1/photos`
      );

      const data = await res.json();
      setAlbum(data);
    };

    fetchUser();
    fetchAlbum();
  }, []);

  return (
    <>
      <div>{user && user.name}</div>
      <div>
        {album &&
          album.map((item) => (
            <Image
              key={item.id}
              src={item.url}
              alt={item.title}
              width={50}
              height={50}
            />
          ))}
      </div>
    </>
  );
};

export default User;
