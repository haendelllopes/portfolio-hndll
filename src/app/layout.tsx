import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haendell Lopes | AI Product Leader',
  description: 'Product Owner com foco em Inteligência Artificial aplicada a produtos digitais.',
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
