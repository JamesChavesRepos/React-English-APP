import React from "react";
import styles from "./LoginPage.module.css";

function EmailLogin() {
    const handleEmailLogin = ()=>{
        console.log('handle email logic goes here')
      }
    
  return (
    <>
      <label>E-mail</label>
      <input type="text" placeholder="example@email.com" />
      <label>Password</label>
      <input type="text" placeholder="**********" />
      <button className={styles.signInBtn} onclick={handleEmailLogin}>Sign In</button>
    </>
  );
}

export default EmailLogin;
