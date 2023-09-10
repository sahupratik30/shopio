"use client";

import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { Provider } from "react-redux";
import store from "@/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <Next13ProgressBar
          height="3px"
          color="#ff9900"
          options={{ showSpinner: false }}
          showOnShallow
        />
      </Provider>
    </>
  );
};

export default Providers;
