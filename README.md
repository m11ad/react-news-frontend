
# React News Front-End

This is a React app that allows users to browse and view news articles from various categories.


## Prerequisites

Before running this application, make sure you have the following installed on your machine:

-   Node.js
-   npm

## Getting Started

1.  Clone this repository to your local machine
2.  Navigate to the root directory of the project and install the necessary dependencies by running `npm install`
3.  Start the development server by running `npm start`
4.  The app will be available at `http://localhost:3000` in your browser

## Features

-   View a list of all news articles
-   Filter news articles by category
-   View the details of a specific news article

## Built With

-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [React Router](https://reactrouter.com/) - A routing library for React apps
-   [Axios](https://github.com/axios/axios) - A library for making HTTP requests


## Backend API

This front-end was built specifically for the Grutto News API built with Laravel. In order for this application to function properly, the API must be running and accessible at [http://localhost:8000](http://localhost:8000). The source code for the API can be found in the [grutto-news-backend](https://github.com/grutto/grutto-news-backend) repository.

## Screenshots

Here are three screenshots for the front-end along with explanations:

1.  **Home Page**: This screenshot shows the home page of the application, which displays a list of all the news items. The user can browse through the list and click on a news item to view its details. Also there is a dropdown menu for the categories to select. 

![Home Page Screenshot][Imgur](https://imgur.com/PmOfodG)

2.  **Category Page**: This screenshot shows the category page, which displays all the news items belonging to a specific category. The user can select a category from the sidebar and the page will display all the news items in that category.

![Category Page Screenshot](https://imgur.com/SZiK7FY)

3.  **News Item Detail Page**: This screenshot shows the detail page for a specific news item. The page displays the title, body, and tags for the news item, as well as the category it belongs to.

![News Item Detail Page Screenshot](https://imgur.com/bcCNioO)

## Author

-   **Milad Yekleh** - _Full Stack Developer_ - [milad.space](https://milad.space) 
