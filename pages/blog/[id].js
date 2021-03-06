import Link from 'next/link'
import {Client} from "../../prismic-config"
import {RichText} from "prismic-reactjs"


export default function Post({post}) {
    return (
        <>
        <h1>
           <Link href='/blog'>
               <a>Click here to return to the blog!</a>
               </Link> 
        </h1>
        <h2>
            <Link href="/">
                <a>
                    Click here to return home!
                </a>
            </Link>
        </h2>
        <div>
            <h1>
            {
                RichText.render(post.data.title)

            }
            </h1>
        </div>
        </>
    )
}

//called on every request

export async function getServerSideProps(context) {
     const post = await Client().getbyID('post', context.query.post)
     return {
         props: {
             post : post
         }
     }
}