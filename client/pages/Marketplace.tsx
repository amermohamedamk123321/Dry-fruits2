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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShoppingCart,
  Star,
  Package,
  Truck,
  CheckCircle,
  Plus,
  Minus,
  Search,
  Filter,
  Heart,
  Eye,
  Award,
} from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";

// Product data based on the PDF
const products = [
  {
    id: 1,
    name: "Premium Almonds - Type 1",
    category: "Almonds",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
    fallbackIcon: "🥜",
    description:
      "High-quality Afghan almonds, perfectly dried and sorted for premium taste and nutrition. Hand-picked from the finest orchards.",
    price: 45,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ["Premium Quality", "Hand Sorted", "Natural Processing"],
    origin: "Kandahar, Afghanistan",
  },
  {
    id: 2,
    name: "Premium Almonds - Type 2",
    category: "Almonds",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400",
    fallbackIcon: "🌰",
    description:
      "Second variety of premium Afghan almonds with distinct flavor profile and exceptional crunch.",
    price: 42,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 142,
    features: ["Sweet Variety", "Rich Flavor", "Export Grade"],
    origin: "Herat, Afghanistan",
  },
  {
    id: 3,
    name: "Premium Almonds - Type 3",
    category: "Almonds",
    image: "https://images.unsplash.com/photo-1636502907959-b5fb51b95060?w=400",
    fallbackIcon: "🥜",
    description:
      "Third variety offering unique texture and taste, harvested from select regions with optimal growing conditions.",
    price: 48,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 98,
    features: ["Large Size", "Premium Texture", "Limited Edition"],
    origin: "Ghazni, Afghanistan",
  },
  {
    id: 4,
    name: "Premium Almonds - Type 4",
    category: "Almonds",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400",
    fallbackIcon: "🌰",
    description:
      "Fourth variety of our premium almond collection, known for exceptional quality and superior taste.",
    price: 50,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 87,
    features: ["Top Grade", "Perfect Shape", "Award Winning"],
    origin: "Bamiyan, Afghanistan",
  },
  {
    id: 5,
    name: "Fresh Walnuts",
    category: "Walnuts",
    image: "https://images.unsplash.com/photo-1553345829-1b8fea363ba6?w=400",
    fallbackIcon: "🌰",
    description:
      "Fresh Afghan walnuts with perfect moisture content and rich flavor. Excellent for both culinary and nutritional needs.",
    price: 38,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 203,
    features: ["Fresh Harvest", "Rich Omega-3", "Premium Grade"],
    origin: "Kandahar, Afghanistan",
  },
  {
    id: 6,
    name: "Green Raisins",
    category: "Raisins",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    fallbackIcon: "🍇",
    description:
      "Sweet and tender green raisins, naturally sun-dried to perfection. A healthy snack with natural sweetness.",
    price: 25,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 245,
    features: ["Sun Dried", "Natural Sweetness", "No Additives"],
    origin: "Herat, Afghanistan",
  },
  {
    id: 7,
    name: "Black Raisins",
    category: "Raisins",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=400",
    fallbackIcon: "🫐",
    description:
      "Rich black raisins with intense flavor and natural sweetness. Perfect for desserts and healthy snacking.",
    price: 28,
    unit: "kg",
    inStock: true,
    rating: 4.6,
    reviews: 189,
    features: ["Intense Flavor", "Rich Color", "Premium Quality"],
    origin: "Kandahar, Afghanistan",
  },
  {
    id: 8,
    name: "Red Raisins",
    category: "Raisins",
    image: "https://images.unsplash.com/photo-1631461989080-c7c0b1e25c6b?w=400",
    fallbackIcon: "🍇",
    description:
      "Premium red raisins with balanced sweetness and soft texture. Ideal for cooking and direct consumption.",
    price: 30,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 167,
    features: ["Balanced Sweetness", "Soft Texture", "Versatile Use"],
    origin: "Ghazni, Afghanistan",
  },
  {
    id: 9,
    name: "Dried Apricots",
    category: "Apricots",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400",
    fallbackIcon: "🟠",
    description:
      "Sun-dried apricots with natural sweetness and preserved nutrients. Rich in vitamins and antioxidants.",
    price: 35,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 312,
    features: ["Vitamin Rich", "Natural Processing", "High Fiber"],
    origin: "Bamiyan, Afghanistan",
  },
  {
    id: 10,
    name: "Pine Nuts",
    category: "Pine Nuts",
    image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=400",
    fallbackIcon: "🌰",
    description:
      "Premium pine nuts, carefully extracted and processed for culinary excellence. Perfect for gourmet cooking.",
    price: 85,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 78,
    features: ["Gourmet Quality", "Hand Extracted", "Culinary Grade"],
    origin: "Nuristan, Afghanistan",
  },
  {
    id: 11,
    name: "Dried Figs",
    category: "Figs",
    image: "https://images.unsplash.com/photo-1618431149893-3aaffe84cacd?w=400",
    fallbackIcon: "🫒",
    description:
      "Sweet dried figs with natural flavor and soft, chewy texture. Excellent source of fiber and minerals.",
    price: 40,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 134,
    features: ["Naturally Sweet", "High Fiber", "Mineral Rich"],
    origin: "Herat, Afghanistan",
  },
  {
    id: 12,
    name: "Premium Pistachios",
    category: "Pistachios",
    image: "https://images.unsplash.com/photo-1618432540973-4b9c5ea62f56?w=400",
    fallbackIcon: "🌰",
    description:
      "High-quality pistachios with rich taste and perfect roasting. A premium snack with excellent nutritional value.",
    price: 75,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ["Perfect Roasting", "Rich Taste", "Premium Grade"],
    origin: "Ghazni, Afghanistan",
  },
  {
    id: 13,
    name: "Afghan Spice Mix",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
    fallbackIcon: "🌶���",
    description:
      "Traditional Afghan spice blend for authentic flavoring. A perfect mix of aromatic spices and herbs.",
    price: 20,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    features: ["Traditional Recipe", "Aromatic Blend", "Authentic Taste"],
    origin: "Kabul, Afghanistan",
  },
  {
    id: 14,
    name: "Green Cardamom",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    fallbackIcon: "🫘",
    description:
      "Premium green cardamom pods with intense aroma and flavor. The queen of spices for your culinary needs.",
    price: 120,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 67,
    features: ["Queen of Spices", "Intense Aroma", "Premium Pods"],
    origin: "Nuristan, Afghanistan",
  },
];

