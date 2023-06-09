import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";
import NotFound from "./NotFound";
import SavedCardsContext from "../contexts/SavedCardsContext";

const NewsCardList = ({
  cards,
  isLoading,
  isLoggedIn,
  handleBook,
  handleSignupClick,
}) => {
  const savedCards = useContext(SavedCardsContext);
  const [amountShown, setAmountShown] = React.useState(3);
  const [isLarge, setIsLarge] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);

  const showMore = () => {
    setAmountShown(amountShown + 3);
    checkIsLarge();
  };

  const checkIsLarge = () => {
    if (amountShown >= 99) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  React.useEffect(() => {
    if (cards.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  React.useEffect(() => {
    setNewsCards(savedCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : isEmpty ? (
        <NotFound />
      ) : (
        <section className="news">
          <h2 className="news__header">Search Results</h2>
          <ul className="news__cards">
            {cards.slice(0, amountShown).map((card) => (
              <NewsCard
                card={card}
                key={Math.random()}
                isLoggedIn={isLoggedIn}
                isSaved={false}
                handleBook={handleBook}
                handleSignupClick={handleSignupClick}
                newsCards={newsCards}
              />
            ))}
          </ul>
          {isLarge ? null : (
            <button className="news__show" onClick={showMore}>
              Show more
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default NewsCardList;
