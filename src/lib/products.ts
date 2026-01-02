export interface Product {
  name: string
  description: string
  status: string
}

export const products: Product[] = [
  {
    name: 'Navigator',
    description: 'Resolve a complexidade de navegação e orientação em ambientes internos, oferecendo localização precisa sem depender de GPS.',
    status: 'MVP'
  },
  {
    name: '3D WMS',
    description: 'Resolve a gestão visual e espacial de estoques em armazéns, permitindo visualização tridimensional e otimização de espaço.',
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