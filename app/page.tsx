import Button from "@components/utils/Button/Button";
import Gallery from "@components/Gallery";
import SecondaryNav from "@components/Nav/SecondaryNav";
import SocialMedia from "@components/SocialMedia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="relative h-96">
        <div className="absolute z-10">
          <h1 className="text-xl border bg-white border-gray-600 inline-block p-2 pr-5 mt-4 pl-5 md:border-0 md:text-8xl md:ml-20 md:bg-transparent lg:ml-44">
            Lorem Ipsum <br className="hidden md:block" /> Photography
          </h1>
        </div>
        <div className="absolute z-20 bg-white mt-52 right-0 md:bg-transparent md:left-5 md:bottom-0">
          <SocialMedia />
        </div>
        <div className="md:absolute md:right-0 md:h-96 md:w-4/6 md:border-l-gray-800 md:border-l-2">
          <Image
            className="clipEllipse max-w-none bg-center w-full h-72 object-cover md:h-96 md:w-3/5 absolute right-0"
            src="/assets/images/cover.gif"
            width="800"
            height="600"
            alt="Moving Train gif"
          />
        </div>
      </div>
      <section className="ml-5 mr-5 md:mb-8">
        <div>
          <SecondaryNav />
          <p className="text-center m-5 md:hidden">Scrollable →</p>
        </div>
        <article>
          <p className="md:hidden">
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
        <article className="mt-5 md:grid md:grid-cols-3 md:gap-8">
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/assets/images/yourphotos-logo-black.svg"
                width={100}
                height={50}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="md:border-l-2 md:border-l-gray-800 md:pl-4">
            <h1 className="text-4xl text-center md:text-left">
              <b>Sessions</b>
            </h1>
            <p className="mt-5 mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo. suscipit laboriosam, nisi ut aliquid ex ea
              commodi...
            </p>
          </div>
          <div className="hidden md:block md:border-l-2 md:border-l-gray-800 md:pl-4">
            <p className="mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              minus! Quibusdam minus animi quae fuga id sit nesciunt ipsum
              perspiciatis voluptates atque? Quisquam culpa tenetur rerum, esse
              voluptates fugiat dicta expedita accusamus labore debitis ut
              doloribus ducimus delectus suscipit error iusto ex autem eaque.
              Soluta.
            </p>
          </div>
          <p className="text-right m-5 md:hidden">Show more →</p>
        </article>
      </section>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
