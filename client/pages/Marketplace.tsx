import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  ShoppingCart, 
  Star, 
  Package, 
  Truck,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react"
import { toast } from "sonner"

// Product data based on the PDF
const products = [
  {
    id: 1,
    name: "Premium Almonds - Type 1",
    category: "Almonds",
    image: "🥜",
    description: "High-quality Afghan almonds, perfectly dried and sorted for premium taste and nutrition.",
    price: 45,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 2,
    name: "Premium Almonds - Type 2",
    category: "Almonds", 
    image: "🌰",
    description: "Second variety of premium Afghan almonds with distinct flavor profile.",
    price: 42,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 3,
    name: "Premium Almonds - Type 3",
    category: "Almonds",
    image: "🥜",
    description: "Third variety offering unique texture and taste, harvested from select regions.",
    price: 48,
    unit: "kg", 
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 4,
    name: "Premium Almonds - Type 4",
    category: "Almonds",
    image: "🌰",
    description: "Fourth variety of our premium almond collection, known for exceptional quality.",
    price: 50,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 87
  },
  {
    id: 5,
    name: "Fresh Walnuts",
    category: "Walnuts",
    image: "🥜",
    description: "Fresh Afghan walnuts with perfect moisture content and rich flavor.",
    price: 38,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 6,
    name: "Green Raisins",
    category: "Raisins",
    image: "🍇",
    description: "Sweet and tender green raisins, naturally sun-dried to perfection.",
    price: 25,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 7,
    name: "Black Raisins",
    category: "Raisins",
    image: "🫐",
    description: "Rich black raisins with intense flavor and natural sweetness.",
    price: 28,
    unit: "kg",
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 8,
    name: "Red Raisins",
    category: "Raisins",
    image: "🍇",
    description: "Premium red raisins with balanced sweetness and soft texture.",
    price: 30,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 9,
    name: "Dried Apricots",
    category: "Apricots",
    image: "🟠",
    description: "Sun-dried apricots with natural sweetness and preserved nutrients.",
    price: 35,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 10,
    name: "Pine Nuts",
    category: "Pine Nuts",
    image: "🌰",
    description: "Premium pine nuts, carefully extracted and processed for culinary excellence.",
    price: 85,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 78
  },
  {
    id: 11,
    name: "Dried Figs",
    category: "Figs",
    image: "🫒",
    description: "Sweet dried figs with natural flavor and soft, chewy texture.",
    price: 40,
    unit: "kg",
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 12,
    name: "Premium Pistachios",
    category: "Pistachios",
    image: "🌰",
    description: "High-quality pistachios with rich taste and perfect roasting.",
    price: 75,
    unit: "kg",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 13,
    name: "Afghan Spice Mix",
    category: "Spices",
    image: "🌶️",
    description: "Traditional Afghan spice blend for authentic flavoring.",
    price: 20,
    unit: "kg",
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 14,
    name: "Cardamom",
    category: "Spices",
    image: "🫘",
    description: "Premium green cardamom pods with intense aroma and flavor.",
    price: 120,
    unit: "kg",
    inStock: true,
    rating: 5.0,
    reviews: 67
  }
]

