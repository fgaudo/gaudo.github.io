import type { AppProps } from 'next/app'
import '@/presentation/styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
}