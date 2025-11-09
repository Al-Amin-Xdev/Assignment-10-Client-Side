import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from './firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);

  const register = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const login =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const PopUpLogIn =()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  };

  const logout =()=>{

    signOut(auth)
  };


  
  useEffect(()=>{

    const unsubscrib = onAuthStateChanged(auth, (CurrentUser) => {

          if (CurrentUser) {

            console.log(CurrentUser);
            setUser(CurrentUser);
            setLoading(false);

          } else {
            console.log("User is not Logged In");
            setUser(null);
          }

          return ()=>{
            unsubscrib();
          }
      });
    },
   [user]
  );


  const authInfo = {
    user, loading, register, login, PopUpLogIn, setUser, logout
  };



  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;