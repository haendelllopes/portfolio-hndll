export interface Product {
  name: string
  description: string
  status: string
}

export const products: Product[] = [
  {
    name: 'Pachai',
    description: 'Par cognitivo para decisões conscientes de produto, com contexto persistente e vereditos explícitos.',
    status: 'Em validação'
  },
  {
    name: 'Navigator',
    description: 'Onboarding estruturado para acelerar autonomia e reduzir incertezas no primeiro dia de trabalho.',
    status: 'MVP'
  },
  {
    name: 'WMS Twin Digital',
    description: 'Visualização 3D de estoque para suporte à decisão gerencial.',
    status: 'Protótipo'
  },
  {
    name: 'Retroelo',
    description: 'Facilitador de retrospectivas focado em apoiar líderes no fechamento do ciclo de aprendizado.',
    status: 'Experimentação'
  },
  {
    name: 'WMS Academy',
    description: 'Onboarding gamificado para formação de consciência operacional em logística.',
    status: 'MVP'
  },
  {
    name: 'Gestaelo',
    description: 'Acompanhamento digital da gestação com foco em organização e tranquilidade.',
    status: 'MVP'
  },
  {
    name: 'GradeAssistida',
    description: 'Ferramenta de suporte à decisão para coordenação pedagógica, criada a partir de um problema real em escola pública. Estrutura modulação, regras e restrições humanas antes da montagem da grade horária, usando IA como apoio explicativo.',
    status: 'MVP em validação'
  }
]

export default products