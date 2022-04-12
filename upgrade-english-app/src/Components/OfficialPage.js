import React from 'react'

import bg from '../imgs/bg-2.png';
import styles from './OfficialPage.css'
import ToggleBtn from './ToggleBtn';
import Dashboard from './Dashboard';
import SignUpForm from './SignUpForm';
import Admin from './Admin';
import LogoutBtn from './LogoutBtn';

function OfficialPage() {
  return (
    <>
    <img src={bg}/>
    <main className={styles.mainContainer}>
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