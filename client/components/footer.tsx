import { Link } from "react-router-dom"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">Benazir Yakta Trading Company</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Premium fruits and produce trading company connecting farmers with markets across Afghanistan and beyond.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+93 XXX XXX XXX</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnership" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/marketplace" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-muted-foreground">
                      Fresh Fruits
                    </span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-muted-foreground">
                      Premium Produce
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>info@benaziryakta.af</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Kabul, Afghanistan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-muted-foreground/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2024 Benazir Yakta Trading Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
