import Link from 'next/link'
import Prismic from 'prismic-javascript'
import {client} from "../../prismic-config"
import {RichText, Date} from "prismic-reactjs"


 export default function Post() {
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
    



 export async function getServerSideProps(context) {
    const post = await Client().getByUID("post", context.query.post);
  
    return {
      props: {
        post: post
      },
    };
  }