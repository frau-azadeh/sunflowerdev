"use client";

import type { ReactNode } from "react";

import Link from "next/link";

export default function ErrorPage(): ReactNode {
  return (
    <div>
      <h1>Oops! Something Went Wrong...</h1>
      <Link href="/">Go to Home page</Link>
    </div>
  );
}
