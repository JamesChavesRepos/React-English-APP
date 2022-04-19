import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is no auth provider");
  return context;
};

export function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ signUp, login, user, logout, loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
export default AuthProvider;
