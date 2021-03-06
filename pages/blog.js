import Link from 'next/link'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { Client } from "../prismic-config"
import {RichText} from "prismic-reactjs"
import styles from '../styles/Home.module.css'

export default function Blog ( { posts } ) {
    return (
      <div classname={styles.container}>
         <Head>
        <title>The Sock Butler Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>The Sock Butler Blog</h1>
      <h2 className={styles.description}>
        <Link href="/">
          <a>Click here to return home!</a>
        </Link>
      </h2>
      <div>
          <div>
            {posts.results.map((post, index) => (
              <div key={post.uid}>
                <Link href={`blog/${post.uid}`}>
                  <h3>
                    {RichText.render(post.data.title)}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      </div>
       
    )
}

// functions

export async function getServerSideProps() {
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "post")
  );
 

  return {
    props: {
      posts: posts,
    },
  };
}
