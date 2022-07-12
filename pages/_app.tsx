import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import AppLayout from 'layouts/AppLayout'
import 'styles/globals.css'
import 'styles/prism.css'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
return (
<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
</ThemeProvider>
)
}

export default MyApp