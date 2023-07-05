import Button from "@components/Button";
import Gallery from "@components/Gallery";
import SecondaryNav from "@components/SecondaryNav";
import SocialMedia from "@components/SocialMedia";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="absolute">
        <h1 className="text-xl border bg-white border-gray-600 inline-block p-2 pr-5 mt-4 pl-5">
          Lorem Ipsum Photography
        </h1>
      </div>
      <div className="absolute z-0 bg-white mt-52 right-0">
        <SocialMedia />
      </div>
      <div>
        <Image
          className="max-w-none bg-center w-full h-72 object-contain"
          src="/assets/images/cover.gif"
          width="800"
          height="600"
          alt="Moving Train gif"
        />
      </div>
      <section className="ml-5 mr-5">
        <div>
          <SecondaryNav />
          <p className="text-center m-5">Scrollable →</p>
        </div>
        <article>
          <p>
            <i>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </i>
          </p>
          <div className="flex justify-center">
            <Button title="Start tour" href="/sessions" />
          </div>
        </article>
        <article className="mt-5">
          <h1 className="text-4xl text-center">
            <b>Sessions</b>
          </h1>
          <p className="mt-5 mb-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo. suscipit laboriosam, nisi ut aliquid ex ea commodi...
          </p>
          <p className="text-right m-5">Show more →</p>
        </article>
      </section>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
