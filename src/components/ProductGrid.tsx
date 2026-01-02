import products from '@/lib/products'

export default function ProductGrid() {
  return (
    <section id="produtos" className="bg-white py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">
                {product.name}
              </h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-opacity duration-300 ease-in-out hover:opacity-80">
                {product.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
