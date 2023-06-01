import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "react-hook-form";

const LoginPopup = ({
  closePopups,
  handleOutClick,
  handleLogin,
  handleSignupClick,
  isLoading,
}) => {
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign in",
    other: "Sign up",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closePopups();
  };

  return (
    <PopupWithForm
      title="Sign in"
      onClose={closePopups}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      otherButtonClick={handleSignupClick}
      handleSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
    >
      <label className="popup__label">
        Email
        <input
          className="popup__input"
          placeholder="Enter email"
          type="text"
          {...register("email", {
            required: "This field is required",
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
        />
      </label>
      {errors.email && (
        <span className="popup__errors">{errors.email.message}</span>
      )}
      <label className="popup__label">
        Password
        <input
          className="popup__input"
          placeholder="Enter password"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Minimum length is 8 characters",
            },
          })}
        />
      </label>
      {errors.password && (
        <span className="popup__errors">{errors.password.message}</span>
      )}
    </PopupWithForm>
  );
};

export default LoginPopup;
