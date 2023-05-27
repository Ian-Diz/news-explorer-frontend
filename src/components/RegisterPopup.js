import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "react-hook-form";

const RegisterPopup = ({
  closePopups,
  handleOutClick,
  handleLoginClick,
  handleSignup,
  isLoading,
}) => {
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign up",
    other: "Sign in",
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
      title="Sign up"
      onClose={closePopups}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      otherButtonClick={handleLoginClick}
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
      <label className="popup__label">
        Username
        <input
          className="popup__input"
          placeholder="Enter your username"
          type="text"
          {...register("username", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Minimum length is 8 characters",
            },
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
          })}
        />
      </label>
      {errors.username && (
        <span className="popup__errors">{errors.username.message}</span>
      )}
    </PopupWithForm>
  );
};

export default RegisterPopup;
