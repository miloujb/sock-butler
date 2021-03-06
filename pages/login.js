import Link from "next/link"
import Router from 'next/router';
import firebase from "firebase/app"
import "firebase/auth"
import initFirebase from "./services/firebase"

initFirebase();
const provider = new firebase.auth.GoogleAuthProvider();

export default function Login () {
    return <button>
        <Link href="/account">
        <a>Log in!</a>
        </Link>
        
    </button>
}