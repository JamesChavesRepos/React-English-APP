import "./App.css";
import LoginPage from "./Components/LoginPage";
import OfficialPage from "./Components/OfficialPage";
import {useAuth} from "./context/auth-context";

function App() {

  const {isLoggedIn} = useAuth()
  return (
    <>
        {!isLoggedIn ? <LoginPage/> : <OfficialPage/>}
    </>
  );
}

export default App;
