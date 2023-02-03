import "./Login.css";
import Popup from "../Popup/Popup.js";
import { useState, useEffect } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    const result = user ? true : false;
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = password ? true : false;
    setValidPassword(result);
  }, [password]);

  const data = {
    title: "Welcome Back!",
    submit: "Login",
    text: "Don't have an account? Sign up ",
    pathname: "/register",
    handleUserChange: (e) => {
      setUser(e.target.value);
    },
    handlePasswordChange: (e) => {
      setPassword(e.target.value);
    },
    validName,
    validPassword,
    submitDisabled: !validName || !validPassword ? true : false,
    submitActive: validName && validPassword && "popup__form-submit_a",
  };

  return <Popup data={data} />;
}

export default Login;
