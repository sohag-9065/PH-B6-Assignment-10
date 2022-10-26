import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const [user, setUser] = useState({})
  const [loadingUser, setLoadingUser] = useState(true)

  //1. Create User
  const createUser = (email, password) => {
    setLoadingUser(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //2. Login with Password
  const signin = (email, password) => {
    setLoadingUser(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //   3. Update Name
  const updateNameImage = (name, image) => {
    setLoadingUser(true)
    return updateProfile(auth.currentUser, { displayName: name, photoURL: image})
  }

  //   4. Email Verify
  const verifyEmail = () => {
    setLoadingUser(true)
    return sendEmailVerification(auth.currentUser)
  }

  // 5. Logout
  const logout = () => {
    setLoadingUser(true)
    return signOut(auth)
  }

  //6. Reset Password
  const resetPassword = email => {
    setLoadingUser(true)
    return sendPasswordResetEmail(auth, email)
  }

   // 7. Google Signin
   const signInWithGoogle = () => {
    setLoadingUser(true)
    return signInWithPopup(auth, googleProvider)
  }

   // 7. Github Signin
   const signInWithGithub = () => {
    setLoadingUser(true)
    return signInWithPopup(auth, githubProvider)
  }

  // twitter Sign in 
  const signInWithTwitter = () => {
    setLoadingUser(true)
    return signInWithPopup(auth, twitterProvider)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoadingUser(false)
    })

    return () => {
      unsubscribe()
    }
  }, [loadingUser])

  const authInfo = {
    user,
    createUser,
    signin,
    loadingUser,
    updateNameImage,
    logout,
    resetPassword,
    verifyEmail,
    signInWithGoogle,
    signInWithGithub,
    signInWithTwitter
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default UserContext