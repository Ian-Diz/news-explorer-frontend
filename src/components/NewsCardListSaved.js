import React from "react";
import NewsCard from "./NewsCard";
import { getTempArticles } from "../utils/newsApi";

const NewsCardListSaved = ({ isLoggedIn }) => {
  const [newsCards, setNewsCards] = React.useState([]);

  React.useEffect(() => {
    getTempArticles("Hello")
      .then((data) => {
        setNewsCards(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="news">
      <ul className="news__cards">
        {newsCards.slice(0, 5).map((card) => (
          <NewsCard
            card={card}
            key={Math.random()}
            isLoggedIn={isLoggedIn}
            isSaved={true}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardListSaved;
