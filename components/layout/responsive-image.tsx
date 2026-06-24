"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide" | "tall";
  objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "responsive";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  hover?: "none" | "scale" | "zoom";
  loading?: "lazy" | "eager";
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

const ResponsiveImage = React.forwardRef<
  HTMLImageElement,
  ResponsiveImageProps
>(
  (
    {
      src,
      alt,
      width,
      height,
      aspectRatio = "landscape",
      objectFit = "cover",
      objectPosition = "center",
      size = "responsive",
      rounded = "md",
      shadow = "none",
      hover = "none",
      loading = "lazy",
      priority = false,
      placeholder = "empty",
      blurDataURL,
      className,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "w-full h-auto";
    const aspectRatioClasses = {
      square: "aspect-square",
      landscape: "aspect-video",
      portrait: "aspect-[3/4]",
      wide: "aspect-[21/9]",
      tall: "aspect-[3/5]",
    };
    const objectFitClasses = {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      "scale-down": "object-scale-down",
      none: "object-none",
    };
    const objectPositionClasses = {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom",
      left: "object-left",
      right: "object-right",
    };
    const sizeClasses = {
      xs: "w-8 h-8",
      sm: "w-16 h-16",
      md: "w-24 h-24",
      lg: "w-32 h-32",
      xl: "w-48 h-48",
      "2xl": "w-64 h-64",
      responsive: "w-full h-auto",
    };
    const roundedClasses = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    };
    const hoverClasses = {
      none: "",
      scale: "hover:scale-105 transition-transform",
      zoom: "hover:scale-110 transition-transform",
    };

    const imageClasses = cn(
      baseClasses,
      aspectRatioClasses[aspectRatio],
      objectFitClasses[objectFit],
      objectPositionClasses[objectPosition],
      sizeClasses[size],
      roundedClasses[rounded],
      shadowClasses[shadow],
      hoverClasses[hover],
      className,
    );

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        loading={loading}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...props}
      />
    );
  },
);

ResponsiveImage.displayName = "ResponsiveImage";

export { ResponsiveImage };
