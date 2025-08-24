import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X, User, Leaf, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Partnership", href: "/partnership" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "fa">("en")
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 z-50 w-full glass backdrop-blur-xl border-b border-white/10 shadow-lg bg-white/5 dark:bg-black/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 text-white shadow-lg">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-gray-800 dark:text-white">Benazir Yakta</span>
              <p className="text-xs text-gray-600 dark:text-gray-300">Trading Company</p>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <div className="flex items-center space-x-2">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-xl glass border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 rounded-xl glass border border-white/20 hover:bg-white/20"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium leading-6 transition-all duration-200 hover:text-primary relative px-3 py-2 rounded-lg",
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <LanguageToggle language={language} onLanguageChange={setLanguage} />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-xl glass border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 btn-glow rounded-xl px-6">
            <Link to="/admin" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass border-l border-white/20 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 text-white">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-gray-800 dark:text-white">Benazir Yakta</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Trading Company</p>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="h-8 w-8"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-3 text-base font-medium leading-7 transition-colors",
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-gray-800 dark:text-gray-200 hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-cyan-500">
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Admin Panel</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
