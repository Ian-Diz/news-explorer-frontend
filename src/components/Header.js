import NavBar from "./NavBar";
import Search from "./Search";

const Header = ({
  onLoginClick,
  theme,
  handleSearchSubmit,
  isLoggedIn,
  isHomeActive,
  handleMobileClick,
}) => {
  return (
    <header className="header">
      <NavBar
        onLoginClick={onLoginClick}
        theme={theme}
        isLoggedIn={isLoggedIn}
        isHomeActive={isHomeActive}
        handleMobileClick={handleMobileClick}
      />
      <Search handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
