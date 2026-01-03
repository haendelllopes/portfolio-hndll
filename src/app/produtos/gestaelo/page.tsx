export default function GestaeloPage() {
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
            <span className="text-sm text-gray-900">Gestaelo</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              Gestaelo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Resolve a gestão integrada de processos e workflows, centralizando informações e otimizando operações.
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

            {/* Bloco 1: Desafio da gestão de processos */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organizações frequentemente enfrentam o desafio de gerenciar processos e workflows de forma integrada e eficiente.
                É comum que informações e tarefas estejam dispersas em múltiplas ferramentas e sistemas, sem visibilidade clara do fluxo completo e sem centralização que permita otimização e controle efetivo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quando a gestão de processos não está integrada, surgem desafios operacionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>informações fragmentadas em múltiplas ferramentas</li>
                <li>falta de visibilidade sobre o fluxo completo de processos</li>
                <li>dificuldade de identificar gargalos e oportunidades de otimização</li>
                <li>desafios na coordenação entre diferentes etapas e responsáveis</li>
              </ul>
            </div>

            {/* Bloco 2: Necessidade de integração */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do outro lado, gestores e equipes lidam com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>falta de visibilidade sobre o status de processos</li>
                <li>dificuldade de rastrear progresso e identificar bloqueios</li>
                <li>ausência de ferramentas para otimizar workflows</li>
              </ul>
            </div>

            {/* Bloco 3: Origem do Gestaelo */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário de necessidade de gestão integrada deu origem ao Gestaelo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma plataforma que centralizasse a gestão de processos e workflows, facilitando a visibilidade, o controle e a otimização de operações.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Gestaelo foi concebido como uma plataforma de gestão integrada de processos, onde organizações podem mapear, executar e otimizar workflows de forma centralizada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A ferramenta permite definir processos, atribuir responsabilidades, rastrear progresso e identificar oportunidades de melhoria, tudo em um único ambiente integrado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o Gestaelo oferece visibilidade em tempo real sobre o status de processos, facilitando a coordenação entre equipes e a identificação de gargalos que impactam a eficiência operacional.
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
                A gestão de processos falha não por falta de ferramentas, mas por falta de integração e visibilidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Organizações frequentemente operam com informações e tarefas dispersas em múltiplos sistemas, sem visibilidade clara do fluxo completo, sem centralização que permita otimização e sem ferramentas que facilitem a coordenação entre diferentes etapas e responsáveis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esses gargalos geram impactos operacionais relevantes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>perda de tempo na busca de informações dispersas</li>
                <li>dificuldade de identificar gargalos e oportunidades de otimização</li>
                <li>falta de visibilidade para coordenação efetiva</li>
                <li>desafios no rastreamento de progresso e identificação de bloqueios</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O custo não é apenas de eficiência. É de visibilidade, controle e otimização contínua.
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
                Se a gestão de processos fosse apoiada por uma plataforma integrada que centralizasse informações, workflows e visibilidade, seria possível otimizar operações, facilitar coordenação e identificar oportunidades de melhoria de forma mais efetiva.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar centralização, visibilidade e ferramentas de otimização, a gestão de processos deixa de ser fragmentada e passa a ser integrada e otimizável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada à necessidade de organizações que buscam otimizar operações através de gestão integrada e visibilidade.
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
                A inteligência artificial foi incorporada ao Gestaelo como facilitadora da otimização de processos e identificação de padrões, e não como substituto da gestão humana.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para identificar gargalos, sugerir otimizações de workflow e analisar padrões de execução que podem informar melhorias contínuas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA foi desenhada para operar sobre dados de processos e workflows, gerando insights e recomendações práticas. Essa decisão priorizou utilidade, precisão e aplicabilidade, mesmo que isso implicasse menor grau de automação completa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação completa de processos</li>
                <li>Maior ênfase em visibilidade e análise</li>
                <li>Uso da IA como apoio à otimização, não como substituto da gestão humana</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para analisar padrões de execução ao longo do tempo, identificando tendências e oportunidades de otimização, sempre com o objetivo de tornar a gestão de processos mais eficiente e informada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa gestão de processos exige decisão humana informada, e IA pode amplificar essa decisão através de análise e insights.
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
                A execução priorizou um protótipo capaz de demonstrar valor rapidamente, com foco na centralização de processos e visibilidade básica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>implementar mapeamento e definição de processos</li>
                <li>permitir rastreamento de progresso e status</li>
                <li>oferecer visibilidade básica sobre workflows</li>
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
                O principal aprendizado foi que gestão integrada de processos é fundamental para eficiência operacional, mas deve ser complementada por visibilidade e ferramentas de análise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A experiência mostrou que organizações valorizam plataformas que centralizam informações e facilitam a coordenação, mas precisam de insights acionáveis para otimização contínua.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que otimização de processos é um ciclo contínuo que se beneficia de visibilidade clara e análise de padrões ao longo do tempo.
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
                <span className="font-semibold text-gray-900">Foco:</span> Centralização, visibilidade e otimização
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
                Atuei de forma individual e ponta a ponta na concepção, desenvolvimento e execução do Gestaelo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fui responsável pela definição do problema, desenho da solução, arquitetura da plataforma, desenvolvimento do protótipo e validação do conceito.
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

