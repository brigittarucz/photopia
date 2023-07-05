import React from "react";
import IconOver from "./Nav/components/IconOver";

const SecondaryNav = () => {
  return (
    <ul className="border-t border-t-slate-800 border-b border-b-slate-800 pt-2 pb-2 flex justify-center">
      <li className="relative text-xl inline-block w-36">
        Experience <IconOver />
      </li>
      <li className="relative text-xl inline-block w-24">
        Setup <IconOver />
      </li>
    </ul>
  );
};

export default SecondaryNav;
