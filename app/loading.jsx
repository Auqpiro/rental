"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      cssOverride={{
        display: "block",
        margin: "100px auto",
      }}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
