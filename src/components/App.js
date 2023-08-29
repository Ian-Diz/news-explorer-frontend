import React from "react";
import Footer from "./Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import PopupWithSuccess from "./PopupWithSuccess";
import ProtectedRoute from "./ProtectedRoute";
import SavedNews from "./SavedNews";
import MainPage from "./MainPage";
import { getNews } from "../utils/newsApi";
import MobileMenu from "./MobileMenu";
import ActivePopupContext from "../contexts/ActivePopupContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import * as auth from "../utils/auth";
import { addArticle, getArticles, removeArticle } from "../utils/mainApi";
import SavedCardsContext from "../contexts/SavedCardsContext";

function App() {
  const [activePopup, setActivePopup] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isSearchLoading, setIsSearchLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [savedCards, setSavedCards] = React.useState([]);

  const navigate = useNavigate();

  const handleLogin = (email, pw) => {
    auth
      .signIn(email, pw)
      .then((data) => {
        if (data.token) {
          setToken(data.token);

          auth
            .checkToken(data.token)
            .then((res) => {
              return res;
            })
            .then((data) => {
              setCurrentUser(data);
            })
            .then(() => {
              setIsLoggedIn(true);
            })
            .then(() => {
              navigate("/saved-articles");
            })
            .catch((err) => console.log(err));

          getArticles(data.token).then((data) => {
            setSavedCards(data);
          });
        }
      })
      .then(() => {
        closePopups();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Username or password is incorrect");
        setIsLoading(false);
      });
  };

  const handleRegister = (email, pw, name) => {
    setIsLoading(true);

    auth
      .signUp(email, pw, name)
      .then((res) => {
        if (res) {
          setActivePopup("success");
        } else {
          console.log("Something went wrong.");
          setErrorMessage("Something went wrong");
        }
      })
      .then(() => {
        setActivePopup("success");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("This email is already in use");
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setActiveSearch(false);
    setKeyword("");
    setSavedCards([]);
  };

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

  const checkDuplicate = (card) => {
    if (!savedCards.some((c) => c.link === card.url)) {
      addArticle({ keyword: keyword, ...card }, token, currentUser)
        .then((data) => {
          savedCards.push(data);
        })
        .catch((e) => console.log(e));
    }
  };

  const checkDelete = (card) => {
    let article = savedCards.find((c) => c.link === card.url);

    if (article !== undefined) {
      handleDeleteClick(article._id, card);
    }
  };

  const handleBook = (card, isBooked) => {
    isBooked ? checkDelete(card) : checkDuplicate(card);
  };

  const handleDeleteClick = (id, card) => {
    removeArticle(id, token)
      .then(() => {
        savedCards.splice(
          savedCards.findIndex(
            (c) => c.link === card.link || c.link === card.url
          ),
          1
        );
      })
      .catch((e) => console.log(e));
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

  React.useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      setToken(jwt);

      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
          }
          return res;
        })
        .then((data) => {
          setCurrentUser(data);
        })
        .then(() => {
          getArticles(jwt).then((data) => {
            setSavedCards(data);
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ActivePopupContext.Provider value={activePopup}>
        <SavedCardsContext.Provider value={savedCards}>
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
                  handleLogout={handleLogout}
                  handleBook={handleBook}
                  setKeyword={setKeyword}
                  handleSignupClick={handleSignupClick}
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
                    handleLogout={handleLogout}
                    token={token}
                    handleDeleteClick={handleDeleteClick}
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
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              handleLogin={handleLogin}
            />
          )}
          {activePopup === "signup" && (
            <RegisterPopup
              closePopups={closePopups}
              handleOutClick={handleOutClick}
              isLoading={isLoading}
              handleLoginClick={handleLoginClick}
              handleSignup={handleRegister}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
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
              handleLogout={handleLogout}
            />
          )}
          {activePopup === "success" && (
            <PopupWithSuccess
              closePopups={closePopups}
              handleOutClick={handleOutClick}
              handleLoginClick={handleLoginClick}
            ></PopupWithSuccess>
          )}
        </SavedCardsContext.Provider>
      </ActivePopupContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
