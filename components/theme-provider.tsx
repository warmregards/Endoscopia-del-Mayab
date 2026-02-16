'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

/**
 * Forces light mode only. Dark mode has been removed from the design system.
 * next-themes is kept as a dependency for shadcn/ui compatibility,
 * but forcedTheme="light" prevents any theme switching.
 *
 * TODO: Once all shadcn components are audited, consider removing
 * next-themes entirely and replacing this with a plain fragment.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} forcedTheme="light" disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}
