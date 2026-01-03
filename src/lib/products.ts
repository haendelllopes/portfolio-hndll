export interface Product {
  name: string
  description: string
  status: string
}

export const products: Product[] = [
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
  }
]

export default products