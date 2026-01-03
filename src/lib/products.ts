export interface Product {
  name: string
  description: string
  status: string
}

export const products: Product[] = [
  {
    name: 'Navigator',
    description: 'Onboarding estruturado para reduzir incerteza, acelerar autonomia e dar visibilidade à liderança desde o primeiro dia.',
    status: 'MVP'
  },
  {
    name: 'WMS Twin Digital',
    description: 'Resolve a gestão visual e espacial de estoques em armazéns através de representação digital, permitindo visualização tridimensional e suporte à decisão gerencial.',
    status: 'protótipo'
  },
  {
    name: 'Retroelo',
    description: 'Facilitador de retrospectivas focado em apoiar líderes no fechamento do ciclo de aprendizado e acompanhamento de ações.',
    status: 'experimentação'
  },
  {
    name: 'WMS Academy',
    description: 'Facilitador de onboarding com aprendizado gamificado para formação de consciência operacional em processos logísticos.',
    status: 'MVP'
  },
  {
    name: 'Gestaelo',
    description: 'Acompanhamento digital da gestação com foco em organização, clareza e tranquilidade para gestante e família.',
    status: 'MVP'
  }
]

export default products