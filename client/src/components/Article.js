import React from 'react';
import { Col, Row } from "react-bootstrap";

export default function Article({
  title,
  upvotes,
  user,
  url,
  time
}) {
  return (
    <>
      <Row>
        <Col xs md={12} lg={7}>
          <h1>{title}</h1>
          <p>Posted by {user}</p>
        </Col>
        <Col xs md={12} lg={5}>
          <p>Posted on {time}</p>
          <p>Link {url}</p>
          <p>Upvotes {upvotes}</p>
        </Col>
      </Row>
      <hr />
    </>
  )
}