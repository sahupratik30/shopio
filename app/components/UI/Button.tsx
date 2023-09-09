"use client";

import { ButtonType } from "@/types";
import { signOut } from "next-auth/react";

interface Button {
  text: string;
  variant: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  action?: string;
}

const Button = ({ text, variant, onClick, className, action }: Button) => {
  const btnClasses =
    variant === ButtonType.primary ? "bg-primary text-white" : "text-primary";

  const _handleLogout = () => {
    signOut();
  };

  return (
    <button
      type="button"
      onClick={action === "logout" ? _handleLogout : onClick}
      className={`btn ${btnClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
