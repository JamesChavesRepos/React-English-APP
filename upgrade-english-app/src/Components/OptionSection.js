import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

import emailIcon from "../imgs/email.png";
import facebookIcon from "../imgs/facebook.png";
import twitterIcon from "../imgs/twitter.png";
import GoogleLoginBtn from "./GoogleLoginBtn";
import GoogleLogoutBtn from "./GeneralLogoutBtn";

const clientId =
  "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

function OptionSection(props) {
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <>
      <button id="email" onClick={props.switchView}>
        <img src={emailIcon} /> <h3>Sign In With Email</h3>
      </button>
      <GoogleLoginBtn/>
      <button id="twitter">
        <img src={twitterIcon} /> <h3>Sign In With Twitter</h3>
      </button>

      <button id="facebook">
        <img src={facebookIcon} /> <h3>Sign In With Facebook</h3>
      </button>
    </>
  );
}

export default OptionSection;
