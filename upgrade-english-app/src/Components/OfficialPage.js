import React, { useContext } from "react";

import { useAuth } from "../context/auth-context";
import styles from "./OfficialPage.css";
import left from "../imgs/left.svg";
import bottomLeft from "../imgs/bottomLeft.svg";
import topRight from "../imgs/topRight.svg";
import bottomRight from "../imgs/bottomRight.svg";
import sincoLogo from "../imgs/logo-sinco.svg";
import MainView from "./MainView";

function OfficialPage() {
  const { user, logout, isLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    }catch(error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Welcome {user.email}</h1>
      <main id="container">
        <img className="bgImg" src={left} id="left" />
        <img className="bgImg" src={bottomLeft} id="bottomLeft" />
        <img className="bgImg" src={topRight} id="topRight" />
        <img className="bgImg" src={bottomRight} id="bottomRight" />
        <MainView />
        <button onClick={handleLogout}>Sign Out </button>
        <footer>
          <h5>Powered By</h5>
          <img id="sLogo" src={sincoLogo} />{" "}
        </footer>
      </main>
    </>
  );
}

export default OfficialPage;
