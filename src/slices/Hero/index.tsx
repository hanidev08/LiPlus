import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import "./style.scss";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden"
    >
      <FadeIn
        vars={{ scale: 1 }}
        className="absolute inset-0 motion-safe:scale-125"
      >
        <PrismicNextImage
          field={slice.primary.image}
          alt=""
          fill
          property="true"
          className="object-cover brightness-70 filter"
        />
      </FadeIn>
      <div className="relative flex h-screen items-end pb-[30px]">
        <RevealText
          field={slice.primary.heading}
          id="hero-heading"
          className="heading font-display text-[112px] leading-28 text-white uppercase"
          staggerAmount={0.1}
          duration={1.7}
          as="h1"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
