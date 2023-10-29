"use client";

import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import ReduxProvider from "./redux-provider";
import { NextAuthProvider } from "./next-auth-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextAuthProvider>
        <ReduxProvider>
          {children}
          <Next13ProgressBar
            height="3px"
            color="#ff9900"
            options={{ showSpinner: false }}
            showOnShallow
          />
        </ReduxProvider>
      </NextAuthProvider>
    </>
  );
};

export default Providers;
