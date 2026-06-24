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
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
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
    };
    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    const gridClasses = cn(
      baseClasses,
      !responsive && !autoFit && !autoFill && columnClasses[columns],
      responsive && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      autoFit && "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
      autoFill && "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]",
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
