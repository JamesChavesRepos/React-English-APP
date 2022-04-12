import React from "react";
import { GoogleLogout } from "react-google-login";

import gmailIcon from "../imgs/google.svg";

const clientId = "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

const onSuccess = (res) =>{
  console.log("Logout success! current user : ")
}


function GoogleLogoutBtn(props) {
  console.log(props)
  return (
    <>
    <GoogleLogout
      id="gmail"
      clientId={clientId}
      
      onLogoutSuccess={onSuccess}
    />
    </>
  );
}

export default GoogleLogoutBtn;
