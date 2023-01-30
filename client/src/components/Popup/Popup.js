import "./Popup.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9_-]{2,21}$/;
const PASS_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,24}/;

function Popup(props) {
  const navigate = useNavigate();
  const userRef = useRef();
  // const [userFocus, setUserFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

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

  useEffect(() => {
    setErrorMessage("");
  }, [user, password, confirm]);

  return (
    <>
      <div className="popup">
        <div className="popup__form-container">
          <button
            className="popup__home-button"
            type="button"
            onClick={() => navigate("/")}
          ></button>
          <h2 className="popup__form-title">{props.data.title}</h2>
          <form className="popup__form">
            <input
              className="popup__form-input"
              type="text"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              required
              // aria-invalid={validName ? "false" : "true"}
              placeholder="Username"
              autoComplete="off"
            />
            <p className={user && !validName ? "error-message" : "hidden"}>
              Must be from 3 - 20 characters long. Must begin with a letter.
              0-9, _, - allowed.
            </p>
            <input
              className="popup__form-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              autoComplete="off"
            />
            <p
              className={
                password && !validPassword ? "error-message" : "hidden"
              }
            >
              Must be 8 - 24 characters. Must include upper and lowercase
              letters and include one special character
            </p>
            {props.data.newUser && (
              <>
                <input
                  className="popup__form-input"
                  type="password"
                  onChange={(e) => {
                    setConfirm(e.target.value);
                  }}
                  required
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                <p
                  className={
                    confirm && !validConfirm ? "error-message" : "hidden"
                  }
                >
                  Must match password
                </p>
              </>
            )}
            {/* <p
              ref={errorRef}
              className={errorMessage ? "popup__error-message" : "hidden"}
            >
              {errorMessage}
            </p> */}
            <button
              className="popup__form-submit"
              type="submit"
              disabled={
                !validName || !validPassword || !validConfirm ? true : false
              }
            >
              <span className="popup__form-submit-text">
                {props.data.submit}
              </span>
            </button>
          </form>
          <p className="popup__route">
            {props.data.text}
            <NavLink className="popup__route-link" to={props.data.pathname}>
              here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Popup;
