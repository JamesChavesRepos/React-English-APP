import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { credentials } from "../context/auth-context";

const clientId =
  "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

function GoogleLoginBtn() {
  console.log(credentials)
  const onSuccess = (res) => {
    console.log(res)
    credentials.accessToken = JSON.stringify(res.accessToken);
    credentials.name = JSON.stringify(res.profileObj.name);
  };

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
