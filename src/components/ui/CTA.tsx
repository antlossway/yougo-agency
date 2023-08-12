import Link from "next/link";
import React from "react";

type ctaProps = {
  text: string;
  textStyle: string;
  url: string;
};

const CTA = ({ text, textStyle, url }: ctaProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-md bg-primary hover:bg-primary/80 transition-all ${textStyle}`}
    >
      <Link href={url}>{text}</Link>
    </button>
  );
};

export default CTA;
