import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

function AuthProviderComponent({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    setLoading(true);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
    setLoading(true);
  };

  const signOutUser = () => {
    return signOut(auth);
    setLoading(true);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    signInUser,
    googleSignIn,
    signOutUser,
    githubSignIn,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviderComponent;

AuthProviderComponent.propTypes = {
  children: PropTypes.node,
};
