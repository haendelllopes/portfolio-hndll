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
              Aprendizado operacional gamificado para formação de consciência em operações de WMS
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              MVP funcional, com jogos simulados focados em processos logísticos essenciais.
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
                O WMS Academy surgiu a partir de uma necessidade comum em produtos de Warehouse Management System (WMS): escalar o entendimento dos processos logísticos básicos para profissionais que atuam em tecnologia, suporte e consultoria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                É frequente que pessoas ingressem em contextos de WMS sem vivência prévia em intralogística. Nesses cenários, compreender o que está sendo desenvolvido, atendido ou implantado é fundamental para decisões mais conscientes e alinhadas à operação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Historicamente, esse aprendizado depende de treinamentos passivos, como vídeos gravados ou materiais estáticos, que muitas vezes são consumidos de forma superficial. Como consequência, o conhecimento básico não se fixa e dúvidas recorrentes continuam surgindo no dia a dia.
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
                O problema central não é a ausência de conteúdo, mas a falta de consciência operacional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Em contextos de WMS, decisões técnicas e operacionais muitas vezes são tomadas sem plena compreensão:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>do impacto financeiro de erros simples</li>
                <li>das dependências entre processos</li>
                <li>das consequências sistêmicas dentro de uma operação logística</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Isso se reflete em:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>baixa produtividade inicial</li>
                <li>dependência recorrente de especialistas para dúvidas básicas</li>
                <li>erros operacionais evitáveis</li>
                <li>decisões sem priorização adequada de criticidade</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Treinamento passivo, isoladamente, não resolve esse tipo de problema.
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
                A hipótese central do WMS Academy foi:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Se expusermos profissionais a cenários simulados que evidenciam as consequências financeiras de decisões operacionais, eles desenvolverão consciência operacional mais rapidamente e reduzirão riscos no ambiente real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto nasce, portanto, como uma ferramenta de onboarding, com foco em aprendizado ativo e experiência prática.
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
                  Não ser um LMS tradicional
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O WMS Academy não foi concebido como plataforma de cursos, certificações ou avaliações formais.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Não ser vídeo-only
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Conteúdo explicativo é importante, mas não substitui vivência prática.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Formato de RPG educacional
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O aprendizado ocorre por meio de jogos que simulam processos reais de um WMS, expondo o jogador a decisões e consequências.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Escopo deliberadamente limitado
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  O foco está nos processos básicos de uma operação logística, como:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                  <li>Recebimento</li>
                  <li>Armazenagem</li>
                  <li>Picking (Separação)</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O objetivo não é ensinar regras de um WMS comercial específico, mas conceitos de mercado: o que é cada processo, sua importância, problemas comuns e impactos na operação como um todo.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Não centralizar funções de RH ou treinamento corporativo
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Integrações com RH, certificações e conteúdos avançados ficaram fora do escopo inicial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uso de tecnologia e IA */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Uso de tecnologia e IA
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A inteligência artificial atua como um mentor operacional contextual, não como professor genérico.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ao final de cada jogo, a IA:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>avalia a pontuação obtida</li>
                <li>interpreta as decisões tomadas</li>
                <li>gera feedbacks a partir da perspectiva de um supervisor da área simulada (recebimento, armazenagem ou picking)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA não substitui o julgamento humano, mas ajuda a conectar a experiência vivida no jogo com a realidade da operação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Seu papel foi conscientemente delimitado para preservar clareza pedagógica e evitar ruído.
              </p>
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
                O WMS Academy existe hoje como um MVP funcional, disponível em:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a 
                  href="https://wmsacademy.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
                >
                  👉 https://wmsacademy.lovable.app
                </a>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Fluxo atual:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Cadastro via e-mail</li>
                <li>Acesso a um hub central</li>
                <li>Escolha dos jogos disponíveis</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Jogos implementados no MVP:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Recebimento</li>
                <li>Armazenagem</li>
                <li>Picking (Separação)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Jogos previstos, mas ainda não implementados:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Reabastecimento de picking</li>
                <li>Conferência de expedição</li>
                <li>Inventário</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada jogo simula decisões reais e expõe o jogador às consequências operacionais e financeiras associadas.
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
                O produto ainda exige padronização de fluxos e mecânicas entre os jogos
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Usabilidade de jogos é um desafio contínuo, especialmente sem background específico em game design
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Existe uma disputa natural de foco e priorização em iniciativas educacionais, o que impacta ritmo de evolução
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por ser desenvolvido via vibe coding, a complexidade técnica tende a crescer conforme o produto evolui
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esses riscos são conhecidos e fazem parte do estágio atual do produto.
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
                Aprendizado ativo gera consciência mais rapidamente do que conteúdo passivo
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Simular consequências financeiras altera a forma como decisões são tomadas
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Produtos educacionais exigem foco rigoroso de escopo
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                IA funciona melhor como mentor contextual do que como instrutor genérico
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nem toda iniciativa precisa escalar para gerar aprendizado relevante de produto e liderança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papel e Responsabilidade */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Papel e Responsabilidade
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Produto desenvolvido de forma 100% individual, com atuação ponta a ponta na identificação do problema, formulação da hipótese, decisões de escopo, concepção da experiência, desenvolvimento do MVP e consolidação dos aprendizados.
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
                O WMS Academy não se propõe a substituir treinamentos tradicionais, mas a complementar o onboarding com vivência prática e formação de consciência operacional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ele representa um experimento concreto sobre como simulação, gamificação e IA podem ser usadas de forma responsável para apoiar o aprendizado em contextos logísticos complexos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

