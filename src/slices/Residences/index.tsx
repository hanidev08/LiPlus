import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import "./style.scss";
import { Bounded } from "@/components/Bounded";
import { FaArrowRight } from "react-icons/fa6";

/**
 * Props for `Residences`.
 */
export type ResidencesProps = SliceComponentProps<Content.ResidencesSlice>;

/**
 * Component for "Residences" Slices.
 */
const Residences: FC<ResidencesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#F4F1EA] py-[50px] text-[#8A6C60] sm:py-[30px]"
      id="residences"
    >
      <div className="flex justify-between">
        <div className="flex w-full flex-col max-sm:items-center max-sm:gap-y-10">
          <div className="headingResidences font-display text-[#8A6C60] uppercase max-sm:text-center">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="sm:mt-[110px]">
            <button className="flex w-fit items-center gap-x-[70px] rounded-[3px] border border-[#8A6C60] px-3.5 py-[9px] font-bold uppercase">
              <span className="text-[16px] leading-[18px] text-[#8A6C60]">
                EXPLORE THE RESIDENCES
              </span>
              <span>
                <FaArrowRight className="text-[#8A6C60]" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative aspect-7/5 w-[40vw] max-w-[460px] max-sm:hidden">
          <PrismicNextImage
            field={slice.primary.image}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Residences;
