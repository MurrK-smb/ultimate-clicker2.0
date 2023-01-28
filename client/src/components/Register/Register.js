import "../Login/Login.css";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login">
        <div className="login__form-container">
          <button
            className="login__home-button"
            type="button"
            onClick={() => navigate("/")}
          ></button>
          <h2 className="login__form-title">Welcome!</h2>
          <form className="login__form">
            <input
              className="login__form-input"
              type="text"
              placeholder="Username"
            />
            <input
              className="login__form-input"
              type="password"
              placeholder="Password"
            />
            <button className="login__form-submit" type="submit">
              <span className="login__form-submit-text">Login</span>
            </button>
          </form>
          <p className="login__sign-up">
            Already have an account? Login{" "}
            <NavLink className="login__sign-up-link" to="/login">
              here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
