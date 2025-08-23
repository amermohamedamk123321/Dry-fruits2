import { Link } from "react-router-dom"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass border-t border-white/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-gray-800 dark:text-white">Benazir Yakta Trading Company</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              Premium dried fruits, nuts, and spices trading company connecting Afghan farmers with global markets.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+93 77 10 10 70</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-800 dark:text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-primary">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnership" className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-primary">
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-800 dark:text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/marketplace" className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-primary">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Dried Fruits & Nuts
                    </span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Premium Spices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-800 dark:text-white">Global Offices</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>Kabul, Afghanistan (HQ)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>United Kingdom</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>Dubai, UAE</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
              &copy; 2024 Benazir Yakta Trading Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 mt-4 sm:mt-0">
              <Mail className="h-3 w-3" />
              <span>Benaziryakta@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
