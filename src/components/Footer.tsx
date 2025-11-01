import React from "react";
import { Bounded } from "./Bounded";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="font-ral bg-[#8A6C60] pt-10 text-white sm:pt-[50px] pb-5" id="contact">
      <Bounded>
        <div className="flex flex-col sm:gap-[50px]">
          <div className="grid grid-cols-4 max-sm:gap-10 sm:grid-cols-12">
            <ul className="col-span-4 font-bold sm:col-span-5">
              <li>SALES GALLERY</li>
              <li>liplusjhhRD STREET </li>
              <li>NEW YORK, NY 10019</li>
            </ul>
            <ul className="col-span-4 sm:col-span-6">
              <li>917.870.6463</li>
              <li>info@LiPlus.com</li>
            </ul>
            <ul className="col-span-4 font-bold sm:col-span-1">
              <li>EN / 中文 / ES / PT</li>
            </ul>
          </div>
          <hr className="max-sm:hidden" />
          <div className="grid grid-cols-12 max-sm:hidden">
            <ul className="col-span-5 flex flex-col gap-[92px] font-bold uppercase">
              <li>PRESS</li>
              <li>See all Press</li>
            </ul>
            <ul className="col-span-4">
              <li>
                “The dramatic 82-storey structure dominates the skyline,
                elegantly asserting its presence; and stepping inside, the
                experience is no less impressive.”
              </li>
              <li className="mt-[50px]">- Wallpaper</li>
            </ul>
          </div>
          <hr className="max-sm:hidden" />

          <div className="max-sm:mt-[90px]">
            <ul className="text-center sm:hidden mb-5">
              <li>Back to top</li>
            </ul>
            <Image
              src="/LIPlusLI.svg"
              alt=""
              width={1440}
              height={180}
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-between max-sm:mt-5 max-sm:flex-col max-sm:text-center">
            <ul>
              <li>Copyright © LiPlus /Legal notice</li>
            </ul>
            <ul className="max-sm:hidden">
              <li>Back to top</li>
            </ul>
            <ul>
              <li>Fair housing notice / Standard Operating Procedures</li>
            </ul>
          </div>
        </div>
      </Bounded>
    </footer>
  );
};
