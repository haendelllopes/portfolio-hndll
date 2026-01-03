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
              Acompanhamento digital da gestação com foco em organização, tranquilidade e apoio contínuo
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              MVP funcional em formato PWA, voltado ao acompanhamento da gestação entre gestante e família.
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
                O Gestaelo surgiu a partir de uma situação comum e ainda pouco digitalizada: o acompanhamento do pré-natal por meio de registros fragmentados e majoritariamente em papel.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mesmo em um contexto cada vez mais digital, informações relevantes da gestação — consultas, exames, orientações e observações — costumam ficar distribuídas entre documentos físicos, mensagens e diferentes aplicativos, dificultando o acompanhamento contínuo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A ideia do Gestaelo nasce da pergunta:
                como centralizar e organizar essas informações de forma simples, acessível e sempre disponível para quem vive a gestação no dia a dia?
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
                O problema central não é clínico ou diagnóstico, mas informacional e organizacional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Durante a gestação, é comum lidar com:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>excesso de informações dispersas</li>
                <li>dificuldade em acompanhar orientações ao longo do tempo</li>
                <li>esquecimento de consultas, exames ou recomendações</li>
                <li>insegurança gerada por múltiplas fontes não centralizadas</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esse cenário impacta principalmente a tranquilidade de quem vive a gestação e de quem acompanha esse processo de perto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limites claros do problema */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Limites claros do problema
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Desde o início, ficou claro o que não era objetivo do produto:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Não realizar diagnósticos médicos</li>
                <li>Não interpretar resultados de exames</li>
                <li>Não substituir decisões clínicas</li>
                <li>Não se posicionar como orientação médica</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Toda e qualquer decisão relacionada à saúde deve permanecer sob responsabilidade exclusiva de profissionais de saúde.
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
                A hipótese central do Gestaelo é:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Se organizarmos informações, orientações e acompanhamentos da gestação em um único ambiente digital, reduzimos ruído informacional e aumentamos a sensação de tranquilidade ao longo do pré-natal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O diferencial do produto não está em "mais informação", mas em clareza, continuidade e organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decisões-chave de escopo */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Decisões-chave de escopo
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Foco em gestante e família
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A versão atual do produto atende gestante e familiares próximos, sem incluir fluxos clínicos ou médicos.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Centralização sem interferência clínica
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O Gestaelo organiza informações, mas não gera recomendações médicas nem interpreta exames.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Formato PWA
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A escolha por um Progressive Web App garante acesso rápido, multiplataforma e sempre disponível.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Corte consciente de escopo médico
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Funcionalidades voltadas a profissionais de saúde foram deliberadamente retiradas do MVP para evitar riscos éticos e ampliar a viabilidade do produto.
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
                O Gestaelo utiliza inteligência artificial por meio da agente conversacional Elo, com papel claramente delimitado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A Elo:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>auxilia com lembretes, dicas e curiosidades adequadas à semana gestacional</li>
                <li>adapta o tom e o conteúdo conforme o perfil (gestante ou familiar)</li>
                <li>atua como apoio informacional e organizacional</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Foram aplicados guardrails e ajustes de comportamento para garantir que a IA:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>permaneça restrita ao contexto gestacional</li>
                <li>não extrapole para interpretações médicas</li>
                <li>não gere orientações clínicas ou diagnósticas</li>
              </ul>
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
                O Gestaelo existe hoje como um MVP funcional, em formato PWA, utilizado ativamente por gestante e família, disponível em:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a 
                  href="https://gestaelo.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
                >
                  👉 https://gestaelo.lovable.app
                </a>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Funcionalidades atuais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>acompanhamento da gestação por semana</li>
                <li>informações e curiosidades sobre o desenvolvimento do bebê</li>
                <li>agente Elo com dicas contextualizadas</li>
                <li>interações entre parceiros, incluindo mensagens de apoio e carinho</li>
                <li>centralização de informações relevantes da gestação</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto não substitui consultas médicas, mas complementa o acompanhamento diário com organização e apoio.
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
                O produto depende de aderência contínua para gerar valor ao longo do tempo
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Escalar o produto exige validações adicionais em um contexto sensível
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A expansão para fluxos médicos exige cuidados éticos, regulatórios e de responsabilidade
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O MVP prioriza simplicidade e foco, abrindo mão de funcionalidades mais complexas
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esses limites são conhecidos e assumidos conscientemente.
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
                Em contextos sensíveis, menos funcionalidade pode significar mais segurança
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Organização de informação gera impacto emocional positivo
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                IA precisa de limites claros para não gerar falsas expectativas
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Produtos de cuidado exigem decisões de escopo ainda mais responsáveis
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nem todo produto precisa escalar rapidamente para ser valioso
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
                Produto desenvolvido de forma 100% individual, com atuação ponta a ponta na concepção da ideia, definição de escopo, desenho da experiência, desenvolvimento do MVP, implementação da IA e consolidação dos aprendizados.
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
                O Gestaelo é um produto de apoio e organização, não de decisão clínica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ele representa um exercício consciente de construção de produto em um contexto sensível, equilibrando tecnologia, responsabilidade e cuidado, com foco em oferecer mais tranquilidade ao longo da gestação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

