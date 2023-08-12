import Link from "next/link";
import React from "react";

export default function BackToList() {
  return (
    <Link href="/articles" className=" hover:underline">
      &larr; Back To List
    </Link>
  );
}
