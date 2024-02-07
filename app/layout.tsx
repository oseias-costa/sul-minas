import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './lib/GlobalStyle'
import Google from './components/Google'
import GoogleBody from './components/GoogleBody'

export const metadata: Metadata = {
  title: 'Sul Minas Bebedouros Industriais',
  description: 'A Sul Minas Bebedouros, localizada no sul catarinense, é uma empresa líder no fornecimento de soluções de alta qualidade em bebedouros e equipamentos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Google id='KPRQ844V' />
        <meta 
          name='google-site-verification' 
          content='HVBmrKVJGHrSw8e5jHXRW1uZ7izZtKmoow8mWfsMbOU'
        />
      </head>
      <body>
        <GoogleBody id='KPRQ844V' />
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
