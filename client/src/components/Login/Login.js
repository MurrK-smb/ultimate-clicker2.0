import "./Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <div className="login__form-container">
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
        </div>
      </div>
    </>
  );
}

export default Login;
