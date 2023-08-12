// main menu shown in large screen
"use client";
import * as React from "react";
import Link from "next/link";
import { menuItems } from "../../data";

const countries: { name: string; url: string }[] = [
  {
    name: "thailand",
    url: "/countries/thailand",
  },
  {
    name: "vietnam",
    url: "/countries/vietnam",
  },
];

const Menu = () => {
  return (
    <nav className="flex items-center justify-center gap-4" aria-label="main">
      {menuItems.map((item) => (
        <Link href={item.url} key={item.name} className="">
          <span className="capitalize font-medium">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
