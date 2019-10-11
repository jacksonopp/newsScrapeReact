import React, { useState, useEffect } from "react";
import request from "superagent";
import { Col, Row } from "react-bootstrap";

export default function Article({ id }) {
	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([])
	useEffect(() => {
		request.get(`/api/articles/${id}`)
			.then(res => {
				const result = res.body
				console.log("body:", result);
				setArticle(result);
				setComments(result.comments);
			})
	}, [])
	return (<>
		<Row>
			<Col md={{ span: 9, offset: 1 }}>
				<h1>{article.title}</h1>
				<p>Submitted by: {article.user} | Upvotes: {article.upvotes} | <a target="_blank" href={article.url}>View Article</a></p>
			</Col>
		</Row>
		<Row>
			<Col md={{ span: 9, offset: 1 }}>
				<h2>Comments</h2>
				<hr />
				{comments.map(comment => (
					<>
						<	h5>{comment.author}</h5>
						<p>{comment.body}</p>
					</>
				))}
			</Col>
		</Row>
	</>)
}