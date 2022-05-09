import "./App.css";
import LoginPage from "./Components/LoginAssets/LoginPage";
import OfficialPage from "./Components/OfficialPageAssets/OfficialPage";
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
