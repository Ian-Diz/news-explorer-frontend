import React from "react";
import closeIcon from "../images/close.svg";

const PopupWithForm = ({
  title,
  buttonText,
  onClose,
  children,
  onOutClick,
  handleSubmit,
  otherButtonClick,
  isValid,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="popup__container-form" onClick={onOutClick}>
      <form className="popup__form" onSubmit={handleSubmit}>
        <fieldset className="popup__fieldset">
          <button type="button" className="popup__button" aria-label="Close">
            <img
              className="popup__close"
              alt="Close button"
              src={closeIcon}
              id="addPopup-close"
              onClick={onClose}
            />
          </button>
          <h2 className="popup__header">{title}</h2>
          {children}
          <button
            className="popup__main"
            type="submit"
            aria-label="Save"
            id="addSave"
            disabled={!isValid}
          >
            {buttonText.button}
          </button>
          <button
            className="popup__other"
            type="button"
            onClick={otherButtonClick}
          >
            or <span className="popup__color">{buttonText.other}</span>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PopupWithForm;
