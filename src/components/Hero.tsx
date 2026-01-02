export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Product Owner que transforma IA em produtos estratégicos
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Uso inteligência artificial de forma prática para resolver problemas reais de negócio, criando produtos que entregam valor mensurável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produtos"
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Ver produtos
          </a>
          <a
            href="https://www.linkedin.com/in/haendell-lopes/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}