import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Sock Butler Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Sock Butler Test!
        </h1>

        <p className={styles.description}>
          Welcome! Why not start by looking at our{' '}<Link href="/blog"><a>blog?</a></Link>
        </p>

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>
      <dev>Made by Emily Bailey for Sock Butler, March 2021</dev>
      </footer>
    </div>
  )
}
