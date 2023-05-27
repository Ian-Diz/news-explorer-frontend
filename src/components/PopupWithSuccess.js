import React from "react";
import closeIcon from "../images/close.svg";

const PopupWithSuccess = ({ closePopups, handleOutClick }) => {
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
        <div className="popup__container_confirm">
          <p className="popup__text_confirm">
            Are you sure you want to delete this item?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupWithSuccess;
