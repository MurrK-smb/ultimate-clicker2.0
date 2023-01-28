import "./Login.css";
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
          <h2 className="login__form-title">Welcome Back!</h2>
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
            Don't have an account? Sign up{" "}
            <NavLink className="login__sign-up-link" to="/signup">
              here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
