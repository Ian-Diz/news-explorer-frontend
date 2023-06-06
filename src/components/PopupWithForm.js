import React from "react";

const PopupWithForm = ({
  title,
  buttonText,
  onClose,
  children,
  onOutClick,
  handleSubmit,
  otherButtonClick,
  isValid,
  errorMessage,
  setErrorMessage,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  React.useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setErrorMessage("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="popup" onClick={onOutClick}>
      <form className="popup__form" onSubmit={handleSubmit}>
        <fieldset className="popup__fieldset">
          <button
            type="button"
            className="popup__button"
            aria-label="Close"
            onClick={onClose}
          />

          <h2 className="popup__header">{title}</h2>
          {children}

          <span className="popup__errors-signup">{errorMessage}</span>

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
    </section>
  );
};

export default PopupWithForm;
