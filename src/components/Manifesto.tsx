export default function Manifesto() {
  return (
    <section className="bg-[#f9fafb] py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6 leading-tight">
                Inteligência artificial não é o objetivo. É o caminho.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A tecnologia mais avançada do mundo não resolve problemas se não estiver conectada a uma visão clara de produto e a necessidades reais de pessoas e negócios.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O que realmente importa é o <span className="font-bold text-[#0a0a0a]">pensamento de produto</span>. Entender profundamente o problema, o contexto em que ele existe, as pessoas que enfrentam esse desafio e o valor que uma solução pode entregar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                IA é uma ferramenta poderosa, mas sem estratégia de produto, ela é apenas código rodando em servidores.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cada decisão importa. Cada escolha técnica, cada feature priorizada, cada métrica acompanhada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mas decisões boas vêm de <span className="font-medium text-gray-900">contexto rico</span>: dados, conversas com usuários, entendimento do negócio, análise de mercado. E decisões melhores vêm do <span className="font-medium text-gray-900">aprendizado contínuo</span> - do que funcionou, do que não funcionou, e do porquê.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Construir produtos com IA não é sobre usar a tecnologia mais nova. É sobre usar a ferramenta certa, no momento certo, para resolver o problema certo.
              </p>
              <p className="text-xl font-semibold text-[#0a0a0a] leading-relaxed">
                É sobre <span className="font-bold">contexto, decisão e aprendizado</span>. É sobre pensar em <span className="font-bold">produto primeiro, tecnologia depois</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}