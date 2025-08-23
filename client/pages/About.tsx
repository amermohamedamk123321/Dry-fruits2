import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Globe, 
  Users, 
  Heart,
  Leaf,
  Star,
  CheckCircle,
  Trophy,
  Target,
  Building,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Sprout,
  Factory
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-4xl text-blue-200/20 floating">🏢</div>
        <div className="absolute top-1/3 right-20 text-5xl text-green-200/20 floating-reverse" style={{animationDelay: '0.5s'}}>🌟</div>
        <div className="absolute bottom-32 left-1/4 text-6xl text-blue-300/20 floating" style={{animationDelay: '1s'}}>🏆</div>
        <div className="absolute top-1/2 right-1/3 text-4xl text-green-300/20 floating-reverse" style={{animationDelay: '1.5s'}}>💼</div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-4 py-2">
              Since 2017
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 text-glow">
              About <span className="text-primary">Benazir Yakta</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              A pioneering women-led enterprise dedicated to connecting Afghan farmers 
              with global markets while empowering women and promoting sustainable trade practices.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    Our <span className="text-primary text-glow">Story</span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Benazir Yakta Trading Company was registered with the Ministry of Industry and Commerce 
                    of Afghanistan in 2017 and has since established itself as a pioneering enterprise in the 
                    export sector, securing a distinguished position in international markets.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    As a women-led enterprise, we specialize in processing, packaging, and exporting 
                    premium-quality dried fruits, nuts, and spices sourced from Afghan farmers. Our mission 
                    is to enhance global access to high-quality Afghan agricultural products while fostering 
                    sustainable trade practices.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Founded in 2017</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-primary" />
                      <span>Registered Enterprise</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary text-glow mb-2">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Partner Farmers</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Countries Served</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">1000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Tons Traded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Mission */}
              <Card className="card-3d glass border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    To enhance global access to high-quality Afghan agricultural products while supporting 
                    women's economic empowerment and promoting ethical, sustainable business practices.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="card-3d glass border-green-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    To become the leading exporter of Afghan dried fruits, nuts, and spices, 
                    recognized for quality, sustainability, and social responsibility.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="card-3d glass border-blue-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Core Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Quality Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Sustainability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Women's Empowerment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Fair Trade</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Awards & <span className="text-primary text-glow">Recognition</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized nationally and internationally
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-3d glass border-yellow-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Best Woman in Export</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Afghanistan Chamber of Commerce and Industries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Recognized for outstanding contributions to Afghanistan's export industry and women's leadership.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-orange-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">2nd Best Exporter</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Afghanistan's Best Exporter of the Year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Achieved second place in Afghanistan's Best Exporter competition for exceptional performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-red-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-red-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">3rd Best Exporter</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Consecutive Year Achievement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Maintained excellence with third place in the following year's Best Exporter competition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Women Empowerment */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    <span className="text-primary text-glow">Women's</span> Empowerment
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    As a women-led enterprise, we are committed to empowering women and creating economic 
                    opportunities. We provide employment to over 100 Afghan women, including both full-time 
                    and seasonal positions.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Our founder and CEO, Ms. Benazir Yakta, leads by example in demonstrating that women 
                    can successfully build and manage international trading companies while contributing 
                    to their communities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">20 Full-time Female Employees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">80 Seasonal Female Workers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Skills Training Programs</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">👩‍💼</div>
                    <div className="text-2xl font-bold text-primary text-glow mb-2">20</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Full-time Employees</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">👩‍🌾</div>
                    <div className="text-2xl font-bold text-green-500 mb-2">80</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Seasonal Workers</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🎓</div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Training Coverage</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">💪</div>
                    <div className="text-2xl font-bold text-purple-500 mb-2">1st</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Women-Led Enterprise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Global <span className="text-primary text-glow">Presence</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our international reach spans multiple continents with offices and partnerships worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-3d glass border-blue-500/20">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-800 dark:text-white">Afghanistan</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Headquarters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                    Shahrak-e-Omid Sabz, Kabul<br />
                    Main operations and processing
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-green-500/20">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-800 dark:text-white">United Kingdom</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">European Office</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                    Representative office<br />
                    European market operations
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-orange-500/20">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-800 dark:text-white">Dubai, UAE</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Middle East Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                    Regional distribution center<br />
                    Gulf market access
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-purple-500/20">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-800 dark:text-white">India</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Asian Office</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                    South Asian operations<br />
                    Regional partnerships
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Quality <span className="text-primary text-glow">Standards</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We maintain the highest standards in sourcing, processing, and exporting to ensure 
                  premium quality products reach global markets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Food Safety</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    International food safety standards compliance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Organic Processing</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Natural drying and preservation methods
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Modern Facilities</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    State-of-the-art processing equipment
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Quality Control</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Rigorous testing and inspection procedures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Exhibitions */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                International <span className="text-primary text-glow">Exhibitions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We actively participate in major international trade exhibitions to showcase Afghan products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Gulfood Dubai</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Middle East's largest food exhibition
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Global Village Dubai</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  International cultural and trade showcase
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">India Trade Fairs</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Multiple trade exhibitions across India
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🇨🇳</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">China Exhibitions</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Asian market expansion initiatives
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🌏</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Central Asia</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Turkmenistan, Kazakhstan, Uzbekistan
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🇵🇰</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Pakistan</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Regional trade partnerships
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation and Future */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Innovation & <span className="text-primary text-glow">Future Goals</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                We continue to innovate and expand our operations to better serve farmers and customers worldwide
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Sprout className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sustainable Practices</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Implementing eco-friendly processing and packaging methods
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Market Expansion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Entering new international markets and strengthening partnerships
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Capacity Building</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expanding our team and enhancing skills development programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
