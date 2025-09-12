import { useState, useEffect } from 'react'

export interface UseNavbarOptions {
  scrollThreshold?: number
  autoCloseOnRouteChange?: boolean
}

export interface UseNavbarReturn {
  isMenuOpen: boolean
  isScrolled: boolean
  toggleMenu: () => void
  closeMenu: () => void
  openMenu: () => void
}

/**
 * Custom hook for managing navbar state
 * @param options Configuration options for the navbar
 * @returns Navbar state and control functions
 */
export function useNavbar(options: UseNavbarOptions = {}): UseNavbarReturn {
  const {
    scrollThreshold = 10,
    autoCloseOnRouteChange = true
  } = options

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  // Close menu on route change
  useEffect(() => {
    if (autoCloseOnRouteChange) {
      setIsMenuOpen(false)
    }
  }, [autoCloseOnRouteChange])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (typeof document !== 'undefined' && document.body) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    return () => {
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  return {
    isMenuOpen,
    isScrolled,
    toggleMenu,
    closeMenu,
    openMenu
  }
}
