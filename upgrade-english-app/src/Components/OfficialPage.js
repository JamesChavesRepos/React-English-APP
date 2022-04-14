import React,{useContext} from 'react'
import AuthContext from "../context/auth-context";
import bg from '../imgs/bg-2.png';
import styles from './OfficialPage.css'
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
    <img src={bg} />
    <h1>{ctx.name}</h1>
      <ToggleBtn/>
      <Dashboard/>
      <SignUpForm/>
      <Admin/>
      <LogoutBtn/>
    </main>
    </>
  )
}

export default OfficialPage