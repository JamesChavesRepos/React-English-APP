import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const credentials = {
    name: "",
    onLogin : [{},()=>{}],
    accessToken: "",
    userData: {},
}

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ signUp, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
export default AuthProvider;

