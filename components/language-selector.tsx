"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label={`Mudar idioma para ${language === 'pt' ? 'inglês' : 'português'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </Button>
  )
}
