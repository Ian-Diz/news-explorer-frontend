import { baseUrl, processRes } from "./constants";

export const getArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => processRes(res));
};

export const addArticle = (card, token) => {
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: card.keyword,
      title: card.title,
      text: card.description,
      date: card.publishedAt.slice(0, 10),
      source: card.source.name,
      link: card.url,
      image: card.urlToImage,
    }),
  }).then((res) => processRes(res));
};

export const removeArticle = (id, token) => {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => processRes(res));
};
