"use client";

import { ButtonType } from "@/types";
import { signOut } from "next-auth/react";

interface Button {
  text: string;
  variant: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  action?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  variant,
  onClick,
  className,
  action,
  disabled,
}: Button) => {
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
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
