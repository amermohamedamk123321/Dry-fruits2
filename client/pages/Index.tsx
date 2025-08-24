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
              <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-6 py-3 text-sm font-medium">
                🏆 Award-Winning Afghan Export Company Since 2017
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-800 dark:text-white leading-tight">
                <span className="text-glow-cyan">Benazir Yakta</span>
                <br />
                <span className="text-primary text-glow">Trading Company</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Premium quality dried fruits, nuts, and spices sourced from Afghan farmers.
                <span className="text-primary font-semibold"> Women-led enterprise</span> connecting Afghanistan to global markets in
                <span className="text-cyan-600 font-semibold"> UK, Switzerland, Dubai, France, and India</span>.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Badge variant="outline" className="bg-white/10 border-cyan-500/50 text-cyan-600 dark:text-cyan-400">
                  100+ Women Employed
                </Badge>
                <Badge variant="outline" className="bg-white/10 border-green-500/50 text-green-600 dark:text-green-400">
                  20 Partner Farmers
                </Badge>
                <Badge variant="outline" className="bg-white/10 border-blue-500/50 text-blue-600 dark:text-blue-400">
                  5 Global Offices
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-glow bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90">
                  <Link to="/marketplace" className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Explore Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="glass border-primary/30 hover:bg-primary/10">
                  <Link to="/partnership" className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Join Our Network</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - 3D Product Showcase */}
            <div className="grid grid-cols-2 gap-6">
              {/* Product Card 1 - Almonds */}
              <div className="card-3d glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 floating" style={{animationDelay: '0.2s'}}>🥜</div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-800 dark:text-white">Four Types of Almonds</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Premium Afghan varieties</p>
                <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full w-4/5 animate-pulse"></div>
                </div>
                <Badge variant="secondary" className="mt-3 text-xs">Top Export</Badge>
              </div>

              {/* Product Card 2 - Raisins */}
              <div className="card-3d glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 floating-reverse" style={{animationDelay: '0.4s'}}>🍇</div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-800 dark:text-white">Premium Raisins</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Green, Black & Red varieties</p>
                <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <Badge variant="secondary" className="mt-3 text-xs">Bestseller</Badge>
              </div>

              {/* Product Card 3 - Apricots */}
              <div className="card-3d glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 floating" style={{animationDelay: '0.6s'}}>🧡</div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-800 dark:text-white">Dried Apricots</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Sun-dried & machine processed</p>
                <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full w-5/6 animate-pulse"></div>
                </div>
                <Badge variant="secondary" className="mt-3 text-xs">Premium Quality</Badge>
              </div>

              {/* Product Card 4 - Pine Nuts & More */}
              <div className="card-3d glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 floating-reverse" style={{animationDelay: '0.8s'}}>🌰</div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-800 dark:text-white">Pine Nuts & More</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Figs, Pistachios & Spices</p>
                <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-2/3 animate-pulse"></div>
                </div>
                <Badge variant="secondary" className="mt-3 text-xs">Specialty Items</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Real Company Achievements from PDF */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  🏆 Award-Winning Performance
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
                  Recognized <span className="text-primary text-glow">Globally</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  First women-led enterprise to utilize air corridor for Afghan fruit exports.
                  Winner of "Best Woman in Export" and "Afghanistan's Best Exporter" awards.
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
                <div className="flex flex-col gap-y-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <dt className="text-base font-medium text-gray-600 dark:text-gray-300">Years in Business</dt>
                  <dd className="text-5xl font-display font-bold text-primary text-glow">7+</dd>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Since 2017</p>
                </div>

                <div className="flex flex-col gap-y-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <dt className="text-base font-medium text-gray-600 dark:text-gray-300">Women Employed</dt>
                  <dd className="text-5xl font-display font-bold text-green-600 text-glow-green">100</dd>
                  <p className="text-sm text-gray-500 dark:text-gray-400">20 full-time, 80 seasonal</p>
                </div>

                <div className="flex flex-col gap-y-4 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <dt className="text-base font-medium text-gray-600 dark:text-gray-300">Partner Farmers</dt>
                  <dd className="text-5xl font-display font-bold text-orange-600">20</dd>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Across Afghanistan</p>
                </div>

                <div className="flex flex-col gap-y-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <dt className="text-base font-medium text-gray-600 dark:text-gray-300">Global Markets</dt>
                  <dd className="text-5xl font-display font-bold text-purple-600">5</dd>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UK, Switzerland, Dubai, France, India</p>
                </div>
              </dl>

              {/* Awards Section */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500/50 text-yellow-700 dark:text-yellow-300 px-4 py-2">
                    🏆 Best Woman in Export
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 border-blue-500/50 text-blue-700 dark:text-blue-300 px-4 py-2">
                    🥈 2nd Best Exporter of Afghanistan
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 border-green-500/50 text-green-700 dark:text-green-300 px-4 py-2">
                    ✈️ First Women-Led Air Corridor User
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision from PDF */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6">
                Our <span className="text-primary text-glow">Mission & Vision</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold text-primary">Mission:</span> To enhance global access to high-quality Afghan agricultural products while supporting
                  women's economic empowerment and promoting ethical, sustainable business practices.
                </p>
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold text-cyan-600">Vision:</span> To become the leading exporter of Afghan dried fruits, nuts, and spices,
                  recognized for quality, sustainability, and social responsibility.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="card-3d glass rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-800 dark:text-white">Quality Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Maintaining the highest standards in sourcing, processing, and exporting with international food safety compliance.
                </p>
              </div>

              <div className="card-3d glass rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-800 dark:text-white">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ensuring long-term environmental and economic sustainability while supporting fair trade practices.
                </p>
              </div>

              <div className="card-3d glass rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-800 dark:text-white">Women Empowerment</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Providing employment and skills training for 100+ Afghan women, fostering economic independence.
                </p>
              </div>

              <div className="card-3d glass rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-800 dark:text-white">Fair Trade</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Supporting local farmers with ethical business practices and fair compensation for their hard work.
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
