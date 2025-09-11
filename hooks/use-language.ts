"use client"

import { useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('dogwarts-language') as Language
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('dogwarts-language', newLanguage)
  }

  // Get current translations
  const t = translations[language]

  return {
    language,
    setLanguage: changeLanguage,
    t,
  }
}
