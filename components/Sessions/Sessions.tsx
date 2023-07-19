import Image from "next/image";
import React from "react";
import Carousel from "./components/Carousel";

const Sessions = () => {
  return (
    <div>
      <section className="bg-stone-900  pl-5 pr-5 text-stone-50">
        <Image
          className="m-auto pt-14"
          src="/assets/images/recorder.png"
          alt="Recording image"
          width="250"
          height="50"
        />
        <article className="mt-5 mb-5">
          <h1 className="text-3xl font-semibold">Sessions</h1>
          <h2 className="text-red-700 text-xl font-semibold">
            <i>Synethesia</i>
          </h2>
          <p className="mt-2 mb-2">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia.
          </p>
          <ul className="border-t-2 border-b-2 border-stone-50 flex justify-between pt-2 pb-2 mb-2 mt-5">
            <li>Date</li>
            <li>Location</li>
            <li>Camera</li>
          </ul>
          <p className="text-center pb-3 pt-3">Scrollable →</p>
        </article>
      </section>
      <section className="ml-5 mr-5">
        <Carousel />
      </section>
    </div>
  );
};

export default Sessions;
