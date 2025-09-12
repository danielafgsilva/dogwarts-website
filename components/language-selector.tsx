"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export type Language = 'pt' | 'en'

export interface LanguageSelectorProps {
  currentLanguage?: Language
  onLanguageChange?: (language: Language) => void
  className?: string
}

export function LanguageSelector({ 
  currentLanguage = 'pt', 
  onLanguageChange,
  className 
}: LanguageSelectorProps) {
  const [language, setLanguage] = useState<Language>(currentLanguage)

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    onLanguageChange?.(newLanguage)
  }

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' }
  ]

  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={className}>
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{currentLang.flag}</span>
          <span className="sm:hidden">{currentLang.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
