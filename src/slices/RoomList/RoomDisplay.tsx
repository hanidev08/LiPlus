import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import "./style.scss";
import { RevealText } from "@/components/RevealText";
import { FaArrowRight } from "react-icons/fa6";
import { Bounded } from "@/components/Bounded";

type RoomDisplayProps = {
  id: string;
};
export const RoomDisplay = async ({ id }: RoomDisplayProps) => {
  const client = createClient();
  const room = await client.getByID<Content.RoomDocument>(id);

  return (
    <Bounded className="pt-5 sm:pt-[30px]">
      <RevealText
        field={room.data.heading}
        id="room-heading"
        className="headingRoom font-display text-[#8A6C60] uppercase"
        staggerAmount={0.1}
        duration={1.7}
        as="h1"
      />

      <div className="mt-[50px]">
        <button className="flex items-center gap-x-[70px] rounded-[3px] border border-[#8A6C60] px-3.5 py-[9px] font-bold uppercase">
          <span className="text-[16px] leading-[18px] text-[#8A6C60]">
            See all features
          </span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className="bodyRoom mt-[50px] font-sans text-[#8A6C60] sm:mt-[100px]">
        <PrismicRichText field={room.data.body} />
      </div>
      <div className="mt-[30px] flex flex-col gap-[15px] sm:gap-[30px]">
        <div className="relative aspect-8/5 w-full max-w-[3000px]">
          <PrismicNextImage
            field={room.data.imageone}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="relative aspect-8/5 w-full max-w-[3000px]">
          <PrismicNextImage
            field={room.data.imagetow}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </Bounded>
  );
};
