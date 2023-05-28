import { getCurrentDate, getLastWeek, processRes } from "./constants";

export const getNews = (input) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${input}&apiKey=78c44d22767b45f285f2ce167c348ff4&from=${getLastWeek()}&to=${getCurrentDate}&pageSize=100`
  ).then((res) => processRes(res));
};

export const getTempArticles = (input) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${input}&apiKey=78c44d22767b45f285f2ce167c348ff4&pageSize=5`
  ).then((res) => processRes(res));
};