const categories = ["All", "Almonds", "Walnuts", "Raisins", "Apricots", "Pine Nuts", "Figs", "Pistachios", "Spices"]

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [quantity, setQuantity] = useState(1)
  const [orderForm, setOrderForm] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleOrder = async (product: any) => {
    if (!orderForm.customerName || !orderForm.email || !orderForm.phone || !orderForm.address) {
      toast.error("Please fill in all required fields")
      return
    }

    const orderData = {
      product: product.name,
      quantity: quantity,
      totalPrice: product.price * quantity,
      customer: orderForm,
      orderDate: new Date().toISOString(),
      status: 'pending'
    }

    try {
      // Simulate API call to save order and send notifications
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real implementation, this would:
      // 1. Save to database
      // 2. Send WhatsApp message to +93 77 10 10 70
      // 3. Send email to Benaziryakta@gmail.com
      
      toast.success("Order placed successfully! We'll contact you soon.")
      
      // Reset form
      setOrderForm({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
      })
      setQuantity(1)
      setSelectedProduct(null)
      
    } catch (error) {
      toast.error("Failed to place order. Please try again.")
    }
  }

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 text-4xl text-blue-200/20 floating">🥜</div>
        <div className="absolute top-1/3 right-20 text-5xl text-green-200/20 floating-reverse" style={{animationDelay: '0.5s'}}>🍇</div>
        <div className="absolute bottom-32 left-1/4 text-6xl text-blue-300/20 floating" style={{animationDelay: '1s'}}>🌰</div>
        <div className="absolute top-1/2 right-1/3 text-4xl text-green-300/20 floating-reverse" style={{animationDelay: '1.5s'}}>🫐</div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="glass text-primary border-primary/20 mb-6 px-4 py-2">
              Premium Afghan Dried Fruits
            </Badge>
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 text-glow">
              Premium Marketplace
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our extensive collection of premium dried fruits, nuts, and spices, 
              sourced directly from trusted Afghan farmers.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-glow" : "glass border-primary/30"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="card-3d glass border-primary/20 hover:border-primary/40">
                  <CardHeader className="text-center pb-4">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <CardTitle className="text-lg text-gray-800 dark:text-white">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-primary">
                        ${product.price}
                        <span className="text-sm font-normal text-gray-500">/{product.unit}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <Package className="h-4 w-4" />
                        <span>Premium Quality</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <Truck className="h-4 w-4" />
                        <span>Global Shipping</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4" />
                        <span>Quality Guaranteed</span>
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full mt-6 btn-glow" 
                          disabled={!product.inStock}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Order Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-gray-800 dark:text-white">
                            Order {selectedProduct?.name}
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Fill in your details to place an order. We'll contact you to confirm.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          {/* Quantity Selector */}
                          <div>
                            <Label htmlFor="quantity" className="text-gray-700 dark:text-gray-300">Quantity</Label>
                            <div className="flex items-center space-x-3 mt-1">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="glass border-primary/30"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-xl font-semibold text-gray-800 dark:text-white w-12 text-center">
                                {quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(quantity + 1)}
                                className="glass border-primary/30"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* Total Price */}
                          <div className="glass rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 dark:text-gray-300">Total Price:</span>
                              <span className="text-2xl font-bold text-primary">
                                ${selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : '0.00'}
                              </span>
                            </div>
                          </div>

                          {/* Customer Information */}
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="customerName" className="text-gray-700 dark:text-gray-300">
                                Full Name *
                              </Label>
                              <Input
                                id="customerName"
                                value={orderForm.customerName}
                                onChange={(e) => setOrderForm({...orderForm, customerName: e.target.value})}
                                className="glass border-primary/30"
                                placeholder="Your full name"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                                Email Address *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={orderForm.email}
                                onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                                className="glass border-primary/30"
                                placeholder="your@email.com"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                                Phone Number *
                              </Label>
                              <Input
                                id="phone"
                                value={orderForm.phone}
                                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                                className="glass border-primary/30"
                                placeholder="+1 234 567 8900"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="address" className="text-gray-700 dark:text-gray-300">
                                Shipping Address *
                              </Label>
                              <Textarea
                                id="address"
                                value={orderForm.address}
                                onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                                className="glass border-primary/30"
                                placeholder="Your complete shipping address"
                                rows={3}
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">
                                Additional Notes
                              </Label>
                              <Textarea
                                id="notes"
                                value={orderForm.notes}
                                onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                                className="glass border-primary/30"
                                placeholder="Any special requirements or notes"
                                rows={2}
                              />
                            </div>
                          </div>
                        </div>

                        <DialogFooter>
                          <Button 
                            onClick={() => handleOrder(selectedProduct)}
                            className="w-full btn-glow"
                          >
                            Place Order
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Quality <span className="text-primary text-glow">Guaranteed</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Every product goes through rigorous quality control to ensure you receive only the finest 
                Afghan dried fruits, nuts, and spices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Premium Selection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hand-picked from the finest Afghan farms
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Package className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Expert Processing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Processed using traditional and modern techniques
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Global Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fast and secure shipping worldwide
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
