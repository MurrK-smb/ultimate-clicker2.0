import "./Login.css";
import Popup from "../Popup/Popup.js";

function Login() {
  const data = {
    title: "Welcome Back!",
    submit: "Login",
    text: "Don't have an account? Sign up ",
    pathname: "/register",
  };

  return <Popup data={data} />;
}

export default Login;
