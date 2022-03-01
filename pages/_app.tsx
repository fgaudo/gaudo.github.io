import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/presentation/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&amp;family=Oswald:wght@700&amp;display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
