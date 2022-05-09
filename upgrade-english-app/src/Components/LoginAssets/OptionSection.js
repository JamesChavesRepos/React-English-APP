import React, { useEffect, useState } from "react";

import { useAuth } from "../../context/auth-context";
import emailIcon from "../../imgs/email.png";
import gmailIcon from "../../imgs/google.svg";
import facebookIcon from "../../imgs/facebook.png";
import twitterIcon from "../../imgs/twitter.png";

function OptionSection(props) {

  const { loginWithGoogle } = useAuth();
  
  const handleGoogleSignin = async () => {
    await loginWithGoogle();
  };

  return (
    <>
      <button id="email" onClick={props.emailView}>
        <img id="email" src={emailIcon} />{" "}
        <h3 id="email">Sign In With Email</h3>
      </button>
      <button onClick={handleGoogleSignin} id="gmail">
        <img src={gmailIcon} /> <h3>Sign In With Google</h3>
      </button>
      <button id="twitter">
        <img src={twitterIcon} /> <h3>Sign In With Twitter</h3>
      </button>
      <button id="facebook">
        <img src={facebookIcon} /> <h3>Sign In With Facebook</h3>
      </button>
      <span onClick={props.emailView} id="register">
        Register
      </span>
    </>
  );
}

export default OptionSection;
