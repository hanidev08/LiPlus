import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./style.scss";
import { FaArrowRight } from "react-icons/fa6";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[50px] sm:py-[350px]"
    >
      <div className="flex w-full justify-center">
        <div className="headingCallToAction font-display text-center text-[#8A6C60] uppercase">
          <PrismicRichText field={slice.primary.heading} />
        </div>
      </div>
      <div className="mt-10 sm:mt-[70px] flex justify-center">
          <button className="flex items-center gap-x-[70px] rounded-[3px] border border-[#8A6C60] px-3.5 py-[9px] font-bold uppercase">
            <span className="text-[16px] leading-[18px] text-[#8A6C60]">
              Schedule  appointment
            </span>
            <span>
              <FaArrowRight className="text-[#8A6C60]" />
            </span>
          </button>
        </div>
    </section>
  );
};

export default CallToAction;
