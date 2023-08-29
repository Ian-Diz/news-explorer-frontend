# News Explorer

## About the project

News Explorer is a site that provides a search box for users to look up a wide collection of news articles from a third-party API. When a user enters text into the search bar and presses the "Search" button, it sends a GET request to said third-party API, retrieving up to 100 articles for the user to browse. The data of these articles fill in templates, which are displayed to the user 3 at a time, with the option to show more in increments of three. Should the user decide to, they could create an account and save any articles they find interested by clicking the little bookmark in the upper right corner. Clicking that bookmark sends a POST request with the data from the article, and stores said article's data in a back-end I created. The user can then go to their profile page, upon which a GET request will be made to the back-end to fetch any articles that that user has saved, which will then be displayed in a list, with the word or phrase the user used to find that article, as well as with a delete button if they wish to unsave the article.

### Technologies used for front-end

- React
- Javascript
- react-hook-form
- HTML5
- CSS
- Responsive web design

**Github links**

- [Link to frontend of the project](https://github.com/Ian-Diz/news-explorer-frontend)

- [Link to backend of the project](https://github.com/Ian-Diz/news-explorer-backend)

- [Link to website](https://www.newsexplorer.ignorelist.com/)
