import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Users, 
  Handshake, 
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  Award,
  Globe,
  Heart,
  Sprout,
  DollarSign,
  BookOpen,
  Phone
} from "lucide-react"
import { toast } from "sonner"

export default function Partnership() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmSize: '',
    experience: '',
    crops: '',
    additionalInfo: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.farmLocation) {
      toast.error("Please fill in all required fields")
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Application submitted successfully! We'll contact you within 48 hours.")
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        farmLocation: '',
        farmSize: '',
        experience: '',
        crops: '',
        additionalInfo: ''
      })
      
    } catch (error) {
      toast.error("Failed to submit application. Please try again.")
    }
  }

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-4xl text-green-200/20 floating">🌾</div>
        <div className="absolute top-1/3 right-20 text-5xl text-blue-200/20 floating-reverse" style={{animationDelay: '0.5s'}}>🚜</div>
        <div className="absolute bottom-32 left-1/4 text-6xl text-green-300/20 floating" style={{animationDelay: '1s'}}>🌱</div>
        <div className="absolute top-1/2 right-1/3 text-4xl text-blue-300/20 floating-reverse" style={{animationDelay: '1.5s'}}>👥</div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-4 py-2">
              Join Our Network
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 text-glow">
              Join Our Team of <span className="text-primary">500+ Successful Farmers</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Partner with Benazir Yakta Trading Company and access international markets while 
              receiving fair trade prices, technical support, and guaranteed market access for your crops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow" onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <Users className="h-5 w-5 mr-2" />
                Become a Partner
              </Button>
              <Button variant="outline" size="lg" className="glass border-primary/30">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us: +93 77 10 10 70
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Success Stories from Our <span className="text-primary text-glow">Partner Farmers</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how our partnership program has transformed the lives of farmers across Afghanistan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <Card className="card-3d glass border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    👨‍🌾
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Ahmad Hassan</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Almond Farmer, Kandahar Province
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "Partnering with Benazir Yakta increased my income by 300%. The technical support 
                    and guaranteed market access changed everything for my family."
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Partnership Duration:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">3 Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Income Increase:</span>
                      <span className="font-semibold text-green-600">+300%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Story 2 */}
              <Card className="card-3d glass border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    👩‍🌾
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Fatima Karimi</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Raisin Producer, Herat Province
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "The training programs helped me improve my farming techniques. Now I produce 
                    premium quality raisins that are exported to Europe!"
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Partnership Duration:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">5 Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Export Markets:</span>
                      <span className="font-semibold text-blue-600">5 Countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Story 3 */}
              <Card className="card-3d glass border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    👨‍🌾
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Mohammad Zahir</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Pistachio Farmer, Ghazni Province
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "Fair pricing and prompt payments gave me the stability I needed. I've expanded 
                    my farm and now employ 10 additional workers."
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Partnership Duration:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">4 Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Jobs Created:</span>
                      <span className="font-semibold text-green-600">10 Workers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Why Partner <span className="text-primary text-glow">With Us?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive support to help farmers succeed in global markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-3d glass border-green-500/20 hover:border-green-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Fair Trade Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Receive fair and competitive prices for your produce with transparent pricing policies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Transparent pricing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Prompt payments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">No hidden fees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-blue-500/20 hover:border-blue-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Access to agricultural experts and modern farming techniques to improve your yield.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Expert consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Training programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Quality improvement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-purple-500/20 hover:border-purple-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Global Market Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Direct access to international markets across 15+ countries without intermediaries.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">15+ export markets</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Direct partnerships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Quality certifications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-orange-500/20 hover:border-orange-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Contract Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Long-term contracts providing stability and predictable income for your family.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Multi-year contracts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Guaranteed purchase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Legal protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-teal-500/20 hover:border-teal-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-teal-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Women Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Special programs supporting women farmers and their families in agricultural development.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Women-led enterprise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Family support programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Equal opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d glass border-indigo-500/20 hover:border-indigo-500/40">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="h-8 w-8 text-indigo-500" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Promote environmentally friendly farming practices for long-term sustainability.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Eco-friendly methods</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Organic certification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Future-focused</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Ready to <span className="text-primary text-glow">Join Us?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Fill out the application form below and we'll contact you within 48 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="glass border-primary/30"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="glass border-primary/30"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="glass border-primary/30"
                      placeholder="+93 XXX XXX XXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="farmLocation" className="text-gray-700 dark:text-gray-300">
                      Farm Location *
                    </Label>
                    <Input
                      id="farmLocation"
                      value={formData.farmLocation}
                      onChange={(e) => setFormData({...formData, farmLocation: e.target.value})}
                      className="glass border-primary/30"
                      placeholder="Province, District, Village"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="farmSize" className="text-gray-700 dark:text-gray-300">
                      Farm Size
                    </Label>
                    <Select value={formData.farmSize} onValueChange={(value) => setFormData({...formData, farmSize: value})}>
                      <SelectTrigger className="glass border-primary/30">
                        <SelectValue placeholder="Select farm size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-5 acres)</SelectItem>
                        <SelectItem value="medium">Medium (5-20 acres)</SelectItem>
                        <SelectItem value="large">Large (20+ acres)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience" className="text-gray-700 dark:text-gray-300">
                      Farming Experience
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="glass border-primary/30">
                        <SelectValue placeholder="Years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (3-10 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="crops" className="text-gray-700 dark:text-gray-300">
                    Current Crops/Products
                  </Label>
                  <Input
                    id="crops"
                    value={formData.crops}
                    onChange={(e) => setFormData({...formData, crops: e.target.value})}
                    className="glass border-primary/30"
                    placeholder="e.g., Almonds, Walnuts, Raisins, Apricots"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo" className="text-gray-700 dark:text-gray-300">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                    className="glass border-primary/30"
                    placeholder="Tell us more about your farming goals and interests"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="btn-glow px-12">
                    <Handshake className="h-5 w-5 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Our <span className="text-primary text-glow">Partnership Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary text-glow mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Partner Farmers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Export Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">1000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Tons Traded</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-500 mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-300">Women Employed</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
