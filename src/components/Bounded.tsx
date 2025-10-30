import { ElementType, ReactNode, forwardRef } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-3 md:px-[30px] [.header+&]:pt-44 [.header+&]:md:pt-32",
          className
        )}
        {...restProps}
      >
        <div className="mx-auto w-full h-full">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";