import React,{useContext} from 'react'

import AuthContext from "../context/auth-context";
// import bg from '../imgs/bg.svg';
import styles from './OfficialPage.css'
import GeneralLogoutBtn from './GeneralLogoutBtn';
import ToggleBtn from './ToggleBtn';
import Dashboard from './Dashboard';
import SignUpForm from './SignUpForm';
import Admin from './Admin';
import LogoutBtn from './LogoutBtn';

function OfficialPage() {
  let ctx = useContext(AuthContext);
  return (
    <>
    <main className={styles.mainContainer} >
  
    <h1>{ctx.name}</h1>
      <GeneralLogoutBtn/>
      {/* <ToggleBtn/>
      <Dashboard/>
      <SignUpForm/>
      <Admin/>
      <LogoutBtn/> */}
      
    </main>
    </>
  )
}

export default OfficialPage