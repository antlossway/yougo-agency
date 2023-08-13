"use client";

import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import { menuItems } from "../../data";

type navBarProps = {
  textStyle?: string;
};
const Navbar = ({ textStyle }: navBarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    // <header className="container sticky top-0 z-10 h-16 dark:bg-black">
    <header className={`container z-10 h-20 ${textStyle}`}>
      <section className="wrapper h-full flex justify-between items-center">
        {/* logo */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] lg:w-[200px] h-auto relative ">
            <Link href="/">
              <img src="/logo-yougo.png" alt="logo" />
            </Link>
          </div>
          <span className="text-xs font-light ">
            We help you move to Southeast Asia
          </span>
        </div>

        {/* hamburger menu icon */}
        <div className="lg:hidden cursor-pointer">
          <button id="hamburger-btn" onClick={toggleMobileMenu}>
            <span className="text-3xl dark:text-white">&#9776;</span>
          </button>
        </div>

        {/* main menu: only dispaly in large screen */}
        <div className="hidden lg:block">
          <Menu />
        </div>
      </section>

      {/* mobile menu, click close button or any empty area of the mobile menu will close the menu */}
      <section
        id="mobile-menu"
        className={
          showMobileMenu
            ? "absolute z-10 top-0 right-0 w-full bg-black/50 backdrop-blur-lg backdrop-brightness-150 text-white text-3xl flex flex-col justify-center"
            : "hidden"
        }
        onClick={toggleMobileMenu}
      >
        {/* close button */}
        <button className="text-3xl px-6 self-end">&times;</button>

        <nav
          className="min-h-screen flex flex-col items-center py-8 gap-10"
          aria-label="mobile"
        >
          {menuItems.map((item) => (
            <Link key={item.name} href={item.url} className="">
              <span className="capitalize font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
