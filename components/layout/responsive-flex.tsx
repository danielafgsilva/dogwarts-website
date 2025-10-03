"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveFlexProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "responsive";
  wrap?: "wrap" | "nowrap";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  children: React.ReactNode;
}

const ResponsiveFlex = React.forwardRef<HTMLDivElement, ResponsiveFlexProps>(
  (
    {
      direction = "row",
      wrap = "nowrap",
      gap = "md",
      align = "center",
      justify = "start",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "flex";
    const directionClasses = {
      row: "flex-row",
      column: "flex-col",
      responsive: "flex-col md:flex-row",
    };
    const wrapClasses = {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    };
    const gapClasses = {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    };
    const alignClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    };
    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    const flexClasses = cn(
      baseClasses,
      directionClasses[direction],
      wrapClasses[wrap],
      gapClasses[gap],
      alignClasses[align],
      justifyClasses[justify],
      className,
    );

    return (
      <div ref={ref} className={flexClasses} {...props}>
        {children}
      </div>
    );
  },
);

ResponsiveFlex.displayName = "ResponsiveFlex";

export { ResponsiveFlex };
