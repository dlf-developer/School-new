import './globals.css'
import AppShell from '@/components/AppShell'

export const metadata = {
  title: 'DLF Public School, Ghaziabad | Redefining Education',
  description:
    'DLF Public School – 30 years of shaping minds, empowering futures. Ranked #1 in Ghaziabad. CBSE Affiliation No. 2130384. Admissions Open 2026-27.',
  icons: {
    icon: '/images/dlf-crest.png',
    apple: '/images/dlf-crest.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-charcoal font-sans antialiased overflow-x-hidden noise-overlay">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
