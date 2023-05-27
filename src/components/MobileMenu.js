import React from "react";
import { Link } from "react-router-dom";
import closeIcon from "../images/close.svg";
import logout from "../images/logoutWhite.svg";

const MobileMenu = ({
  closePopups,
  handleClick,
  handleOutClick,
  handleLoginClick,
  handleRegister,
  isLoggedIn,
}) => {
  return (
    <div className="menu" onClick={handleOutClick}>
      <div className="menu__container">
        <div className="menu__over">
          <Link to="/" className="menu__logo menu__link" onClick={closePopups}>
            News Explorer
          </Link>
          <button type="button" className="menu__button" aria-label="Close">
            <img
              className="menu__close"
              alt="Close button"
              src={closeIcon}
              onClick={closePopups}
            />
          </button>
        </div>
        <Link to="/" className="menu__home menu__link" onClick={closePopups}>
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to="/saved-articles"
              className="menu__articles menu__link"
              onClick={closePopups}
            >
              Saved articles
            </Link>
            <button className="menu__logout-button" onClick={closePopups}>
              Username
              <img
                src={logout}
                alt="Logout Button"
                className="menu__logout-image"
              />
            </button>
          </>
        ) : (
          <button className={`menu__signin`} onClick={handleLoginClick}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
