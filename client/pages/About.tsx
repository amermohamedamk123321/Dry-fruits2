import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Factory,
  Crown,
  Briefcase,
  Plane,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-6xl text-blue-200/30 floating">
          🏢
        </div>
        <div
          className="absolute top-1/3 right-20 text-7xl text-green-200/30 floating-reverse"
          style={{ animationDelay: "0.5s" }}
        >
          🌟
        </div>
        <div
          className="absolute bottom-32 left-1/4 text-8xl text-blue-300/30 floating"
          style={{ animationDelay: "1s" }}
        >
          🏆
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-6xl text-green-300/30 floating-reverse"
          style={{ animationDelay: "1.5s" }}
        >
          💼
        </div>
        <div
          className="absolute bottom-20 right-32 text-9xl text-orange-300/20 floating"
          style={{ animationDelay: "2s" }}
        >
          👑
        </div>
        <div
          className="absolute top-32 left-1/3 text-5xl text-purple-300/30 floating-reverse"
          style={{ animationDelay: "2.5s" }}
        >
          ✈️
        </div>
      </div>

      <Layout>
        <div className="relative z-10">
          {/* Enhanced Hero Section */}
          <section className="pt-16 pb-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="glass-readable text-readable-light border-primary/20 mb-6 px-8 py-4 text-xl font-bold animate-pulse"
              >
                🏆 Award-Winning Since 2017
              </Badge>
              <h1 className="text-display-xl text-readable-light mb-6 text-glow">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Benazir Yakta
                </span>
              </h1>
              <p className="text-body-lg text-readable-light max-w-5xl mx-auto">
                Afghanistan's{" "}
                <span className="text-primary-brand font-bold">
                  pioneering women-led enterprise
                </span>{" "}
                dedicated to connecting farmers with global markets while
                empowering women and promoting{" "}
                <span className="text-accent-brand font-bold">
                  sustainable trade practices
                </span>
                .
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="glass-readable rounded-2xl px-6 py-4 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-readable-light">
                    Years Leading
                  </div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-600">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Major Awards
                  </div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Women Employed
                  </div>
                </div>
                <div className="glass rounded-2xl px-6 py-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Global Markets
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Company Story with Timeline */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  📖 Our Journey
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  From Vision to{" "}
                  <span className="text-primary text-glow">Global Success</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  Discover how Benazir Yakta Trading Company became
                  Afghanistan's leading exporter
                </p>
              </div>

              {/* Creative Zigzag Timeline */}
              <div className="space-y-24">
                {/* 2017 - Foundation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="glass rounded-3xl p-8 border border-primary/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          🏢
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                            2017 - Foundation
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">
                            Registered with Ministry of Industry & Commerce
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        "Benazir Yakta Trading Company was registered with the
                        Ministry of Industry and Commerce of Afghanistan in 2017
                        and has since established itself as a pioneering
                        enterprise in the export sector."
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-primary">
                            2017
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Year Founded
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-600">
                            1st
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Women-Led
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl flex items-center justify-center text-9xl">
                        📋
                      </div>
                      <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-2 border border-primary/30">
                        <span className="text-primary font-bold">
                          ✅ Official Registration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* First in Air Corridor */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl flex items-center justify-center text-9xl">
                        ✈️
                      </div>
                      <div className="absolute -top-6 -left-6 glass rounded-2xl px-4 py-2 border border-green-500/30">
                        <span className="text-green-600 font-bold">
                          🥇 First Achievement
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="order-2">
                    <div className="glass rounded-3xl p-8 border border-green-500/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          ✈️
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                            Air Corridor Pioneer
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">
                            First Women-Led Enterprise
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        "Benazir Yakta Trading Company was the first women-led
                        enterprise to utilize the air corridor for exporting
                        fresh and dried fruits from Afghanistan, contributing
                        significantly to the global presence of Afghan
                        products."
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-600">
                            1st
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Air Corridor User
                          </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            Global
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Presence
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards & Recognition */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="glass rounded-3xl p-8 border border-yellow-500/20 transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl mr-4">
                          🏆
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                            Multiple Awards
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300">
                            Outstanding Export Performance
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        "Due to its outstanding contributions to the export
                        industry, the company was recognized as the Best Woman
                        in Export and, for two consecutive years, was awarded
                        the second and third positions as Afghanistan's Best
                        Exporter of the Year."
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-yellow-600">
                            🥇
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Best Woman
                          </div>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-orange-600">
                            🥈
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            2nd Best
                          </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-red-600">
                            🥉
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            3rd Best
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl flex items-center justify-center text-9xl">
                        👑
                      </div>
                      <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-2 border border-yellow-500/30">
                        <span className="text-yellow-600 font-bold">
                          🏆 Multiple Awards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Mission, Vision, Values Grid */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🎯 Our Foundation
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Mission, Vision &{" "}
                  <span className="text-primary text-glow">Values</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Mission - Enhanced */}
                <Card className="card-3d glass border-primary/20 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 group-hover:from-primary/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed mb-6">
                      To enhance global access to high-quality Afghan
                      agricultural products while supporting women's economic
                      empowerment and promoting ethical, sustainable business
                      practices.
                    </p>
                    <div className="flex justify-center">
                      <Badge
                        variant="outline"
                        className="border-primary/50 text-primary"
                      >
                        From PDF: Authentic Mission
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Vision - Enhanced */}
                <Card className="card-3d glass border-green-500/20 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed mb-6">
                      To become the leading exporter of Afghan dried fruits,
                      nuts, and spices, recognized for quality, sustainability,
                      and social responsibility.
                    </p>
                    <div className="flex justify-center">
                      <Badge
                        variant="outline"
                        className="border-green-500/50 text-green-600"
                      >
                        Excellence & Leadership
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Values - Enhanced */}
                <Card className="card-3d glass border-blue-500/20 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                      Core Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          Quality Excellence
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          Sustainability
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-pink-500" />
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          Women's Empowerment
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          Fair Trade
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Creative Awards Showcase */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🏆 Recognition & Awards
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Achievements &{" "}
                  <span className="text-primary text-glow">Recognition</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  Our commitment to excellence has been recognized by
                  Afghanistan's most prestigious institutions
                </p>
              </div>

              {/* Main Awards Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="card-3d glass border-yellow-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Crown className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                      Best Woman in Export
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      Afghanistan Chamber of Commerce & Industries
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Recognized for outstanding contributions to Afghanistan's
                      export industry and exemplary women's leadership.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-yellow-500/50 text-yellow-600"
                    >
                      🥇 First Place
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-orange-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                      2nd Best Exporter
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      Afghanistan's Best Exporter of the Year
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Achieved second place in Afghanistan's most prestigious
                      export competition for exceptional performance.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-orange-500/50 text-orange-600"
                    >
                      🥈 Second Place
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-red-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Trophy className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                      3rd Best Exporter
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      Consecutive Year Achievement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Maintained excellence with third place in the following
                      year's Best Exporter competition.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-red-500/50 text-red-600"
                    >
                      🥉 Third Place
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Recognition */}
              <div className="glass rounded-3xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Professional Memberships
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Afghanistan Women's Chamber of Commerce
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Briefcase className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Afghanistan Chamber of Commerce & Industries
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Globe className="h-6 w-6 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Afghanistan International Chamber of Commerce
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Women Empowerment Section */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-3xl p-8 lg:p-16 border border-white/10 bg-gradient-to-br from-pink-500/5 to-purple-500/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge
                      variant="secondary"
                      className="mb-6 px-6 py-3 text-lg font-bold"
                    >
                      👩‍💼 Women's Leadership
                    </Badge>
                    <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-8">
                      Empowering{" "}
                      <span className="text-pink-600 text-glow">
                        Afghan Women
                      </span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium leading-relaxed">
                      As a women-led enterprise, we are committed to empowering
                      women and creating economic opportunities. We provide
                      employment to{" "}
                      <span className="text-primary font-bold">
                        100+ Afghan women
                      </span>
                      , including both full-time and seasonal positions.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Our founder and CEO,{" "}
                      <span className="text-pink-600 font-bold">
                        Ms. Benazir Yakta
                      </span>
                      , leads by example in demonstrating that women can
                      successfully build and manage international trading
                      companies while contributing to their communities.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-800 dark:text-white">
                            20 Full-time Female Employees
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Permanent positions with benefits
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-800 dark:text-white">
                            80 Seasonal Female Workers
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Flexible seasonal employment
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-800 dark:text-white">
                            Skills Training Programs
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Continuous development opportunities
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500">
                      <div className="text-6xl mb-4">👩‍💼</div>
                      <div className="text-4xl font-bold text-pink-600 text-glow mb-2">
                        20
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        Full-time
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Female Employees
                      </div>
                    </div>
                    <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500">
                      <div className="text-6xl mb-4">👩‍🌾</div>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        80
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        Seasonal
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Workers
                      </div>
                    </div>
                    <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500">
                      <div className="text-6xl mb-4">🎓</div>
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        100%
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        Training
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Coverage
                      </div>
                    </div>
                    <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500">
                      <div className="text-6xl mb-4">👑</div>
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        1st
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        Women-Led
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Enterprise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Global Presence with Interactive Map Feel */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🌍 International Reach
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Global{" "}
                  <span className="text-primary text-glow">Presence</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  From Afghanistan to the world - our international network
                  spans multiple continents
                </p>
              </div>

              {/* Headquarters */}
              <div className="mb-16">
                <Card className="card-3d glass border-primary/20 max-w-2xl mx-auto">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                      Headquarters
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      Shahrak-e-Omid Sabz, District 6, Kabul, Afghanistan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Our main operations center with state-of-the-art
                      processing facilities and quality control systems.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Badge
                        variant="outline"
                        className="border-primary/50 text-primary"
                      >
                        Main Processing
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-green-500/50 text-green-600"
                      >
                        Quality Control
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* International Offices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="card-3d glass border-blue-500/20 transform hover:scale-105 transition-all duration-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                      🇬🇧 United Kingdom
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      European Operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Representative office managing European market operations
                      and customer relationships.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-orange-500/20 transform hover:scale-105 transition-all duration-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                      🇦🇪 Dubai, UAE
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Middle East Hub
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Regional distribution center serving Gulf markets and
                      facilitating Middle East operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-3d glass border-green-500/20 transform hover:scale-105 transition-all duration-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                      🇮🇳 India
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Asian Operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      South Asian office managing regional partnerships and
                      expanding market presence.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Export Markets */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                  Export Markets
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-lg border-blue-500/50 text-blue-600"
                  >
                    🇬🇧 United Kingdom
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-lg border-red-500/50 text-red-600"
                  >
                    🇨🇭 Switzerland
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-lg border-orange-500/50 text-orange-600"
                  >
                    🇦🇪 Dubai
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-lg border-blue-500/50 text-blue-600"
                  >
                    🇫🇷 France
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-lg border-green-500/50 text-green-600"
                  >
                    🇮🇳 India
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* International Exhibitions Showcase */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🌐 Trade Exhibitions
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  International{" "}
                  <span className="text-primary text-glow">Exhibitions</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
                  Showcasing Afghan products at the world's most prestigious
                  trade exhibitions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-primary/20">
                  <div className="text-6xl mb-6">����</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Gulfood Dubai
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Middle East's largest food and beverage exhibition,
                    showcasing our premium products to international buyers.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-orange-500/50 text-orange-600"
                  >
                    🇦🇪 Dubai
                  </Badge>
                </div>

                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-green-500/20">
                  <div className="text-6xl mb-6">🏙️</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Global Village Dubai
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    International cultural and trade showcase highlighting
                    Afghanistan's finest agricultural products.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-green-500/50 text-green-600"
                  >
                    🌐 Cultural
                  </Badge>
                </div>

                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-blue-500/20">
                  <div className="text-6xl mb-6">🇮🇳</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    India Trade Fairs
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Multiple exhibitions across India expanding our reach in
                    South Asian markets.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-blue-500/50 text-blue-600"
                  >
                    🇮🇳 Multi-City
                  </Badge>
                </div>

                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-red-500/20">
                  <div className="text-6xl mb-6">🇨🇳</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    China Exhibitions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Asian market expansion initiatives building partnerships in
                    the world's largest economy.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-red-500/50 text-red-600"
                  >
                    🇨🇳 China
                  </Badge>
                </div>

                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-purple-500/20">
                  <div className="text-6xl mb-6">🌏</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Central Asia
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Regional exhibitions in Turkmenistan, Kazakhstan, and
                    Uzbekistan strengthening regional ties.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-purple-500/50 text-purple-600"
                  >
                    🌏 Regional
                  </Badge>
                </div>

                <div className="glass rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 border border-green-500/20">
                  <div className="text-6xl mb-6">🇵🇰</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Pakistan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Regional trade partnerships and exhibitions fostering
                    bilateral economic cooperation.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-green-500/50 text-green-600"
                  >
                    🇵🇰 Pakistan
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass rounded-3xl p-12 border border-white/10 bg-gradient-to-br from-primary/5 to-cyan-500/5">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🤝 Join Our Success Story
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Ready to Partner with{" "}
                  <span className="text-primary text-glow">
                    Afghanistan's Leader?
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium max-w-3xl mx-auto">
                  Join hundreds of satisfied customers and partners who trust
                  Benazir Yakta Trading Company for premium Afghan dried fruits
                  and agricultural products.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="btn-glow bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-xl py-6 px-10 rounded-2xl"
                  >
                    <Link to="/marketplace">
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="glass border-primary/30 hover:bg-primary/10 text-xl py-6 px-10 rounded-2xl"
                  >
                    <Link to="/partnership">Become a Partner</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
