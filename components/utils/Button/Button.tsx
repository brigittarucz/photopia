"use client";
import useWindowSize from "@hooks/useWindowSize";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import Modal from "../Modal/Modal";
import Sessions from "@components/Sessions/Sessions";

const Button = ({
  href,
  title,
  setModal,
}: {
  href: string;
  title: string;
  setModal?: (val: ReactNode) => void;
}) => {
  const windowSize = useWindowSize();
  const router = useRouter();

  const triggerChange = () => {
    if (windowSize.width < 768) {
      router.push(href);
    } else {
      if (setModal) {
        setModal(
          <Modal setModal={setModal}>
            <Sessions />
          </Modal>
        );
      }
    }
  };

  return (
    <button
      className="bg-violet-800 text-violet-50 p-3 pl-10 pr-10 m-5 rounded-md shadow-lg"
      onClick={() => triggerChange()}
    >
      {title}
    </button>
  );
};

export default Button;
