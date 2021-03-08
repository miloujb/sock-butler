import Link from "next/link"

export default function Account () {
    return (
        <div>
        <h1>
            Welcome to your account!
        </h1>
      <>
      <h2>
          Please click{" "}<Link href="/"><a>here</a></Link>{" "}to return to the homepage!
      </h2>
      </>
        </div>
    )
}