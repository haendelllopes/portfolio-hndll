export default function ThreeDWmsPage() {
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
            <span className="text-sm text-gray-900">3D WMS</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              3D WMS
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Resolve a gestão visual e espacial de estoques em armazéns, permitindo visualização tridimensional e otimização de espaço.
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

            {/* Bloco 1: Desafio da gestão de armazéns */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gestores de armazéns frequentemente enfrentam o desafio de visualizar e otimizar o uso do espaço físico de forma eficiente.
                É comum que sistemas de gestão de estoque operem com dados tabulares e bidimensionais, sem representação visual clara da disposição espacial dos produtos e do aproveitamento do espaço disponível.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quando a visualização espacial não está disponível, surgem desafios operacionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>dificuldade de identificar locais subutilizados</li>
                <li>falta de visibilidade sobre a disposição real dos produtos</li>
                <li>desafios na otimização de layout e fluxo</li>
                <li>dificuldade de planejar expansões ou reorganizações</li>
              </ul>
            </div>

            {/* Bloco 2: Necessidade de visibilidade */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do outro lado, operadores e gestores lidam com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>falta de representação visual clara do espaço físico</li>
                <li>dificuldade de comunicar layout e disposição</li>
                <li>ausência de ferramentas para simular mudanças de layout</li>
              </ul>
            </div>

            {/* Bloco 3: Origem do 3D WMS */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário de necessidade de visualização espacial deu origem ao 3D WMS.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma ferramenta que permitisse visualização tridimensional de armazéns, facilitando a gestão espacial, a otimização de layout e o planejamento de operações.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O 3D WMS foi concebido como uma plataforma de gestão visual de armazéns, onde gestores podem visualizar a disposição espacial de produtos em três dimensões.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A ferramenta permite mapear o espaço físico do armazém, visualizar a ocupação atual, identificar áreas subutilizadas e simular diferentes configurações de layout.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o 3D WMS oferece ferramentas de análise espacial, permitindo otimizar o uso do espaço, melhorar o fluxo de operações e planejar expansões ou reorganizações de forma mais informada.
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
                A gestão de armazéns falha não por falta de dados, mas por falta de visualização espacial clara.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sistemas tradicionais de WMS operam com dados tabulares e bidimensionais, sem representação visual do espaço físico, dificultando a otimização de layout, o planejamento de operações e a identificação de oportunidades de melhoria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esses gargalos geram impactos operacionais relevantes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>subutilização de espaço físico disponível</li>
                <li>dificuldade de otimizar layout e fluxo de operações</li>
                <li>falta de visibilidade para planejamento de expansões</li>
                <li>desafios na comunicação de layout e disposição</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O custo não é apenas de espaço. É de eficiência, planejamento e otimização contínua.
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
                Se a gestão de armazéns fosse apoiada por visualização tridimensional clara e ferramentas de análise espacial, seria possível otimizar o uso do espaço, melhorar o planejamento de operações e facilitar a comunicação de layout.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar visualização 3D, análise espacial e simulação de layout, a gestão de armazéns deixa de ser abstrata e passa a ser visual e otimizável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada à necessidade de gestores de armazéns que buscam otimizar espaço e operações através de visualização e análise espacial.
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
                A inteligência artificial foi incorporada ao 3D WMS como facilitadora da otimização espacial e análise de layout, e não como substituto da decisão humana.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para sugerir otimizações de layout, identificar padrões de uso de espaço e recomendar configurações que maximizem eficiência e aproveitamento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA foi desenhada para operar sobre dados espaciais e de ocupação, gerando insights e recomendações práticas. Essa decisão priorizou utilidade, precisão e aplicabilidade, mesmo que isso implicasse menor grau de automação completa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação completa de decisões de layout</li>
                <li>Maior ênfase em visualização e análise</li>
                <li>Uso da IA como apoio à otimização, não como substituto da decisão humana</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para analisar padrões de uso de espaço ao longo do tempo, identificando tendências e oportunidades de otimização, sempre com o objetivo de tornar a gestão de armazéns mais eficiente e informada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa gestão de armazéns exige decisão humana informada, e IA pode amplificar essa decisão através de visualização e análise.
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
                A execução priorizou um protótipo capaz de demonstrar valor rapidamente, com foco na visualização tridimensional e análise espacial básica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>implementar visualização 3D do espaço físico</li>
                <li>permitir mapeamento de produtos e ocupação</li>
                <li>oferecer análise básica de uso de espaço</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funcionalidades mais complexas e integrações profundas foram deixadas fora do protótipo inicial, garantindo foco, velocidade e aprendizado real antes de escalar.
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
                O principal aprendizado foi que visualização espacial é fundamental para gestão efetiva de armazéns, mas deve ser complementada por análise e insights acionáveis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A experiência mostrou que gestores valorizam ferramentas que facilitam a compreensão do espaço físico e permitem simular mudanças antes de implementá-las.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que otimização de espaço é um processo contínuo que se beneficia de visualização clara e análise de padrões ao longo do tempo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por fim, ficou claro que decisões boas de produto surgem quando IA é usada para amplificar a capacidade de análise e otimização humana, e não para substituí-la.
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
                <span className="font-semibold text-gray-900">Estado:</span> Protótipo
              </p>
              <p>
                <span className="font-semibold text-gray-900">Objetivo:</span> Exploração e aprendizado
              </p>
              <p>
                <span className="font-semibold text-gray-900">Foco:</span> Visualização, análise e otimização
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
                Atuei de forma individual e ponta a ponta na concepção, desenvolvimento e execução do 3D WMS.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fui responsável pela definição do problema, desenho da solução, arquitetura da visualização 3D, desenvolvimento do protótipo e validação do conceito.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A atuação individual permitiu controle total sobre a visão do produto, decisões técnicas e de design, garantindo consistência e alinhamento com os objetivos desde o início até a execução.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

