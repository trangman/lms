import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AML Compliance LMS',
  description: 'Anti-Money Laundering Learning Management System for Thailand Real Estate Industry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 