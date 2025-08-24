import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layout } from "@/components/layout"
import {
  ArrowRight,
  Users,
  ShoppingCart,
  Phone,
  Star,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  Building2,
  Heart,
  Truck,
  Shield
} from "lucide-react"

export default function Index() {
  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark relative overflow-hidden">
      {/* 3D Floating Dried Fruit Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-6xl floating drop-shadow-2xl" style={{filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))'}}>
          <div className="transform rotate-12 hover:rotate-6 transition-transform duration-700">🥜</div>
        </div>
        <div className="absolute top-1/4 right-20 text-5xl floating-reverse drop-shadow-2xl" style={{animationDelay: '0.5s', filter: 'drop-shadow(0 25px 50px rgba(34, 211, 238, 0.3))'}}>
          <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-700">🫐</div>
        </div>
        <div className="absolute bottom-32 left-1/4 text-7xl floating drop-shadow-2xl" style={{animationDelay: '1s', filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.4))'}}>
          <div className="transform rotate-45 hover:rotate-12 transition-transform duration-700">🥥</div>
        </div>
        <div className="absolute top-1/2 right-1/3 text-6xl floating-reverse drop-shadow-2xl" style={{animationDelay: '1.5s', filter: 'drop-shadow(0 25px 50px rgba(16, 185, 129, 0.3))'}}>
          <div className="transform -rotate-6 hover:rotate-6 transition-transform duration-700">🌰</div>
        </div>
        <div className="absolute bottom-20 right-32 text-8xl floating drop-shadow-2xl" style={{animationDelay: '2s', filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.2))'}}>
          <div className="transform rotate-12 hover:-rotate-6 transition-transform duration-700">🍇</div>
        </div>
        <div className="absolute top-32 left-1/3 text-5xl floating-reverse drop-shadow-2xl" style={{animationDelay: '2.5s', filter: 'drop-shadow(0 25px 50px rgba(34, 211, 238, 0.3))'}}>
          <div className="transform -rotate-45 hover:rotate-12 transition-transform duration-700">🧆</div>
        </div>
        <div className="absolute bottom-1/4 left-20 text-6xl floating drop-shadow-2xl" style={{animationDelay: '3s', filter: 'drop-shadow(0 25px 50px rgba(16, 185, 129, 0.3))'}}>
          <div className="transform rotate-6 hover:-rotate-12 transition-transform duration-700">🫒</div>
        </div>
      </div>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 pb-24">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Hero Content */}
            <div className="text-center lg:text-left space-y-8">
              <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-4 py-2">
                Premium Afghan Dried Fruits
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
                <span className="text-glow">Connecting Farmers</span>
                <br />
                <span className="text-primary text-glow">to Global Markets</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Benazir Yakta Trading Company - Premium quality dried fruits, nuts, and spices 
                sourced directly from Afghan farmers with unmatched freshness and reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/marketplace" className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Explore Marketplace</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="glass border-primary/30">
                  <Link to="/partnership" className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Partner With Us</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Product Showcase */}
            <div className="grid grid-cols-2 gap-4">
              {/* Product Card 1 */}
              <div className="card-3d glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🥜</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Premium Almonds</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Four varieties available</p>
                <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-1 bg-primary rounded-full w-4/5"></div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="card-3d glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🍇</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Golden Raisins</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Premium quality</p>
                <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-1 bg-green-500 rounded-full w-3/4"></div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="card-3d glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🫐</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Dried Apricots</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sun-dried naturally</p>
                <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-1 bg-orange-500 rounded-full w-5/6"></div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="card-3d glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🌰</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Pine Nuts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Organic & fresh</p>
                <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-1 bg-green-600 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Achievements */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                Trusted by <span className="text-primary text-glow">Global Partners</span>
              </h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                <div className="flex flex-col gap-y-4">
                  <dt className="text-base text-gray-600 dark:text-gray-300">Years of Experience</dt>
                  <dd className="text-5xl font-bold text-primary text-glow">10+</dd>
                </div>
                <div className="flex flex-col gap-y-4">
                  <dt className="text-base text-gray-600 dark:text-gray-300">Partner Farmers</dt>
                  <dd className="text-5xl font-bold text-primary text-glow">500+</dd>
                </div>
                <div className="flex flex-col gap-y-4">
                  <dt className="text-base text-gray-600 dark:text-gray-300">Countries Served</dt>
                  <dd className="text-5xl font-bold text-primary text-glow">15+</dd>
                </div>
                <div className="flex flex-col gap-y-4">
                  <dt className="text-base text-gray-600 dark:text-gray-300">Tons Traded Annually</dt>
                  <dd className="text-5xl font-bold text-primary text-glow">1000+</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                To enhance global access to high-quality Afghan agricultural products while supporting 
                women's economic empowerment and promoting ethical, sustainable business practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="card-3d glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quality Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintaining the highest standards in sourcing, processing, and exporting premium dried fruits.
                </p>
              </div>
              
              <div className="card-3d glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connecting local Afghan farmers to international markets across multiple continents.
                </p>
              </div>
              
              <div className="card-3d glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Women Empowerment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing employment to 100+ Afghan women while fostering economic opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Sections */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Explore Our Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how we serve farmers, customers, and partners worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
              
              {/* Partnership Preview */}
              <Card className="card-3d glass border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Join Our Team</CardTitle>
                  <CardDescription>
                    Partner with 500+ successful farmers and access international markets with our support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fair trade practices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Technical support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Guaranteed market access</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/partnership">
                      Become a Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Marketplace Preview */}
              <Card className="card-3d glass border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Premium Marketplace</CardTitle>
                  <CardDescription>
                    Browse our extensive catalog of fresh dried fruits and premium produce.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Fresh seasonal fruits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Quality guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Global shipping</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/marketplace">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* About Preview */}
              <Card className="card-3d glass border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Our Story</CardTitle>
                  <CardDescription>
                    Learn about our journey, mission, and commitment to excellence since 2017.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Award-winning company</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Women-led enterprise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Global recognition</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Preview */}
              <Card className="card-3d glass border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Contact our team for inquiries, custom solutions, and expert consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">24/7 support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Global offices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Expert consultation</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers and partners who trust Benazir Yakta Trading Company 
                for their premium dried fruits and produce trading needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/marketplace">
                    Start Shopping
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="glass border-primary/30">
                  <Link to="/contact">
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
