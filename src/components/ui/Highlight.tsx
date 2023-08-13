import React from "react";

type highlightProps = {
  title: string;
  subtitle: string;
  position?: string; //tailwind style
};
const Highlight = ({ title, subtitle, position }: highlightProps) => {
  if (!position) {
    position = "top-[100px] left-0 right-0";
  }
  return (
    <div
      className={`absolute  mx-auto p-8 ${position}
      w-[300px] h-[300px] text-white
    border-8 border-white/80
    flex flex-col gap-4 justify-center
    after:content-[''] after:absolute after:-z-10 after:inset-0 after:bg-hero-overlay/70 after:mix-blend-multiply

    `}
    >
      <span className="text-3xl font-bold">{title}</span>
      <span className="text-2xl font-semibold">{subtitle}</span>
    </div>
  );
};

export default Highlight;
