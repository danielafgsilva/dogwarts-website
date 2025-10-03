"use client";

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
    const baseClasses = "rounded-lg border bg-card text-card-foreground shadow-sm";
    const variantClasses = {
      default: "",
      elevated: "shadow-lg",
      flat: "shadow-none border-0",
      interactive: "hover:shadow-md transition-shadow cursor-pointer",
    };
    const sizeClasses = {
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    };

    const cardClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      {
        "opacity-50": loading,
      },
      className,
    );

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {badge && <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">{badge}</span>}

        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-t-lg object-cover"
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
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
));

const CustomCardTitle = React.forwardRef<
  HTMLHeadingElement,
  CustomCardTitleProps
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
));

const CustomCardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  CustomCardSubtitleProps
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
));

const CustomCardContent = React.forwardRef<
  HTMLDivElement,
  CustomCardContentProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
));

const CustomCardFooter = React.forwardRef<
  HTMLDivElement,
  CustomCardFooterProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props}>
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
