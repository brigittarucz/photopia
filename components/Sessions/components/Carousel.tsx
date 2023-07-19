/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@components/utils/Button/Button";
import React from "react";
import ReactCarousel from "react-carousel-lwui";

const Carousel = () => {
  return (
    <article className="mb-5">
      <ReactCarousel
        images={[
          <img
            src="/assets/images/placeholder-puzzle-3.png"
            alt="placeholder"
            key=""
          />,
          <img
            src="/assets/images/placeholder-puzzle-4.png"
            alt="placeholder"
            key=""
          />,
          <img src="/assets/images/cover.gif" alt="placeholder" key="" />,
        ]}
        header={<Button title="Buy at 125dkk" href="/" />}
      />
    </article>
  );
};

export default Carousel;
