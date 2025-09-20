"use client";

import type { ReactNode } from "react";

export default function ErrorPage(): ReactNode {
  return (
    <div>
      <h1>Oops! Something Went Wrong...</h1>
      <a href="/">Go to Home Page</a>
    </div>
  );
}