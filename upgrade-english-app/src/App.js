import "./App.css";
import { useState } from "react";
import { useCookies } from "react-cookie";

import LoginPage from "./Components/LoginPage";
import OfficialPage from "./Components/OfficialPage";
import AuthContext from "./context/auth-context";

function App() {
  const [cookies, setCookie] = useCookies();
  console.log({cookies})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const loginHandler = (bool) => {
    setIsLoggedIn(bool);
  };

  return (
    <>
    
      <AuthContext.Provider
        value={{
          onLogin: loginHandler,
          userData: {},
        }}
      >
        {isLoggedIn ? <OfficialPage /> : <LoginPage/>}
      </AuthContext.Provider>
    </>
  );
}

export default App;
