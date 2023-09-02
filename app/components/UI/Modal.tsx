"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return createPortal(
    <>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal">
        <FontAwesomeIcon
          icon={faClose}
          className="absolute w-4 text-red-400 cursor-pointer right-3 top-3"
          onClick={onClose}
        />
        <div className="modal__title">{title}</div>
        <div className="modal__body">{children}</div>
      </div>
    </>,
    document.getElementById("modal__root") as Element | DocumentFragment
  );
};

export default Modal;
