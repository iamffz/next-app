import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress


import '../styles/custom/antd.custom.scss'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
