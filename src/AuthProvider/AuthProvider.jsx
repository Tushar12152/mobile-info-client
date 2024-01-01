import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const googleProvider=new GoogleAuthProvider()

    const googlepopUp=()=>{
        setLoading(true)
         return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
          const unSubscribe=onAuthStateChanged(auth,(user)=>{
               setUser(user)
               setLoading(false)
          })

          return ()=>{
             return unSubscribe()
          }
    },[])


    const authInfo={
        googlepopUp,
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
     children:PropTypes.node,
}

export default AuthProvider;