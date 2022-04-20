import { useState } from "react";
import { useAuth } from "../context/auth-context";
import styles from "./LoginPage.module.css";

function EmailHandler(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signUp, login } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    console.log(user);
    setUser({ ...user, [name]: value });
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setError("");
    try {
      props.method === "register"
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
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="**********"
      />
      {props.method === "email" && (
        <span onClick={props.emailView} id="register">
          Haven't Registered Yet??
        </span>
      )}
      <div className={styles.btnContainer}>
      <button onClick={handleEmail} className={styles.signInBtn}>
        {props.method === "email" ? "sign in" : "Register"}
      </button>
      <button onClick={props.goBack} className={styles.signInBtn}>
        Back
      </button>
      </div>
    </>
  );
}

export default EmailHandler;
