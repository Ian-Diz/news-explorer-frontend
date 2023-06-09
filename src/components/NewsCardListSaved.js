import React from "react";
import NewsCard from "./NewsCard";

const NewsCardListSaved = ({
  isLoggedIn,
  newsCards,
  handleDeleteClick,
  setNewsCards,
}) => {
  return (
    <section className="news">
      <ul className="news__cards">
        {newsCards.map((card) => (
          <NewsCard
            card={card}
            key={Math.random()}
            isLoggedIn={isLoggedIn}
            isSaved={true}
            handleDeleteClick={handleDeleteClick}
            setNewsCards={setNewsCards}
            newsCards={newsCards}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardListSaved;
