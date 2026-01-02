import products from '@/lib/products'

export default function ProductGrid() {
  return (
    <section id="produtos" className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {product.description}
            </p>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
              {product.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
