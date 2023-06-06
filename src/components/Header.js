import NavBar from "./NavBar";
import Search from "./Search";

const Header = ({
  onLoginClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
  handleLogout,
  setKeyword,
}) => {
  return (
    <header className="header">
      <NavBar
        onLoginClick={onLoginClick}
        theme={theme}
        isLoggedIn={isLoggedIn}
        isHomeActive={isHomeActive}
        handleMobileClick={handleMobileClick}
        handleLogout={handleLogout}
      />
      <Search handleSearchSubmit={handleSearchSubmit} setKeyword={setKeyword} />
    </header>
  );
};

export default Header;
