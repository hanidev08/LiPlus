import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import "./style.scss";
import { FaArrowRight } from "react-icons/fa6";

import { RevealText } from "@/components/RevealText";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative mt-3 overflow-hidden sm:mt-[30px]"
      >
        <div className="grid grid-cols-4 max-sm:gap-[60px] sm:grid-cols-12">
          <div className="col-span-4 flex flex-col sm:col-span-8">
            <RevealText
              field={slice.primary.heading}
              id="about-heading"
              className="headingAbout font-display text-[#8A6C60] uppercase"
              staggerAmount={0.1}
              duration={1.7}
              as="h1"
            />
            <div className="bodyAbout mt-[50px] font-sans text-[#8A6C60]">
              <PrismicRichText field={slice.primary.body} />
            </div>

            <div className="mt-10 sm:mt-[60px]">
              <button className="flex items-center gap-x-[70px] rounded-[3px] border border-[#8A6C60] px-3.5 py-[9px] font-bold uppercase">
                <span className="text-[16px] leading-[18px] text-[#8A6C60]">
                  Explore
                </span>
                <span>
                  <FaArrowRight className="text-[#8A6C60]" />
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-4">
            <div className="relative aspect-3/5 w-full max-w-[582px] max-sm:aspect-4/5">
              <PrismicNextImage
                field={slice.primary.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Bounded>
      <div className="relative mt-10 aspect-8/5 w-full max-w-[3000px]">
        <PrismicNextImage
          field={slice.primary.feature_image}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </>
  );
};

export default About;
