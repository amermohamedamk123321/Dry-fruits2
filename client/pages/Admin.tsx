import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts"
import { 
  BarChart3,
  Users,
  Package,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Eye,
  Edit,
  Trash2,
  Plus,
  LogOut,
  Settings,
  FileText,
  Mail,
  Phone,
  Upload,
  Save,
  X,
  Calendar,
  Activity,
  Target,
  Image,
  Globe,
  MessageSquare,
  MapPin
} from "lucide-react"
import { toast } from "sonner"
import { Layout } from "@/components/layout"

// Enhanced mock data with daily granularity
const dailySalesData = [
  { date: 'Mon', revenue: 8500, orders: 24, customers: 18 },
  { date: 'Tue', revenue: 9200, orders: 28, customers: 22 },
  { date: 'Wed', revenue: 7800, orders: 22, customers: 17 },
  { date: 'Thu', revenue: 11000, orders: 32, customers: 25 },
  { date: 'Fri', revenue: 12500, orders: 38, customers: 30 },
  { date: 'Sat', revenue: 15000, orders: 45, customers: 35 },
  { date: 'Sun', revenue: 10200, orders: 29, customers: 23 }
]

const monthlySalesData = [
  { month: 'Jan', revenue: 45000, orders: 156, profit: 13500 },
  { month: 'Feb', revenue: 52000, orders: 178, profit: 15600 },
  { month: 'Mar', revenue: 48000, orders: 165, profit: 14400 },
  { month: 'Apr', revenue: 61000, orders: 203, profit: 18300 },
  { month: 'May', revenue: 58000, orders: 187, profit: 17400 },
  { month: 'Jun', revenue: 67000, orders: 221, profit: 20100 }
]

// Enhanced product sales with colors and detailed breakdown
const productSales = [
  { name: 'Premium Almonds', value: 35, sales: 450, color: '#3b82f6', revenue: 20250 },
  { name: 'Fresh Walnuts', value: 25, sales: 320, color: '#10b981', revenue: 12160 },
  { name: 'Golden Raisins', value: 20, sales: 280, color: '#f59e0b', revenue: 7000 },
  { name: 'Dried Apricots', value: 12, sales: 180, color: '#ef4444', revenue: 6300 },
  { name: 'Pine Nuts', value: 5, sales: 60, color: '#8b5cf6', revenue: 5100 },
  { name: 'Other Products', value: 3, sales: 45, color: '#6b7280', revenue: 900 }
]

const recentOrders = [
  { id: 'ORD-001', customer: 'John Smith', product: 'Premium Almonds', quantity: '50kg', amount: '$2,250', status: 'Pending', date: '2024-01-15', priority: 'high' },
  { id: 'ORD-002', customer: 'Sarah Johnson', product: 'Green Raisins', quantity: '25kg', amount: '$625', status: 'Shipped', date: '2024-01-14', priority: 'medium' },
  { id: 'ORD-003', customer: 'Mike Wilson', product: 'Dried Apricots', quantity: '30kg', amount: '$1,050', status: 'Delivered', date: '2024-01-13', priority: 'low' },
  { id: 'ORD-004', customer: 'Emily Davis', product: 'Walnuts', quantity: '40kg', amount: '$1,520', status: 'Processing', date: '2024-01-12', priority: 'high' },
  { id: 'ORD-005', customer: 'Ahmad Hassan', product: 'Pine Nuts', quantity: '15kg', amount: '$1,275', status: 'Pending', date: '2024-01-11', priority: 'medium' }
]

const partners = [
  { id: 1, name: 'Ahmad Hassan', location: 'Kandahar', crops: 'Almonds', joinDate: '2021-03-15', status: 'Active', performance: 'excellent' },
  { id: 2, name: 'Fatima Karimi', location: 'Herat', crops: 'Raisins', joinDate: '2020-11-20', status: 'Active', performance: 'excellent' },
  { id: 3, name: 'Mohammad Zahir', location: 'Ghazni', crops: 'Pistachios', joinDate: '2022-01-10', status: 'Active', performance: 'good' },
  { id: 4, name: 'Zahra Ahmadi', location: 'Balkh', crops: 'Apricots', joinDate: '2021-08-05', status: 'Pending', performance: 'new' },
  { id: 5, name: 'Omar Rahimi', location: 'Nangarhar', crops: 'Walnuts', joinDate: '2023-02-18', status: 'Active', performance: 'good' }
]

