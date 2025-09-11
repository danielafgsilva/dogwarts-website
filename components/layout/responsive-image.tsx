"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'wide' | 'tall'
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'responsive'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: 'none' | 'scale' | 'zoom'
  loading?: 'lazy' | 'eager'
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      aspectRatio = 'landscape',
      objectFit = 'cover',
      objectPosition = 'center',
      size = 'responsive',
      rounded = 'md',
      shadow = 'none',
      hover = 'none',
      loading = 'lazy',
      priority = false,
      placeholder = 'empty',
      blurDataURL,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'image'
    const aspectRatioClasses = {
      square: 'image--square',
      landscape: 'image--landscape',
      portrait: 'image--portrait',
      wide: 'image--wide',
      tall: 'image--tall'
    }
    const objectFitClasses = {
      cover: 'image--cover',
      contain: 'image--contain',
      fill: 'image--fill',
      'scale-down': 'image--scale-down',
      none: 'image--none'
    }
    const objectPositionClasses = {
      center: 'image--center',
      top: 'image--top',
      bottom: 'image--bottom',
      left: 'image--left',
      right: 'image--right'
    }
    const sizeClasses = {
      xs: 'image--xs',
      sm: 'image--sm',
      md: 'image--md',
      lg: 'image--lg',
      xl: 'image--xl',
      '2xl': 'image--2xl',
      responsive: 'image--responsive'
    }
    const roundedClasses = {
      none: '',
      sm: 'image--rounded',
      md: 'image--rounded',
      lg: 'image--rounded-lg',
      xl: 'image--rounded-xl',
      full: 'image--rounded-full'
    }
    const shadowClasses = {
      none: '',
      sm: 'image--shadow',
      md: 'image--shadow',
      lg: 'image--shadow-lg',
      xl: 'image--shadow-xl'
    }
    const hoverClasses = {
      none: '',
      scale: 'image--hover-scale',
      zoom: 'image--hover-zoom'
    }

    const imageClasses = cn(
      baseClasses,
      aspectRatioClasses[aspectRatio],
      objectFitClasses[objectFit],
      objectPositionClasses[objectPosition],
      sizeClasses[size],
      roundedClasses[rounded],
      shadowClasses[shadow],
      hoverClasses[hover],
      className
    )

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
    )
  }
)

ResponsiveImage.displayName = 'ResponsiveImage'

export { ResponsiveImage }
