import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
