import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'HalalGaming - Competitive Gaming Platform',
  description: 'A competitive gaming platform that allows players to challenge each other in skill-based matches using cryptocurrency payments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="min-h-screen bg-gray-900 text-white">
          {children}
        </main>
      </body>
    </html>
  )
} 