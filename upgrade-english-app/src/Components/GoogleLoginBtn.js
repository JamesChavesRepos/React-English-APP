import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";

import AuthContext from "../context/auth-context";
import gmailIcon from "../imgs/google.svg";

const clientId =
  "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

function GoogleLoginBtn() {
  const ctx = useContext(AuthContext);

  const onSuccess = (res) => {
    ctx.accessToken = JSON.stringify(res.accessToken);
    ctx.name = JSON.stringify(res.profileObj.name)
    ctx.onLogin();
  };
console.log(ctx)
  const onFailure = (res) => console.log("Failure : ", res);

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
