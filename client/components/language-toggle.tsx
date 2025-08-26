import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = "en" | "fa";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageToggle({
  language,
  onLanguageChange,
}: LanguageToggleProps) {
  const languages = {
    en: {
      name: "English",
      nativeName: "English",
      flag: "🇺🇸",
      dir: "ltr",
      code: "EN",
    },
    fa: {
      name: "Persian",
      nativeName: "فارسی",
      flag: "🇦🇫",
      dir: "rtl",
      code: "فا",
    },
  };

  const currentLang = languages[language];

  // Apply RTL/LTR direction to document when language changes
  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = language;
  }, [language, currentLang.dir]);

  const handleLanguageChange = (newLanguage: Language) => {
    onLanguageChange(newLanguage);
    // Store preference in localStorage
    localStorage.setItem("preferred-language", newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl glass border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative group"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg leading-none">{currentLang.flag}</span>
            <span className="text-xs font-bold leading-none mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity">
              {currentLang.code}
            </span>
          </div>
          <span className="sr-only">
            Toggle language - Current: {currentLang.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 glass backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl"
      >
        <div className="px-2 py-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-white/10 mb-1">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>Choose Language</span>
          </div>
        </div>
        {Object.entries(languages).map(([key, lang]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as Language)}
            className={`
              flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200
              ${
                language === key
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "hover:bg-white/10 text-gray-700 dark:text-gray-300"
              }
            `}
          >
            <span className="text-2xl">{lang.flag}</span>
            <div className="flex-1">
              <div className="font-semibold text-sm">{lang.name}</div>
              <div className="text-xs opacity-70">{lang.nativeName}</div>
            </div>
            {language === key && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
        <div className="px-2 py-1.5 text-xs text-gray-500 dark:text-gray-400 border-t border-white/10 mt-1">
          <span>Language preference is saved automatically</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
