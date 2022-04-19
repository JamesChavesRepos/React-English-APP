import React, { useState } from "react";

import lightLogo from "../imgs/lightLogo.png";
import loginBg from "../imgs/loginBg.png";
import OptionSection from "./OptionSection";
import styles from "./LoginPage.module.css";
import EmailHandler from "./EmailHandler"

function LoginPage() {
  const [emailLogin, setEmailLogin] = useState(false);
  const [method, setMethod] = useState('');

  const switchView = ({target}) => {
    console.log(target.id)
    setMethod(target.id)
    setEmailLogin(true);
  };
  return (
    <main className={styles.container}>
      <section id="form" className={styles.left}>
        <img className={styles.logo} src={lightLogo} />
        {!emailLogin ? (
          <OptionSection switchView={switchView} />
        ) : (
          <EmailHandler method={method}/>
        )}
      </section>
      <section className={styles.right}>
        <img src={loginBg} />
      </section>
    </main>
  );
}

export default LoginPage;