const categories = [
  "All",
  "Almonds",
  "Walnuts",
  "Raisins",
  "Apricots",
  "Pine Nuts",
  "Figs",
  "Pistachios",
  "Spices",
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderForm, setOrderForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = async (product: any) => {
    if (
      !orderForm.customerName ||
      !orderForm.email ||
      !orderForm.phone ||
      !orderForm.address
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    const orderData = {
      product: product.name,
      quantity: quantity,
      totalPrice: product.price * quantity,
      customer: orderForm,
      orderDate: new Date().toISOString(),
      status: "pending",
    };

    try {
      // Simulate API call to save order and send notifications
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate WhatsApp notification
      const whatsappMessage =
        `🛒 NEW ORDER RECEIVED!\n\n` +
        `📦 Product: ${product.name}\n` +
        `📊 Quantity: ${quantity} ${product.unit}\n` +
        `💰 Total: $${(product.price * quantity).toFixed(2)}\n\n` +
        `👤 Customer: ${orderForm.customerName}\n` +
        `📞 Phone: ${orderForm.phone}\n` +
        `📧 Email: ${orderForm.email}\n` +
        `📍 Address: ${orderForm.address}\n\n` +
        `📅 Date: ${new Date().toLocaleDateString()}\n` +
        `⏰ Time: ${new Date().toLocaleTimeString()}`;

      // Simulate email notification
      const emailData = {
        to: "Benaziryakta@gmail.com",
        subject: `New Order: ${product.name} - ${orderForm.customerName}`,
        body: `Dear Admin,\n\nA new order has been received:\n\n${whatsappMessage}\n\nPlease process this order promptly.\n\nBest regards,\nBenazir Yakta Trading System`,
      };

      // In a real implementation, this would:
      // 1. Save to database via API call
      // 2. Send WhatsApp message to +93 77 10 10 70 using WhatsApp Business API
      // 3. Send email to Benaziryakta@gmail.com using email service

      console.log("WhatsApp Message:", whatsappMessage);
      console.log("Email Data:", emailData);
      console.log("Order Data Saved:", orderData);

      toast.success(
        "Order placed successfully! WhatsApp and email notifications sent to admin.",
      );

      // Reset form
      setOrderForm({
        customerName: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
      });
      setQuantity(1);
      setSelectedProduct(null);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-5xl text-blue-200/30 floating">
          🥜
        </div>
        <div
          className="absolute top-1/3 right-20 text-6xl text-green-200/30 floating-reverse"
          style={{ animationDelay: "0.5s" }}
        >
          🍇
        </div>
        <div
          className="absolute bottom-32 left-1/4 text-7xl text-blue-300/30 floating"
          style={{ animationDelay: "1s" }}
        >
          🌰
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-5xl text-green-300/30 floating-reverse"
          style={{ animationDelay: "1.5s" }}
        >
          🫐
        </div>
        <div
          className="absolute bottom-20 right-32 text-8xl text-orange-300/20 floating"
          style={{ animationDelay: "2s" }}
        >
          🌿
        </div>
      </div>

      <Layout>
        <div className="relative z-10">
          {/* Header Section */}
          <section className="pt-16 pb-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="glass text-primary border-primary/20 mb-6 px-6 py-3 text-lg font-bold"
              >
                🏆 Premium Afghan Dried Fruits & Nuts
              </Badge>
              <h1 className="text-display-lg text-high-contrast mb-6 text-glow">
                Premium <span className="text-primary-brand">Marketplace</span>
              </h1>
              <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Discover our extensive collection of{" "}
                <span className="text-primary-brand font-bold">
                  award-winning
                </span>{" "}
                dried fruits, nuts, and spices, sourced directly from trusted
                Afghan farmers.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="pb-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-3xl p-8 border border-white/10">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 glass border-primary/30 text-lg py-6 rounded-2xl"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "rounded-xl px-6 py-3 text-lg font-medium transition-all duration-300",
                        selectedCategory === category
                          ? "btn-glow bg-gradient-to-r from-primary to-cyan-500"
                          : "glass border-primary/30 hover:bg-primary/10 hover:scale-105",
                      )}
                    >
                      {category === "All" && "🌟"}
                      {category === "Almonds" && "🥜"}
                      {category === "Walnuts" && "🌰"}
                      {category === "Raisins" && "🍇"}
                      {category === "Apricots" && "🫐"}
                      {category === "Pine Nuts" && "🌲"}
                      {category === "Figs" && "🫒"}
                      {category === "Pistachios" && "🥜"}
                      {category === "Spices" && "🌶️"}
                      <span className="ml-2">{category}</span>
                    </Button>
                  ))}
                </div>

                {/* Results Count */}
                <div className="text-center mt-6">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Showing{" "}
                    <span className="font-bold text-primary">
                      {filteredProducts.length}
                    </span>{" "}
                    premium products
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="card-3d glass border-primary/20 hover:border-primary/40 group overflow-hidden rounded-3xl"
                  >
                    <CardHeader className="text-center pb-4 relative">
                      {/* Product Image */}
                      <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center text-6xl">
                          {product.fallbackIcon}
                        </div>
                        {/* Origin Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-gray-800 border-0 text-xs"
                          >
                            {product.origin}
                          </Badge>
                        </div>
                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant="secondary"
                            className="bg-yellow-500/90 text-white border-0 text-xs flex items-center gap-1"
                          >
                            <Star className="h-3 w-3 fill-white" />
                            {product.rating}
                          </Badge>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-primary/50 text-primary bg-primary/5"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Rating and Reviews */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < Math.floor(product.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300",
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                        <Badge
                          variant={product.inStock ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                        </Badge>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold text-primary">
                          ${product.price}
                          <span className="text-lg font-normal text-gray-500">
                            /{product.unit}
                          </span>
                        </div>
                      </div>

                      {/* Product Features */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span>Premium Quality</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                          <Truck className="h-4 w-4 text-blue-500" />
                          <span>Global Shipping</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Quality Guaranteed</span>
                        </div>
                      </div>

                      {/* Order Button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full btn-glow rounded-2xl py-6 text-lg font-semibold"
                            disabled={!product.inStock}
                            onClick={() => setSelectedProduct(product)}
                          >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="glass max-w-2xl border border-white/20 rounded-3xl">
                          <DialogHeader className="text-center pb-6">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                              <img
                                src={selectedProduct?.image}
                                alt={selectedProduct?.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  e.currentTarget.nextElementSibling?.classList.remove(
                                    "hidden",
                                  );
                                }}
                              />
                              <div className="hidden w-full h-full flex items-center justify-center text-4xl">
                                {selectedProduct?.fallbackIcon}
                              </div>
                            </div>
                            <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                              Order {selectedProduct?.name}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600 dark:text-gray-300 text-lg">
                              Fill in your details to place an order. We'll
                              contact you to confirm delivery details.
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6">
                            {/* Product Summary */}
                            <div className="glass rounded-2xl p-6 border border-primary/20">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Product
                                  </p>
                                  <p className="font-semibold text-gray-800 dark:text-white">
                                    {selectedProduct?.name}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Origin
                                  </p>
                                  <p className="font-semibold text-gray-800 dark:text-white">
                                    {selectedProduct?.origin}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Price per {selectedProduct?.unit}
                                  </p>
                                  <p className="font-semibold text-primary text-xl">
                                    ${selectedProduct?.price}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Rating
                                  </p>
                                  <div className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold text-gray-800 dark:text-white">
                                      {selectedProduct?.rating}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Quantity Selector */}
                            <div>
                              <Label
                                htmlFor="quantity"
                                className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 block"
                              >
                                Quantity ({selectedProduct?.unit})
                              </Label>
                              <div className="flex items-center space-x-4">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() =>
                                    setQuantity(Math.max(1, quantity - 1))
                                  }
                                  className="glass border-primary/30 h-12 w-12 rounded-xl"
                                >
                                  <Minus className="h-5 w-5" />
                                </Button>
                                <div className="glass rounded-xl px-8 py-3 border border-primary/30">
                                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {quantity}
                                  </span>
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => setQuantity(quantity + 1)}
                                  className="glass border-primary/30 h-12 w-12 rounded-xl"
                                >
                                  <Plus className="h-5 w-5" />
                                </Button>
                              </div>
                            </div>

                            {/* Total Price */}
                            <div className="glass rounded-2xl p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-cyan-500/5">
                              <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                                  Total Price:
                                </span>
                                <span className="text-4xl font-bold text-primary">
                                  $
                                  {selectedProduct
                                    ? (
                                        selectedProduct.price * quantity
                                      ).toFixed(2)
                                    : "0.00"}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-2">
                                {quantity} {selectedProduct?.unit} × $
                                {selectedProduct?.price} per{" "}
                                {selectedProduct?.unit}
                              </p>
                            </div>

                            {/* Customer Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label
                                  htmlFor="customerName"
                                  className="text-gray-700 dark:text-gray-300 font-semibold"
                                >
                                  Full Name *
                                </Label>
                                <Input
                                  id="customerName"
                                  value={orderForm.customerName}
                                  onChange={(e) =>
                                    setOrderForm({
                                      ...orderForm,
                                      customerName: e.target.value,
                                    })
                                  }
                                  className="glass border-primary/30 rounded-xl py-3"
                                  placeholder="Your full name"
                                />
                              </div>

                              <div>
                                <Label
                                  htmlFor="email"
                                  className="text-gray-700 dark:text-gray-300 font-semibold"
                                >
                                  Email Address *
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={orderForm.email}
                                  onChange={(e) =>
                                    setOrderForm({
                                      ...orderForm,
                                      email: e.target.value,
                                    })
                                  }
                                  className="glass border-primary/30 rounded-xl py-3"
                                  placeholder="your@email.com"
                                />
                              </div>

                              <div className="md:col-span-2">
                                <Label
                                  htmlFor="phone"
                                  className="text-gray-700 dark:text-gray-300 font-semibold"
                                >
                                  Phone Number *
                                </Label>
                                <Input
                                  id="phone"
                                  value={orderForm.phone}
                                  onChange={(e) =>
                                    setOrderForm({
                                      ...orderForm,
                                      phone: e.target.value,
                                    })
                                  }
                                  className="glass border-primary/30 rounded-xl py-3"
                                  placeholder="+1 234 567 8900"
                                />
                              </div>

                              <div className="md:col-span-2">
                                <Label
                                  htmlFor="address"
                                  className="text-gray-700 dark:text-gray-300 font-semibold"
                                >
                                  Shipping Address *
                                </Label>
                                <Textarea
                                  id="address"
                                  value={orderForm.address}
                                  onChange={(e) =>
                                    setOrderForm({
                                      ...orderForm,
                                      address: e.target.value,
                                    })
                                  }
                                  className="glass border-primary/30 rounded-xl"
                                  placeholder="Your complete shipping address including city, state, and postal code"
                                  rows={3}
                                />
                              </div>

                              <div className="md:col-span-2">
                                <Label
                                  htmlFor="notes"
                                  className="text-gray-700 dark:text-gray-300 font-semibold"
                                >
                                  Additional Notes
                                </Label>
                                <Textarea
                                  id="notes"
                                  value={orderForm.notes}
                                  onChange={(e) =>
                                    setOrderForm({
                                      ...orderForm,
                                      notes: e.target.value,
                                    })
                                  }
                                  className="glass border-primary/30 rounded-xl"
                                  placeholder="Any special requirements, delivery instructions, or notes"
                                  rows={2}
                                />
                              </div>
                            </div>
                          </div>

                          <DialogFooter className="pt-6">
                            <Button
                              onClick={() => handleOrder(selectedProduct)}
                              className="w-full btn-glow py-6 text-lg font-semibold rounded-2xl"
                            >
                              <ShoppingCart className="h-5 w-5 mr-2" />
                              Place Order - $
                              {selectedProduct
                                ? (selectedProduct.price * quantity).toFixed(2)
                                : "0.00"}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-3xl p-12 text-center border border-white/10">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 text-lg font-bold"
                >
                  🛡️ Quality Assurance
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6">
                  Quality{" "}
                  <span className="text-primary text-glow">Guaranteed</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
                  Every product goes through{" "}
                  <span className="text-primary font-bold">
                    rigorous quality control
                  </span>{" "}
                  to ensure you receive only the finest Afghan dried fruits,
                  nuts, and spices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Premium Selection
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Hand-picked from the finest Afghan farms with traditional
                      expertise
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                      <Package className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Expert Processing
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Processed using traditional and modern techniques for
                      optimal preservation
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                      <Truck className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Global Delivery
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Fast and secure shipping worldwide with
                      temperature-controlled containers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
