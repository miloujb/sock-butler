import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { Client } from "../prismic-config"
import {RichText} from "prismic-reactjs"
import styles from '../styles/Home.module.css'

export default function Blog ( { posts } ) {
    return (
        <h2>
        <Link href="/">
          <a>Click here to return home!</a>
        </Link>
      </h2>
    )
}

// functions

export async function getServerSideProps() {
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "post")
  )

  console.log(posts)

  return {
    props: {
      posts: posts
    }
  }
}