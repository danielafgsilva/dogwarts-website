"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CustomSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  background?: "none" | "gradient" | "pattern" | "image";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export interface CustomSectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CustomSectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface CustomSectionSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CustomSectionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomSection = React.forwardRef<HTMLElement, CustomSectionProps>(
  (
    {
      variant = "default",
      size = "md",
      background = "none",
      padding = "md",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "relative";
    const variantClasses = {
      default: "bg-background",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
    };
    const sizeClasses = {
      sm: "py-8 md:py-12",
      md: "py-12 md:py-20",
      lg: "py-16 md:py-24",
      xl: "py-20 md:py-32",
    };
    const backgroundClasses = {
      none: "",
      gradient: "bg-gradient-to-br from-background via-card to-muted/30",
      pattern: "bg-background bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.15)_1px,_transparent_0)] bg-[length:20px_20px]",
      image: "bg-cover bg-center bg-no-repeat",
    };
    const paddingClasses = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
      xl: "px-8 sm:px-12 lg:px-16",
    };

    const sectionClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      backgroundClasses[background],
      paddingClasses[padding],
      className,
    );

    return (
      <section ref={ref} className={sectionClasses} {...props}>
        <div className="container mx-auto max-w-7xl">{children}</div>
      </section>
    );
  },
);

const headingComponents = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const

const CustomSectionTitle = React.forwardRef<HTMLHeadingElement, CustomSectionTitleProps>(
  ({ className, children, level = 2, ...props }, ref) => {
    const Component = headingComponents[level] || 'h2'
    return (
      <Component
        ref={ref}
        className={cn('text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const CustomSectionSubtitle = React.forwardRef<
  HTMLParagraphElement,
  CustomSectionSubtitleProps
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed", className)} {...props}>
    {children}
  </p>
));

const CustomSectionContent = React.forwardRef<
  HTMLDivElement,
  CustomSectionContentProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("mt-6 space-y-4", className)} {...props}>
    {children}
  </div>
));

CustomSection.displayName = "CustomSection";
CustomSectionTitle.displayName = "CustomSectionTitle";
CustomSectionSubtitle.displayName = "CustomSectionSubtitle";
CustomSectionContent.displayName = "CustomSectionContent";

export {
  CustomSection,
  CustomSectionTitle,
  CustomSectionSubtitle,
  CustomSectionContent,
};
