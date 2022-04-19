import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

function GoogleLoginBtn() {

  const onSuccess = (res) => {
    console.log(res)

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
