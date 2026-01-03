export default function RetroeloPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <a href="/#produtos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Projetos
            </a>
            <span className="text-sm text-gray-400 mx-2">/</span>
            <span className="text-sm text-gray-900">Retroelo</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              Retroelo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Resolve a análise retrospectiva de processos e decisões, facilitando aprendizado contínuo através de retrospectivas estruturadas.
            </p>
          </div>
        </div>
      </section>

      {/* Contexto */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Contexto
            </h2>

            {/* Bloco 1: Necessidade de aprendizado contínuo */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Equipes e organizações frequentemente enfrentam o desafio de transformar experiências passadas em aprendizado efetivo.
                É comum que retrospectivas e análises de processos sejam realizadas de forma esporádica ou superficial, sem estrutura que permita capturar insights valiosos e aplicá-los em melhorias concretas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quando a reflexão não acontece de forma estruturada, surgem perdas silenciosas:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>decisões repetidas sem aprendizado</li>
                <li>padrões de erro que se perpetuam</li>
                <li>conhecimento tácito que não é documentado</li>
                <li>dificuldade de identificar o que realmente funcionou</li>
              </ul>
            </div>

            {/* Bloco 2: Desafio da documentação */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do outro lado, gestores e líderes lidam com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>falta de estrutura para conduzir retrospectivas efetivas</li>
                <li>dificuldade de rastrear padrões ao longo do tempo</li>
                <li>ausência de conexão entre retrospectivas e ações práticas</li>
              </ul>
            </div>

            {/* Bloco 3: Origem do Retroelo */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário de necessidade de aprendizado estruturado deu origem ao Retroelo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma ferramenta que estruturasse o processo de retrospectiva, facilitando a captura de aprendizados, a identificação de padrões e a transformação de insights em ações concretas.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Retroelo foi concebido como uma plataforma de análise retrospectiva, onde equipes podem documentar processos, decisões e resultados de forma estruturada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A ferramenta orienta o processo de retrospectiva através de frameworks estruturados, facilitando a identificação do que funcionou, do que não funcionou e do que pode ser melhorado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o Retroelo permite rastrear padrões ao longo do tempo, conectando retrospectivas anteriores e identificando tendências que podem informar decisões futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              O Problema
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O aprendizado organizacional falha não por falta de experiência, mas por falta de estrutura para capturar e aplicar insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A prática de retrospectivas muitas vezes é realizada de forma ad-hoc, sem frameworks consistentes, sem rastreamento de padrões e sem conexão clara entre reflexão e ação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esses gargalos geram impactos silenciosos, porém relevantes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>repetição de erros que poderiam ser evitados</li>
                <li>perda de conhecimento valioso de experiências passadas</li>
                <li>dificuldade de identificar o que realmente funciona</li>
                <li>falta de conexão entre retrospectivas e melhorias práticas</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O custo não é apenas operacional. É de oportunidade, eficiência e crescimento contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hipótese de Produto */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Hipótese de Produto
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Se as retrospectivas fossem tratadas como um processo estruturado, rastreável e conectado, em vez de eventos isolados, seria possível transformar experiências em aprendizado efetivo e melhorias contínuas.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar estrutura, rastreamento e conexão entre retrospectivas, o aprendizado deixa de ser esporádico e passa a ser sistemático e aplicável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada à necessidade de organizações e equipes que buscam melhorar continuamente através do aprendizado estruturado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decisões-chave (uso de IA) */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Decisões-chave (uso de IA)
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A inteligência artificial foi incorporada ao Retroelo como facilitadora da análise e identificação de padrões, e não como substituto do processo de reflexão humana.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para identificar padrões recorrentes entre retrospectivas, sugerir conexões entre eventos passados e presentes, e facilitar a descoberta de insights que podem não ser imediatamente óbvios.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA foi desenhada para operar sobre dados estruturados de retrospectivas, evitando interpretações genéricas ou fora de contexto. Essa decisão priorizou precisão, relevância e utilidade prática, mesmo que isso implicasse menor grau de automação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação completa do processo de retrospectiva</li>
                <li>Maior ênfase em estrutura e rastreabilidade</li>
                <li>Uso da IA como apoio à análise, não como substituto da reflexão humana</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para conectar retrospectivas ao longo do tempo, identificando tendências e padrões que podem informar decisões futuras, sempre com o objetivo de tornar o aprendizado mais efetivo e aplicável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa retrospectiva exige reflexão humana, e IA pode amplificar essa reflexão através de estrutura e conexão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execução */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Execução
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A execução priorizou um experimento capaz de demonstrar valor rapidamente, com foco na estruturação do processo de retrospectiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>estruturar frameworks de retrospectiva reutilizáveis</li>
                <li>facilitar a captura de insights de forma organizada</li>
                <li>permitir rastreamento de padrões ao longo do tempo</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funcionalidades mais complexas e integrações profundas foram deixadas fora do experimento inicial, garantindo foco, velocidade e aprendizado real antes de escalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizados */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Aprendizados
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O principal aprendizado foi que retrospectivas efetivas dependem mais de estrutura e consistência do que de ferramentas complexas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A experiência mostrou que equipes valorizam processos claros e rastreáveis, reforçando que a tecnologia deve facilitar a reflexão, não complicá-la.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que conexão entre retrospectivas ao longo do tempo é fundamental para identificar padrões e tendências que informam decisões futuras.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por fim, ficou claro que decisões boas de produto surgem quando IA é usada para amplificar a reflexão humana, e não para substituí-la.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Atual */}
      <section className="bg-[#f9fafb] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-12 leading-tight">
              Status Atual
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">Estado:</span> Experimento
              </p>
              <p>
                <span className="font-semibold text-gray-900">Objetivo:</span> Exploração e aprendizado
              </p>
              <p>
                <span className="font-semibold text-gray-900">Foco:</span> Estrutura, clareza e rastreabilidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papel e Responsabilidade */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Papel e Responsabilidade
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Atuei de forma individual e ponta a ponta na concepção, desenvolvimento e execução do Retroelo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fui responsável pela definição do problema, desenho da solução, criação dos frameworks de retrospectiva, desenvolvimento do protótipo e validação do conceito.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A atuação individual permitiu controle total sobre a visão do produto, decisões de design e implementação, garantindo consistência e alinhamento com os objetivos desde o início até a execução.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

