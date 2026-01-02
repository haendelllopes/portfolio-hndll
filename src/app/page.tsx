import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Manifesto />
      <ProductGrid />
      <Footer />
    </main>
  )
}
