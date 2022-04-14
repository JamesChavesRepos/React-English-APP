import React, { useContext } from "react";

import AuthContext from "../context/auth-context";
import gmailIcon from "../imgs/google.svg";

function GeneralLogoutBtn() {
  const ctx = useContext(AuthContext);

  const logout = () => {
    ctx.onLogin(false);
    function deleteCookies() {
      var allCookies = document.cookie.split(';');
      for (var i = 0; i < allCookies.length; i++)
          document.cookie = allCookies[i] + "=;expires="
          + new Date(0).toUTCString();
  }
    window.localStorage.clear()
    window.location.reload();
  };

  return (
    <>
      <button onClick={logout}> Log Out </button>
    </>
  );
}

export default GeneralLogoutBtn;
