import Link from "next/link"

export default function () {
    return (
        <div>
        <h1>
            welcome to your account!
        </h1>
        <h2>
            Click{" "}
            <Link href="/">
                <a>here</a>{" "}
                to return to the home page
            </Link>
        </h2>
        </div>
    )
}