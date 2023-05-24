import '../../styles/globals.css'
import Head from 'next/head'
import Header from './Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>João Nascimento | Dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
