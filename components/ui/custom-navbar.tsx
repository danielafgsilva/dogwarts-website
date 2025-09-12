"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavItem {
  href: string
  label: string
  noWrap?: boolean
  external?: boolean
}

export interface CustomNavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: {
    logo: string
    alt: string
    title: string
    href?: string
  }
  navItems: NavItem[]
  currentPage?: string
  showMobileMenu?: boolean
  onLanguageChange?: (language: string) => void
  currentLanguage?: string
  languages?: Array<{ code: string; label: string }>
}

const CustomNavbar = React.forwardRef<HTMLElement, CustomNavbarProps>(
  (
    {
      brand = {
        logo: '/dogwarts-logo-transparent.png',
        alt: 'Dogwarts Logo',
        title: 'Dogwarts',
        href: '/'
      },
      navItems,
      currentPage,
      showMobileMenu = true,
      onLanguageChange,
      currentLanguage = 'pt',
      languages = [
        { code: 'pt', label: 'PT' },
        { code: 'en', label: 'EN' }
      ],
      className,
      ...props
    },
    ref
  ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
      setIsMenuOpen(false)
    }, [currentPage])

    const handleLanguageChange = (languageCode: string) => {
      onLanguageChange?.(languageCode)
    }

    const navbarClasses = cn(
      'navbar',
      {
        'navbar--scrolled': isScrolled
      },
      className
    )

    return (
      <nav ref={ref} className={navbarClasses} {...props}>
        <div className="navbar__container">
          {/* Brand */}
          <Link
            href={brand.href || '/'}
            className="navbar__brand"
            aria-label={`${brand.title} - Ir para página inicial`}
          >
            <div className="navbar__logo">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={48}
                height={48}
                className="navbar__logo-image"
                priority
              />
            </div>
            <span className="navbar__title">{brand.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            {navItems.map((item) => (
              <div key={item.href} className="navbar__item">
                <Link
                  href={item.href}
                  className={cn(
                    'navbar__link',
                    {
                      'navbar__link--active': currentPage === item.href,
                      'whitespace-nowrap': item.noWrap
                    }
                  )}
                  aria-current={currentPage === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          {onLanguageChange && languages.length > 1 && (
            <div className="navbar__language-switcher">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn('navbar__language-button', {
                    'navbar__language-button--active': currentLanguage === lang.code
                  })}
                  aria-label={`Mudar para ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {showMobileMenu && (
            <button
              className={cn('navbar__mobile-toggle', {
                'navbar__mobile-toggle--open': isMenuOpen
              })}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            className={cn('navbar__mobile-menu', {
              'navbar__mobile-menu--open': isMenuOpen
            })}
            aria-hidden={!isMenuOpen}
          >
            <div className="navbar__mobile-nav">
              {navItems.map((item, index) => (
                <div key={item.href} className="navbar__mobile-item">
                  <Link
                    href={item.href}
                    className={cn(
                      'navbar__mobile-link',
                      {
                        'navbar__mobile-link--active': currentPage === item.href,
                        'whitespace-nowrap': item.noWrap
                      }
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={currentPage === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
  }
)

CustomNavbar.displayName = 'CustomNavbar'

export { CustomNavbar }
