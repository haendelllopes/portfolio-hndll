export default function WmsAcademyPage() {
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
            <span className="text-sm text-gray-900">WMS Academy</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              WMS Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Resolve a capacitação e treinamento em sistemas de gestão de armazéns, democratizando conhecimento especializado.
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

            {/* Bloco 1: Desafio da capacitação */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Profissionais que trabalham com sistemas de gestão de armazéns frequentemente enfrentam o desafio de adquirir e manter conhecimento especializado.
                É comum que treinamento e capacitação sejam realizados de forma esporádica ou dependam de conhecimento tácito de profissionais experientes, sem estrutura que permita aprendizado sistemático e democratização do conhecimento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quando a capacitação não está estruturada, surgem desafios operacionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>dependência de conhecimento tácito de poucos profissionais</li>
                <li>dificuldade de escalar conhecimento para novos membros da equipe</li>
                <li>falta de estrutura para aprendizado contínuo</li>
                <li>desafios na padronização de práticas e processos</li>
              </ul>
            </div>

            {/* Bloco 2: Necessidade de democratização */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do outro lado, organizações e profissionais lidam com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>falta de recursos estruturados para capacitação</li>
                <li>dificuldade de acessar conhecimento especializado</li>
                <li>ausência de plataformas que facilitem aprendizado contínuo</li>
              </ul>
            </div>

            {/* Bloco 3: Origem do WMS Academy */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário de necessidade de capacitação estruturada deu origem ao WMS Academy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma plataforma de capacitação que democratizasse conhecimento especializado em sistemas de gestão de armazéns, facilitando aprendizado sistemático e contínuo.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O WMS Academy foi concebido como uma plataforma de capacitação em sistemas de gestão de armazéns, onde profissionais podem acessar conteúdo estruturado, prático e aplicável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A ferramenta oferece cursos, tutoriais e recursos que cobrem desde conceitos fundamentais até práticas avançadas, permitindo que profissionais adquiram e mantenham conhecimento especializado de forma sistemática.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o WMS Academy facilita a democratização do conhecimento, tornando acessível expertise que antes dependia de experiência prática ou treinamento presencial, permitindo que mais profissionais se capacitem e contribuam efetivamente para operações de armazéns.
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
                A capacitação em sistemas de gestão de armazéns falha não por falta de necessidade, mas por falta de estrutura e acessibilidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Profissionais frequentemente dependem de conhecimento tácito, treinamento esporádico ou experiência prática para adquirir expertise, sem recursos estruturados que permitam aprendizado sistemático e democratização do conhecimento especializado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esses gargalos geram impactos operacionais relevantes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>dependência de poucos profissionais com conhecimento especializado</li>
                <li>dificuldade de escalar conhecimento para novos membros</li>
                <li>falta de padronização de práticas e processos</li>
                <li>desafios no aprendizado contínuo e atualização de conhecimento</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O custo não é apenas de capacitação. É de eficiência, escalabilidade e democratização do conhecimento.
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
                Se a capacitação em sistemas de gestão de armazéns fosse apoiada por uma plataforma estruturada e acessível, seria possível democratizar conhecimento especializado, facilitar aprendizado sistemático e escalar expertise para mais profissionais.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar estrutura, acessibilidade e conteúdo prático, a capacitação deixa de ser dependente e passa a ser sistemática e escalável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada à necessidade de profissionais e organizações que buscam capacitar equipes e democratizar conhecimento especializado em gestão de armazéns.
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
                A inteligência artificial foi incorporada ao WMS Academy como facilitadora da personalização de aprendizado e recomendação de conteúdo, e não como substituto do ensino estruturado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para personalizar trilhas de aprendizado, recomendar conteúdo relevante e adaptar o ritmo de ensino conforme o progresso e necessidades do profissional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA foi desenhada para operar sobre dados de progresso e preferências de aprendizado, gerando recomendações e personalizações práticas. Essa decisão priorizou relevância, utilidade e aplicabilidade, mesmo que isso implicasse menor grau de automação completa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação completa do ensino</li>
                <li>Maior ênfase em estrutura e conteúdo curado</li>
                <li>Uso da IA como apoio à personalização, não como substituto do ensino estruturado</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para analisar padrões de aprendizado, identificando áreas que precisam de mais atenção e sugerindo recursos complementares, sempre com o objetivo de tornar a capacitação mais efetiva e personalizada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa capacitação exige conteúdo estruturado e ensino humano, e IA pode amplificar essa experiência através de personalização e recomendação.
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
                A execução priorizou um MVP capaz de demonstrar valor rapidamente, com foco na estruturação de conteúdo e experiência de aprendizado básica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>estruturar conteúdo em cursos e módulos</li>
                <li>permitir rastreamento de progresso</li>
                <li>oferecer experiência de aprendizado básica e acessível</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funcionalidades mais complexas e integrações profundas foram deixadas fora do MVP, garantindo foco, velocidade e aprendizado real antes de escalar.
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
                O principal aprendizado foi que capacitação efetiva depende mais de estrutura e conteúdo prático do que de tecnologia complexa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A experiência mostrou que profissionais valorizam conteúdo estruturado e aplicável, reforçando que a tecnologia deve facilitar o aprendizado, não complicá-lo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que democratização do conhecimento é fundamental para escalar expertise e reduzir dependência de conhecimento tácito.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por fim, ficou claro que decisões boas de produto surgem quando IA é usada para personalizar e amplificar a experiência de aprendizado, e não para substituir ensino estruturado.
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
                <span className="font-semibold text-gray-900">Estado:</span> MVP funcional
              </p>
              <p>
                <span className="font-semibold text-gray-900">Objetivo:</span> Exploração e aprendizado
              </p>
              <p>
                <span className="font-semibold text-gray-900">Foco:</span> Estrutura, conteúdo e acessibilidade
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
                Atuei de forma individual e ponta a ponta na concepção, desenvolvimento e execução do WMS Academy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fui responsável pela definição do problema, desenho da solução, estruturação de conteúdo, desenvolvimento da plataforma e validação do conceito.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A atuação individual permitiu controle total sobre a visão do produto, decisões de conteúdo e design, garantindo consistência e alinhamento com os objetivos desde o início até a execução.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

