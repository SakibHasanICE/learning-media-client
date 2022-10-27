import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from'firebase/auth'

export const AuthContext=createContext();

const auth= getAuth(app)
const UserContext = ({children}) => {
    
    const [user,setUser]=useState({displayName:'hddkshd'})

    const googleProvider = new GoogleAuthProvider();
    const githubProvider =new GithubAuthProvider();
    const newUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signinWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const signinWithGithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser);
        })
        return unsubscribe();
    },[])

    const authInfo={user,newUser,login,signinWithGoogle,signinWithGithub};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;