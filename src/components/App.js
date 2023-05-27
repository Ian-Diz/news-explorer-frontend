import React from "react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import PopupWithSuccess from "./PopupWithSuccess";
import ProtectedRoute from "./ProtectedRoute";
import SavedNews from "./SavedNews";
import MainPage from "./MainPage";
import { getNews } from "../utils/newsApi";
import MobileMenu from "./MobileMenu";

function App() {
  const [activePopup, setActivePopup] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isSearchLoading, setIsSearchLoading] = React.useState(true);

  const handleLoginClick = () => {
    setActivePopup("login");
  };

  const handleSignupClick = () => {
    setActivePopup("signup");
  };

  const handleMobileClick = () => {
    setActivePopup("mobile");
  };

  const handleOutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopups();
    }
  };

  const closePopups = () => {
    setActivePopup("");
  };

  const handleSearchSubmit = (input) => {
    setActiveSearch(true);
    setIsSearchLoading(true);

    getNews(input)
      .then((data) => {
        setNewsCards(data.articles);
      })
      .then(() => {
        setIsSearchLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const closeWithEsc = (evt) => {
      if (evt.key === "Escape") {
        closePopups();
      }
    };

    window.addEventListener("keydown", closeWithEsc);

    return () => {
      window.removeEventListener("keydown", closeWithEsc);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              handleSearchSubmit={handleSearchSubmit}
              handleLoginClick={handleLoginClick}
              activeSearch={activeSearch}
              cards={newsCards}
              isSearchLoading={isSearchLoading}
              isLoggedIn={isLoggedIn}
              handleMobileClick={handleMobileClick}
            />
          }
        />
        <Route
          path="/saved-articles"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                isLoggedIn={isLoggedIn}
                handleLoginClick={handleLoginClick}
                handleMobileClick={handleMobileClick}
              />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
      {activePopup === "login" && (
        <LoginPopup
          closePopups={closePopups}
          handleOutClick={handleOutClick}
          handleSignupClick={handleSignupClick}
          isLoading={isLoading}
        />
      )}
      {activePopup === "signup" && (
        <RegisterPopup
          closePopups={closePopups}
          handleOutClick={handleOutClick}
          isLoading={isLoading}
          handleLoginClick={handleLoginClick}
        />
      )}
      {activePopup === "success" && (
        <PopupWithSuccess
          closePopups={closePopups}
          handleOutClick={handleOutClick}
        />
      )}
      {activePopup === "mobile" && (
        <MobileMenu
          closePopups={closePopups}
          handleOutClick={handleOutClick}
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}

export default App;
