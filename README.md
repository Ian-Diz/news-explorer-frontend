# News Explorer

## About the project

News Explorer functions as a search portal, allowing users to access an extensive range of news articles sourced from a third-party API. Users input their desired search criteria into the search bar and initiate the search by clicking "Search." This action triggers a GET request to the third-party API, which retrieves a maximum of 100 relevant articles for the user to peruse.

The retrieved article data is integrated into templates, presenting three articles at a time to the user. The user has the option to load more articles in sets of three as they explore the content. If users opt to create an account, they gain the ability to save articles they find intriguing by utilizing the bookmark icon situated in the upper right corner of each article. Clicking this icon triggers a POST request, forwarding the article's data to a back-end system that I developed.

On the user's profile page, a subsequent GET request to the back-end retrieves saved articles associated with that user. These saved articles are exhibited in a list format, accompanied by the original search term or phrase used to discover the article. Furthermore, users are given the option to remove saved articles by utilizing a delete button integrated into each listed article.

In summary, News Explorer streamlines the process of accessing, saving, and managing news articles, enhancing user experience and interaction through seamless integration with a third-party API and a custom-designed back-end system.

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
