import "./App.css";
import { useState } from "react";

import LoginPage from "./Components/LoginPage";
import OfficialPage from "./Components/OfficialPage";
import AuthContext from "./context/auth-context";
import sincoLogo from '../src/imgs/logo-sinco.svg';
import left from '../src/imgs/left.svg';
import bottomLeft from '../src/imgs/bottomLeft.svg';
import topRight from '../src/imgs/topRight.svg';
import bottomRight from '../src/imgs/bottomRight.svg';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  {isLoggedIn ? console.log("logged in") : console.log("logged in")}

  console.log(isLoggedIn)
  const loginHandler = (bool) => {
    setIsLoggedIn(bool);
  };

  return (
    <>
      <AuthContext.Provider value={{
        onLogin : loginHandler,
        userData: {},
      }}>
        {!isLoggedIn ? <OfficialPage/> : <LoginPage />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
