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
        <script src="../vendor/snow.js" defer></script>
      </Head>
    <Component { ...pageProps} />
    </Layout>
  )
}

export default MyApp
