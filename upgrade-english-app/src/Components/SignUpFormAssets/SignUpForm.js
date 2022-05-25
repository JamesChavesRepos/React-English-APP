import React from "react";

import styles from "./signUpForm.module.css";
import formBg from "../../imgs/formBg.svg";
import lightLogo from "../../imgs/lightLogo.svg";
import DateTimePickers from './DateTimePickers'

export const signUpForm = () => {
  let timeOut = null;
  const inputVal = {
    fName: /^[a-z ,.'-]+$/i,
    pNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  const dateValHandler = () => {
    console.log("date changed");
  };
  
  const inputValHandler = ({ target }) => {
    clearTimeout(timeOut);
    if (inputVal[target.name].test(target.value)) {
      timeOut = setTimeout(function () {
        console.log("Input Value: " + target.value + " is valid");
        target.dataset.val = "valid";
      }, 500);
    } else {
      timeOut = setTimeout(function () {
        console.log("Input Value: " + target.value + " is  NOT valid");
        target.dataset.val = "invalid";
      }, 500);
    }
  };

  return (
    <article>
      <div>
        <img className={styles.formImg} src={formBg} />
      </div>
      <form action="mailto:sb@gmail.com">
        <img className={styles.lightLogo} src={lightLogo} />
        <label htmlFor="fName">Full Name</label>
        <input name="fName" onKeyUp={inputValHandler}></input>
        <label htmlFor="pNumber">Phone Number</label>
        <input name="pNumber" onKeyUp={inputValHandler}></input>
        <label htmlFor="email">Email Address</label>
        <input name="email" onKeyUp={inputValHandler}></input>
        <label htmlFor="timeDate">Time & Date</label>
        <DateTimePickers/>
        <button type="submit">Schedule Appointment</button>
      </form>
    </article>
  );
};
export default signUpForm;
