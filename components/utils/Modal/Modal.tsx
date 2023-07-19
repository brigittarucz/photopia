import React, { ReactNode } from "react";

const Modal = ({
  children,
  setModal,
}: {
  children: ReactNode;
  setModal: (val: null | ReactNode) => void;
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close -mt-7 borderClose"
          onClick={() => setModal(null)}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
