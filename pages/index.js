import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from "react"


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
        <br />
        <p>Log in{" "}<Link href="/login"><a>here</a></Link>{" "} to see your account details</p>
      </main>

      <footer className={styles.footer}>
      <dev>Made by Emily Bailey for Sock Butler, March 2021</dev>
      </footer>
    </div>
  )
}

