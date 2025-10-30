import React from "react";
import { TbMenu } from "react-icons/tb";
import { FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <div className="navbar fixed top-0 left-0 z-50 w-full px-3 pt-[17px] text-white md:px-[30px] md:pt-[35px]">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-[15px]">
            <TbMenu />
            <span className="uppercase">Menu</span>
          </button>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Image
              src="/LIPLUSbig.svg"
              alt="LIPLUS"
              width={180}
              height={30}
              className="w-20 md:w-42"
            />
          </div>

          <button className="hidden items-center gap-x-[70px] rounded-[3px] border border-white px-3.5 py-[9px] uppercase md:flex">
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
