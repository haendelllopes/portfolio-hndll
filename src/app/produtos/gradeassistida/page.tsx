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
              GradeAssistida é um produto experimental de suporte à decisão para coordenação pedagógica.
              Ele organiza modulação, regras pedagógicas e restrições humanas antes da geração da grade horária, reduzindo retrabalho e esforço cognitivo, sem substituir decisões humanas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mt-4">
              Protótipo em validação:{' '}
              <a 
                href="https://gradeassistida.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
              >
                https://gradeassistida.lovable.app/
              </a>
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

      {/* Problema */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Problema
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
                Se a modulação pedagógica e as restrições humanas forem estruturadas explicitamente antes da organização do tempo, e a IA atuar apenas como apoio explicativo, o coordenador reduz esforço cognitivo e retrabalho, mantendo controle total da decisão final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decisões de Produto */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Decisões de Produto
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Produto de suporte à decisão, não automação</li>
                <li>Modulação vem antes da grade</li>
                <li>Disciplinas definidas por nível de ensino</li>
                <li>Professor tratado como entidade única</li>
                <li>Horário do professor como recurso mais restritivo</li>
                <li>IA usada para organizar, validar e explicar — nunca para decidir</li>
                <li>Escopo conscientemente limitado (não é sistema escolar completo)</li>
              </ul>
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

      {/* Uso de IA */}
      <section className="bg-[#f9fafb] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Uso de IA
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA atua como copiloto cognitivo:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4 mb-6">
                <li>Identifica conflitos</li>
                <li>Explica por que um cenário não funciona</li>
                <li>Apoia ajustes conscientes</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                A IA não decide, não otimiza politicamente e não substitui o coordenador.
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

      {/* Limitações */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Limitações
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Produto contextual</li>
                <li>Em validação com uso real</li>
                <li>Não cobre todos os cenários escolares</li>
                <li>Pode exigir ajustes manuais finais</li>
                <li>Não foi projetado para escalar institucionalmente</li>
              </ul>
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

      {/* Status Atual */}
      <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Status Atual
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                MVP funcional em validação, utilizado como experimento aplicado e estudo contínuo de produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papel e Responsabilidade */}
      <section className="bg-[#f9fafb] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Papel e Responsabilidade
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Projeto concebido, estruturado e implementado integralmente por Haendell Lopes, incluindo:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Descoberta do problema</li>
                <li>Definição de escopo</li>
                <li>Decisões de produto</li>
                <li>Orquestração do uso de IA</li>
                <li>Implementação via vibe coding</li>
                <li>Curadoria do case</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nota no Rodapé */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-base text-gray-600 leading-relaxed italic">
                Este assistente existe para apoiar decisões humanas.
                A decisão final é sempre do coordenador pedagógico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
