import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logout from "../images/logout.svg";
import logoutWhite from "../images/logoutWhite.svg";
import ActivePopupContext from "../contexts/ActivePopupContext";

const NavBar = ({
  onLoginClick,
  theme,
  isHomeActive,
  isLoggedIn,
  handleMobileClick,
}) => {
  const [homeClass, setHomeClass] = React.useState("");
  const [articleClass, setArticleClass] = React.useState("");
  const [color, setColor] = React.useState("");

  const activePopup = useContext(ActivePopupContext);

  React.useEffect(() => {
    if (isHomeActive) {
      setHomeClass("active");
      setArticleClass("inactive");
      setColor(logoutWhite);
    } else {
      setHomeClass("inactive");
      setArticleClass("active");
      setColor(logout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(activePopup);

  return (
    <div className={`nav nav_${theme}`}>
      <Link to="/" className="nav__logo nav__link nav__link-active">
        News Explorer
      </Link>
      {activePopup === "signup" || activePopup === "login" ? null : (
        <button
          className={`nav__burger nav__burger_${theme}`}
          onClick={handleMobileClick}
        />
      )}
      <div className="nav__right">
        <Link
          to="/"
          className={`nav__home nav__link nav__highlight-${homeClass}_${theme} nav__link-active`}
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to="/saved-articles"
              className={`nav__articles nav__link nav__highlight-${articleClass}_${theme} nav__link-${articleClass}`}
            >
              Saved articles
            </Link>
            <button className={`nav__logout-button nav__button_${theme}`}>
              Username
              <img
                src={color}
                alt="Logout Button"
                className="nav__logout-image"
              />
            </button>
          </>
        ) : (
          <button
            className={`nav__signin nav__button_${theme} nav__button`}
            onClick={onLoginClick}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
