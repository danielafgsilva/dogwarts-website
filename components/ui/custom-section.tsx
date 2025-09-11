"use client"

import React from 'react'
import { cn } from '@/lib/utils'

export interface CustomSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'none' | 'gradient' | 'pattern' | 'image'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export interface CustomSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CustomSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export interface CustomSectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export interface CustomSectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CustomSection = React.forwardRef<HTMLElement, CustomSectionProps>(
  (
    {
      variant = 'default',
      size = 'md',
      background = 'none',
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'section'
    const variantClasses = {
      default: 'section--default',
      primary: 'section--primary',
      secondary: 'section--secondary',
      accent: 'section--accent'
    }
    const sizeClasses = {
      sm: 'section--sm',
      md: 'section--md',
      lg: 'section--lg',
      xl: 'section--xl'
    }
    const backgroundClasses = {
      none: '',
      gradient: 'section--gradient',
      pattern: 'section--pattern',
      image: 'section--image'
    }
    const paddingClasses = {
      none: 'section--padding-none',
      sm: 'section--padding-sm',
      md: 'section--padding-md',
      lg: 'section--padding-lg',
      xl: 'section--padding-xl'
    }

    const sectionClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )

    return (
      <section ref={ref} className={sectionClasses} {...props}>
        <div className="section__container">
          {children}
        </div>
      </section>
    )
  }
)

const CustomSectionHeader = React.forwardRef<HTMLDivElement, CustomSectionHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('section__header', className)} {...props}>
      {children}
    </div>
  )
)

const CustomSectionTitle = React.forwardRef<HTMLHeadingElement, CustomSectionTitleProps>(
  ({ className, children, level = 2, ...props }, ref) => {
    const Component = `h${level}` as const
    return (
      <Component
        ref={ref}
        className={cn('section__title', `heading--${level}`, className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const CustomSectionSubtitle = React.forwardRef<HTMLParagraphElement, CustomSectionSubtitleProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('section__subtitle', className)} {...props}>
      {children}
    </p>
  )
)

const CustomSectionContent = React.forwardRef<HTMLDivElement, CustomSectionContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('section__content', className)} {...props}>
      {children}
    </div>
  )
)

CustomSection.displayName = 'CustomSection'
CustomSectionHeader.displayName = 'CustomSectionHeader'
CustomSectionTitle.displayName = 'CustomSectionTitle'
CustomSectionSubtitle.displayName = 'CustomSectionSubtitle'
CustomSectionContent.displayName = 'CustomSectionContent'

export {
  CustomSection,
  CustomSectionHeader,
  CustomSectionTitle,
  CustomSectionSubtitle,
  CustomSectionContent
}
