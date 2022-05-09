import {
  createContext,
  useEffect,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("USER FOUND ! AUTH DATA RETREIVED : ", currentUser);
      setUser(currentUser);
      currentUser && setIsLoggedIn(true);
      setLoading(false);
    });
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [scores, setScores] = useState({});

  // const [level, setLevel] = useState();

  const [user, setUser] = useState("");

  // let userDBData = {};

  const [loading, setLoading] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => {
    signOut(auth);
    window.location.reload();
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };
  

  return (
    <authContext.Provider
      value={{
        signUp,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        isLoggedIn,
        // scores,
        // level
      }}
    >
      {children}
    </authContext.Provider>
  );
}
export default AuthProvider;
