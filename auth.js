import React, {useState, useEffect, useContext, createContext, createElement, useReducer} from "react"
import nookies from "nookies"
import firebaseClient from "./firebaseClient"
import firebase from "firebase/app"
import "firebase/auth"

const authContext = createContext({})
export const AuthProvider = ({children}) => {
    firebaseClient();
    const [user, setUser] = useState(null)

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if(!user){
                setUser(null);
                nookies.set(undefined, "token", {})
                return; 
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, "token", {});
        })    
    }, [])
    return (<authContext.Provider value={{user}}>{children}</authContext.Provider>)
}

export const useAuth = () => useContext(authContext)