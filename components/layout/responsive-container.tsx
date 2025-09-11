"use client"

import React from 'react'
import { cn } from '@/lib/utils'

export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'fluid' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const ResponsiveContainer = React.forwardRef<HTMLDivElement, ResponsiveContainerProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'container'
    const variantClasses = {
      default: '',
      fluid: 'container--fluid',
      sm: 'container--sm',
      md: 'container--md',
      lg: 'container--lg',
      xl: 'container--xl',
      '2xl': 'container--2xl'
    }
    const paddingClasses = {
      none: 'spacing--none',
      sm: 'spacing--sm',
      md: 'spacing--md',
      lg: 'spacing--lg',
      xl: 'spacing--xl'
    }

    const containerClasses = cn(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className
    )

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    )
  }
)

ResponsiveContainer.displayName = 'ResponsiveContainer'

export { ResponsiveContainer }
