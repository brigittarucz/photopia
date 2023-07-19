import Image from "next/image";
import React from "react";
import Carousel from "./components/Carousel";

const Sessions = () => {
  return (
    <div className="md:-m-6">
      <section className="bg-stone-900  pl-5 pr-5 text-stone-50 pb-2 md:grid md:grid-cols-5 md:grid-rows-5 w-full md:gap-2">
        <Image
          className="m-auto pt-14 md:col-start-3 md:col-span-3 md:row-span-4 md:p-0"
          src="/assets/images/recorder.png"
          alt="Recording image"
          width="250"
          height="50"
        />
        <article className="mt-5 mb-5 md:col-start-1 md:col-span-2 md:row-span-5">
          <Image
            src="/assets/images/yourphotos-logo-white.svg"
            alt="Logo white"
            width="100"
            height="50"
            className="hidden md:block mb-8"
          />
          <h1 className="text-3xl font-semibold">Sessions</h1>
          <h2 className="text-red-700 text-xl font-semibold">
            <i>Synethesia</i>
          </h2>
          <p className="mt-2 mb-2">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia.
          </p>
        </article>
        <article className="md:col-span-3 md:row-span-1">
          <ul className="border-t-2 border-b-2 border-stone-50 flex justify-between pt-2 pb-2 mb-2 mt-5 md:m-0 md:mt-2">
            <li>Date</li>
            <li>Location</li>
            <li>Camera</li>
          </ul>
          <p className="text-center pb-3 pt-3 md:hidden">Scrollable →</p>
        </article>
      </section>
      <section className="ml-5 mr-5 md:grid md:grid-cols-5 gap-5">
        <Image
          src="/assets/images/cover.gif"
          alt="Logo white"
          width="150"
          height="150"
          className="hidden md:block  -mt-5 col-span-2 h-full w-full object-cover"
        />
        <div className="md:col-span-3 md:-mt-8">
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default Sessions;
