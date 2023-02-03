import "./Popup.css";
import { useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Popup(props) {
  const navigate = useNavigate();
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
  }

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
          <form className="popup__form" onSubmit={handleSubmit}>
            <input
              className="popup__form-input"
              type="text"
              ref={userRef}
              onChange={props.data.handleUserChange}
              required
              placeholder="Username"
              autoComplete="off"
            />
            {props.data.newUser && (
              <p
                className={
                  props.data.user && !props.data.validName
                    ? "error-message"
                    : "hidden"
                }
              >
                Must be from 3 - 20 characters long. Must begin with a letter.
                0-9, _, - allowed.
              </p>
            )}
            <input
              className="popup__form-input"
              type="password"
              onChange={props.data.handlePasswordChange}
              required
              placeholder="Password"
              autoComplete="off"
            />
            {props.data.newUser && (
              <>
                <p
                  className={
                    props.data.password && !props.data.validPassword
                      ? "error-message"
                      : "hidden"
                  }
                >
                  Must be 8 - 24 characters. Must include upper and lowercase
                  letters and include one special character
                </p>
                <input
                  className="popup__form-input"
                  type="password"
                  onChange={props.data.handleConfirmChange}
                  required
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                <p
                  className={
                    props.data.confirm && !props.data.validConfirm
                      ? "error-message"
                      : "hidden"
                  }
                >
                  Must match password
                </p>
              </>
            )}
            <button
              className={`popup__form-submit ${
                props.data.validName &&
                props.data.validPassword &&
                props.data.validConfirm &&
                "popup__form-submit_a"
              }`}
              type="submit"
              disabled={
                !props.data.validName ||
                !props.data.validPassword ||
                !props.data.validConfirm
                  ? true
                  : false
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
