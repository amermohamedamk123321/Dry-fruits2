import { Link } from "react-router-dom"
import { Leaf, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: "📷", href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: "💼", href: "#", color: "hover:text-blue-700" },
    { name: "Twitter", icon: "🐦", href: "#", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: "💬", href: "#", color: "hover:text-green-600" },
  ]

  return (
    <footer className="glass border-t border-white/20 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 text-white shadow-lg">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-gray-800 dark:text-white">Benazir Yakta</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">Trading Company</p>
              </div>
            </Link>

            <p className="text-base leading-7 text-gray-600 dark:text-gray-300 max-w-md">
              Premium dried fruits, nuts, and spices trading company connecting Afghan farmers with global markets.
              Empowering women and supporting sustainable agriculture since 2017.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">+93 77 10 10 70</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Benaziryakta@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Shahrak-e-Omid Sabz, Kabul, Afghanistan</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-12 w-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <a href={social.href} className={`flex items-center justify-center ${social.color}`}>
                      <span className="text-2xl">{social.icon}</span>
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-800 dark:text-white mb-6">Quick Links</h3>
            <ul role="list" className="space-y-4">
              <li>
                <Link to="/about" className="text-base leading-6 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                  <span>About Us</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-base leading-6 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                  <span>Marketplace</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-base leading-6 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                  <span>Partnership</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base leading-6 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                  <span>Contact</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold leading-6 text-gray-800 dark:text-white mt-8 mb-4">Our Products</h4>
            <ul role="list" className="space-y-3">
              <li className="text-base text-gray-600 dark:text-gray-300">🥜 Premium Almonds</li>
              <li className="text-base text-gray-600 dark:text-gray-300">🍇 Golden Raisins</li>
              <li className="text-base text-gray-600 dark:text-gray-300">🫐 Dried Apricots</li>
              <li className="text-base text-gray-600 dark:text-gray-300">🌰 Pine Nuts & More</li>
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-800 dark:text-white mb-6">Global Presence</h3>
            <ul role="list" className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 mt-1">
                  <MapPin className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Afghanistan (HQ)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Main Operations</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 mt-1">
                  <MapPin className="h-3 w-3 text-cyan-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">United Kingdom</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Europe Distribution</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 mt-1">
                  <MapPin className="h-3 w-3 text-green-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Dubai, UAE</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Middle East Hub</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 mt-1">
                  <MapPin className="h-3 w-3 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">India</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Asia Pacific</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <p className="text-base leading-6 text-gray-600 dark:text-gray-400 font-medium">
              &copy; 2024 Benazir Yakta Trading Company. All rights reserved. <span className="text-primary font-semibold">Empowering Afghan agriculture globally.</span>
            </p>
            <div className="flex items-center space-x-8 text-base text-gray-600 dark:text-gray-400">
              <Link to="/privacy" className="hover:text-primary transition-colors font-medium hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors font-medium hover:underline">Terms of Service</Link>
              <span className="text-primary font-bold text-lg bg-primary/10 px-4 py-2 rounded-full border border-primary/20">🏆 Women-Led Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
