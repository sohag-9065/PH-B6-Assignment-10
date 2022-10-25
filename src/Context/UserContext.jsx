import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'
  import React, { createContext, useEffect, useState } from 'react'
  import app from '../firebase/firebase.config'
  
  const auth = getAuth(app)
  export const AuthContext = createContext()
  
  const UserContext = ({ children }) => {
  
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
  
    //1. Create User
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    //2. Login with Password
  const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // 3. Logout
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }
  
  
    useEffect(() => {
      //this part will execute once the component is mounted.
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      })
  
      return () => {
        //this part will execute once the component is unmounted.
        unsubscribe()
      }
    }, [])
  
    const authInfo = {
      user,
      createUser,
      signin,
      loading,
      logout,
    }
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
  }
  
  export default UserContext