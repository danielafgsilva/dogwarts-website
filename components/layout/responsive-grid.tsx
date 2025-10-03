"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  responsive?: boolean;
  autoFit?: boolean;
  autoFill?: boolean;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  children: React.ReactNode;
}

const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  (
    {
      columns = 1,
      responsive = false,
      autoFit = false,
      autoFill = false,
      gap = "md",
      align = "stretch",
      justify = "start",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "grid";
    const columnClasses = {
      1: "grid--1",
      2: "grid--2",
      3: "grid--3",
      4: "grid--4",
      5: "grid--5",
      6: "grid--6",
    };
    const gapClasses = {
      none: "grid--gap-none",
      sm: "grid--gap-sm",
      md: "grid--gap-md",
      lg: "grid--gap-lg",
      xl: "grid--gap-xl",
    };
    const alignClasses = {
      start: "grid--start",
      center: "grid--center",
      end: "grid--end",
      stretch: "grid--stretch",
    };
    const justifyClasses = {
      start: "grid--justify-start",
      center: "grid--justify-center",
      end: "grid--justify-end",
      between: "grid--justify-between",
      around: "grid--justify-around",
      evenly: "grid--justify-evenly",
    };

    const gridClasses = cn(
      baseClasses,
      !responsive && !autoFit && !autoFill && columnClasses[columns],
      responsive && "grid--responsive",
      autoFit && "grid--auto-fit",
      autoFill && "grid--auto-fill",
      gapClasses[gap],
      alignClasses[align],
      justifyClasses[justify],
      className,
    );

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    );
  },
);

ResponsiveGrid.displayName = "ResponsiveGrid";

export { ResponsiveGrid };
