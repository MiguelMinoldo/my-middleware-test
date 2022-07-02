import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edge Functions Demo - Configcat</title>
        <meta name="description" content="Sitecore User Group France" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://vercel.com/docs/concepts/functions/edge-functions">Middleware - Edge Functions Demo!</a>
        </h1>

        <p className={styles.description}>
          Get started by creating/editing{' '}
          <code className={styles.code}>middleware.ts</code>
        </p>

        <div className={styles.grid}>
          <Link href="abtest">
            <a className={styles.card}>
              <h2>A/B Testing &rarr;</h2>
              <p>By A/B testing directly on the server-side, 
                you will reduce layout shift from client-loaded experiments and 
                improving your sites performance with smaller JavaScript bundles.</p>
            </a>
          </Link>

          <Link href="/featureflag/featureflags">
            <a className={styles.card}>
              <h2>Feature Flags &rarr;</h2>
              <p>ConfigCat is a service for feature flag and configuration management. 
                In this demo you will be able to use feature flags at the edge.
              </p>
            </a>
          </Link>

        </div>
      </main>

    </div>
  )
}

export default Home