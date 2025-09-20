"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function ErrorPage(): ReactNode {
  return (
    <div>
      <h1>Oops! Something Went Wrong...</h1>
      <Link href="/">Go to Home page</Link>
    </div>
  );
}
