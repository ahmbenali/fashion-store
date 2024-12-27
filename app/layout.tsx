import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {PropsWithChildren} from 'react'
import * as React from 'react'

import '@/styles/globals.css'
import {appDescription, appName, serverUrl} from '@/lib/constants'
import ThemeProvider from '@/components/theme-provider'

// import {ThemeProvider} from 'next-themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  // title: `${appName}`,
  title: {
    template: `%s | ${appName}`,
    default: appName,
  },
  description: appDescription,
  metadataBase: new URL(serverUrl),
}

function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
