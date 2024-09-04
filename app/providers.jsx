'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {

  const components = {
    em(properties) {
      return <i {...properties} />
    }
  }

  return       (
      <ThemeProvider attribute="class" >
        {children}
        </ThemeProvider>
  )
}