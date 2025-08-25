import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  Building,
  Users,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/layout";
import { Layout } from "@/components/layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-4xl text-blue-200/20 floating">
          📞
        </div>
        <div
          className="absolute top-1/3 right-20 text-5xl text-green-200/20 floating-reverse"
          style={{ animationDelay: "0.5s" }}
        >
          ✉️
        </div>
        <div
          className="absolute bottom-32 left-1/4 text-6xl text-blue-300/20 floating"
          style={{ animationDelay: "1s" }}
        >
          🌍
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-4xl text-green-300/20 floating-reverse"
          style={{ animationDelay: "1.5s" }}
        >
          📍
        </div>
      </div>

      <Layout>
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="glass text-primary border-primary/20 mb-6 px-4 py-2"
              >
                Get in Touch
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 text-glow">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Have questions about our products or services? Want to become a
                partner? We're here to help and would love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Information Cards */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {/* Phone */}
                <Card className="card-3d glass border-blue-500/20 hover:border-blue-500/40">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-white">
                      Phone
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Call us directly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      +93 77 10 10 70
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Available 24/7 for urgent inquiries
                    </p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="card-3d glass border-green-500/20 hover:border-green-500/40">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-white">
                      Email
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Send us a message
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Benaziryakta@gmail.com
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="card-3d glass border-purple-500/20 hover:border-purple-500/40">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-white">
                      Address
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Visit our headquarters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      Shahrak-e-Omid Sabz
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      District 6, Kabul, Afghanistan
                    </p>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="card-3d glass border-orange-500/20 hover:border-orange-500/40">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-white">
                      Business Hours
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      When we're available
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      Sunday - Thursday
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      8:00 AM - 6:00 PM (AFT)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Form and Global Offices */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="glass rounded-3xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Send us a{" "}
                      <span className="text-primary text-glow">Message</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="glass border-primary/30"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="glass border-primary/30"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="glass border-primary/30"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="inquiryType"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Inquiry Type
                        </Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, inquiryType: value })
                          }
                        >
                          <SelectTrigger className="glass border-primary/30">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="partnership">
                              Partnership
                            </SelectItem>
                            <SelectItem value="orders">
                              Product Orders
                            </SelectItem>
                            <SelectItem value="support">
                              Customer Support
                            </SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="glass border-primary/30"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="glass border-primary/30"
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-glow">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Global Offices */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Global{" "}
                      <span className="text-primary text-glow">Offices</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      We have offices worldwide to better serve our
                      international partners and customers.
                    </p>
                  </div>

                  {/* Afghanistan HQ */}
                  <Card className="card-3d glass border-blue-500/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white">
                            Afghanistan (Headquarters)
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            Main operations and processing facility
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Shahrak-e-Omid Sabz, District 6, Kabul, Afghanistan
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            +93 77 10 10 70
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Benaziryakta@gmail.com
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* UK Office */}
                  <Card className="card-3d glass border-green-500/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <Globe className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white">
                            United Kingdom
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            European operations and partnerships
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Representative Office, United Kingdom
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            European market coordination
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dubai Office */}
                  <Card className="card-3d glass border-orange-500/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white">
                            Dubai, UAE
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            Middle East regional hub
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Representative Office, Dubai, UAE
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Gulf market distribution
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* India Office */}
                  <Card className="card-3d glass border-purple-500/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white">
                            India
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            South Asian market operations
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-purple-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Representative Office, India
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-purple-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Regional partnerships and sales
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    Frequently{" "}
                    <span className="text-primary text-glow">
                      Asked Questions
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quick answers to common questions about our products and
                    services
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        What products do you offer?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We offer premium dried fruits (almonds, walnuts,
                        raisins, apricots, figs, pistachios, pine nuts) and
                        spices.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Do you ship internationally?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Yes, we ship to over 15 countries worldwide including
                        UK, UAE, India, and many others.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        How can I become a partner?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Visit our Partnership page to learn about requirements
                        and submit an application.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        What are your quality standards?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We maintain international food safety standards and
                        conduct rigorous quality control at every stage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        How long does shipping take?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Shipping times vary by destination, typically 5-15
                        business days depending on location.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Do you offer bulk orders?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Yes, we specialize in bulk orders for businesses and
                        distributors with competitive pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Ready to{" "}
                  <span className="text-primary text-glow">Connect?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Whether you're interested in our products, partnership
                  opportunities, or have any questions, we're here to help and
                  excited to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="btn-glow"
                    onClick={() => (window.location.href = "tel:+93771010170")}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: +93 77 10 10 70
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-primary/30"
                    onClick={() =>
                      (window.location.href = "mailto:Benaziryakta@gmail.com")
                    }
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
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
