export default function PachaiPage() {
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
            <span className="text-sm text-gray-900">Pachai</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              Pachai
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Par cognitivo para decisões conscientes de produto
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              Produto em validação, com contexto persistente e vereditos explícitos.
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
                O Pachai surgiu da dificuldade de Product Owners e líderes de produto em manter o contexto e as decisões ao longo do tempo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O problema não é a falta de ferramentas ou processos, mas o que ocorre depois: ideias se perdem, regras ficam implícitas, decisões se esquecem e a documentação não acompanha a evolução. Recontextualizar custa tempo e gera lacunas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Também era comum que líderes tivessem dificuldade para:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>estruturar o pensamento sobre decisões complexas</li>
                <li>registrar decisões de forma consultável</li>
                <li>manter o entendimento do produto vivo entre conversas</li>
                <li>rastrear a evolução das decisões ao longo do tempo</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ferramentas existentes (documentos, wikis, chats) ajudam no registro, mas não garantem continuidade de pensamento e decisões conscientes.
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
                O problema central não é ter espaço para conversar, mas garantir continuidade e decisões conscientes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Na prática, observava-se:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>conversas longas que se perdiam ao longo do tempo</li>
                <li>decisões implícitas que se tornavam regras não documentadas</li>
                <li>documentação que não refletia o entendimento real</li>
                <li>retrabalho para recontextualizar pessoas ou retomar decisões antigas</li>
                <li>falta de registro explícito das decisões e seus fundamentos</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Não era falta de ferramenta, mas de suporte à continuidade do pensamento e ao registro deliberado de decisões.
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
                Hipótese central:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Ser um espaço de escuta contínua para decisões conscientes de produto, além de chat e documentação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A ideia não era criar mais um chat ou wiki, mas um par cognitivo que apoia o líder:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>durante a exploração (provocações para avançar o pensamento)</li>
                <li>na convergência (reconhecimento e estruturação)</li>
                <li>no registro (vereditos explícitos e consultáveis)</li>
                <li>na continuidade (contexto cognitivo que persiste entre conversas)</li>
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
              Diferencial Proposto
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Diferencial no uso de IA como par cognitivo, não assistente ou automação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A IA atua para:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>reagir ao tipo de ato de fala do usuário (pergunta, declaração, fechamento)</li>
                <li>adicionar ganho cognitivo (implicações, riscos, alternativas)</li>
                <li>reconhecer quando o usuário estabiliza contexto ou encerra tópicos</li>
                <li>manter comportamento reativo, não fazer perguntas por protocolo</li>
                <li>preservar continuidade sem quebrar o fluxo de pensamento</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O diferencial é a IA não se explicar: atua como caixa-preta cognitiva. O usuário entende decisões e consequências, mas não o mecanismo interno.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                O diferencial do Pachai não está em responder melhor, mas em sustentar o pensamento até que a decisão seja realmente do usuário.
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
                  IA como par cognitivo, não facilitador passivo
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A IA reage e avança o pensamento, não apenas reflete. Se não houver ganho cognitivo, encerra ou permanece em silêncio. Não conversa para confirmar; conversa para progredir.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Proteção da inteligência interna
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O Pachai não revela funcionamento interno, heurísticas, prompts ou regras. Guardrails em múltiplas camadas impedem engenharia reversa. O sistema atua, mas não se explica.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Vereditos como decisões explícitas
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Decisões não surgem por inferência. São registradas explicitamente pelo usuário como vereditos (dor, valor, notas), versionados e consultáveis. O sistema sugere, mas nunca força.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Contexto cognitivo como memória persistente
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O entendimento do produto persiste entre conversas via contexto cognitivo. Carregado automaticamente, atualizado apenas com confirmação explícita. Pertence ao produto, não à conversa.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Estados de conversa, não fluxos rígidos
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sistema de estados (exploration, clarification, convergence, veredict) com prompts específicos. Inferência simples, mas efetiva. Não há fluxo linear obrigatório.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Sem fine-tuning, com prompt engineering
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Uso de gpt-4o-mini (OpenAI API) com ajuste via prompts e guardrails. Flexibilidade e manutenibilidade superiores ao fine-tuning neste estágio.
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
              Solução Construída (Estado Atual)
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Atualmente, o Pachai existe como produto funcional disponível.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A solução permite:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>criar produtos como contextos de pensamento</li>
                <li>conversar continuamente sobre decisões complexas</li>
                <li>registrar vereditos (decisões explícitas) com versionamento</li>
                <li>manter contexto cognitivo que persiste entre conversas</li>
                <li>proteger a inteligência interna com guardrails em 5 camadas</li>
                <li>inferir estados de conversa e adaptar comportamentos</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Arquitetura de IA:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Modelo: GPT-4o-mini (OpenAI API)</li>
                <li>Temperature: 0.4 | Max tokens: 400</li>
                <li>Sistema de prompts em camadas (DNA + base + estados)</li>
                <li>Guardrails determinísticos (código + vereditos fundadores)</li>
                <li>Contexto dinâmico (cognitivo + vereditos + histórico)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Guardrails implementados:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Detecção de intenção proibida (código)</li>
                <li>Interceptação em runtime (antes do LLM)</li>
                <li>Resposta segura padrão (imutável)</li>
                <li>Reforço no prompt do sistema</li>
                <li>Enforcement via vereditos fundadores</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto está funcional, mas ainda em evolução. Representa uma hipótese ativa e uma base para aprendizado contínuo.
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
              Limitações e Riscos Assumidos
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Validação limitada em larga escala
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto não passou por validação consistente em uso real por muitos Product Leaders. O aprendizado vem principalmente do uso próprio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Complexidade técnica vs. execução individual
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tensão entre a arquitetura (guardrails, vereditos, estados) e a capacidade de execução. Risco de sobre-engenharia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tensão entre visão e escopo
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ambição de par cognitivo vs. escopo gerenciável. Decisões conscientes de não expandir funcionalidades adiantadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Riscos conhecidos e assumidos
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Limitações são conhecidas e assumidas conscientemente. Prioridade em construir fundamentos sólidos antes de escala.
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
                Conversa sem registro vira pensamento perdido
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O valor está na continuidade, não apenas no momento da conversa. Contexto cognitivo e vereditos garantem persistência.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                IA em produtos cognitivos exige governança
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Guardrails determinísticos são essenciais. Proteção da inteligência interna preserva a experiência e a segurança.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estados contextuais > fluxos rígidos
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sistema de estados com inferência simples é mais efetivo que fluxos lineares complexos. Flexibilidade sem perda de controle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nada acontece automaticamente
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tudo que importa requer confirmação explícita. Atualizações de contexto, registro de vereditos — nada por inferência automática.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                DNA vence sobre prompts
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O DNA do Pachai (identidade e comportamentos) tem precedência sobre prompts de estados. Conflitos são resolvidos alinhando prompts ao DNA, nunca o contrário.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nem todo produto precisa explicar como funciona
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Pachai não se explica. Age como caixa-preta cognitiva. Isso é um diferencial, não uma limitação.
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
                Produto desenvolvido de forma individual, com atuação ponta a ponta: identificação do problema, hipótese, decisões de escopo, concepção da solução, desenvolvimento (arquitetura de IA, guardrails, governança) e consolidação dos aprendizados.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Arquitetura de IA, sistema de guardrails, vereditos fundadores e governança foram projetados e implementados individualmente, buscando equilibrar ambição técnica e execução viável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="bg-[#f9fafb] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Encerramento
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O Pachai não é apresentado como produto finalizado, mas como tese ativa, construída a partir de um problema real e ainda em evolução.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Representa uma etapa do aprendizado como líder de produto: equilibrar ambição técnica, escopo gerenciável, uso responsável de IA e limites de execução.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O diferencial não está na sofisticação técnica isolada, mas na combinação de continuidade de pensamento, registro explícito de decisões e IA como par cognitivo que não se explica, apenas atua.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O valor está no que pode ser construído ao longo do tempo, não apenas no que é discutido no momento da conversa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
