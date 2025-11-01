"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbMenu } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Residences", href: "#residences" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      ".navbar",
      { backgroundColor: "transparent", color: "white", borderColor: "white" },
      {
        backgroundColor: "white",
        opacity: "60%",
        color: "#8A6C60",
        borderColor: "#8A6C60",
        duration: 1,
        ease: "power1.inOut",
      },
    );

    ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        if (self.direction === 1) {
          // scrolling down
          gsap.to(".navbar", { y: "-100%", duration: 0.4, ease: "power2.out" });
        } else {
          // scrolling up
          gsap.to(".navbar", { y: "0%", duration: 0.4, ease: "power2.out" });
        }
      },
    });
  });

  return (
    <header>
      <div className="navbar fixed top-0 left-0 z-50 w-full px-3 py-[17px] text-white md:px-[30px] md:py-5">
        <div className="flex items-center justify-between">
          <button
            className="flex cursor-pointer items-center gap-[15px]"
            onClick={toggleDrawer}
            aria-label="Menu"
          >
            <TbMenu size={24} />
            <span className="uppercase">Menu</span>
          </button>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <h1 className="font-display text-3xl font-bold uppercase">
              LiPlus
            </h1>
          </div>

          <button className="btn hidden items-center gap-x-[70px] rounded-[3px] border border-current px-3.5 py-[9px] uppercase md:flex">
            <span className="text-[16px] leading-[18px]">Inquire</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "nav-drawer-blur fixed inset-0 z-40 bg-black/40 opacity-0 transition-all duration-500",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none",
        )}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      <div
        className={clsx(
          "nav-drawer fixed top-0 left-0 z-50 h-full w-72 bg-[#8A6C60] p-6 transition-transform duration-500",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
      >
        <div className="mb-6 flex justify-end">
          <button
            className="cursor-pointer p-2 text-white transition-colors duration-300 hover:bg-white/10"
            onClick={toggleDrawer}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <HiXMark size={24} />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Main Navigation">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="block border-b border-white/10 py-2 text-xl font-semibold tracking-wide text-white uppercase hover:text-gray-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
