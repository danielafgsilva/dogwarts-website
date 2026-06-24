"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "left",
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-ring",
      ghost: "hover:bg-accent hover:text-accent-foreground focus:ring-ring",
      link: "text-primary underline-offset-4 hover:underline focus:ring-primary",
    };
    
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-9 px-4 py-2",
      lg: "h-10 px-6 text-base",
      xl: "h-12 px-8 text-lg",
    };

    const buttonClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      {
        "w-full": fullWidth,
        "opacity-50 cursor-not-allowed": loading,
        "pointer-events-none": disabled,
        "aspect-square p-0": React.Children.count(children) === 0 && icon,
      },
      className,
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="button__loading" aria-hidden="true">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}

        {!loading && icon && iconPosition === "left" && (
          <span className="button__icon">{icon}</span>
        )}

        {children && <span className="button__text">{children}</span>}

        {!loading && icon && iconPosition === "right" && (
          <span className="button__icon">{icon}</span>
        )}
      </button>
    );
  },
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
