import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Footer from './_lib/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextGen Solana Explorer',
  description: 'by Milysec',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer><Footer /></footer>
      </body>
    </html>
  )
}
