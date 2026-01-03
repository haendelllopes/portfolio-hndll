export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a0a0a] mb-8 leading-[1.1] tracking-tight">
            AI Product Leader focado em produtos com inteligência artificial aplicada a problemas reais.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Conecto visão de produto, inteligência artificial e contexto de negócio para gerar impacto real.
          </p>
          <div className="flex flex-col gap-4 md:gap-5 mb-10">
            <p className="text-xl md:text-2xl font-semibold text-[#0a0a0a] leading-tight">
              IA não é o objetivo. É o caminho.
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-tight">
              Produto vem antes da tecnologia.
            </p>
            <p className="text-lg md:text-xl font-normal text-gray-700 leading-tight">
              Boas decisões nascem de contexto, dados e aprendizado contínuo.
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#0a0a0a] leading-tight">
              Valor real supera hype. Sempre.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#produtos"
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