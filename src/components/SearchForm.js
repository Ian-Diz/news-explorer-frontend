import React from "react";
import { useForm } from "react-hook-form";

const SearchForm = ({ handleSearchSubmit, setKeyword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [buttonColor, setButtonColor] = React.useState({});

  const onSubmit = (data) => {
    setKeyword(data.searchs);
    handleSearchSubmit(data.searchs);
    setButtonColor({
      backgroundColor: "#2a65cc",
    });
  };

  React.useState(() => {
    setButtonColor({
      backgroundColor: "#2f71e5",
    });
  }, []);

  return (
    <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="search__fieldset">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Enter topic"
            {...register("searchs", {
              required: "Please enter a keyword",
            })}
          />
          {errors.searchs && (
            <span className="search__errors">{errors.searchs.message}</span>
          )}
        </div>
        <button className="search__search" style={buttonColor}>
          Search
        </button>
      </fieldset>
      <button className="search__search-mobile">Search</button>
    </form>
  );
};

export default SearchForm;
