import React from "react";
import { GoogleLogin } from "react-google-login";

import gmailIcon from "../imgs/google.svg";

const clientId = "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";
const onSuccess = (res) =>{
  console.log("login success! current user : ", res.profileObj)
}
const onFailure = (res) => {
  console.log("Failure : ", res);
};

function GoogleLoginBtn(props) {
  console.log(props)
  return (
    <>
    <GoogleLogin
      id="gmail"
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
    </>
  );
}

export default GoogleLoginBtn;
