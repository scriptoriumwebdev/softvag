'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {

  const components = {
    em(properties) {
      return <i {...properties} />
    }
  }

  return       (
  // <GoogleAnalytics GA_MEASUREMENT_ID="G-Y58F5YNVX4">
      <ThemeProvider attribute="class" >

        {children}
        
        </ThemeProvider>
  // </GoogleAnalytics>
  )
}