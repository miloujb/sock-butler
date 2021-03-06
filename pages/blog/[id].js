/* import Link from 'next/link'
import Prismic from 'prismic-javascript'
import {client} from "../../prismic-config"
import {RichText, Date} from "prismic-reactjs"
 */

/*  export default function Post() {
     return (
        <div>
        <Link href="/">
            <a>Back to the home page</a>
        </Link>
        {RichText.render(props.post.data.title)}
        <span>{Date(props.post.data.date)}</span>
        {RichText.render(props.post.data.article)}
    </div>
     )
 }
    
//function 

export async function getServerSideProps(context) {
    const post = await client().getByUID(context.query.post);

    return {
      props: {
        post: post,
      },
    };
}
 */

import { RichText } from "prismic-reactjs";
import { client } from "../../prismic-config";

import Link from "next/link";

export default function Post({ post }) {
  return (
    
      <div >
        <h1>
          {RichText.render(post.data.title)}
        </h1>
        <img
          src={post.data.feature_image.url}
          alt="image"
        />
        <h1>
          {RichText.render(post.data["article"])}
        </h1>
        <Link href="/">
          
          <a>Home Page</a>
        </Link>
      </div>
  
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  /* const post = await client.getByUID("post", context.query.post.data.uid); */
    const post = await client.getByID(`${context.query.data.uid}`)
  return {
    props: {
      article: article,
    },
  };
}