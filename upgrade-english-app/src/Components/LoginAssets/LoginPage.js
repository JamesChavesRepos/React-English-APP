import React, { useState } from "react";

import darkLogo from "../../imgs/darkLogo.png";
import loginBg from "../../imgs/loginBg.png";
import OptionSection from "./OptionSection";
import styles from "./LoginPage.module.css";
import EmailHandler from "./EmailHandler"

function LoginPage() {
  
  const [emailLogin, setEmailLogin] = useState(false);
  const [method, setMethod] = useState('');

  const emailView = ({target}) => {
    console.log(target.id)
    setMethod(target.id)
    setEmailLogin(true);
  };

  const goBack = ()=>{
    console.log('go back')
    setEmailLogin(false)
  }
  return (
    <main className={styles.container}>
      <section id="form" className={styles.left}>
        <img className={styles.logo} src={darkLogo} />
        {!emailLogin ? (
          <OptionSection goBack={goBack} emailView={emailView} />
        ) : (
          <EmailHandler goBack={goBack} method={method}/>
        )}
      </section>
      <section className={styles.right}>
        <img src={loginBg} />
      </section>
    </main>
  );
}

export default LoginPage;
