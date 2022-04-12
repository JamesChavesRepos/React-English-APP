import './App.css';
import { useState } from 'react';

import LoginPage from './Components/LoginPage'
import OfficialPage from './Components/OfficialPage'


function App() {

  const [loggedIn,setLoggedIn] = useState(false);

  const handleLoggedState = ()=>{
    setLoggedIn(true)
  }

  return (
    <>
      {/* {loggedIn ? <LoginPage handleLoggedState={handleLoggedState}/> : <OfficialPage />} */}
      <LoginPage handleLoggedState={setLoggedIn}/>
    </>
  );
}

export default App;
