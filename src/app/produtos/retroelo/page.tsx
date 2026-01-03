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
              Facilitador inteligente de retrospectivas para líderes de equipes
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              Produto em experimentação, com conceito funcional e hipótese ativa.
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

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O Retroelo surgiu a partir da minha vivência como Product Owner, acompanhando retrospectivas recorrentes em diferentes equipes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O problema não estava na falta de cerimônias ou na qualidade das discussões, mas no que acontecia depois.
                Ações e lições aprendidas eram registradas, mas acabavam esquecidas, escanteadas ou diluídas no dia a dia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Além disso, era recorrente a dificuldade de líderes em:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>estruturar retrospectivas de forma consistente</li>
                <li>conduzir a cerimônia com segurança</li>
                <li>acompanhar planos de ação quando gerenciavam mais de uma equipe</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ferramentas existentes (EasyRetro, planilhas, apresentações) ajudavam a registrar o momento, mas não fechavam o ciclo de melhoria contínua.
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
                O problema central não é executar retrospectivas, mas garantir continuidade e aprendizado real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Na prática, o que se observava era:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>retrospectivas bem conduzidas que não geravam mudança</li>
                <li>planos de ação sem acompanhamento efetivo</li>
                <li>líderes sem uma visão consolidada das pendências entre equipes</li>
                <li>excesso de esforço operacional para manter tudo "vivo" manualmente</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Não se tratava de falta de ferramenta, mas de falta de suporte ao líder no pós-cerimônia.
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
                A hipótese central do Retroelo foi:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ser o braço direito do líder no processo de retrospectivas, indo além da organização de cards e planos de ação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A ideia não era criar mais uma ferramenta de retrospectiva, mas um facilitador contínuo, capaz de apoiar o líder:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>antes da retrospectiva (estrutura)</li>
                <li>durante a cerimônia (condução)</li>
                <li>e principalmente depois (acompanhamento e engajamento)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial proposto */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Diferencial proposto
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O principal diferencial imaginado estava no uso de inteligência artificial como apoio à liderança, não como automação da cerimônia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A IA atuaria para:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>analisar as colocações dos participantes</li>
                <li>identificar padrões e sentimentos implícitos</li>
                <li>gerar insumos qualitativos para o líder</li>
                <li>apoiar o engajamento do time ao longo do tempo</li>
                <li>antecipar sinais de insatisfação ou desgaste</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nesse modelo, o Retroelo deixaria de ser apenas um organizador e passaria a atuar como um agente próximo do líder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decisões-chave de produto */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Decisões-chave de produto
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  IA como facilitador, não protagonista
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A inteligência artificial foi pensada como suporte à interpretação e acompanhamento, mantendo a decisão sempre sob responsabilidade humana.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Corte consciente de escopo inicial
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A análise de sentimentos, embora central na visão, foi deixada de fora no início para tornar o produto viável para teste.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Não centralizar tudo em um único produto
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ideias como executar reuniões, gravar encontros, transcrever, resumir e integrar métricas externas foram deliberadamente descartadas.
                  O escopo seria grande demais para desenvolvimento individual.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Aceitar o risco da validação tardia
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mesmo sem adesão suficiente em pesquisas iniciais, a decisão de seguir foi consciente, baseada na recorrência observada do problema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução construída (estado atual) */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Solução construída (estado atual)
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Atualmente, o Retroelo existe como produto conceito funcional, disponível em:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a 
                  href="http://retroelo.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
                >
                  👉 http://retroelo.io
                </a>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A solução permite estruturar e executar retrospectivas, com foco em organização e acompanhamento, ainda em evolução.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto não está fechado nem validado em larga escala. Ele representa:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>uma hipótese ativa</li>
                <li>um conceito em experimentação</li>
                <li>uma base para aprendizado contínuo</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A execução da retrospectiva isoladamente não é o diferencial — o valor está no que pode ser construído entre ciclos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitações e riscos assumidos */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Limitações e riscos assumidos
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto ainda não passou por validação consistente em uso real
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O maior risco atual é a continuidade de desenvolvimento, dado o nível de complexidade técnica e o contexto de vibe coding
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Existe uma tensão clara entre visão ambiciosa e capacidade de execução individual
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esses riscos são conhecidos e assumidos conscientemente.
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
                Retrospectiva sem acompanhamento vira ritual vazio
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O valor está no ciclo, não no evento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                IA em produtos humanos exige cuidado
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Análise de sentimento é poderosa, mas sensível. Priorizar confiança e clareza é mais importante que sofisticação técnica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Escopo é o maior inimigo de produtos individuais
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ter visão ampla é importante, mas saber onde parar é essencial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nem todo produto precisa virar empresa para gerar aprendizado
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Retroelo ensinou mais sobre liderança, facilitação e decisão de produto do que muitas soluções "finalizadas".
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
                Produto desenvolvido de forma integralmente individual, com atuação ponta a ponta na identificação do problema, formulação da hipótese, decisões de escopo, concepção da solução, desenvolvimento do produto conceito e consolidação dos aprendizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="bg-[#f9fafb] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O Retroelo não é apresentado como um produto pronto, mas como uma tese ativa de produto, construída a partir de um problema real e ainda em evolução.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ele representa uma etapa importante do meu aprendizado como líder de produto:
                equilibrar ambição, escopo, uso responsável de IA e limites de execução.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

