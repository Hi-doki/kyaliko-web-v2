import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <Layout> 
      <Head>
        <title>Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta name="description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
    <Component { ...pageProps} />
    </Layout>
  )
}

export default MyApp
