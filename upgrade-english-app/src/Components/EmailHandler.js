import { useState } from "react";
import { useAuth } from "../context/auth-context";
import styles from "./LoginPage.module.css";

function EmailHandler(props) {
  console.log(props.method);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { signUp, login } = useAuth();
  const handleChange = ({ target: { name, value } }) =>{
      console.log(user)
    setUser({ ...user, [name]: value });}

  const handleEmailHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      (props.method === "register")
        ? await signUp(user.email, user.password)
        : await login(user.email, user.password);
      console.log("no errors");
    } catch (error) {
      if (error.code === "auth/internal-error") setError("Invalid Email");
      else if (error.code === "auth/weak-password") {
        setError("weak password");
      } else {
        console.log(error.code);
        setError(error.message);
      }
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <label>E-mail</label>
      <input
      name="email"
        onChange={handleChange}
        type="text"
        placeholder="example@email.com"
      />
      <label>Password</label>
      <input name="password" onChange={handleChange} type="password" placeholder="**********" />
      <button onClick={handleEmailHandler} className={styles.signInBtn}> {props.method === "email" ? "sign in" : "Register"} </button>
    </>
  );
}

export default EmailHandler;
