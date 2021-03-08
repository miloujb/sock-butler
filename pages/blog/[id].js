import Link from 'next/link'
import {client} from "../../prismic-config"
import {RichText} from "prismic-reactjs"


 export default function Post({ post }) {
   return (
     <div>
       <h1>
       {RichText.render(post.data.title)}
         </h1>
         <h2>
           {RichText.render(post.data.description)}
         </h2>
         <p>{RichText.render(post.data.article)}</p>
         <p>Click{" "}<Link href="/">
         <a>here</a>
         {" "} to return to the home page
         </Link></p>
     </div>
   )

 }
    


export async function getServerSideProps(context) {
  const post = await client().getByUID("post", context.query.post) 
    return {
      props: {
        post: post
      }
    }
}