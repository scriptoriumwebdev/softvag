'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return       (
  // <GoogleAnalytics GA_MEASUREMENT_ID="G-Y58F5YNVX4">
      <ThemeProvider attribute="class" >{children}</ThemeProvider>
  // </GoogleAnalytics>
  )
}