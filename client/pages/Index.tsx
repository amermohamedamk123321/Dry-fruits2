import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layout } from "@/components/layout"
import { 
  ArrowRight, 
  Leaf, 
  Users, 
  ShoppingCart, 
  Phone, 
  Star,
  Award,
  TrendingUp,
  Globe,
  CheckCircle
} from "lucide-react"

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-6">
              Premium Fruits & Produce Trading
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Connecting Farmers to
              <span className="text-primary"> Global Markets</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Benazir Yakta Trading Company bridges the gap between local farmers and international markets, 
              delivering premium quality fruits and produce with unmatched freshness and reliability.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/marketplace" className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Explore Marketplace</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/partnership" className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Partner With Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Years of Experience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">10+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Partner Farmers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">500+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Countries Served</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">15+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">Tons Traded Annually</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">1000+</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              To empower local farmers by providing them access to international markets while ensuring 
              consumers worldwide receive the finest quality produce from Afghanistan's fertile lands.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">Quality Assurance</h3>
                <p className="mt-2 text-muted-foreground">
                  Rigorous quality control ensuring only the finest produce reaches our customers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">Global Reach</h3>
                <p className="mt-2 text-muted-foreground">
                  Connecting local farmers to international markets across multiple continents.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  Committed to excellence in every aspect of our trading operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover how we can serve your needs through our comprehensive trading solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Marketplace Preview */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Premium Marketplace</CardTitle>
                <CardDescription>
                  Browse our extensive catalog of fresh fruits and premium produce, sourced directly from trusted farmers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Fresh seasonal fruits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Quality guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Competitive pricing</span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full group-hover:bg-primary/90">
                  <Link to="/marketplace">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Partnership Preview */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Farmer Partnership</CardTitle>
                <CardDescription>
                  Join our network of successful farmers and access international markets with our support and expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Fair trade practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Technical support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Guaranteed market access</span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full group-hover:bg-primary/90">
                  <Link to="/partnership">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Preview */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>
                  Have questions or special requirements? Our team is ready to assist you with personalized solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Custom solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Expert consultation</span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full group-hover:bg-primary/90">
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
      <section className="bg-primary text-primary-foreground">
        <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Trading?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Join hundreds of satisfied customers and partners who trust Benazir Yakta Trading Company 
              for their produce trading needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/marketplace">
                  Start Shopping
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
