export default function WmsTwinDigitalPage() {
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
            <span className="text-sm text-gray-900">WMS Twin Digital</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              WMS Twin Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Resolve a gestão visual e espacial de estoques em armazéns através de representação digital, permitindo visualização tridimensional e suporte à decisão gerencial.
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

            {/* Bloco 3: Origem do WMS Twin Digital */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário de necessidade de visualização espacial e representação digital deu origem ao WMS Twin Digital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma ferramenta que permitisse criar uma representação digital do armazém físico, facilitando a gestão espacial, a otimização de layout e o suporte à decisão gerencial.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O WMS Twin Digital foi concebido como uma plataforma que cria uma representação digital determinística do armazém físico, baseada em dados mapeados. A ferramenta permite que gestores visualizem a disposição espacial de produtos em três dimensões e utilizem essa representação para suporte à decisão gerencial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A plataforma não executa movimentações físicas — seu propósito é oferecer visualização e análise espacial para informar decisões. Permite mapear o espaço físico do armazém, criar uma representação digital da ocupação atual, identificar áreas subutilizadas e simular diferentes configurações de layout.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o WMS Twin Digital oferece ferramentas de análise espacial, permitindo otimizar o uso do espaço, melhorar o fluxo de operações e planejar expansões ou reorganizações de forma mais informada, sempre com foco em suporte à decisão gerencial.
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
                A gestão de armazéns falha não por falta de dados, mas por falta de visualização espacial clara e ferramentas que apoiem a decisão gerencial de forma efetiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sistemas tradicionais de WMS operam com dados tabulares e bidimensionais, sem representação visual do espaço físico, dificultando a otimização de layout, o planejamento de operações e a identificação de oportunidades de melhoria. Gestores precisam tomar decisões sobre espaço e layout sem ter uma visão clara e espacial do que está acontecendo.
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
                Se a gestão de armazéns fosse apoiada por um gêmeo digital que oferecesse visualização tridimensional determinística e ferramentas de análise espacial, seria possível otimizar o uso do espaço, melhorar o planejamento de operações e facilitar a comunicação de layout, sempre com foco em suporte à decisão gerencial.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar representação digital determinística, visualização 3D e análise espacial, a gestão de armazéns deixa de ser abstrata e passa a ser visual e apoiada por dados espaciais claros.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada à necessidade de gestores de armazéns que buscam otimizar espaço e operações através de visualização e análise espacial para suporte à decisão.
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
                A inteligência artificial foi incorporada ao WMS Twin Digital como motor de sugestão para otimização espacial e análise de layout. A IA amplia a capacidade de análise, mantendo a decisão sob responsabilidade do gestor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para sugerir otimizações de layout, identificar padrões de uso de espaço e recomendar configurações que maximizem eficiência e aproveitamento. As sugestões são baseadas em análise de dados espaciais e de ocupação, gerando recomendações práticas e acionáveis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA foi desenhada para operar sobre dados espaciais e de ocupação mapeados, gerando insights e recomendações práticas. Essa decisão priorizou utilidade, precisão e aplicabilidade, mesmo que isso implicasse menor grau de automação completa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação completa de decisões de layout</li>
                <li>Maior ênfase em visualização determinística e análise</li>
                <li>IA como motor de sugestão, mantendo decisão final sob responsabilidade do gestor</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para analisar padrões de uso de espaço ao longo do tempo, identificando tendências e oportunidades de otimização, sempre com o objetivo de tornar a gestão de armazéns mais eficiente e informada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa gestão de armazéns exige decisão humana informada, e IA amplia a capacidade de análise através de visualização e sugestões baseadas em dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Construída */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Solução Construída
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A solução construída priorizou um protótipo capaz de demonstrar valor rapidamente, com foco na visualização tridimensional determinística e análise espacial básica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>implementar visualização 3D determinística do espaço físico baseada em dados mapeados</li>
                <li>permitir mapeamento de produtos e ocupação para criação da representação digital</li>
                <li>oferecer análise básica de uso de espaço e sugestões de otimização via IA</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funcionalidades mais complexas, integrações profundas e capacidades de execução física foram deixadas fora do protótipo inicial, garantindo foco, velocidade e aprendizado real antes de escalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo de Demonstração */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <video 
              src="/videos/wms-twin-digital.mp4" 
              controls 
              className="w-full"
              preload="metadata"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="text-sm text-gray-600 mt-4">
              Demonstração técnica do WMS Twin Digital mostrando visualização tridimensional determinística do armazém e sugestões de otimização geradas pelo motor de IA.
            </p>
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
                O principal aprendizado foi que visualização espacial determinística é fundamental para gestão efetiva de armazéns, mas deve ser complementada por análise e insights acionáveis que apoiem a decisão gerencial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A experiência mostrou que gestores valorizam ferramentas que facilitam a compreensão do espaço físico através de representação digital clara e permitem simular mudanças antes de implementá-las, mesmo quando a visualização é baseada em dados mapeados e não em tempo real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que otimização de espaço é um processo contínuo que se beneficia de visualização determinística clara e análise de padrões ao longo do tempo, mesmo sem execução física automatizada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por fim, ficou claro que decisões boas de produto surgem quando IA é usada como motor de sugestão que amplia a capacidade de análise, mantendo a decisão final sob responsabilidade do gestor.
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
                Atuei de forma 100% individual e ponta a ponta na concepção, desenvolvimento e execução do WMS Twin Digital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fui responsável pela definição do problema, desenho da solução, arquitetura da representação digital determinística, desenvolvimento do protótipo de visualização 3D, implementação do motor de sugestão via IA e validação do conceito.
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

