import Link from 'next/link'

export default function BlogID() {
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
        </>
    )
}