import Link from 'next/link'
import products from '@/lib/products'

export default function ProductGrid() {
  const getProductRoute = (productName: string): string | null => {
    const routes: Record<string, string> = {
      'Navigator': '/produtos/navigator',
      'Retroelo': '/produtos/retroelo',
      '3D WMS': '/produtos/3d-wms',
      'Gestaelo': '/produtos/gestaelo',
      'WMS Academy': '/produtos/wms-academy'
    }
    return routes[productName] || null
  }

  return (
    <section id="produtos" className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const CardContent = (
              <>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <span className="inline-block px-5 py-2.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-opacity duration-300 ease-in-out hover:opacity-80">
                  {product.status}
                </span>
              </>
            )

            const route = getProductRoute(product.name)

            if (route) {
              return (
                <Link
                  key={product.name}
                  href={route}
                  className="bg-white rounded-xl p-10 md:p-12 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer block"
                >
                  {CardContent}
                </Link>
              )
            }

            return (
              <div
                key={product.name}
                className="bg-white rounded-xl p-10 md:p-12 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
              >
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
