import React, { useContext } from "react";

import AuthContext from "../context/auth-context";

function GeneralLogoutBtn() {
  const ctx = useContext(AuthContext);
  const logout = () => {
    ctx.onLogin(false);
    
    // function deleteCookies() {
    //   var allCookies = document.cookie.split(";");
    //   for (var i = 0; i < allCookies.length; i++)
    //     document.cookie =
    //       allCookies[i] + "=;expires=" + new Date(0).toUTCString();
    // }
    window.localStorage.clear();
    // window.location.reload();
  };

  return (
    <>
      <button id="generalLogoutBtn" onClick={logout}> Log Out </button>
    </>
  );
}

export default GeneralLogoutBtn;
