export default function GradeAssistidaPage() {
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
            <span className="text-sm text-gray-900">GradeAssistida</span>
          </div>
        </div>
      </nav>

      {/* Hero do Case */}
      <section className="bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-[1.1] tracking-tight">
              GradeAssistida
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Suporte à decisão para coordenação pedagógica
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              MVP funcional em formato experimental, voltado ao suporte à decisão para coordenação pedagógica.
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
                O GradeAssistida nasceu a partir de um problema real observado no início do ano letivo em uma escola pública.
                A coordenação pedagógica precisa realizar a modulação e montar a grade horária conciliando disciplinas, níveis de ensino, professores e restrições humanas — processo normalmente feito com planilhas genéricas e alto esforço manual.
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
                Ferramentas genéricas não apoiam o raciocínio pedagógico antes do horário.
                Pequenas mudanças (como disponibilidade de professores) costumam invalidar todo o trabalho, gerando retrabalho, desgaste e risco de erro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hipótese de Produto */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Hipótese de Produto
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A hipótese central do GradeAssistida é:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed border-l-4 border-gray-300 pl-6 italic">
                Se a modulação pedagógica e as restrições humanas forem estruturadas explicitamente antes da organização do tempo, e a IA atuar apenas como apoio explicativo, o coordenador reduz esforço cognitivo e retrabalho, mantendo controle total da decisão final.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O diferencial do produto não está em automação, mas em estruturação, explicação e apoio consciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decisões-chave de escopo */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Decisões-chave de escopo
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Produto de suporte à decisão, não automação
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O GradeAssistida organiza modulação e restrições, mas não substitui a decisão final do coordenador pedagógico.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Modulação vem antes da grade
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A estruturação pedagógica e as restrições humanas são definidas explicitamente antes da organização temporal.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  IA como copiloto explicativo
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A IA atua para organizar, validar e explicar — nunca para decidir ou otimizar politicamente.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 leading-tight">
                  Escopo conscientemente limitado
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O produto não é um sistema escolar completo, mas uma ferramenta focada na montagem da grade horária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo do Produto */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Fluxo do Produto
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Cadastro de turmas</li>
                <li>Disciplinas por nível de ensino</li>
                <li>Professores e cargas automáticas</li>
                <li>Disponibilidade e padrões de horário:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Matriz dias × horários</li>
                    <li>Blocos sequenciais (1 ou mais dias, aulas consecutivas)</li>
                  </ul>
                </li>
                <li>Modulação por turma</li>
                <li>Regras pedagógicas</li>
                <li>Geração da grade horária</li>
                <li>Visualização e exportação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Uso de tecnologia e IA */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Uso de tecnologia e IA
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O GradeAssistida utiliza inteligência artificial como copiloto cognitivo, com papel claramente delimitado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A IA:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>identifica conflitos na grade horária</li>
                <li>explica por que um cenário não funciona</li>
                <li>apoia ajustes conscientes mantendo o controle humano</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Foram aplicados limites claros para garantir que a IA:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>não decide pela coordenação pedagógica</li>
                <li>não otimiza politicamente</li>
                <li>não substitui o coordenador</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solução construída (estado atual) */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Solução construída (estado atual)
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O GradeAssistida existe hoje como um MVP funcional, utilizado como experimento aplicado, disponível em:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a 
                  href="https://gradeassistida.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
                >
                  👉 https://gradeassistida.lovable.app/
                </a>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Funcionalidades atuais:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>cadastro de turmas, disciplinas e professores</li>
                <li>estruturação de modulação pedagógica</li>
                <li>gestão de disponibilidade e padrões de horário</li>
                <li>geração da grade horária com apoio de IA</li>
                <li>visualização e exportação de grades (PDF e XLS)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto não substitui a coordenação pedagógica, mas apoia o processo de montagem da grade horária com estruturação e explicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persistência e Continuidade */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Persistência e Continuidade
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Login simples</li>
                <li>Dados isolados por usuário</li>
                <li>Salvamento automático</li>
                <li>Edição contínua de todos os cadastros</li>
                <li>Ajustes não exigem recomeçar do zero</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Persistência é tratada como requisito funcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artefatos Gerados */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Artefatos Gerados
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Grade geral</li>
                <li>Grade por turma</li>
                <li>Grade por professor</li>
                <li>Impressão (A4)</li>
                <li>Exportação em PDF e XLS simples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limitações e riscos assumidos */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Limitações e riscos assumidos
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O produto é contextual e pode exigir ajustes manuais finais
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Em validação com uso real, pode não cobrir todos os cenários escolares
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A escalação institucional exigiria adaptações significativas
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O MVP prioriza foco e estruturação, abrindo mão de funcionalidades mais complexas
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
                Produto bom respeita a ordem real do trabalho humano
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Restrições humanas são mais complexas que regras formais
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                IA gera mais valor explicando limites do que tentando otimizar
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Persistência é parte do valor percebido
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
                Projeto concebido, estruturado e implementado integralmente por Haendell Lopes, incluindo descoberta do problema, definição de escopo, decisões de produto, orquestração do uso de IA, implementação via vibe coding e curadoria do case.
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
                O GradeAssistida é um produto de apoio e estruturação, não de automação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ele representa um exercício consciente de construção de produto, equilibrando tecnologia, decisão humana e contexto pedagógico, com foco em reduzir retrabalho e esforço cognitivo sem substituir o coordenador.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
