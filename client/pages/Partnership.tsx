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
  Phone,
  Mail,
  MapPin,
  Calendar,
  Target,
  Briefcase,
  ArrowRight,
  Send
} from "lucide-react"
import { toast } from "sonner"
import { Layout } from "@/components/layout"

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
      // Simulate API call and form submission to admin dashboard and email
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate sending to admin dashboard
      const adminData = {
        type: 'partnership_application',
        data: formData,
        timestamp: new Date().toISOString(),
        status: 'pending'
      }

      // Simulate sending email to company
      const emailData = {
        to: 'Benaziryakta@gmail.com',
        subject: `New Partnership Application - ${formData.fullName}`,
        body: `
Dear Benazir Yakta Trading Company,

A new partnership application has been received:

📋 APPLICATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━
👤 Full Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📍 Farm Location: ${formData.farmLocation}
🏡 Farm Size: ${formData.farmSize || 'Not specified'}
⏰ Experience: ${formData.experience || 'Not specified'}
🌾 Current Crops: ${formData.crops || 'Not specified'}

📝 Additional Information:
${formData.additionalInfo || 'None provided'}

━━━━━━━━━━━━━━━━━━━━━━━━
📅 Application Date: ${new Date().toLocaleDateString()}
⏰ Application Time: ${new Date().toLocaleTimeString()}

Please review this application and contact the farmer within 48 hours.

Best regards,
Benazir Yakta Partnership System
        `
      }

      console.log('Admin Dashboard Data:', adminData)
      console.log('Email Data:', emailData)
      
      toast.success("Partnership application submitted successfully! We'll contact you within 48 hours via email and phone.")
      
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
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-6xl text-green-200/30 floating">🌾</div>
        <div className="absolute top-1/3 right-20 text-7xl text-blue-200/30 floating-reverse" style={{animationDelay: '0.5s'}}>🚜</div>
        <div className="absolute bottom-32 left-1/4 text-8xl text-green-300/30 floating" style={{animationDelay: '1s'}}>🌱</div>
        <div className="absolute top-1/2 right-1/3 text-6xl text-blue-300/30 floating-reverse" style={{animationDelay: '1.5s'}}>👥</div>
        <div className="absolute bottom-20 right-32 text-9xl text-orange-300/20 floating" style={{animationDelay: '2s'}}>🤝</div>
        <div className="absolute top-32 left-1/3 text-5xl text-purple-300/30 floating-reverse" style={{animationDelay: '2.5s'}}>💼</div>
      </div>

      <Layout>
        <div className="relative z-10">
          {/* Enhanced Hero Section */}
          <section className="pt-16 pb-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-8 py-4 text-xl font-bold animate-pulse">
                🤝 Join Our Growing Network
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-display font-black text-gray-800 dark:text-white mb-6 text-glow leading-tight">
                Partner with Afghanistan's <br />
                <span className="text-primary bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Leading Export Company</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mb-8 font-medium leading-relaxed">
                Join our network of <span className="text-primary font-bold">20+ successful farmers</span> and access international markets while 
                receiving <span className="text-green-600 font-bold">fair trade prices</span>, technical support, and 
                <span className="text-blue-600 font-bold"> guaranteed market access</span> for your premium crops.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" className="btn-glow bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-xl py-6 px-10 rounded-2xl" onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Users className="h-6 w-6 mr-3" />
                  Become a Partner Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="glass border-primary/30 hover:bg-primary/10 text-xl py-6 px-10 rounded-2xl">
                  <Phone className="h-6 w-6 mr-3" />
                  Call: +93 77 10 10 70
                </Button>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="glass rounded-2xl px-6 py-4 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Active Partners</div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Export Markets</div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-600">7+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-orange-500/20">
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Women Employed</div>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Success Stories with Zigzag Layout */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg font-bold">
                  🌟 Success Stories
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Transforming Lives Through <span className="text-primary text-glow">Partnership</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  See how our partnership program has transformed the lives of farmers across Afghanistan
                </p>
              </div>

              {/* Zigzag Success Stories */}
              <div className="space-y-24">
                {/* Story 1 - Left */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="glass rounded-3xl p-8 border border-green-500/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          👨‍🌾
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ahmad Hassan</h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">Almond Farmer • Kandahar Province</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-6">
                        "Partnering with Benazir Yakta increased my income by 300%. The technical support 
                        and guaranteed market access changed everything for my family. Now I can afford to send 
                        my children to university!"
                      </blockquote>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-green-600">300%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Income Increase</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-blue-600">3</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Years Partnership</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl flex items-center justify-center text-8xl">
                        🌰
                      </div>
                      <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-2 border border-green-500/30">
                        <span className="text-green-600 font-bold">✅ Verified Success</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story 2 - Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl flex items-center justify-center text-8xl">
                        🍇
                      </div>
                      <div className="absolute -top-6 -left-6 glass rounded-2xl px-4 py-2 border border-purple-500/30">
                        <span className="text-purple-600 font-bold">🏆 Top Performer</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-2">
                    <div className="glass rounded-3xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          👩‍🌾
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Fatima Karimi</h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">Raisin Producer • Herat Province</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-6">
                        "The training programs helped me improve my farming techniques. Now I produce 
                        premium quality raisins that are exported to Europe! As a woman, this partnership 
                        gave me economic independence."
                      </blockquote>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-purple-600">5</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Export Countries</div>
                        </div>
                        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-pink-600">5</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Years Partnership</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story 3 - Left */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="glass rounded-3xl p-8 border border-orange-500/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          👨‍🌾
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Mohammad Zahir</h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">Pistachio Farmer • Ghazni Province</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-6">
                        "Fair pricing and prompt payments gave me the stability I needed. I've expanded 
                        my farm and now employ 10 additional workers. This partnership created jobs for 
                        my entire community!"
                      </blockquote>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-orange-600">10</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Jobs Created</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                          <div className="text-2xl font-bold text-red-600">4</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Years Partnership</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl flex items-center justify-center text-8xl">
                        🥜
                      </div>
                      <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-2 border border-orange-500/30">
                        <span className="text-orange-600 font-bold">💼 Job Creator</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Benefits Section with Card Grid */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg font-bold">
                  🎁 Partnership Benefits
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Why Partner <span className="text-primary text-glow">With Us?</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  We provide comprehensive support to help farmers succeed in global markets
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <Card className="card-3d glass border-green-500/20 hover:border-green-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <DollarSign className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Fair Trade Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Receive fair and competitive prices for your produce with transparent pricing policies and no hidden fees.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">Transparent pricing model</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">Prompt monthly payments</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">No intermediary commissions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefit 2 */}
                <Card className="card-3d glass border-blue-500/20 hover:border-blue-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Expert Training</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Access to agricultural experts and modern farming techniques to improve your yield and quality.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">Monthly expert consultation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">Modern farming workshops</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">Quality improvement programs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefit 3 */}
                <Card className="card-3d glass border-purple-500/20 hover:border-purple-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Global Markets</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Direct access to international markets across 5 countries without intermediaries.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-600 dark:text-gray-300">UK & European markets</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-600 dark:text-gray-300">Dubai & Middle East</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-600 dark:text-gray-300">Quality certifications</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Benefits */}
                <Card className="card-3d glass border-orange-500/20 hover:border-orange-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Guaranteed Purchase</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Long-term contracts providing stability and predictable income for your family.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600 dark:text-gray-300">Multi-year contracts</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600 dark:text-gray-300">100% purchase guarantee</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600 dark:text-gray-300">Legal contract protection</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-teal-500/20 hover:border-teal-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Women Empowerment</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Special programs supporting women farmers and their families in agricultural development.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
                        <span className="text-gray-600 dark:text-gray-300">Women-led enterprise</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
                        <span className="text-gray-600 dark:text-gray-300">Family support programs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
                        <span className="text-gray-600 dark:text-gray-300">Equal opportunities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-indigo-500/20 hover:border-indigo-500/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Sprout className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Sustainable Farming</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-lg leading-relaxed">
                      Promote environmentally friendly farming practices for long-term sustainability.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
                        <span className="text-gray-600 dark:text-gray-300">Eco-friendly methods</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
                        <span className="text-gray-600 dark:text-gray-300">Organic certification support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
                        <span className="text-gray-600 dark:text-gray-300">Future-focused approach</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Enhanced Application Form */}
          <section id="application-form" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="glass rounded-3xl p-8 lg:p-16 border border-white/10 bg-gradient-to-br from-white/5 to-primary/5 dark:from-black/5 dark:to-primary/5">
                <div className="text-center mb-16">
                  <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg font-bold">
                    📝 Partnership Application
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6">
                    Ready to <span className="text-primary text-glow">Transform Your Farm?</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    Fill out the application form below and we'll contact you within 48 hours via email and phone
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Users className="h-6 w-6 mr-3 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="glass border-primary/30 rounded-xl py-4 text-lg"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="glass border-primary/30 rounded-xl py-4 text-lg"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact & Location */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <MapPin className="h-6 w-6 mr-3 text-primary" />
                      Contact & Location
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="glass border-primary/30 rounded-xl py-4 text-lg"
                          placeholder="+93 XXX XXX XXX"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="farmLocation" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Farm Location *
                        </Label>
                        <Input
                          id="farmLocation"
                          value={formData.farmLocation}
                          onChange={(e) => setFormData({...formData, farmLocation: e.target.value})}
                          className="glass border-primary/30 rounded-xl py-4 text-lg"
                          placeholder="Province, District, Village"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Farm Details */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Sprout className="h-6 w-6 mr-3 text-primary" />
                      Farm Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="farmSize" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Farm Size
                        </Label>
                        <Select value={formData.farmSize} onValueChange={(value) => setFormData({...formData, farmSize: value})}>
                          <SelectTrigger className="glass border-primary/30 rounded-xl py-4 text-lg">
                            <SelectValue placeholder="Select your farm size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">🌱 Small Farm (1-5 acres)</SelectItem>
                            <SelectItem value="medium">🌾 Medium Farm (5-20 acres)</SelectItem>
                            <SelectItem value="large">🚜 Large Farm (20+ acres)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="experience" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                          Farming Experience
                        </Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                          <SelectTrigger className="glass border-primary/30 rounded-xl py-4 text-lg">
                            <SelectValue placeholder="Years of farming experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">🌱 Beginner (0-2 years)</SelectItem>
                            <SelectItem value="intermediate">🌾 Intermediate (3-10 years)</SelectItem>
                            <SelectItem value="experienced">🏆 Experienced (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label htmlFor="crops" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                        Current Crops/Products
                      </Label>
                      <Input
                        id="crops"
                        value={formData.crops}
                        onChange={(e) => setFormData({...formData, crops: e.target.value})}
                        className="glass border-primary/30 rounded-xl py-4 text-lg"
                        placeholder="e.g., Almonds, Walnuts, Raisins, Apricots, Pistachios"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Briefcase className="h-6 w-6 mr-3 text-primary" />
                      Additional Information
                    </h3>
                    <div>
                      <Label htmlFor="additionalInfo" className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                        Tell us about your farming goals and interests
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                        className="glass border-primary/30 rounded-xl text-lg"
                        placeholder="Share your farming background, goals, challenges, and what you hope to achieve through this partnership..."
                        rows={5}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <Button type="submit" size="lg" className="btn-glow bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-xl py-6 px-12 rounded-2xl">
                      <Send className="h-6 w-6 mr-3" />
                      Submit Partnership Application
                    </Button>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                      We'll review your application and contact you within 48 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-3xl p-12 border border-white/10 bg-gradient-to-br from-primary/5 to-cyan-500/5">
                <div className="text-center mb-16">
                  <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg font-bold">
                    📊 Partnership Impact
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6">
                    Our <span className="text-primary text-glow">Growing Success</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                    Join a thriving network that's transforming Afghan agriculture
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="glass rounded-2xl p-8 border border-primary/20 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl font-display font-black text-primary text-glow mb-4">20+</div>
                    <div className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Partner Farmers</div>
                    <div className="text-gray-600 dark:text-gray-300">Across Afghanistan</div>
                  </div>
                  <div className="glass rounded-2xl p-8 border border-green-500/20 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl font-display font-black text-green-500 mb-4">5</div>
                    <div className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Export Countries</div>
                    <div className="text-gray-600 dark:text-gray-300">UK, Switzerland, Dubai, France, India</div>
                  </div>
                  <div className="glass rounded-2xl p-8 border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl font-display font-black text-blue-500 mb-4">1000+</div>
                    <div className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tons Traded</div>
                    <div className="text-gray-600 dark:text-gray-300">Premium Quality Products</div>
                  </div>
                  <div className="glass rounded-2xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl font-display font-black text-purple-500 mb-4">100+</div>
                    <div className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Women Employed</div>
                    <div className="text-gray-600 dark:text-gray-300">Empowering Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}
