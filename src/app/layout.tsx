import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haendell Lopes | AI Product Leader',
  description: 'AI Product Leader com foco em construção de produtos orientados a impacto e uso responsável de inteligência artificial.',
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
