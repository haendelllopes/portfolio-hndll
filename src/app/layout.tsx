import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haendell Lopes | Product Owner & IA',
  description: 'Product Owner que transforma IA em produtos estratégicos. Uso inteligência artificial de forma prática para resolver problemas reais de negócio.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
