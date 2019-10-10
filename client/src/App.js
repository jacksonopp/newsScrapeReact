import React, { useEffect, useState } from "react";
import "./App.css";
import request from "superagent";
import { Container, Row } from "react-bootstrap";
import Article from "./components/Article";

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
      <Container>
        {articles.map(article => (
          <Article
            title={article.title}
            upvotes={article.upvotes}
            user={article.user}
            url={article.url}
            time={article.time}
          />
        ))}
      </Container>
    </>
  );
}