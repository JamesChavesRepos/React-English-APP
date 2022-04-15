import React, { useState } from "react";

import lightLogo from "../imgs/lightLogo.png";
import loginBg from "../imgs/loginBg.png";
import OptionSection from "./OptionSection";
import styles from "./LoginPage.module.css";
import EmailLogin from "./EmailLogin";

function LoginPage(props) {
  const [emailLogin, setEmailLogin] = useState(false);
  const switchView = () => {
    setEmailLogin(true);
  };
  return (
    <main className={styles.container}>
      <section id="form" className={styles.left}>
        <img className={styles.logo} src={lightLogo} />
        {!emailLogin ? (
          <OptionSection
            switchView={switchView}
          />
        ) : (
          <EmailLogin handleLoggedState={props.handleLoggedState} />
        )}
      </section>
      <section className={styles.right}>
        <img src={loginBg} />
      </section>
    </main>
  );
}

export default LoginPage;
