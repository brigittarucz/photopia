import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-lime-950 md:-ml-10 md:-mr-10 md:-mb-10">
      <div>
        <Image
          className="m-auto pt-5 pb-2"
          src="/assets/images/yourphotos-logo-white.svg"
          alt="Logo Image"
          width="150"
          height="100"
        />
      </div>
      <article className="flex justify-center">
        <div className="m-2 inline-block">
          <Image
            src="/assets/icons/facebook-yellow.png"
            alt="Facebook"
            width="40"
            height="40"
          />
        </div>
        <div className="m-2 inline-block">
          <Image
            src="/assets/icons/instagram-yellow.png"
            alt="Facebook"
            width="40"
            height="40"
          />
        </div>
        <div className="m-2 inline-block">
          <Image
            src="/assets/icons/linkedin-yellow.png"
            alt="Facebook"
            width="42"
            height="42"
          />
        </div>
      </article>
      <article className="text-yellow-100">
        <p className="text-center">Øster Allé 56, 6 sal</p>
        <p className="text-center">København Ø</p>
        <p className="text-center">2100, +45 50218127 </p>
      </article>
      <article className="text-yellow-100 pt-5 pb-5">
        <ul>
          <li className="border-t-2  border-lime-900">
            <h5 className="text-xl uppercase font-medium mt-2 mb-2 text-center">
              Web builders
            </h5>
          </li>
          <li className="border-t-2 border-lime-900">
            <h5 className="text-xl uppercase font-medium mt-2 mb-2 text-center">
              Our history
            </h5>
          </li>
          <li className="border-t-2 border-lime-900">
            <h5 className="text-xl uppercase font-medium mt-2 mb-2 text-center">
              Contact
            </h5>
          </li>
          <li className="border-t-2 border-b-2 border-lime-900">
            <h5 className="text-xl uppercase font-medium mt-2 mb-2 text-center">
              Careers
            </h5>
          </li>
        </ul>
      </article>
      <p className="text-yellow-100 text-lg font-medium pb-2 text-center">
        2023 @YourPhotos.com
      </p>
    </section>
  );
};

export default Footer;
