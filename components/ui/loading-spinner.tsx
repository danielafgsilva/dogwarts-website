import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-primary',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="A carregar..."
    >
      <span className="sr-only">A carregar...</span>
    </div>
  )
}

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingDots({ size = 'md', className }: LoadingDotsProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  }

  return (
    <div className={cn('flex space-x-1', className)} role="status" aria-label="A carregar...">
      <div
        className={cn(
          'bg-primary rounded-full animate-bounce',
          sizeClasses[size]
        )}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={cn(
          'bg-primary rounded-full animate-bounce',
          sizeClasses[size]
        )}
        style={{ animationDelay: '150ms' }}
      />
      <div
        className={cn(
          'bg-primary rounded-full animate-bounce',
          sizeClasses[size]
        )}
        style={{ animationDelay: '300ms' }}
      />
      <span className="sr-only">A carregar...</span>
    </div>
  )
}

interface LoadingSkeletonProps {
  className?: string
  lines?: number
}

export function LoadingSkeleton({ className, lines = 1 }: LoadingSkeletonProps) {
  return (
    <div className={cn('animate-pulse', className)} role="status" aria-label="A carregar...">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded mb-2 last:mb-0"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
      <span className="sr-only">A carregar...</span>
    </div>
  )
}
