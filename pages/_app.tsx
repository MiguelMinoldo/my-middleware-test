import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
