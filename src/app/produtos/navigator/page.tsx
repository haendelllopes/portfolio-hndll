export default function NavigatorPage() {
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
            <span className="text-sm text-gray-900">Navigator</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              Navigator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Onboarding estruturado para reduzir incerteza, acelerar autonomia e preservar cultura.
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

            {/* Bloco 1: Experiência do novo colaborador */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Entrar em um novo emprego costuma ser um momento de expectativa — mas também de insegurança.
                É comum que novos colaboradores dependam da disponibilidade do líder direto ou de colegas para entender processos, ferramentas, políticas internas e até expectativas do papel.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Quando esse suporte não acontece no tempo certo, surgem frustrações silenciosas:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>dúvidas não verbalizadas</li>
                <li>sensação de estar "atrasado"</li>
                <li>medo de incomodar</li>
                <li>dificuldade de se sentir pertencente</li>
              </ul>
            </div>

            {/* Bloco 2: Dor da liderança */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do outro lado, gestores lidam com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>falta de visibilidade sobre o progresso do onboarding</li>
                <li>dependência de interações manuais</li>
                <li>dificuldade de perceber sinais precoces de desengajamento</li>
              </ul>
            </div>

            {/* Bloco 3: Origem do Navigator */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esse cenário foi o ponto de partida apresentado no pitch para a banca do Tera e deu origem ao Navigator.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A proposta foi clara: criar uma experiência de onboarding que orientasse o novo colaborador desde o primeiro dia e, ao mesmo tempo, desse visibilidade e apoio à liderança.
              </p>
            </div>

            {/* Descrição do Produto */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Navigator foi concebido como uma plataforma de apoio ao onboarding, onde o gestor acompanha a evolução dos novos colaboradores e o Navi, um agente de inteligência artificial, atua como guia ao longo da jornada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Navi orienta o onboarding, responde dúvidas sobre processos da empresa — como políticas internas, benefícios e documentações — a partir dos conteúdos disponibilizados na própria plataforma.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, o agente analisa o sentimento ao longo das interações e gera alertas para a liderança, antecipando riscos de churn e sugerindo trilhas de apoio conforme o momento do colaborador.
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
                O onboarding falha não por falta de esforço, mas por falta de estrutura.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A pesquisa realizada com gestores, profissionais de RH e colaboradores evidenciou gargalos recorrentes: demora no acesso a ferramentas e informações, sobrecarga cognitiva nos primeiros dias, falta de clareza sobre papéis e dependência excessiva de processos manuais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esses gargalos geram impactos silenciosos, porém relevantes:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>aumento do tempo até a produtividade plena (até 90 dias)</li>
                <li>sobrecarga de gestores e equipes de apoio</li>
                <li>risco de desengajamento precoce e deterioração da experiência cultural</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O custo não é apenas operacional. É humano, cultural e financeiro.
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
                Se o onboarding fosse tratado como uma jornada estruturada, personalizada e acompanhada, em vez de um conjunto de tarefas soltas, seria possível reduzir fricções iniciais, acelerar a autonomia do colaborador e dar visibilidade real à liderança.
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ao combinar orientação contínua, personalização e apoio proativo, o onboarding deixa de ser um momento de sobrevivência e passa a ser um acelerador de impacto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa hipótese está diretamente alinhada aos achados da pesquisa e à proposta apresentada à banca.
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
                A inteligência artificial foi incorporada ao Navigator como facilitadora da experiência de onboarding, e não como elemento central do produto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A principal decisão foi utilizar IA para organizar informações, contextualizar respostas e reduzir dúvidas recorrentes, apoiando o colaborador ao longo da jornada sem substituir interações humanas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O agente Navi foi desenhado para operar com conteúdo curado e contextualizado, evitando respostas genéricas ou improvisadas. Essa decisão priorizou clareza, confiabilidade e consistência da experiência, mesmo que isso implicasse menor grau de automação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Alguns trade-offs foram assumidos conscientemente:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Menor foco em automação ampla e genérica</li>
                <li>Maior controle sobre conteúdo, narrativa e tom das interações</li>
                <li>Uso da IA como apoio à orientação estruturada, não como substituto de gestores ou mentores</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA também foi utilizada para analisar o sentimento ao longo das interações, gerando alertas para a liderança e apoiando decisões proativas — como ajustes de trilhas e intervenções humanas — sempre com o objetivo de reduzir fricções e acelerar a autonomia do colaborador.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O princípio que guiou essas decisões foi simples: boa experiência de onboarding exige contexto, e contexto não pode ser automatizado sem critério.
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
                A execução priorizou um MVP capaz de demonstrar valor rapidamente, com foco nos primeiros 90 dias do colaborador.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As decisões de escopo foram intencionais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>estruturar trilhas de onboarding personalizadas por papel</li>
                <li>centralizar informações críticas em um único ponto de acesso</li>
                <li>apoiar gestores com visibilidade e alertas, sem aumentar carga operacional</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Funcionalidades mais complexas e integrações profundas foram deixadas fora do MVP, garantindo foco, velocidade e aprendizado real antes de escalar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                As decisões apresentadas foram consolidadas e validadas na apresentação final do projeto para a banca do curso IA Product Leaders da Tera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagem do MVP */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/images/navigator-dashboard.png" 
              alt="Dashboard Insights do Navî do Navigator MVP mostrando métricas, gráficos e tabelas de onboarding" 
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-4">
              Visão do MVP do Navigator, utilizado como ambiente de demonstração para validar a jornada de onboarding, a atuação do agente Navi e os insights gerados para a liderança.
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
                O principal aprendizado foi que onboarding é mais sobre orientação do que sobre informação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A pesquisa mostrou que a presença de um mentor ou padrinho é o fator mais valorizado pelos colaboradores, reforçando que a tecnologia não substitui relações humanas — ela as potencializa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outro aprendizado relevante foi a percepção de que não existe um tempo ideal único de onboarding. Cada colaborador possui ritmo, contexto e necessidades diferentes, o que reforçou a importância de personalização adaptativa desde o início.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por fim, ficou claro que decisões boas de produto surgem quando IA é usada para reduzir fricção e dar contexto, e não para automatizar indiscriminadamente.
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
                <span className="font-semibold text-gray-900">Foco:</span> Estrutura, clareza e experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colaboração */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Colaboração
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Este projeto foi desenvolvido como trabalho de conclusão do curso de IA Product Leaders da Tera.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Atuei como responsável pela concepção do produto, definição das regras de negócio, desenho da experiência e desenvolvimento do protótipo funcional, incluindo todo o processo de vibe coding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A colaboração com o grupo foi fundamental para validação de hipóteses, discussões estratégicas e apresentação do projeto à banca.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                <a 
                  href="https://www.linkedin.com/in/haendell-lopes/overlay/1763212633270/single-media-viewer/?profileId=ACoAAASKmMMBZgkJQYEX3ebpJgV7SSXbPfuU0ig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
                >
                  📄 Apresentação do projeto (pitch final)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

