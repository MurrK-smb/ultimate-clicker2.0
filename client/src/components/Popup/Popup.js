import "./Popup.css";
import { useNavigate, NavLink } from "react-router-dom";

function Popup(props) {
  const navigate = useNavigate();

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
              placeholder="Username"
            />
            <input
              className="popup__form-input"
              type="password"
              placeholder="Password"
            />
            <button className="popup__form-submit" type="submit">
              <span className="popup__form-submit-text">
                {props.data.submit}
              </span>
            </button>
          </form>
          <p className="popup__sign-up">
            {props.data.text}
            <NavLink className="popup__sign-up-link" to={props.data.pathname}>
              here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Popup;
