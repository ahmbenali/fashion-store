'use client'

import * as React from 'react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'
import type {ComponentProps} from 'react'	

type Props = ComponentProps<typeof NextThemesProvider>

function ThemeProvider({children, ...props}: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
