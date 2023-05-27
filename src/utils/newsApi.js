import { getCurrentDate, getLastWeek, processRes } from "./constants";

export const getNews = (input) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${input}&apiKey=1e6911c9a8a542b7a5ca49df266447f5&from=${getLastWeek()}&to=${getCurrentDate}&pageSize=100`
  ).then((res) => processRes(res));
};
