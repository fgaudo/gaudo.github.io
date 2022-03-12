import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'

import '@/presentation/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
}
