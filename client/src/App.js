import React, { useEffect, useState } from "react";
import "./App.css";
import request from "superagent";
import { Container } from "react-bootstrap";
import ArticleListItem from "./components/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    request.get("/api/articles")
      .then(res => {
        console.log("res.body:", res.body);
        setArticles(res.body);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <Container>
            <Route exact path="/">{articles.map(article => (
              <ArticleListItem
                title={article.title}
                upvotes={article.upvotes}
                user={article.user}
                url={article.url}
                time={article.time}
                id={article._id}
              />
            ))}
            </Route>
            <Route exact path="/:id">

            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}