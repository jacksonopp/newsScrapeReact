import React, { useEffect, useState } from "react";
import "./App.css";
import request from "superagent";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import ArticleListItem from "./components/ArticleListItem";
import Article from "./components/Aritcle";

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
            <Row>
              <Col sm md={{ span: 9, offset: 1 }}>
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
              </Col>
            </Row>
            <Route path="/:id">
              <Id />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

function Id() {
  let { id } = useParams();
  return <Article id={id} />
}