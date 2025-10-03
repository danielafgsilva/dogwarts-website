"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "flat" | "interactive";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  badge?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  children: React.ReactNode;
}

export interface CustomCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CustomCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export interface CustomCardSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CustomCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CustomCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      badge,
      image,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "card";
    const variantClasses = {
      default: "",
      elevated: "card--elevated",
      flat: "card--flat",
      interactive: "card--interactive",
    };
    const sizeClasses = {
      sm: "card--sm",
      md: "card--md",
      lg: "card--lg",
      xl: "card--xl",
    };

    const cardClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      {
        "card--loading": loading,
      },
      className,
    );

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {badge && <span className="card__badge">{badge}</span>}

        {image && (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="card__image"
          />
        )}

        {children}
      </div>
    );
  },
);

const CustomCardHeader = React.forwardRef<
  HTMLDivElement,
  CustomCardHeaderProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("card__header", className)} {...props}>
    {children}
  </div>
));

const CustomCardTitle = React.forwardRef<
  HTMLHeadingElement,
  CustomCardTitleProps
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn("card__title", className)} {...props}>
    {children}
  </h3>
));

const CustomCardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  CustomCardSubtitleProps
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("card__subtitle", className)} {...props}>
    {children}
  </p>
));

const CustomCardContent = React.forwardRef<
  HTMLDivElement,
  CustomCardContentProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("card__body", className)} {...props}>
    {children}
  </div>
));

const CustomCardFooter = React.forwardRef<
  HTMLDivElement,
  CustomCardFooterProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("card__footer", className)} {...props}>
    {children}
  </div>
));

CustomCard.displayName = "CustomCard";
CustomCardHeader.displayName = "CustomCardHeader";
CustomCardTitle.displayName = "CustomCardTitle";
CustomCardSubtitle.displayName = "CustomCardSubtitle";
CustomCardContent.displayName = "CustomCardContent";
CustomCardFooter.displayName = "CustomCardFooter";

export {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardSubtitle,
  CustomCardContent,
  CustomCardFooter,
};
