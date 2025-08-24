import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Language = "en" | "fa"

interface LanguageToggleProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const languages = {
    en: { name: "English", flag: "🇺🇸", dir: "ltr" },
    fa: { name: "فارسی", flag: "🇦🇫", dir: "rtl" }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(languages).map(([key, lang]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => onLanguageChange(key as Language)}
            className={`flex items-center gap-2 ${language === key ? 'bg-accent' : ''}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
