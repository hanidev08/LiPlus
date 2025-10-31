"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbMenu } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NavBar = () => {
  useGSAP(() => {
    // ✅ تغيير اللون عند السكروول
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
        color: "#8A6C60",
        borderColor: "#8A6C60",
        duration: 1,
        ease: "power1.inOut",
      },
    );

    // ✅ إخفاء الـNavbar عند النزول وإظهاره عند الصعود
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
      <div className="navbar fixed top-0 left-0 z-50 w-full px-3 pt-[17px] text-white md:px-[30px] md:py-[20px]">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-[15px]">
            <TbMenu />
            <span className="uppercase">Menu</span>
          </button>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <h1 className=" uppercase font-display text-3xl font-bold">LiPlus</h1>
            {/* <Image
              src="/LIPLUSbig.svg"
              alt="LIPLUS"
              width={180}
              height={30}
              className="w-20 md:w-42"
            /> */}
          </div>

          <button className="btn hidden items-center gap-x-[70px] rounded-[3px] border border-current px-3.5 py-[9px] uppercase md:flex">
            <span className="text-[16px] leading-[18px]">Inquire</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
