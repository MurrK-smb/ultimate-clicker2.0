import "./Register.css";
import Popup from "../Popup/Popup.js";

function Register() {
  const data = {
    title: "Welcome!",
    submit: "Sign Up",
    text: "Already have an account? Login ",
    pathname: "/login",
    newUser: true,
  };

  return <Popup data={data} />;
}

export default Register;
