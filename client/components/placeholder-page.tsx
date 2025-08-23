import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center px-6 py-16">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Construction className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              This page is under development. Continue prompting to help build out this section!
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/" className="flex items-center justify-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
