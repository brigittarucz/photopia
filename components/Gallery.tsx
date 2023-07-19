import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="md:grid md:grid-cols-5 md:gap-2">
      <div className="md:col-span-3">
        <section className="overflow-x-scroll flex scrollbar-horizontal">
          <Image
            className="h-96 md:h-72 w-90 object-cover max-w-none mb-10 mr-5"
            src="/assets/images/placeholder-sessions.png"
            alt="Gallery presentation"
            width="200"
            height="100"
          />
          <Image
            className="h-96 md:h-80 w-90 object-cover max-w-none mb-10 mr-5"
            src="/assets/images/placeholder-sessions.png"
            alt="Gallery presentation"
            width="200"
            height="100"
          />
          <Image
            className="h-96 w-90 object-cover max-w-none mb-10"
            src="/assets/images/placeholder-sessions.png"
            alt="Gallery presentation"
            width="200"
            height="100"
          />
        </section>
        <article className="m-5 md:text-xl md:w-80 md:-mt-28">
          <p>
            <span className="font-semibold ">MUA:</span> Elizabeth V.
          </p>
          <p>
            <span className="font-semibold">HAIR:</span> Mary G.
          </p>
          <p>
            <span className="font-semibold">STYLIST:</span> Debbie L.
          </p>

          <p className="mt-5 mb-5 md:text-lg">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur.
          </p>
        </article>
      </div>

      <section className="m-5 md:m-0 md:col-span-2">
        <article className="grid grid-rows-2 grid-cols-2 gap-5 w-96 m-auto">
          <Image
            className="object-cover"
            src="/assets/images/placeholder-puzzle-1.png"
            alt="Gallery presentation"
            width="200"
            height="200"
          />
          <Image
            className="object-cover"
            src="/assets/images/placeholder-puzzle-2.png"
            alt="Gallery presentation"
            width="200"
            height="200"
          />
          <Image
            className="object-cover"
            src="/assets/images/placeholder-puzzle-3.png"
            alt="Gallery presentation"
            width="200"
            height="200"
          />
          <Image
            className="object-cover flex justify-self-center self-center"
            src="/assets/images/placeholder-puzzle-4.png"
            alt="Gallery presentation"
            width="160"
            height="160"
          />
        </article>
      </section>
    </div>
  );
};

export default Gallery;