// Content management state
const [contentData, setContentData] = useState({
  companyInfo: {
    name: 'Benazir Yakta Trading Company',
    email: 'Benaziryakta@gmail.com',
    phone: '+93 77 10 10 70',
    address: 'Shahrak-e-Omid Sabz, Kabul, Afghanistan',
    whatsapp: '+93 77 10 10 70'
  },
  socialMedia: {
    facebook: 'https://facebook.com/benaziryakta',
    instagram: 'https://instagram.com/benaziryakta',
    linkedin: 'https://linkedin.com/company/benaziryakta',
    twitter: 'https://twitter.com/benaziryakta'
  },
  products: [
    { id: 1, name: 'Premium Almonds Type 1', price: 45, category: 'Almonds', inStock: true, image: '' },
    { id: 2, name: 'Premium Almonds Type 2', price: 42, category: 'Almonds', inStock: true, image: '' },
    { id: 3, name: 'Fresh Walnuts', price: 38, category: 'Walnuts', inStock: true, image: '' },
    { id: 4, name: 'Green Raisins', price: 25, category: 'Raisins', inStock: true, image: '' },
    { id: 5, name: 'Dried Apricots', price: 35, category: 'Apricots', inStock: true, image: '' }
  ]
})

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('dashboard')
  const [editingProduct, setEditingProduct] = useState(null)
  const [editingPartner, setEditingPartner] = useState(null)
  const [showContentEditor, setShowContentEditor] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (credentials.username === 'amirmohammad' && credentials.password === 'amk123321') {
      setIsAuthenticated(true)
      toast.success('Welcome to Enhanced Admin Dashboard!')
    } else {
      toast.error('Invalid credentials. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCredentials({ username: '', password: '' })
    toast.success('Logged out successfully')
  }

  const handleSaveContent = () => {
    toast.success('Content updated successfully!')
    setShowContentEditor(false)
  }

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'New Product',
      price: 0,
      category: 'Uncategorized',
      inStock: true,
      image: ''
    }
    setContentData(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }))
    toast.success('New product added!')
  }

  const handleDeleteProduct = (productId) => {
    setContentData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.id !== productId)
    }))
    toast.success('Product deleted!')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark flex items-center justify-center px-6">
        <Card className="glass w-full max-w-md border border-white/20">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
              <Settings className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">Admin Login</CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
              Enter your credentials to access the enhanced admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-lg font-semibold text-gray-700 dark:text-gray-300">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="glass border-primary/30 rounded-xl py-3 text-lg"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-lg font-semibold text-gray-700 dark:text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="glass border-primary/30 rounded-xl py-3 text-lg"
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-glow py-4 text-lg rounded-xl">
                Login to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      <Layout>
        <div className="relative z-10">
          {/* Enhanced Header */}
          <div className="glass border-b border-white/20 px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-glow">
                  Enhanced Admin Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Complete business management & analytics
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowContentEditor(true)}
                  className="glass border-primary/30 hover:bg-primary/10"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Content Manager
                </Button>
                <Button variant="outline" onClick={handleLogout} className="glass border-primary/30">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="glass rounded-2xl p-2">
                <TabsTrigger value="dashboard" className="rounded-xl px-6 py-3">📊 Dashboard</TabsTrigger>
                <TabsTrigger value="orders" className="rounded-xl px-6 py-3">📦 Orders</TabsTrigger>
                <TabsTrigger value="inventory" className="rounded-xl px-6 py-3">📋 Inventory</TabsTrigger>
                <TabsTrigger value="partners" className="rounded-xl px-6 py-3">🤝 Partners</TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-xl px-6 py-3">📈 Analytics</TabsTrigger>
                <TabsTrigger value="content" className="rounded-xl px-6 py-3">✏️ Content</TabsTrigger>
              </TabsList>

              {/* Enhanced Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-8">
                {/* Enhanced Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="glass border-blue-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                      <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Total Revenue
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-3xl font-bold text-gray-800 dark:text-white">$331,000</div>
                      <p className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12% from last month
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Daily avg: $11,033
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-green-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                      <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Total Orders
                      </CardTitle>
                      <ShoppingCart className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-3xl font-bold text-gray-800 dark:text-white">1,110</div>
                      <p className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +8% from last month
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Today: 32 orders
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-orange-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                      <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Active Partners
                      </CardTitle>
                      <Users className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-3xl font-bold text-gray-800 dark:text-white">20+</div>
                      <p className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +2 new this month
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        5 provinces covered
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-purple-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                      <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Products
                      </CardTitle>
                      <Package className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-3xl font-bold text-gray-800 dark:text-white">14</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <Activity className="h-3 w-3 mr-1" />
                        All in stock
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        8 main categories
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Daily Revenue with Slimmer Candles */}
                  <Card className="glass border border-white/10">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white text-xl">Daily Revenue Overview</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            This week's performance with slimmer candles
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-primary/50 text-primary">Live Data</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dailySalesData} barCategoryGap="20%">
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                          <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                          <YAxis stroke="#6B7280" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value, name) => [`$${value}`, name]}
                          />
                          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Enhanced Product Sales with Color Legend */}
                  <Card className="glass border border-white/10">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-gray-800 dark:text-white text-xl">Product Sales Distribution</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            Sales breakdown by product category
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={productSales}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              innerRadius={40}
                              fill="#8884d8"
                              dataKey="value"
                              stroke="none"
                            >
                              {productSales.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value) => [`${value}%`, 'Share']}
                              contentStyle={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff'
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                        
                        {/* Color Legend */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-800 dark:text-white">Product Legend</h4>
                          {productSales.map((product, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div 
                                className="w-4 h-4 rounded-full" 
                                style={{ backgroundColor: product.color }}
                              ></div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800 dark:text-white">
                                  {product.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {product.value}% • {product.sales} units • ${product.revenue}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Monthly Trend Analysis */}
                <Card className="glass border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-white text-xl">Monthly Performance Trends</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Revenue, orders, and profit trends over the last 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <AreaChart data={monthlySalesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis dataKey="month" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            color: '#fff'
                          }}
                        />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="profit" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Enhanced Recent Orders */}
                <Card className="glass border border-white/10">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-gray-800 dark:text-white text-xl">Recent Orders</CardTitle>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="border-red-500/50 text-red-600">
                          2 High Priority
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Order
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell className="font-semibold">{order.amount}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={order.priority === 'high' ? 'destructive' : order.priority === 'medium' ? 'default' : 'secondary'}
                                className="capitalize"
                              >
                                {order.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Orders Tab */}
              <TabsContent value="orders">
                <Card className="glass border border-white/10">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-gray-800 dark:text-white text-xl">Order Management</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          View and manage all customer orders with enhanced filtering
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Filter by Date
                        </Button>
                        <Button size="sm" className="btn-glow">
                          <Plus className="h-4 w-4 mr-2" />
                          New Order
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell>{order.quantity}</TableCell>
                            <TableCell className="font-semibold">{order.amount}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Mail className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Phone className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Inventory Tab */}
              <TabsContent value="inventory">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Enhanced Inventory Management</h2>
                      <p className="text-gray-600 dark:text-gray-300">Manage products with image upload and detailed tracking</p>
                    </div>
                    <Button onClick={handleAddProduct} className="btn-glow">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contentData.products.map((product) => (
                      <Card key={product.id} className="glass border-primary/20 relative group">
                        <CardHeader>
                          <div className="relative">
                            <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center mb-4">
                              {product.image ? (
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                              ) : (
                                <Package className="h-8 w-8 text-gray-400" />
                              )}
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Upload className="h-3 w-3" />
                            </Button>
                          </div>
                          <CardTitle className="text-lg text-gray-800 dark:text-white">{product.name}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            Category: {product.category}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-primary">
                              ${product.price}/kg
                            </span>
                            <Badge variant={product.inStock ? "default" : "destructive"}>
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Image className="h-4 w-4 mr-1" />
                              Image
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Enhanced Partners Tab */}
              <TabsContent value="partners">
                <Card className="glass border border-white/10">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-gray-800 dark:text-white text-xl">Partner Management</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          Manage farmer partnerships and track performance
                        </CardDescription>
                      </div>
                      <Button className="btn-glow">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Partner
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Crops</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Performance</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {partners.map((partner) => (
                          <TableRow key={partner.id}>
                            <TableCell className="font-medium">{partner.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-gray-400" />
                                <span>{partner.location}</span>
                              </div>
                            </TableCell>
                            <TableCell>{partner.crops}</TableCell>
                            <TableCell>{partner.joinDate}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={
                                  partner.performance === 'excellent' ? 'default' : 
                                  partner.performance === 'good' ? 'secondary' : 'outline'
                                }
                                className="capitalize"
                              >
                                {partner.performance}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={partner.status === 'Active' ? 'default' : 'secondary'}>
                                {partner.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Phone className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Analytics Tab */}
              <TabsContent value="analytics">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Advanced Analytics & Reports</h2>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive business intelligence and insights</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="glass border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-gray-800 dark:text-white">Monthly Revenue Trend</CardTitle>
                        <CardDescription>Revenue growth analysis over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={monthlySalesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                            <XAxis dataKey="month" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                color: '#fff'
                              }}
                            />
                            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    <Card className="glass border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-gray-800 dark:text-white">Order Volume Analysis</CardTitle>
                        <CardDescription>Daily order patterns and trends</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={dailySalesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                            <XAxis dataKey="date" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                color: '#fff'
                              }}
                            />
                            <Bar dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={50} />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Enhanced Content Management Tab */}
              <TabsContent value="content">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Content Management System</h2>
                    <p className="text-gray-600 dark:text-gray-300">Manage website content, product information, and company details</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Company Information Management */}
                    <Card className="glass border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-gray-800 dark:text-white flex items-center">
                          <Building2 className="h-5 w-5 mr-2" />
                          Company Information
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          Update company contact details and information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <Label className="text-sm font-medium">Company Name</Label>
                            <Input 
                              value={contentData.companyInfo.name}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                companyInfo: { ...prev.companyInfo, name: e.target.value }
                              }))}
                              className="glass border-primary/30"
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Email</Label>
                            <Input 
                              value={contentData.companyInfo.email}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                companyInfo: { ...prev.companyInfo, email: e.target.value }
                              }))}
                              className="glass border-primary/30"
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Phone</Label>
                            <Input 
                              value={contentData.companyInfo.phone}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                companyInfo: { ...prev.companyInfo, phone: e.target.value }
                              }))}
                              className="glass border-primary/30"
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">WhatsApp</Label>
                            <Input 
                              value={contentData.companyInfo.whatsapp}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                companyInfo: { ...prev.companyInfo, whatsapp: e.target.value }
                              }))}
                              className="glass border-primary/30"
                            />
                          </div>
                        </div>
                        <Button onClick={handleSaveContent} className="w-full btn-glow">
                          <Save className="h-4 w-4 mr-2" />
                          Save Company Info
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Social Media Management */}
                    <Card className="glass border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-gray-800 dark:text-white flex items-center">
                          <Globe className="h-5 w-5 mr-2" />
                          Social Media Links
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          Manage social media presence and links
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <Label className="text-sm font-medium">Facebook</Label>
                            <Input 
                              value={contentData.socialMedia.facebook}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                              }))}
                              className="glass border-primary/30"
                              placeholder="https://facebook.com/..."
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Instagram</Label>
                            <Input 
                              value={contentData.socialMedia.instagram}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                              }))}
                              className="glass border-primary/30"
                              placeholder="https://instagram.com/..."
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">LinkedIn</Label>
                            <Input 
                              value={contentData.socialMedia.linkedin}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                socialMedia: { ...prev.socialMedia, linkedin: e.target.value }
                              }))}
                              className="glass border-primary/30"
                              placeholder="https://linkedin.com/company/..."
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Twitter</Label>
                            <Input 
                              value={contentData.socialMedia.twitter}
                              onChange={(e) => setContentData(prev => ({
                                ...prev,
                                socialMedia: { ...prev.socialMedia, twitter: e.target.value }
                              }))}
                              className="glass border-primary/30"
                              placeholder="https://twitter.com/..."
                            />
                          </div>
                        </div>
                        <Button onClick={handleSaveContent} className="w-full btn-glow">
                          <Save className="h-4 w-4 mr-2" />
                          Save Social Media
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <Card className="glass border border-white/10">
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">Quick Content Actions</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        Common content management tasks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                          <Image className="h-8 w-8 mb-2" />
                          <span>Manage Product Images</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                          <FileText className="h-8 w-8 mb-2" />
                          <span>Update Content Pages</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                          <Users className="h-8 w-8 mb-2" />
                          <span>Partner Profiles</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
                          <Settings className="h-8 w-8 mb-2" />
                          <span>Site Settings</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  )
}
