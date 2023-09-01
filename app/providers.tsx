"use client";

import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="3px"
        color="#ff9900"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
