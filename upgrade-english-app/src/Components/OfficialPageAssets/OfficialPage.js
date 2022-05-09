import React, { useContext } from "react";

import { useAuth } from "../../context/auth-context";
import styles from "./OfficialPage.module.css";
import left from "../../imgs/left.svg";
import bottomLeft from "../../imgs/bottomLeft.svg";
import topRight from "../../imgs/topRight.svg";
import bottomRight from "../../imgs/bottomRight.svg";
import sincoLogo from "../../imgs/logo-sinco.svg";
import MainView from "./MainView";

function OfficialPage() {
  const { user, logout, isLoggedIn,loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <>
      <main id={styles.container}>
        <img src={left} className={[styles.bgImg ,styles.left].join(" ")} />
        <img src={bottomLeft} className={[styles.bgImg ,styles.bottomLeft].join(" ")} />
        <img src={topRight} className={[styles.bgImg ,styles.topRight].join(" ")} />
        <img src={bottomRight} className={[styles.bgImg ,styles.bottomRight].join(" ")} />
        <MainView />
        <button className={styles.generalLogoutBtn} onClick={handleLogout}>Sign Out</button>
        <footer>
          <h5>Powered By</h5>
          <img id="sLogo" src={sincoLogo} />{" "}
        </footer>
      </main>
    </>
  );
}

export default OfficialPage;
