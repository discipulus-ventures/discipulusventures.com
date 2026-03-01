import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnnouncementBanner from './components/AnnouncementBanner'
import CookieBanner from './components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://discipulusventures.com'),
  title: 'Discipulus Ventures',
  description: 'Cultivating a visionary vanguard of founders solving America\'s hardest problems in El Segundo.',
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Discipulus Ventures',
    description: 'Cultivating a visionary vanguard of founders solving America\'s hardest problems in El Segundo.',
    url: 'https://discipulusventures.com',
    siteName: 'Discipulus Ventures',
    images: [
      {
        url: '/Discipulus - Hero.png',
        width: 1200,
        height: 630,
        alt: 'Discipulus Ventures - Cultivating visionary founders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discipulus Ventures',
    description: 'Cultivating a visionary vanguard of founders solving America\'s hardest problems in El Segundo.',
    images: ['/Discipulus - Hero.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bzq7scp.css" />
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </head>
      <body className={inter.className}>
        <AnnouncementBanner />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
