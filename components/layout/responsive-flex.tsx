"use client"

import React from 'react'
import { cn } from '@/lib/utils'

export interface ResponsiveFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'responsive'
  wrap?: 'wrap' | 'nowrap'
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  children: React.ReactNode
}

const ResponsiveFlex = React.forwardRef<HTMLDivElement, ResponsiveFlexProps>(
  (
    {
      direction = 'row',
      wrap = 'nowrap',
      gap = 'md',
      align = 'center',
      justify = 'start',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex'
    const directionClasses = {
      row: 'flex--row',
      column: 'flex--column',
      responsive: 'flex--responsive'
    }
    const wrapClasses = {
      wrap: 'flex--wrap',
      nowrap: 'flex--nowrap'
    }
    const gapClasses = {
      none: 'flex--gap-none',
      sm: 'flex--gap-sm',
      md: 'flex--gap-md',
      lg: 'flex--gap-lg',
      xl: 'flex--gap-xl'
    }
    const alignClasses = {
      start: 'flex--align-start',
      center: 'flex--align-center',
      end: 'flex--align-end',
      stretch: 'flex--align-stretch',
      baseline: 'flex--align-baseline'
    }
    const justifyClasses = {
      start: 'flex--justify-start',
      center: 'flex--justify-center',
      end: 'flex--justify-end',
      between: 'flex--justify-between',
      around: 'flex--justify-around',
      evenly: 'flex--justify-evenly'
    }

    const flexClasses = cn(
      baseClasses,
      directionClasses[direction],
      wrapClasses[wrap],
      gapClasses[gap],
      alignClasses[align],
      justifyClasses[justify],
      className
    )

    return (
      <div ref={ref} className={flexClasses} {...props}>
        {children}
      </div>
    )
  }
)

ResponsiveFlex.displayName = 'ResponsiveFlex'

export { ResponsiveFlex }
