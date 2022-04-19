import "./App.css";
import { useState } from "react";

import LoginPage from "./Components/LoginPage";
import OfficialPage from "./Components/OfficialPage";
import {AuthProvider} from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const loginHandler = (bool) => {
    setIsLoggedIn(bool);
  };

  return (
    <>
      <AuthProvider >
        {isLoggedIn ? <OfficialPage /> : <LoginPage/>}
      </AuthProvider>
    </>
  );
}

export default App;
