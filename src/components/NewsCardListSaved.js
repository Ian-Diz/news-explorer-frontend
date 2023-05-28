import React from "react";
import NewsCardSaved from "./NewsCardSaved";
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
  }, []);

  return (
    <section className="news">
      <ul className="news__cards">
        {newsCards.slice(0, 5).map((card) => (
          <NewsCardSaved
            card={card}
            key={Math.random()}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardListSaved;
