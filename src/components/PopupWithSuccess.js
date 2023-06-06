import React from "react";
import closeIcon from "../images/close.svg";

const PopupWithSuccess = ({
  closePopups,
  handleOutClick,
  handleLoginClick,
}) => {
  return (
    <div className="popup__container-confirm" onClick={handleOutClick}>
      <div className="popup__confirm">
        <button type="button" className="popup__button" aria-label="Close">
          <img
            className="popup__close"
            alt="Close button"
            src={closeIcon}
            onClick={closePopups}
          />
        </button>
        <h3 className="popup__confirm-title">
          Registration successfully completed!
        </h3>
        <button className="popup__confirm-signin" onClick={handleLoginClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default PopupWithSuccess;
