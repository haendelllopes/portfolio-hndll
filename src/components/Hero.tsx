export default function Hero() {
  return (
    <section className="bg-[#fafafa] py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-8 leading-tight">
            Product Owner que transforma IA em produtos estratégicos
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Uso inteligência artificial de forma prática para resolver problemas reais de negócio, criando produtos que entregam valor mensurável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produtos"
              className="px-10 py-4 bg-[#0a0a0a] text-white font-medium rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 ease-in-out"
            >
              Ver produtos
            </a>
            <a
              href="https://www.linkedin.com/in/haendell-lopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 ease-in-out"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}