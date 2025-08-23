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
  Cell
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
  Phone
} from "lucide-react"
import { toast } from "sonner"

// Mock data for dashboard
const salesData = [
  { month: 'Jan', revenue: 45000, orders: 156 },
  { month: 'Feb', revenue: 52000, orders: 178 },
  { month: 'Mar', revenue: 48000, orders: 165 },
  { month: 'Apr', revenue: 61000, orders: 203 },
  { month: 'May', revenue: 58000, orders: 187 },
  { month: 'Jun', revenue: 67000, orders: 221 }
]

const productSales = [
  { name: 'Almonds', value: 35, color: '#3b82f6' },
  { name: 'Walnuts', value: 25, color: '#10b981' },
  { name: 'Raisins', value: 20, color: '#f59e0b' },
  { name: 'Apricots', value: 12, color: '#ef4444' },
  { name: 'Other', value: 8, color: '#8b5cf6' }
]

const recentOrders = [
  { id: 'ORD-001', customer: 'John Smith', product: 'Premium Almonds', quantity: '50kg', amount: '$2,250', status: 'Pending', date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Sarah Johnson', product: 'Green Raisins', quantity: '25kg', amount: '$625', status: 'Shipped', date: '2024-01-14' },
  { id: 'ORD-003', customer: 'Mike Wilson', product: 'Dried Apricots', quantity: '30kg', amount: '$1,050', status: 'Delivered', date: '2024-01-13' },
  { id: 'ORD-004', customer: 'Emily Davis', product: 'Walnuts', quantity: '40kg', amount: '$1,520', status: 'Processing', date: '2024-01-12' }
]

const partners = [
  { id: 1, name: 'Ahmad Hassan', location: 'Kandahar', crops: 'Almonds', joinDate: '2021-03-15', status: 'Active' },
  { id: 2, name: 'Fatima Karimi', location: 'Herat', crops: 'Raisins', joinDate: '2020-11-20', status: 'Active' },
  { id: 3, name: 'Mohammad Zahir', location: 'Ghazni', crops: 'Pistachios', joinDate: '2022-01-10', status: 'Active' },
  { id: 4, name: 'Zahra Ahmadi', location: 'Balkh', crops: 'Apricots', joinDate: '2021-08-05', status: 'Pending' }
]

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (credentials.username === 'amirmohammad' && credentials.password === 'amk123321') {
      setIsAuthenticated(true)
      toast.success('Welcome to Admin Dashboard!')
    } else {
      toast.error('Invalid credentials. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCredentials({ username: '', password: '' })
    toast.success('Logged out successfully')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark flex items-center justify-center px-6">
        <Card className="glass w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800 dark:text-white">Admin Login</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-gray-700 dark:text-gray-300">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="glass border-primary/30"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="glass border-primary/30"
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-glow">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen dynamic-bg dark:dynamic-bg-dark">
      <div className="relative z-10">
        {/* Header */}
        <div className="glass border-b border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Admin Dashboard
            </h1>
            <Button variant="outline" onClick={handleLogout} className="glass border-primary/30">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="glass">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass border-blue-500/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">$331,000</div>
                    <p className="text-xs text-green-600">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card className="glass border-green-500/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Total Orders
                    </CardTitle>
                    <ShoppingCart className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">1,110</div>
                    <p className="text-xs text-green-600">+8% from last month</p>
                  </CardContent>
                </Card>

                <Card className="glass border-orange-500/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Active Partners
                    </CardTitle>
                    <Users className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">500+</div>
                    <p className="text-xs text-green-600">+15 new this month</p>
                  </CardContent>
                </Card>

                <Card className="glass border-purple-500/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Products
                    </CardTitle>
                    <Package className="h-4 w-4 text-purple-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">14</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Active products</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-white">Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-white">Product Sales Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={productSales}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label
                        >
                          {productSales.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Amount</TableHead>
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
                          <TableCell>{order.amount}</TableCell>
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
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Order Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    View and manage all customer orders
                  </CardDescription>
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
                          <TableCell>{order.amount}</TableCell>
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
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Inventory Tab */}
            <TabsContent value="inventory">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Inventory Management</h2>
                  <Button className="btn-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {['Premium Almonds', 'Walnuts', 'Green Raisins', 'Dried Apricots', 'Pine Nuts', 'Pistachios'].map((product, index) => (
                        <Card key={index} className="glass border-primary/20">
                          <CardHeader>
                            <CardTitle className="text-lg text-gray-800 dark:text-white">{product}</CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                              Stock: {Math.floor(Math.random() * 500) + 100}kg
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-lg font-bold text-primary">
                                ${Math.floor(Math.random() * 50) + 20}/kg
                              </span>
                              <Badge variant="default">In Stock</Badge>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white">Partner Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Manage farmer partnerships and applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Crops</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {partners.map((partner) => (
                        <TableRow key={partner.id}>
                          <TableCell className="font-medium">{partner.name}</TableCell>
                          <TableCell>{partner.location}</TableCell>
                          <TableCell>{partner.crops}</TableCell>
                          <TableCell>{partner.joinDate}</TableCell>
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

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics & Reports</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">Monthly Revenue Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">Order Volume</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="orders" fill="#10b981" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Content Management</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">Website Content</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        Update homepage and page content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="h-4 w-4 mr-2" />
                          Edit Homepage Content
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Edit className="h-4 w-4 mr-2" />
                          Update Company Information
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Manage Contact Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-gray-800 dark:text-white">Product Management</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        Update product images and descriptions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Package className="h-4 w-4 mr-2" />
                          Update Product Images
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Manage Pricing
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Product Descriptions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
