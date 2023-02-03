import "./Register.css";
import Popup from "../Popup/Popup.js";
import { useState, useEffect } from "react";

function Register() {
  const USER_REGEX = /^[A-Za-z][A-Za-z0-9_-]{2,21}$/;
  const PASS_REGEX =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,24}/;

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);

  // const [errorMessage, setErrorMessage] = useState("");
  // const [success, setSuccess] = useState("");

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASS_REGEX.test(password);
    setValidPassword(result);

    const match = password === confirm;
    setValidConfirm(match);
  }, [password, confirm]);

  // useEffect(() => {
  //   setErrorMessage("");
  // }, [user, password, confirm]);

  const data = {
    title: "Welcome!",
    submit: "Sign Up",
    text: "Already have an account? Login ",
    pathname: "/login",
    newUser: true,
    handleUserChange: (e) => {
      setUser(e.target.value);
    },
    handlePasswordChange: (e) => {
      setPassword(e.target.value);
    },
    handleConfirmChange: (e) => {
      setConfirm(e.target.value);
    },
    user: user,
    password: password,
    confirm: confirm,
    validName,
    validPassword,
    validConfirm,
    submitDisabled:
      !validName || !validPassword || !validConfirm ? true : false,
    submitActive:
      validName && validPassword && validConfirm && "popup__form-submit_a",
  };

  return <Popup data={data} />;
}

export default Register;
