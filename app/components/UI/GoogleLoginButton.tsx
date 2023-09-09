"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleLoginButton = () => {
  const _handleLogin = () => {
    signIn("google");
  };

  return (
    <button
      className="flex items-center justify-center gap-2 px-3 py-2 mx-auto my-6 bg-white border border-gray-300 rounded-md w-60"
      onClick={_handleLogin}
    >
      <Image
        src="/images/google-icon.svg"
        alt="google"
        width={24}
        height={24}
      />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
