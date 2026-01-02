export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a0a0a] mb-10 leading-[1.1] tracking-tight">
            Product Owner que transforma IA em produtos estratégicos
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl leading-relaxed">
            Uso inteligência artificial de forma prática para resolver problemas reais de negócio, criando produtos que entregam valor mensurável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="px-10 py-4 bg-[#0a0a0a] text-white font-medium rounded-lg hover:bg-[#1a1a1a] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out inline-block w-fit"
            >
              Ver produtos
            </a>
            <a
              href="https://www.linkedin.com/in/haendell-lopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0a0a0a] hover:text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out inline-block w-fit"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}