# newsScrape

###### Written in node.js by Jackson Oppenheim

https://news-scrape-jacksonopp.herokuapp.com/

---

### What is newsScrape?

newsScrape is a MERN full stack web-app that scrapes the r/news subreddit using cheerio and updates a mongoDB database with the current trending news. It then displays a list of all stories with more than 100 upvotes in order of time posted. You can click a link to view and add comments to the story's page.

### NPM Dependencies

-  axios 0.19.0
-  body-parser 1.19.0
-  cheerio 1.0.0-rc.3
-  express 4.17.1
-  if-env 1.0.5
-  mongoose 5.7.3
-  nodemon 1.19.3
-  superagent 5.1.0
-  @fortawesome/fontawesome-svg-core 1.2.25
-  @fortawesome/free-solid-svg-icons 5.11.2
-  @fortawesome/react-fontawesome 0.1.6
-  bootstrap 4.3.1
-  react 16.6.3
-  react-bootstrap 1.0.0-beta.14
-  react-dom 16.6.3
-  react-router 5.1.2
-  react-router-dom 5.1.2
-  react-scripts 2.1.1

### Database

The database is a mongoDB database that is accessed through an restful API using mongoose as an ORM.

### Organization

```
project
│   README.md
│   package.json
|   LICENSE - this is our MIT license
│   server.js - this our express server
│
└───config
    |   monoose.json - this contains our configuration for connecting to our mongoDB database

└───models
    |   index.js - allows the server to interact with the tables in our database
    |   article.js - this is the mongoose schema for our article documents
    |   comment.js - this is the mongoose schema for our comments

└───public
    └───css
    └───js
        |   scrapeAdd.js - this contains a single axios request that scrapes reddit and adds the articles to the database
        |   submitComment.js - this contains the logic for adding comments below the articles

└───routes
    │   apiRoutes.js - this contains all of the routing information for API requests
    │   htmlRoutes.js - this contains all of the routing information for HTML requests

└───scrape
    |   scrape.js - this contains the function that scrapes reddit and returns the results to later get added to the database

└───views
    │   index.handlebars - this contains the main page with all the articles
    |   article.handlebars - this contians the page for viewing articles and comments
    |   reddit.handlebars - this is a test page used for development
    └───layouts
        |   main.handlebars - this is the main handlebars layout page


```

#### License

This application is under the MIT licence.
