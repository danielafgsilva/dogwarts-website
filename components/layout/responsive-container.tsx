"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "fluid" | "sm" | "md" | "lg" | "xl" | "2xl";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const ResponsiveContainer = React.forwardRef<
  HTMLDivElement,
  ResponsiveContainerProps
>(
  (
    { variant = "default", padding = "md", className, children, ...props },
    ref,
  ) => {
    const baseClasses = "w-full";
    const variantClasses = {
      default: "container mx-auto max-w-7xl",
      fluid: "w-full",
      sm: "container mx-auto max-w-2xl",
      md: "container mx-auto max-w-4xl",
      lg: "container mx-auto max-w-6xl",
      xl: "container mx-auto max-w-7xl",
      "2xl": "container mx-auto max-w-[1400px]",
    };
    const paddingClasses = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
      xl: "px-8 sm:px-12 lg:px-16",
    };

    const containerClasses = cn(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className,
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    );
  },
);

ResponsiveContainer.displayName = "ResponsiveContainer";

export { ResponsiveContainer };
