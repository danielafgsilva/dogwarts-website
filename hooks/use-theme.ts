import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export interface UseThemeOptions {
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
}

export interface UseThemeReturn {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

/**
 * Custom hook for managing theme state
 * @param options Configuration options for the theme
 * @returns Theme state and control functions
 */
export function useTheme(options: UseThemeOptions = {}): UseThemeReturn {
  const {
    defaultTheme = 'system',
    storageKey = 'dogwarts-theme',
    enableSystem = true
  } = options

  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  // Get system theme preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Resolve theme based on current setting
  const resolveTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system' && enableSystem) {
      return getSystemTheme()
    }
    return currentTheme === 'dark' ? 'dark' : 'light'
  }

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = localStorage.getItem(storageKey) as Theme
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
      setThemeState(storedTheme)
    }
  }, [storageKey])

  // Update resolved theme when theme changes
  useEffect(() => {
    const resolved = resolveTheme(theme)
    setResolvedTheme(resolved)

    // Apply theme to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
  }, [theme, enableSystem])

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem || theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        setResolvedTheme(getSystemTheme())
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, enableSystem])

  // Set theme and persist to localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme)
    }
  }

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme(enableSystem ? 'system' : 'light')
    } else {
      setTheme('light')
    }
  }

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme
  }
}
