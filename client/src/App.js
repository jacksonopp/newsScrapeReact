import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "superagent";
import Button from "react-bootstrap/Button";

export default function App() {
  useEffect(() => {
    request.get("/test")
      .then(res => {
        console.log("res:", res);
        console.log("res.body:", res.body);
        console.log("res.headers:", res.headers);
        console.log("res.status:", res.status);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Button>Hello</Button>
    </div>
  );
}