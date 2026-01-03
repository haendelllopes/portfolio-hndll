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
    description: 'Resolve a análise retrospectiva de processos e decisões, facilitando aprendizado contínuo através de retrospectivas estruturadas.',
    status: 'experimento'
  },
  {
    name: 'WMS Academy',
    description: 'Resolve a capacitação e treinamento em sistemas de gestão de armazéns, democratizando conhecimento especializado.',
    status: 'MVP'
  },
  {
    name: 'Gestaelo',
    description: 'Resolve a gestão integrada de processos e workflows, centralizando informações e otimizando operações.',
    status: 'protótipo'
  }
]

export default products