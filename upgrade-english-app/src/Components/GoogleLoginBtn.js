import React from "react";
import { GoogleLogin } from "react-google-login";
import gmailIcon from "../imgs/google.svg";


let clientId = "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

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
      onSuccess={props.handleLoggedState()}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      render={renderProps => (
        <button>
        <img src={gmailIcon} /> <h3>Sign In With Email</h3>
      </button>
      )}
    />
    </>
  );
}

export default GoogleLoginBtn;
