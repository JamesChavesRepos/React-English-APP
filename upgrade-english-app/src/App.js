import "./App.css";
import { useState } from "react";

import LoginPage from "./Components/LoginPage";
import OfficialPage from "./Components/OfficialPage";
import AuthContext from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <AuthContext.Provider value={{
        onLogin : loginHandler,
        userData: {},
      }}>
        {isLoggedIn ? <OfficialPage/> : <LoginPage />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
