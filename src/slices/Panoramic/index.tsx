import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./style.scss";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";
import { FaArrowRight } from "react-icons/fa6";

/**
 * Props for `Panoramic`.
 */
export type PanoramicProps = SliceComponentProps<Content.PanoramicSlice>;

/**
 * Component for "Panoramic" Slices.
 */
const Panoramic: FC<PanoramicProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-[30px]"
    >
      <RevealText
        field={slice.primary.heading}
        id="panoramic-heading"
        className="headingPanoramic font-display text-[#8A6C60] uppercase"
        staggerAmount={0.1}
        duration={1.7}
        as="h1"
      />

      <div className="mt-[50px]">
        <button className="flex items-center gap-x-[70px] rounded-[3px] border border-[#8A6C60] px-3.5 py-[9px] font-bold uppercase">
          <span className="text-[16px] leading-[18px] text-[#8A6C60]">
            SEE THE VIEWS
          </span>
          <span>
            <FaArrowRight className="text-[#8A6C60]" />
          </span>
        </button>
      </div>
      <div className=" mt-[50px] sm:mt-[150px] grid grid-cols-4 gap-y-[30px] sm:gap-x-[30px] sm:grid-cols-12">
        <div className="order-2 col-span-4 flex flex-col gap-[15px] sm:gap-[25px] sm:order-1 sm:col-span-8">
          <div className="relative aspect-5/5 w-full max-w-[954px] max-sm:aspect-6/5 max-sm:w-screen">
            <PrismicNextImage
              field={slice.primary.imageone}
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div className="relative aspect-7/5 w-full max-w-[954px] max-sm:aspect-7/5 max-sm:w-screen">
            <PrismicNextImage
              field={slice.primary.imagetow}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 col-span-4 sm:order-2 sm:col-span-4">
          <div className="bodyPanoramic font-sans text-[#8A6C60]">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Panoramic;
