import SearchForm from "./SearchForm";

const Search = ({ handleSearchSubmit, setKeyword }) => {
  return (
    <section className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__info">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        setKeyword={setKeyword}
      />
    </section>
  );
};

export default Search;
